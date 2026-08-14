---
description: >-
  在不覆盖现有内容的情况下，向现有的 Excel 文件末尾追加新数据。
---

# Append excel file

Append excel file 是一个智能操作，用于自动查找数据表末尾的第一个空白行，并将内容连续写入其中，让您不需要手动计算或管理行号（`Row Index`）。

🎥 观看更多操作视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* File Path：需要插入数据的 Excel 文件的绝对路径（例如：`D:\GPM\data.xlsx`）。
* Sheet index：需要写入数据的工作表（sheet）位置，从 0 开始计算 _(第一个 Sheet 为 `0`)_。
* Column Name or Index：需要写入数据的列位置。您可以按以下两种方式填写：
  * 按字母字符名称：`A`、`B`、`C`、`D`...
  * 按索引数字，从 1 开始计算 _(A 列为 `1`，B 列为 `2`...)_。
* Value：您想要写入该列最后一个空白单元格的文本内容（或包含数据的变量）。

#### 实际示例：从第 6 行开始向 B 列连续写入内容

假设您有一个 Excel 文件，其中现有数据列表已经从第 1 行到第 5 行填有内容。您想配置自动脚本，将新数据（例如刚刚抓取到的优惠券代码）填入 B 列的下一个空白单元格（即 `B6` 单元格）。

无需先使用读取文件操作来统计哪一行为空，再使用 _Write excel file_ 命令，您只需按如下方式配置 Append excel file 操作即可：

* 配置方式：
  * File Path：`D:\GPM\data.xlsx`
  * Sheet index：`0`
  * Column Name or Index：`B` _(选择需要连续写入数据的 B 列)_。
  * Value：填写字符串内容（或传入包含数据的变量，例如优惠券代码变量 `$couponCode`）。

结果：系统将自动从上到下扫描 B 列，识别出第 1 行到第 5 行已有数据，并立即将变量的值写入第一个空白行（第 6 行 - `B6` 单元格）。在脚本下一次运行时，新数据将再次自动依次准确地写入第 7 行（`B7`）、第 8 行（`B8`）……

<figure><img src="../../.gitbook/assets/ff-12.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/ff-12b.png" alt=""><figcaption></figcaption></figure>