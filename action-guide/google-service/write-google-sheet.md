---
description: 将数据写入 Google 表格
---

# Write google sheet

Write google sheet 是一个命令，指示自动化脚本连接到您的 Google Drive 帐户，以覆盖或插入新内容到在线 Google Sheets 中的特定单元格。

#### 配置参数：

* Credential file: 选择 Google 帐户的凭证文件（`.json` 文件）。这是授予 GPM Automate 连接、验证并执行将内容写入您的 Google 表格的安全凭证。
  * _创建文件的指南_: 在这里查看视频教程：&#x20;
* File ID: 需要交互的 Google Sheets 文件的唯一标识符（从文件的 URL 中 `/d/` 和 `/edit` 之间的字符串获取）。
* Sheet ID: 需要写入内容的工作表的序号（从左到右，第一张工作表从 `0` 开始）。
* Column Name or Index: 指定需要写入数据的列位置。您可以输入字母（例如：`A`、`B`、`C`...）或输入索引的数字（例如：`1` 对应于列 A）。
* Row Index: 需要写入数据的行号，从 `1` 开始计算。
* Value: 您想要填入目标单元格的文本、数字或来自 GPM Automate 变量的值。

#### 实际示例：在运行完成后自动更新帐户状态

当您执行帐户养护或发布时，在一个 Profile 成功完成任务后，您希望在 Google 表格的状态列中写入“Live”或“成功”以便于跟踪：

* 配置以写入单元格 C2 的方法：
  * Credential file: 选择配置好的 `client_secret_....json` 文件的路径。
  * File ID: 输入您的 Sheet 文件 ID。
  * Sheet ID: `0`（写入第一张工作表）。
  * Column Name or Index: 填写 `C`（或填写 `3`）。
  * Row Index: 填写 `2`。
  * Value: 填写文本 `Live`（或传递状态变量 `$status`）。
* 结果：GPM Automate 将立即同步并快速将“Live”直接填入您在线 Google 表格的 C2 单元格，而无需打开 Docs 浏览器。

<figure><img src="../../.gitbook/assets/image (230).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (229).png" alt=""><figcaption></figcaption></figure>