# 设置变量

这是一个用于在脚本中创建或更改变量（数据容器）值的操作。此外，此操作还允许您在主界面上创建输入框，帮助用户在开始运行工具之前自行填写信息。

* 允许输入（Allow user input from the interface）：您勾选此项以在主屏幕上创建空白框，允许用户在点击运行之前直接输入值到脚本中。
* 必须输入（Input required）：选择此项时，系统将要求用户必须填写足够的数据或选择文件才能点击运行按钮。如果留空，工具将立即报告错误，以避免因忘记输入信息而导致的错误运行。

🎥 查看更多指导视频：[在这里](https://youtu.be/nlEQsaxawt4)。

<figure><img src="../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>

系统支持4种输入数据类型（Input Type），包括：

#### 1. 文本输入类型（Text）

当您希望用户从键盘输入一个字符串、文本或数字值时使用。

* 实际示例：您将变量命名为`$textContent`。当用户在界面上的输入框中输入内容`"hello world"`时，变量`$textContent`的值将是`"hello world"`（`$textContent = "hello world"`）。

<figure><img src="../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (111).png" alt=""><figcaption></figcaption></figure>

#### 2. 文件选择类型（File）

当脚本需要处理运行者计算机上的特定文件（如图像文件、数据文件、配置文件等）时使用。在UI界面上将出现一个文件夹图标，供用户点击并浏览文件。

* 实际示例：用户选择名为`bruh.png`的文件，该文件位于D盘。变量`$filePath`的值将是该文件的绝对路径：`"D:\materials\bruh.png"`（`$filePath = "D:\materials\bruh.png"`）。您可以立即使用变量`$filePath`将其传递给后续步骤中的文件上传操作。

<figure><img src="../../.gitbook/assets/image (113).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (114).png" alt=""><figcaption></figcaption></figure>

#### 3. 复选框类型（Checkbox）

复选框是一个界面组件，允许用户启用或禁用一个二元选项（是/否，开/关，同意/不同意）。

* 特点：当被勾选时，变量将接收值`True`。当取消勾选时，变量将接收值`False`。
* 实际示例：您创建一个标签为_"选择下单 / Check to place an order"_的选项，关联变量`$checkBox`。如果用户勾选此框，变量`$checkBox`的值将为`True`（`$checkBox = True`）。您可以使用If语句进行检查：如果`$checkBox = True`，则执行支付步骤。

<figure><img src="../../.gitbook/assets/image (115).png" alt=""><figcaption></figcaption></figure>

#### 4. 下拉选择类型（Combo Box）

下拉框（Combo Box，类似于Dropdown）是一个界面组件，显示一系列可用选项，允许用户在任何时刻选择一个唯一的值。此功能最大限度地减少了拼写错误或数据格式错误的输入。

* 特点：帮助保持数据一致性，当需要选择固定信息如国家、行业、产品类型、活动状态等时。
* 实际示例：您配置一个包含多个国家的列表，关联变量`$country`。当用户打开脚本并从下拉列表中选择`"United States"`时，Automate中的变量`$country`将立即接收值`"United States"`（`$country = "United States"`）。

<figure><img src="../../.gitbook/assets/image (116).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (117).png" alt=""><figcaption></figcaption></figure>