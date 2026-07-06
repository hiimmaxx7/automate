---
description: 通过HTTP协议将文件下载到计算机。
---

# HTTP Download

HTTP Download是一个高级操作，用于直接从在线路径（URL）下载文件（如图像、视频、文档文件、zip文件等）到您的计算机上，而无需打开浏览器手动点击下载按钮。

#### 配置参数：

* URL：指向要下载的文件的在线路径地址（例如：`https://example.com/images/avatar.jpg`）。
* Save Path：您希望在计算机上保存下载文件的绝对路径，包括文件名和格式后缀（例如：`D:\GPM_Data\downloads\avatar.jpg`）。
* Headers：附加信息，随请求发送以验证访问权限或模拟浏览器，如果服务器要求（例如：`User-Agent: Mozilla/5.0...`或`Authorization: Bearer $token`）。如果下载公共文件，您可以将此项留空。
* Output variable：保存操作返回结果的变量名称（通常返回逻辑值`True`，如果文件下载成功，或系统的响应日志内容）。

#### 实际示例：自动将视频从可用路径下载到计算机

假设您正在运行一个抓取文章的脚本，系统已经提取出一个视频的在线路径并存储在变量`$videoUrl`中。您希望将此视频下载到D盘的一个固定文件夹中，以便为后续处理步骤做准备：

* 配置方法：
  * URL：将变量`$videoUrl`传递到输入框中。
  * Save Path：填写具体的文件保存路径，例如：`D:\GPM_Data\Videos\downloaded_video.mp4`。
  * Headers：留空（如果下载链接是公共的，不需要账户）。
  * Output variable：将保存结果的变量命名为`downloadStatus`。

结果：系统将自动连接网络，从路径`$videoUrl`下载视频文件，并生成一个名为`downloaded_video.mp4`的物理文件，整齐地位于`D:\GPM_Data\Videos\`文件夹中。变量`$downloadStatus`将接收值，以便您可以使用If语句块检查文件是否成功下载，然后再进行后续操作。

<figure><img src="../../.gitbook/assets/image (167).png" alt=""><figcaption></figcaption></figure>