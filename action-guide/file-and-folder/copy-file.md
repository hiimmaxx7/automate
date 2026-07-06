# 复制文件

复制文件是一个用于将文件从计算机硬盘的一个位置复制到另一个位置的操作。此操作将在目标位置创建一个全新的副本，并保留原始文件在初始位置不变。

🎥 查看更多教程视频：[在这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* Source File: 需要复制的源文件的绝对路径（例如：`D:\data\template.xlsx`）。
* Destination File: 复制到的目标文件的绝对路径（例如：`D:\backup\report_2026.xlsx`）。

#### 实际示例：在写入数据之前自动复制Excel模板文件

在进行数据爬取（Data Crawler）或填写报告时，您通常会有一个已格式化好标题列的Excel模板文件（`template.xlsx`）。您不希望脚本直接覆盖新数据，从而损坏此模板文件。解决方案是每次运行脚本时，系统会自动复制出一个新文件供使用：

* 配置方式：
  * Source File: 填写模板文件的路径：`D:\GPM\template.xlsx`
  * Destination File: 填写将用于写入数据的新文件路径：`D:\GPM\data_output.xlsx`
* 结果：系统将获取文件`template.xlsx`，创建一个精确的副本，并命名为`data_output.xlsx`，放置在指定目录中。脚本后续的操作（如 _Write excel file_）将仅与此`data_output.xlsx`文件交互并写入数据，确保您的模板文件始终安全且干净，以便于后续的运行。

<figure><img src="../../.gitbook/assets/image (148).png" alt=""><figcaption></figcaption></figure>