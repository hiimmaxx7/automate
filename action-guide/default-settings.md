---
description: 一些在Automate中使用的默认变量
---

# 📦一些默认变量

### 默认系统变量 (System Variables)

在构建脚本的过程中，GPM Automate 自动提供了一些系统变量。您可以在任何操作中调用这些变量，以获取 Profile 或正在处理的 Excel 数据的信息，而无需自己初始化。

#### 1. Profile 信息变量组

这些变量帮助脚本识别和处理每个正在运行的 Profile Browser 的数据：

* 🆔 `$profileId`: 返回当前打开的 profile 的唯一标识 ID。
* 🏷️ `$profileName`: 返回当前打开的 profile 的显示名称。
* 🌐 `$profileProxy`: 返回当前打开的 profile 正在使用的 Proxy (IP) 信息。

#### 2. 循环变量组

* 🔄 `$loopIndex`: 返回 For 循环当前的索引（计数顺序）。此变量在每次循环后自动增加。

#### 3. 管理 Excel 数据的变量组 (`$inputExcel`)

当您的脚本配置使用一个输入 Excel 文件来读取/写入数据时，系统将自动激活以下变量：

* 📂 `$inputExcel`: 代表当前在脚本中链接的输入 Excel 文件。
* 📍 `$inputExcelFileLocation`: 返回输入 Excel 文件在计算机上的确切路径 (File Path)。
* 📊 `$inputExcelTotalRows`: 返回输入 Excel 文件中当前有数据的总行数。
* 🔢 `$inputExcelCurrentRow`: 返回当前正在读取和处理的行的序号。

> 💡 变量的一般规则：在 GPM Automate 中，所有变量（包括可用的系统变量和您在脚本中自定义命名的变量）都以字符 `$` 开头。