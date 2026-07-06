# 🛠️ 测试操作指南

测试（Test）是一个重要的步骤，帮助您控制脚本的执行流程，允许逐步或逐块执行命令，以确保一切按预期运行，然后再进行实际运行。

🎥 查看更多视频教程：[在这里](https://youtu.be/zrX3ldxvEDE)。

### 🎯 为什么需要测试操作？

* 控制错误：在执行操作时立即发现和处理问题，而不是从头开始运行整个脚本。
* 灵活调整：您可以隔离单个操作或一个块（Block）进行测试，帮助缩短调试时间。
* 流程到哪里，测试到哪里：GPM Automate 支持在 GPM Login 的配置文件上进行直接测试，帮助您立即在浏览器中观察结果。

> 注意：当前测试功能仅支持 GPM Login 中的配置文件。

### ⚙️ 测试执行流程

要开始测试过程，请按照以下步骤操作：

#### 1️⃣ 第一步：在 GPM Login 中配置配置文件

* 打开 GPM Login。
* 找到您想要用于测试的配置文件。
* 点击配置文件名称旁边的三个点。
* 选择“使用远程端口运行”以获取控制端口的参数。

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

#### 2️⃣ 第二步：在 GPM Automate 中设置

* 在 GPM Automate 界面中，选择您想要进行测试的命令（Action）或块（Block）。
* 在顶部工具栏中，点击“测试”按钮。
* 将弹出一个测试配置对话框。
* 将步骤 1 中从 GPM Login 获取的端口输入到相应的框中。
* 点击“开始”以开始测试。

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

#### 3️⃣ 第三步：观察结果

* 点击“开始”后，系统将在选定的配置文件上执行命令。
* 您可以在浏览器窗口和 GPM Automate 的日志（Log）中查看结果，以便在必要时调整脚本。