# 执行 JS 代码

执行 JS 代码是一个极其强大的操作，允许您通过直接在当前网页上运行 JavaScript (JS) 代码来深入干预浏览器。此操作帮助您处理复杂的逻辑算法、数学计算、高级数据提取或执行常规无代码块不支持的交互操作。

🎥 查看更多教程视频：[在这里](https://youtu.be/I4-kZ7repv8)。

#### 配置参数：

* JS 文件或代码的路径：您可以直接在此框中编写/粘贴 JavaScript 代码，或输入绝对路径到您计算机上存储的 `.js` 文件。
* 输出变量：GPM Automate 的变量名称，用于接收代码 JS 执行完后返回的值。

#### ⚠️ 在 GPM Automate 中编写 JS 代码时的核心注意事项：

1. 必须有 `return` 语句：为了让 GPM Automate 系统能够接收到代码处理的结果并存储到输出变量中，您必须在 JS 代码的末尾添加 `return` 语句。如果没有 `return`，输出变量将接收空值 (`undefined`)。如果您的 JS 代码不需要返回任何值，则不需要 `return` 语句。
2. 此操作 **必须** 放在主逻辑块中，这类似于您在浏览器的开发工具中运行 JS 代码。您可以在使用它之前先在开发工具中测试您的 JS 代码。
3. 将 Automate 变量嵌入 JS 的规则：您可以通过语法 `$变量名` 在 JS 代码块中调用之前保存的 GPM Automate 变量。
   * 对于数字类型的变量 (Number)：您可以直接写（例如：`const index = $index;`）。
   * 对于字符串类型的变量 (String)：您必须用单引号 `'...'`、双引号 `"..."` 或最标准的反引号 `` `...` `` 将变量包裹起来，以避免在字符串中有空格或特殊字符时格式破损，例如：``const str = `$postContent`;``。

#### 实际示例：根据指定位置 (Index) 提取字符

假设在 GPM Automate 脚本中，您已经有两个变量：

* 变量 `$str` 存储字符串：`Hello, world!`
* 变量 `$index` 存储数字：`7`

您想使用 JavaScript 代码提取上述字符串中第 7 个位置的字符（期望结果是字母 `w`），并将其存储到 Automate 的变量 `$charResult` 中。您将配置执行 JS 代码的操作如下：

* 输出变量：`charResult`
* JS 代码内容：

```
const str = `$str`;
const index = $index;
const char = index >= 0 && index < str.length ? str[index] : "无效的索引";

return char;
```

逻辑运作：系统将加载字符串 `Hello, world!` 和数字 `7` 到代码中，运行验证位置的算法并提取字符。最后的 `return char;` 将字母 `w` 推送到外部，并直接加载到变量 `$charResult` 中，以供您在后续操作中使用。

<figure><img src="../../.gitbook/assets/image (221).png" alt=""><figcaption></figcaption></figure>