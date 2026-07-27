---
description: Automate 中使用的一些默认变量
---

# 📦一些默认变量

### 默认系统变量（System Variables）

在构建脚本的过程中，GPM Automate 会自动提供一些系统变量。您可以在任何 action 中调用这些变量，以获取当前正在处理的 Profile 信息或 Excel 数据，而无需自行创建。

#### 1. Profile 信息变量组

这些变量帮助脚本识别并根据每个正在运行的 Profile Browser 处理数据：

* 🆔 `$profileId`：返回当前打开的 profile 的唯一识别 ID。
* 🏷️ `$profileName`：返回当前打开的 profile 的显示名称。
* 🌐 `$profileProxy`：返回当前打开的 profile 正在使用的 Proxy（IP）信息。

#### 2. 循环变量组

* 🔄 `$loopIndex`：返回 `For` 循环当前的索引（计数顺序）。该变量会在每次循环后自动增加。

#### 3. Excel 数据管理变量组（`$inputExcel`）

当您的脚本配置为使用一个输入 Excel 文件来读取/写入数据时，系统会自动激活以下变量：

* 📂 `$inputExcel`：代表脚本中当前关联的输入 Excel 文件本身。
* 📍 `$inputExcelFileLocation`：返回计算机上该输入 Excel 文件的准确路径（File Path）。
* 📊 `$inputExcelTotalRows`：返回该输入 Excel 文件中当前含有数据的总行数。
* 🔢 `$inputExcelCurrentRow`：返回在读取 Excel 文件过程中，当前正在读取和处理的行号。

> 💡 关于 Variables 的通用规则：在 GPM Automate 中，所有变量（包括内置的系统变量以及您在制作脚本时自行命名的变量）都以 `$` 字符开头