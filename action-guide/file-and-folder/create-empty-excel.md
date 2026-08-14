# Create empty excel

Create empty excel 是用于在您计算机上指定的路径中创建一个全新且空白的 Excel 文件（`.xlsx` 格式）的操作。

此操作通常放置在脚本的开头，用于在数据采集（Data Crawler）操作或日志记录开始将信息推送进去之前，准备一个干净的存储文件。

🎥 观看更多教学视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* File Path：包括文件名和 `.xlsx` 后缀的绝对路径，即您想要创建文件的位置（例如：`D:\GPM\data_crawler.xlsx`）。

#### 实际示例：在采集文章之前初始化数据导出文件

假设您正在编写一个自动脚本，用于浏览各个群组并采集（爬取）文章链接、互动数据，以用于市场调研。在数据采集循环开始运行之前，您需要预先准备好一个空白的 Excel 文件来保存结果。

* 配置方法：在脚本的第一步中，调用 Create empty excel 操作。
  * File Path：填入路径 `D:\GPM\ketqua_facebook.xlsx`。
* 结果：
  * 如果 `D:\GPM\` 目录下还没有 `ketqua_facebook.xlsx` 文件，系统将立即创建一个空白的 Excel 文件。
  * 如果该文件已存在，系统将删除旧文件并重新创建一个全新的空白文件，以确保上一次运行的数据不会与本次运行的数据混淆。

完成此步骤后，您可以放心使用 Write excel file 或 Append excel file 等操作，将刚采集到的数据写入该文件中。

<figure><img src="../../.gitbook/assets/ff-09.png" alt=""><figcaption></figcaption></figure>