# 切换到弹出窗口

切换到弹出窗口是指令脚本将控制权从当前浏览器窗口转移到刚刚弹出的新子窗口（弹出窗口）。

🎥 查看更多教程视频：[在这里](https://youtu.be/oroexOGjZfw)。

#### Iframe 和弹出窗口之间的区别：

* Iframe：是嵌入在同一网页标签中的“框架”。
* 弹出窗口：是完全独立的新窗口，脱离旧标签，独立运行（有标题栏和单独的最大化/最小化/关闭按钮）。

#### 配置参数：

* 弹出窗口标题：您想要切换到的弹出窗口的标题。系统采用相对搜索机制（只需弹出窗口标题包含您输入的短语，系统将自动识别并跳转）。

#### 实际示例：处理 Google 登录窗口，点击“使用 Google 继续”后

继续在 Pinterest 页面上之前的处理流程。在您切换到 Iframe 并点击 _使用 Google 继续_ 按钮后，一个独立的小窗口（弹出窗口）将弹出，要求您输入 Google 的 Gmail 和密码。

此时，原始的 Pinterest 浏览器将变得模糊，所有后续操作必须在这个新窗口中进行。您可以按如下配置：

* 步骤 1（激活弹出窗口）：使用命令点击 _使用 Google 继续_ 按钮（如在 Iframe 课程中所做）。
* 步骤 2（等待弹出窗口出现 - 如果需要）：您可以使用命令等待弹出窗口或短暂延迟约 1-2 秒，以便窗口加载。
* 步骤 3（检查弹出窗口是否存在）：您可以使用命令检查是否有弹出窗口。如果弹出窗口存在，返回结果为 True。
* 步骤 3（切换到弹出窗口）：将切换到弹出窗口的操作拖入流程中。
  * 弹出窗口标题：填写 `Google Accounts` _(因为这个窗口的完整标题通常很长，如“登录 - Google Accounts”，您只需填写这个特征短语，系统会自动匹配)_。
* 步骤 4（交互输入）：在此命令后，控制权已完全转移到新窗口。您可以使用命令按键输入账户、密码并正常点击“下一步”。

> 💡 返回提示：在您完成弹出窗口的登录后，Google 系统将自动检查并关闭此窗口。要继续控制原始的 Pinterest 页面，您只需使用命令激活标签或返回主标签以继续执行后面的数据抓取操作。

<figure><img src="../../.gitbook/assets/image (206).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (207).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (208).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (209).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (210).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (211).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (212).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (213).png" alt=""><figcaption></figcaption></figure>