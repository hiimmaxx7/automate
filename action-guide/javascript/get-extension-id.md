# 获取扩展 ID

获取扩展 ID 是一个命令，指示浏览器提取当前浏览器 Profile 中已安装的扩展（Extensions）的唯一标识符（Extension ID）。这个 ID 对于您在后续命令中直接导航到该扩展的配置页面或钱包（例如：快速打开 MetaMask、Tonkeeper、OKX Wallet 等）非常重要。

🎥 查看更多教程视频：[在这里](https://youtu.be/I4-kZ7repv8)。

#### 配置参数：

* 扩展名称：您想要获取 ID 的在浏览器中显示的扩展名称。
  * _注意_：系统采用相对搜索机制，您无需填写完整的名称，只需包含特征短语即可（例如：只需填写 `MetaMask` 或 `OKX`，而不必输入完整的冗长名称）。
* 输出变量：用于保存提取后 ID 字符串的变量名称（例如：保存到变量 `extId`）。

#### ⚠️ 获取 ID 成功的操作注意事项：

由于 Chromium 浏览器的安全机制和内部数据流管理，如果您在普通网页上立即调用此命令，系统将无法扫描扩展列表。为了确保此操作 100% 正确，您需要遵循以下流程：

* 必须先访问管理页面：您的脚本必须使用 Go to URL 操作访问浏览器的内部地址 `chrome://extensions/`。
* 必须有等待时间（Delay）：在重定向到扩展管理页面后，您必须插入一个短暂的 Delay 命令（约 1 - 2 秒）。这个延迟有助于浏览器管理界面完全加载扩展的源代码结构，避免因运行过快而导致脚本无法捕获 ID。

#### 实际示例：获取扩展 ID 以自动打开钱包

当您为 Crypto/Airdrop 任务编写自动化脚本时，您希望获取 MetaMask 钱包的 ID 以快速访问解锁钱包的页面：

* 步骤 1：使用 Go to URL 操作 ➔ 输入 URL 地址：`chrome://extensions/`。
* 步骤 2：拖动 Delay 操作 ➔ 输入等待时间：`2000`（相当于 2 秒）。
* 步骤 3：拖动 Get extension id 操作：
  * _扩展名称_：`MetaMask`（只需包含此关键字）。
  * _输出变量_：`metaMaskId`。
* 步骤 4：在变量 `$metaMaskId` 中获取 ID 后，您可以使用下一个 Go to URL 操作，结构为：`chrome-extension://$metaMaskId/home.html`，以立即打开钱包界面进行处理，而无需手动在工具栏上点击搜索。

<figure><img src="../../.gitbook/assets/image (222).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (223).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (224).png" alt=""><figcaption></figcaption></figure>