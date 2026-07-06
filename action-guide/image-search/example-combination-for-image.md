# 图像组合示例

为了创建一个智能的自动化脚本，流畅地处理网站或软件界面（UI）上的实际情况，将这三种操作结合在一个紧密的逻辑流程中是最佳解决方案。

以下是对一般技术参数的详细解释以及设置实际脚本流程的步骤。

🎥 查看更多教程视频：[在这里](https://youtu.be/xWu0g35YTGo)。

#### 需要掌握的核心配置参数：

* Image（样本图像）：您从屏幕上截取的目标图像区域，用作系统的匹配数据。
* Timeout（超时时间）：系统搜索图像的最大时间限制（仅适用于 _Wait to image_）。
* Threshold（颜色偏差/公差）：匹配像素时的准确率（通常设置在 `0.7` 到 `0.95` 之间）。数字越接近 `1`，实际图像必须与样本图像越绝对相似。您可以调整此值并测试直到合适。
* True color：强制系统必须准确匹配原始色彩范围的选项。如果关闭，系统将把图像转换为黑白（Grayscale）以识别形状，从而加快扫描速度，但忽略颜色因素。
* Output variable（输出变量）：存储逻辑值（`True`/`False`）或存储坐标点（`X`，`Y`），具体取决于所选的操作。

### 实际问题：在Pinterest上自动点击“Continue with Google”

<figure><img src="../../.gitbook/assets/image (173).png" alt=""><figcaption></figcaption></figure>

**步骤 1：使用 Wait to image 操作同步页面加载流程**

在您点击Pinterest主页上的 _Sign up_ 按钮后，注册表单需要一些时间来加载数据到屏幕上。

* 配置方法：将样本图像（Image）指向文本标题或一个固定组件（Continue with Google按钮），确保它会出现在注册表单上。将超时时间设置为 `10`（10秒），并设置合适的阈值（例如：`0.7`）。
* 逻辑运作：脚本将暂停以观察屏幕。注册表单一旦显示，系统将立即激活下一步，而无需浪费时间等待。

<figure><img src="../../.gitbook/assets/image (168).png" alt=""><figcaption></figcaption></figure>

**🔹 步骤 2：使用 Image exists 操作检查按钮的存在性**

由于Pinterest可能会根据不同的 Profile 显示覆盖的电子邮件输入表单或其他导航消息，我们需要检查Google按钮是否确实在屏幕上。

* 配置方法：将样本图像指向Google的四色“G”图标或Continue with Google文本。配置输出变量以存储结果。
* 逻辑运作：系统在该时刻快速扫描屏幕一次。如果Google按钮出现，输出变量将接收逻辑值 `True`（否则为 `False`）。

<figure><img src="../../.gitbook/assets/image (169).png" alt=""><figcaption></figcaption></figure>

**🔹 步骤 3：使用 If 语句过滤处理条件**

为了使脚本智能运行并避免点击失误，我们将交互步骤封装在条件语句块中。

* 配置方法：添加If语句块并设置条件：检查步骤2中的结果变量是否返回值 `True`（即Google按钮已在屏幕上准备好）。

<figure><img src="../../.gitbook/assets/image (170).png" alt=""><figcaption></figcaption></figure>

**🔹 步骤 4：在If语句块中使用 Image search 操作找到确切位置**

在If语句块内部，当条件满足时，系统开始追踪以获取按钮的坐标（因为注册表单的位置可能会根据每个Profile的屏幕分辨率灵活移动）。

* 配置方法：使用“Continue with Google”按钮的样本图像或“G”字母的标志。将True color设置为 `Yes` _(强制开启以准确识别Google的四种特征颜色，避免与其他字符混淆)_. 设置输出变量以存储坐标为 `pos`。
* 逻辑运作：系统扫描并计算出Google按钮在屏幕上的确切中心位置（例如：`$pos = 720,540`）。

<figure><img src="../../.gitbook/assets/image (171).png" alt=""><figcaption></figcaption></figure>

**🔹 步骤 5：使用 Mouse click 操作执行点击**

这是在If语句块中完成处理流程的最后一步。

* 配置方法：选择Mouse click操作，在坐标设置框中，您将上一步找到的变量直接传递到相应的框中：`$pos`。
* 逻辑运作：系统上的鼠标将自动移动到扫描到的Google按钮的确切像素位置，并执行点击命令，以顺利继续通过Iframe层的登录流程。

<figure><img src="../../.gitbook/assets/image (172).png" alt=""><figcaption></figcaption></figure>