# Copy file

Copy file 是用于将一个文件从硬盘上的某个位置复制到另一个位置的操作。此操作会在目标位置创建一个全新的副本,同时保留原始位置的原始文件。

🎥 查看更多教学视频:[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数:

* Source File:需要复制的源文件的绝对路径(例如:`D:\data\template.xlsx`)。
* Destination File:复制到的目标文件的绝对路径(例如:`D:\backup\report_2026.xlsx`)。

#### 实际示例:在写入数据前自动复制 Excel 模板文件

在编写数据抓取(Data Crawler)脚本或填写报告时,您通常会有一个已预先设置好标题列格式的 Excel 模板文件(`template.xlsx`)。您不希望脚本直接覆盖写入新数据从而破坏这个模板文件。解决方案是每次运行脚本时,系统会自动复制出一个新文件来使用:

* 配置方式:
  * Source File:填写模板文件路径:`D:\GPM\template.xlsx`
  * Destination File:填写将用于写入数据的新文件路径:`D:\GPM\data_output.xlsx`
* 结果:系统会获取 `template.xlsx` 文件,创建一个精确的副本,并在指定目录下将其命名为 `data_output.xlsx`。脚本后续的操作(例如 _Write excel file_)将只与 `data_output.xlsx` 文件进行交互并写入数据,从而确保您的模板文件在下次运行时始终保持安全和干净。

<figure><img src="../../.gitbook/assets/image (148).png" alt=""><figcaption></figcaption></figure>