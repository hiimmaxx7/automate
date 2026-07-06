# 创建空的 Excel

创建空的 Excel 是一个用于在您计算机上指定路径创建一个全新的（`.xlsx` 格式）空文件的操作。

此操作通常放在脚本的开头，以便在数据抓取（Data Crawler）或日志记录开始推送信息之前准备一个干净的存储文件。

🎥 查看更多教程视频：[在这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* 文件路径：包含文件名和 `.xlsx` 后缀的绝对路径，您希望在此创建文件（例如：`D:\GPM\data_crawler.xlsx`）。

#### 实际示例：在抓取文章之前初始化数据导出文件

假设您正在编写一个自动化脚本，浏览各个小组并收集（抓取）文章链接和互动量，以便进行市场研究。在数据抓取循环开始运行之前，您需要准备一个空的 Excel 文件来保存结果。

* 配置方式：在脚本的第一步中，您调用 Create empty excel 操作。
  * 文件路径：填写路径 `D:\GPM\ketqua_facebook.xlsx`。
* 结果：
  * 如果在目录 `D:\GPM\` 中尚不存在文件 `ketqua_facebook.xlsx`，系统将立即创建一个空的 Excel 文件。
  * 如果文件之前已经存在，系统将删除旧文件并重新创建一个全新的空文件，以确保之前运行的数据不会与此次运行混淆。

在此步骤之后，您可以放心使用 Write excel file 或 Append excel file 等操作将刚刚抓取的数据写入文件。

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>