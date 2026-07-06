# 写入 Excel 文件

写入 excel 文件是一个用于将特定值写入或更新 Excel 文件 (`.xlsx` 或 `.xls`) 中指定单元格的操作，基于指定的行和列位置。

🎥 查看更多教程视频：[在这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* 文件路径：指向需要写入数据的 Excel 文件的绝对路径（例如：`D:\GPM\data.xlsx`）。
* 工作表索引：需要写入数据的工作表（sheet）位置，从 0 开始计算 _(第一个工作表为 `0`，第二个工作表为 `1`...)_。
* 列名称或索引：需要写入数据的列位置。您可以通过两种方式填写：
  * 通过字母字符名称：`A`，`B`，`C`，`D`...
  * 通过索引数字，从 1 开始计算 _(列 A 为 `1`，列 B 为 `2`...)_。
* 行索引：需要写入数据的行位置，从 1 开始计算 _(第 1 行为 `1`，第 2 行为 `2`...)_。
* 值：您想要写入该 Excel 单元格的文本内容（或包含数据的变量）。

#### 实际示例：根据正在运行的 Profile 更新账户状态

当您运行多线程脚本（同时运行多个 profile）时，系统 GPM Automate 将为每个 profile 分配预定义的系统变量以进行识别：输入 Excel 配置文件路径的变量 (`$inputExcelFileLocation`) 和该 profile 正在处理的数据行序号 (`$inputExcelCurrentRow`)。

假设您希望脚本在成功登录后自动将 `"成功"` 写入对应 profile 在 Excel 文件中正确行的 C 列（状态）：

* 配置方式：
  * 文件路径：传入系统变量 `$inputExcelFileLocation`。
  * 工作表索引：`0` _(写入第一个工作表)_。
  * 列名称或索引：`C` _(状态列)_。
  * 行索引：传入系统变量 `$inputExcelCurrentRow` _(系统自动理解每个 profile 对应的行，例如 profile 1 运行第 2 行将写入第 2 行，profile 2 运行第 3 行将写入第 3 行)_。
  * 值：填写字符串内容 `"成功"`（或包含您日志的变量）。

结果：脚本运行到哪里，就会自动将结果实时同步并准确更新到 Excel 文件中，而不必担心在各个线程之间被覆盖或数据行错位。

<figure><img src="../../.gitbook/assets/image (154).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (152).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (153).png" alt=""><figcaption></figcaption></figure>