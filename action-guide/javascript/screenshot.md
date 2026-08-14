# Screenshot

Screenshot 是命令浏览器自动截取当前网页界面的动作。此动作非常实用，可用于保存已完成任务的证据、截取二维码（QR Code），或在脚本出现故障时保存错误界面，以便于调试（Debug）检查。

🎥 观看更多操作指南视频：[点击这里](https://youtu.be/c3gYFS7IIr4)。

#### 配置参数：

* Output path：您希望用于存放截图后图片的电脑文件夹的绝对路径（例如：`D:\GPM_Automate\Screenshots`）。
* File name：您想要设置的图片文件名称（例如：`success_evidence.png`）。您可以在此传入动态变量，如账号编号或时间，以避免后续文件覆盖之前的文件。
* Full page：如果您想让系统滚动截取整个网页从头到尾的内容，请勾选此项。如果不勾选，系统将只截取您当前看到的屏幕框架（当前显示区域）。
* Output variable：GPM Automate 用于保存截图成功后所生成图片文件绝对路径的变量名称。

#### 实际示例：发帖成功后自动保存确认截图

当您制作自动发布销售帖子或提供互动增长服务的脚本时。当系统显示"发帖成功"的通知后，您想要截取屏幕画面用于向客户做报告：

* 配置方式：
  * Output path：`D:\MMO_Project\Report`
  * File name：`account01_done.png`
  * Full page：_勾选_（以便截取到下方延伸的完整帖子内容）。
  * Output variable：`savedImagePath`
* 结果：GPM Automate 将截取整个网页画面，打包成图片文件保存到您要求的指定文件夹中，并将该文件路径保存到变量 `$savedImagePath` 中，以便您在后续步骤中继续用于通过 Telegram/Discord 发送报告等操作。

<figure><img src="../../.gitbook/assets/js-03.png" alt=""><figcaption></figcaption></figure>