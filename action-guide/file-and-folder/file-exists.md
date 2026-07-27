# File exists

此操作可帮助工具检查计算机上是否已存在某个文件。返回的结果非常简单：True（如果找到文件）或 False（如果未找到）。

* 作用：与 `If` 代码块结合使用，可以进行更智能的处理，避免当你要求工具打开一个实际不存在的文件时，工具出错或突然停止运行的情况。

🎥 观看更多教学视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* File Path：计算机上需要检查的文件的绝对路径（例如：`D:\data\accounts.txt`）。
* Output variable：用于保存检查结果（`True` 或 `False`）的变量名称。

#### 实际示例：运行脚本前检查配置文件

假设你编写了一个自动填写信息的脚本，并要求该脚本必须从 `D:\GPM\config.json` 文件中读取数据。如果用户忘记创建该文件或填写了错误的路径，脚本运行到读取文件的指令时将立即出现系统错误。

为了安全地处理这种情况，你可以按如下方式配置脚本：

* 步骤 1：调用 File exists 操作，填写路径 `D:\GPM\config.json`，并将输出变量命名为 `$isFileReady`。
* 步骤 2：使用 If 代码块进行检查：`如果 $isFileReady = False`。
* 步骤 3：在此 If 代码块内部，调用 Throw 操作，内容为：`"错误：您尚未在 D 盘创建 config.json 文件，请重新检查！"`。

结果：脚本会自动提前进行检查。如果文件不存在，它会主动停止流程，并直观地弹出红色警告告知你，而不是继续尝试运行，最终导致脚本崩溃。

<figure><img src="../../.gitbook/assets/image (147).png" alt=""><figcaption></figcaption></figure>