# 📅 5. Schedule (定时运行脚本)

这个功能对那些想要让工具24/7自动运行而不需要手动点击的人非常有用。

🎥 查看更多教程视频：[在这里](https://youtu.be/C8Kf-d9_-sw)。

要使用此功能，请勾选“Use scheduling feature”框（如下面的图片所示）。

> ⚠️ 重要提示：您必须始终保持GPM Automate Runtime软件开启，定时功能才会生效。如果关闭软件，定时将无法运行。

<figure><img src="../../.gitbook/assets/image (241).png" alt=""><figcaption></figcaption></figure>

要创建和管理运行时间段，请点击按钮`⚙️ Manage schedules`。系统将允许您根据需求设置两种主要的定时类型：

**🔄 类型1：Repeat after（在一段时间后重复运行）**

* 工作原理：工具将在您设置的每个时间间隔（小时 - 分钟 - 秒）后自动重新运行脚本。
* 实际示例：如图所示，名为`15s`的日程在“Second”中设置为`15`。这意味着每15秒，工具将自动激活并重新运行脚本一次。

<figure><img src="../../.gitbook/assets/image (243).png" alt=""><figcaption></figcaption></figure>

**📍 类型2：Time points（在固定时间点运行）**

* 工作原理：工具将在您当天设置的特定时间点自动启动。您可以点击按钮`+ Add`添加多个不同的时间点。
* 实际示例：如图所示，名为`20h00`的日程设置的时间点为`20 : 0 : 0`。这意味着每天在20点00分，工具将自动打开并运行。

<figure><img src="../../.gitbook/assets/image (239).png" alt=""><figcaption></figcaption></figure>