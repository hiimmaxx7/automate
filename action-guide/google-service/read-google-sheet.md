# 读取 Google 表格

读取 Google 表格 是一个指令，命令自动化脚本连接到您的 Google Drive 帐户，以提取和读取在线 Google Sheets 文件中单元格或数据区域的内容。

#### 配置参数：

* 凭证文件：选择 Google 帐户的凭证文件（扩展名为 `.json` 的文件）。该文件充当安全密钥，用于与 Google API 系统建立安全连接，验证并授权 GPM Automate 访问和读取/写入您 Google Sheet 中的内容。
  * _详细指南_：您可以在此处查看有关如何创建此凭证文件的视频教程：&#x20;
* 文件 ID：需要交互的 Google Sheets 文件的唯一标识符，以便系统准确识别需要读取数据的文件。
  * _如何获取 ID_：当您在浏览器中打开 Google Sheet 文件时，URL 路径的格式为 `https://docs.google.com/spreadsheets/d/abc123xyz_此处是_ID/edit`。您只需复制位于 `/d/` 和 `/edit` 之间的字符串即可填写此框。
* 表格 ID：需要读取的工作表（Sheet）在文件中的位置序号（从左到右第一个工作表的编号为 `0`，依次为 1、2、3...）。
* 列名称或索引：指定需要读取数据的列位置。您可以通过两种方式输入：
  * _按字母名称_：输入列名，从 `A`、`B`、`C`、`D`... 开始。
  * _按序号（Index）_：输入从 `1` 开始的序号（对应列 1 为列 A）。
* 行索引：需要读取数据的行的序号，从 `1` 开始计算（对应 Google Sheet 中的第 1 行）。
* 输出变量：GPM Automate 用于接收和存储从该单元格读取的文本内容的变量名称。

#### 实际示例：自动从 Google Sheet 获取帐户数据以填写表单

当您在共享的 Google Sheet 文件中存储大量 MMO 帐户列表（包括用户名、密码），并希望脚本自动读取第一行以提取数据进行处理时：

* 配置以获取 A1 单元格中的用户名：
  * 凭证文件：选择到 `client_secret_....json` 文件的路径，该文件已配置。
  * 文件 ID：输入您的 Sheet 文件 ID。
  * 表格 ID：`0`（读取第一个工作表）。
  * 列名称或索引：填写 `A`（或填写 `1`）。
  * 行索引：填写 `1`。
  * 输出变量：`currentUsername`
* 结果：GPM Automate 将隐式连接到 Google Sheet，提取 A1 单元格中的数据并将内容直接加载到变量 `$currentUsername` 中。之后，您可以在输入操作 Key press 中顺利调用此变量。

<figure><img src="../../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (228).png" alt=""><figcaption></figcaption></figure>