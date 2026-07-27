# Folder exists

Folder exists 是用于检查计算机硬盘上按指定路径的文件夹（folder）是否存在的操作。此操作返回的结果是一个逻辑值：True（如果找到该文件夹）或 False（如果该文件夹不存在）。

此操作通常用作执行创建新文件夹、删除文件夹或将文件移动到其中等操作之前的缓冲步骤，有助于脚本流畅运行，不会因路径错误而突然中断。

🎥 观看更多教程视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* Folder Path：需要在计算机上检查的文件夹的绝对路径（例如：`D:\GPM_Data`）。
* Output variable：用于保存检查结果（`True` 或 `False`）的变量名称。

#### 实际示例：在下载前检查 Profile 头像的存储文件夹

假设你有一个自动化脚本，用于从网络下载头像并保存到每个 Profile 各自的文件夹中，结构为：`D:\GPM_Data\Profile_1`。如果这个 `Profile_1` 文件夹在 D 盘上尚未提前创建，后面的下载图片操作将立即出错。

为了智能处理这个逻辑，你可以按以下方式配置：

* 第 1 步：调用 Folder exists 操作，填入需要检查的文件夹路径 `D:\GPM_Data\Profile_1`，将输出变量命名为 `$isFolderReady`。
* 第 2 步：使用 If 条件语句块进行检查：`如果 $isFolderReady = False`（意味着该文件夹尚不存在）。
* 第 3 步：在 If 语句块内，调用 Create folder 操作，输入路径 `D:\GPM_Data\Profile_1`，让系统自动创建该文件夹。

结果：脚本将自动先进行检查。如果文件夹还不存在，它会自动创建，然后再进行图片下载，确保整个流程始终安全，永远不会崩溃。

<figure><img src="../../.gitbook/assets/image (157).png" alt=""><figcaption></figcaption></figure>