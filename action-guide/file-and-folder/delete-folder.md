# Delete folder

Delete folder 是用于根据指定路径将文件夹从计算机硬盘中彻底删除的操作。执行时，该操作会扫描并删除文件夹内部的所有文件以及所有子文件夹。

> ⚠️ 极其重要提示：使用此操作删除的文件夹将被永久销毁，不会进入 Windows 的回收站（Recycle Bin）。您需要仔细检查路径，以避免误删系统文件夹或计算机中的重要数据。

🎥 查看更多教学视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* Folder Path：指向计算机上需要删除的文件夹的绝对路径（例如：`D:\GPM_Data\temp_cache`）。

#### 实际示例：Workflow 运行完成后自动清理缓存（Cache）文件夹

当您编写脚本将短视频（Shorts、Reels、TikTok）下载到本地进行处理、剪辑，然后上传到其他频道时。脚本通常会创建一个临时文件夹，用于存放原始视频文件、分离出的音频文件以及渲染过程中产生的数据。

当脚本成功将视频上传到各平台后，您需要删除这个临时文件夹，以释放硬盘空间：

* 配置方法：在脚本的最后一步，调用 Delete folder 操作。
  * Folder Path：填写所使用的临时文件夹路径，例如：`D:\GPM_Softwares\Render_Temp`。
* 结果：系统将彻底删除 `Render_Temp` 文件夹以及其中产生的所有垃圾文件。您的计算机将始终保持干净、运行流畅，无需担心在长时间自动挂机运行后出现内存爆满的情况。

<figure><img src="../../.gitbook/assets/image (160).png" alt=""><figcaption></figcaption></figure>