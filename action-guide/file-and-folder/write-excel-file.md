# Write excel file

Write excel file 是用于根据指定的行和列位置，将特定值写入或更新到 Excel 文件（`.xlsx` 或 `.xls`）中某个确定数据单元格的操作。

🎥 观看更多教程视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* File Path：需要写入数据的 Excel 文件的绝对路径（例如：`D:\GPM\data.xlsx`）。
* Sheet index：需要写入数据的工作表（sheet）位置，从 0 开始计数 _（第一个 sheet 为 `0`，第二个 sheet 为 `1`……）_。
* Column Name or Index：需要写入数据的列位置。您可以按两种方式填写：
  * 按字母名称：`A`、`B`、`C`、`D`……
  * 按索引数字，从 1 开始计数 _（A 列为 `1`，B 列为 `2`……）_。
* Row Index：需要写入数据的行位置，从 1 开始计数 _（第 1 行为 `1`，第 2 行为 `2`……）_。
* Value：您想写入该 Excel 单元格的文本内容（或包含数据的变量）。

#### 实际示例：根据当前运行的 Profile 所对应的行更新账号状态

当您运行多线程脚本（同时运行多个 profile）时，GPM Automate 系统会为每个 profile 预先分配用于识别的系统变量：输入 Excel 配置文件的路径变量（`$inputExcelFileLocation`）以及该 profile 所负责的数据行序号（`$inputExcelCurrentRow`）。

假设您希望脚本在成功完成登录步骤后，自动在 Excel 文件中该 profile 对应的正确行的 C 列（状态列）写入文字 `"Thành công"`（成功）：

* 配置方式：
  * File Path：传入系统变量 `$inputExcelFileLocation`。
  * Sheet index：`0` _（写入第一个 sheet）_。
  * Column Name or Index：`C` _（状态列）_。
  * Row Index：传入系统变量 `$inputExcelCurrentRow` _（系统会自动识别每个 profile 对应的行，例如 profile 1 运行第 2 行则写入第 2 行，profile 2 运行第 3 行则写入第 3 行）_。
  * Value：填写字符串内容 `"Thành công"`（或包含您日志的变量）。

结果：脚本运行到哪里，就会实时自动将结果同步且准确地更新到 Excel 文件中，无需担心各线程之间出现覆盖或数据行错位的问题。

<figure><img src="../../.gitbook/assets/image (154).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (152).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (153).png" alt=""><figcaption></figcaption></figure>