# Switch to popup

Switch to popup 是命令脚本将控制权从当前浏览器窗口转移到刚弹出的新子窗口（Popup Window）的操作。

🎥 观看更多教学视频：[点击这里](https://youtu.be/oroexOGjZfw)。

#### Iframe 和 Popup 的区别：

* Iframe：是嵌入在同一个网页标签页内部的一个"画框"。
* Popup：是从旧标签页中完全独立弹出的一个全新窗口，独立运行（拥有自己的标题栏以及放大/缩小/关闭按钮）。

#### 配置参数：

* Popup Title：您想要切换到的 popup 窗口的标题。系统采用相对搜索机制（只要 popup 标题中包含您输入的短语，系统就会自动识别并跳转进去）。

#### 实际示例：处理点击"Continue with Google"后出现的 Google 登录窗口

继续前一步骤中在 Pinterest 页面上的处理流程。在您切换进入 Iframe 并点击 _Continue with Google_ 按钮后，一个独立的小窗口（Popup）会弹出到屏幕外，要求您填写 Google 的 Gmail 和 Password。

此时，Pinterest 的原始浏览器窗口会变暗，之后所有的操作都必须在这个新窗口上进行。您可以按如下方式配置：

* 步骤 1（触发打开 Popup）：使用点击命令点击 _Continue with Google_ 按钮（如同在 Iframe 课程中所做的那样）。
* 步骤 2（等待 Popup 出现 - 如有需要）：您可以使用 Wait popup 命令或短暂的 Delay（大约 1-2 秒）以便窗口能够加载出来。
* 步骤 3（检查 Popup 是否存在）：您可以使用 Has popup 命令。如果 popup 存在，返回结果为 True。
* 步骤 3（切换到 Popup）：将 Switch to popup 操作拖入流程中。
  * Popup Title：填入 `Google Accounts`（_因为该窗口的完整标题通常很长，例如"Sign in - Google Accounts"，您只需填入这个特征短语，系统就会自动匹配_）。
* 步骤 4（输入数据交互）：执行此命令后，控制权已完全落在新窗口中。您接着使用 Key press 命令来输入账号、密码，并像平常一样点击"下一步"。

> 💡 返回小技巧：在您于 Popup 窗口中完成登录后，Google 系统会自动检查并关闭该窗口。要继续控制原始的 Pinterest 页面，您只需使用 Active tab 命令或返回主标签页即可继续运行后续的数据抓取操作。

<figure><img src="../../.gitbook/assets/image (206).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (207).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (208).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (209).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (210).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (211).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (212).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (213).png" alt=""><figcaption></figcaption></figure>