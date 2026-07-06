---
description: >-
  将新数据添加到现有 Excel 文件的末尾，而不覆盖当前内容。
---

# Append excel file

Append excel file 是一个智能操作，用于自动查找数据表末尾的第一个空行，并将内容附加到该行，帮助您无需手动计算或管理行索引 (`Row Index`)。

🎥 查看更多教程视频：[在这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* File Path: 指向需要插入数据的 Excel 文件的绝对路径（例如：`D:\GPM\data.xlsx`）。
* Sheet index: 需要写入数据的工作表（sheet）位置，从 0 开始计算 _(第一个工作表为 `0`)_。
* Column Name or Index: 需要写入数据的列位置。您可以通过两种方式填写：
  * 按字母字符名称：`A`，`B`，`C`，`D`...
  * 按索引数字，从 1 开始计算 _(列 A 为 `1`，列 B 为 `2`...)_。
* Value: 您想要写入该列最后一个空单元格的文本内容（或包含数据的变量）。

#### 实际示例：从第 6 行开始将内容附加到 B 列

假设您有一个 Excel 文件，当前数据列表的第 1 行到第 5 行已经有文字。您想要配置脚本自动填充一个新数据（例如刚刚刮开的优惠券代码）到 B 列的下一个空单元格（即单元格 `B6`）。

您只需按如下方式配置 Append excel file 操作，而无需使用读取文件的操作来计算哪个行是空的，然后再使用 _Write excel file_ 命令：

* 配置方式：
  * File Path: `D:\GPM\data.xlsx`
  * Sheet index: `0`
  * Column Name or Index: `B` _(选择需要附加数据的 B 列)_。
  * Value: 填写字符串内容（或传递包含数据的变量，例如优惠券变量 `$couponCode`）。

结果：系统将自动从上到下扫描 B 列，识别出第 1 行到第 5 行已有数据，并立即将变量的值写入第一个空行（第 6 行 - 单元格 `B6`）。在脚本的下一次运行中，新数据将再次自动推送到第 7 行 (`B7`)，第 8 行 (`B8`)... 以顺序和准确的方式进行。

<figure><img src="../../.gitbook/assets/image (156).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (155).png" alt=""><figcaption></figcaption></figure>