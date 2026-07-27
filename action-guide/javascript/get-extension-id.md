# Get extension id

Get extension id 是一个操作指令，用于命令浏览器提取当前浏览器 Profile 中已安装的扩展程序（Extensions）的唯一标识码（Extension ID）。该 ID 码对于后续指令（例如直接导航到该扩展程序的配置页面或电子钱包页面）非常重要（例如：快速打开 MetaMask、Tonkeeper、OKX Wallet 等钱包）。

🎥 查看更多操作指南视频：[点击这里](https://youtu.be/I4-kZ7repv8)。

#### 配置参数：

* Extension name：浏览器上显示的、您想要获取其 ID 的扩展程序名称。
  * _注意_：系统采用相对搜索机制，您不需要填写完整准确的名称，只需包含特征关键词即可（例如：只需填写 `MetaMask` 或 `OKX`，而不必输入冗长的完整名称）。
* Output variable：用于保存提取到的 ID 字符串的变量名称（例如：保存到变量 `extId`）。

#### ⚠️ 成功获取 ID 所必须遵守的操作注意事项：

由于 Chromium 浏览器内核的安全机制和内部数据流管理原因，如果您当前处于一个普通网页并立即调用此指令，系统将无法扫描到扩展程序列表。为使该操作 100% 正常运行，您需要遵循以下流程：

* 必须先访问管理页面：您的脚本必须先使用 Go to URL 操作访问浏览器内部地址 `chrome://extensions/`。
* 必须设置等待时间（Delay）：跳转到扩展程序管理页面后，您必须插入一个短暂的 Delay 指令（约 1-2 秒）。此延迟操作可让浏览器管理界面有足够时间完全加载各扩展程序的源代码结构，避免运行过快导致脚本无法捕获到 ID。

#### 实际示例：获取扩展程序 ID 以自动打开电子钱包的流程

当您为 Crypto/Airdrop 任务制作自动化脚本时，您希望获取 MetaMask 钱包的 ID 以便快速进入钱包解锁页面：

* 第一步：使用 Go to URL 操作 ➔ 填写 URL 地址：`chrome://extensions/`。
* 第二步：拖入 Delay 操作 ➔ 填写等待时间：`2000`（相当于 2 秒）。
* 第三步：拖入 Get extension id 操作：
  * _Extension name_：`MetaMask`（只需包含此关键词即可）。
  * _Output variable_：`metaMaskId`。
* 第四步：获取到并保存在变量 `$metaMaskId` 中的 ID 后，您可以使用下一个 Go to URL 操作，结构如下：`chrome-extension://$metaMaskId/home.html`，即可立即直接打开钱包界面进行处理，无需在工具栏上手动点击查找。

<figure><img src="../../.gitbook/assets/image (222).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (223).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (224).png" alt=""><figcaption></figcaption></figure>