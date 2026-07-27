# Move / rename folder

Move / rename folder 是一个多功能的操作,用于将整个文件夹(包括其内部的所有文件和子文件夹)移动到新位置,或在硬盘上的当前位置直接重命名该文件夹。

与文件操作类似,此操作会将文件夹完全剪切到新位置(如果是移动)或完全替换旧名称(如果是重命名)。

🎥 查看更多教程视频:[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数:

* Source Folder:需要移动或重命名的源文件夹的绝对路径(例如:`D:\GPM_Data\old_name`)。
* Destination Folder:移动到的目标文件夹的绝对路径,或重命名后包含新文件夹名称的路径(例如:`E:\Backup_Data\old_name` 或 `D:\GPM_Data\new_name`)。

#### 实际示例 1:重命名文件夹(Rename)

您有一个存放临时数据的文件夹,名为 `temp_data`。当脚本处理完其内部的所有数据后,您想将该文件夹重命名为 `processed_data`,以标记完成状态。

* Source Folder:`D:\GPM_Data\temp_data`
* Destination Folder:`D:\GPM_Data\processed_data` _(保持父路径不变,仅更改末尾的文件夹名称)_。
* 结果:`temp_data` 文件夹将立即被重命名为 `processed_data`。

<figure><img src="../../.gitbook/assets/image (159).png" alt=""><figcaption></figcaption></figure>