# Read excel file

Read excel file 是用于根据指定的行和列位置，从 Excel 文件（`.xlsx` 或 `.xls`）中提取特定单元格数据的值，然后将该值保存到输出变量中的操作。

🎥 查看更多操作指南视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* File Path：计算机上需要读取数据的 Excel 文件的绝对路径（例如：`D:\GPM\data.xlsx`）。
* Sheet index：需要读取的工作表（sheet）在文件中的位置，从 0 开始计数 _（第一个 sheet 是 `0`，第二个 sheet 是 `1`……）_。
* Column Name or Index：包含所需数据的列的位置。您可以通过两种方式填写：
  * 按字母名称：`A`、`B`、`C`、`D`……
  * 按索引编号，从 1 开始计数 _（A 列是 `1`，B 列是 `2`……）_。
* Row Index：包含所需数据的行的位置，从 1 开始计数 _（第一行是标题行，或第 1 行数据为 `1`，下一行是 `2`……）_。
* Output variable：用于保存从该 Excel 单元格读取到的值的变量名称。

#### 实际示例：从 Excel 文件中读取账号和密码以进行登录

假设您有一个保存在路径 `D:\GPM\accounts.xlsx` 中的 Excel 文件，其中包含账号列表。第一个工作表（Sheet index = 0）的结构如下：

* A 列（第 1 列）：包含 Username
* B 列（第 2 列）：包含 Password

您想读取第 2 行（标题行之后的第一行数据）的账号数据：

* 获取 Username 的配置方式：
  * File Path：`D:\GPM\accounts.xlsx`
  * Sheet index：`0`
  * Column Name or Index：`A`（或填写 `1`）
  * Row Index：`2`
  * Output variable：`$username`
* 获取 Password 的配置方式：您需要再创建一个类似的操作：
  * 其他参数保持不变，只需将 Column Name or Index 改为 `B`（或填写 `2`），并将 Output variable 设置为 `$password`。

结果：系统将准确提取 `A2` 单元格的值到变量 `$username` 中，以及 `B2` 单元格的值到变量 `$password` 中。之后，您可以将这两个变量传递给浏览器交互操作，以进行自动登录。

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>