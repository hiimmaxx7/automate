# Switch to frame

在网页设计结构中，Iframe（内联框架）被理解为嵌入在另一个网页中的独立浏览器窗口。

当一个元素（如按钮、输入框）位于`<iframe>`标签内时，如果您仍然处于主网页的空间，GPM Automate系统将无法找到它的XPath。您必须使用Switch to frame动作“进入”该Iframe才能进行交互。交互完成后，您必须使用Switch to default“退出”主界面。

🎥 查看更多教程视频：[在这里](https://youtu.be/oroexOGjZfw)。

#### 1. 进入Iframe的动作（Switch to frame）

* 目的：将脚本的控制权转移到指定的Iframe窗口内。
* 配置参数：
  * XPath：指向目标网页上`<iframe>`标签的XPath路径。

#### 2. 返回主界面的动作（Switch to default）

* 目的：将控制权从当前Iframe中退出，以返回到原始网页结构。此动作没有配置参数。

#### 实际示例：在Pinterest上点击“Continue with Google”按钮（附图）

根据下面的图片，Continue with Google按钮实际上并不直接位于Pinterest页面上，而是被嵌入在Google提供的安全Iframe窗口中（右上角的红色箭头直接指向`<iframe src="https://accounts.google.com...">`标签）。

如果您直接使用_Mouse click_命令点击_Continue with Google_按钮（`//span[text()="Continue with Google"]`），脚本将立即报告找不到元素的错误。标准处理流程应配置如下：

* 步骤1（进入Iframe）：将Switch to frame动作拖入脚本。
  * _XPath_：输入您找到的iframe标签的XPath：`//iframe[contains(@src,'accounts.google.com')]`
* 步骤2（点击按钮）：将Mouse click动作拖入流程。
  * _点击类型_：基于XPath点击。
  * _XPath_：输入位于iframe内的按钮的XPath：`//span[contains(text(),"Continue with Google")]`
* 步骤3（退出）：在后面拖入Switch to default动作，以将浏览器返回到Pinterest的主空间，准备进行外部的注册表单填写（电子邮件、密码）步骤（如有需要）。

<figure><img src="../../.gitbook/assets/image (203).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (204).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (205).png" alt=""><figcaption></figcaption></figure>

为了更简单易懂地理解Iframe（框架）在网页编程中的作用，您可以想象一面墙和挂在上面的画框。

#### 1. 画框的隐喻图像

* 主墙：就是您正在访问的整个网页（例如：页面`pinterest.com`）。在这面墙上有自己的油漆颜色，有出入口，还有周围的桌椅。
* 挂在墙上的画框（Iframe）：是一个在墙上打孔或悬挂的框架。特别的是，这个画框内并不是一幅静态的图片，而是完全属于另一个人的一块土地（例如：`accounts.google.com`的一个办公室角落）。

#### 2. Iframe在网站上的本质运作

当一个网站插入Iframe时，他们正在打开一个“小窗口”，以允许另一个网站的内容直接在他们的页面上显示：

* 独立内容：墙的主人（Pinterest）只租用画框的挂放位置，而没有权利干预框内的内容和运作。框内的一切都由框的主人（Google）完全管理和保护。
* 观众（自动化脚本）：当您站在外面时，您可以看到整个墙和画框。但如果您想用画笔在画上作画，您不能从远处随意涂抹在墙上。您必须走进画框的范围内（`Switch to frame`），那时您才能触及框内的细节（如_Continue with Google_按钮）。

#### 3. 为什么在自动化中必须“进入”和“退出”？

由于浏览器的安全性，墙外的世界和框内的世界被一层无形的玻璃隔开：

* 如果不“进入”（`Switch to frame`）：自动化工具将站在墙外，困惑地问：“我明明在屏幕上看到Google登录按钮，为什么找不到XPath？”-> 因为机器人正在扫描墙的代码，而还没有透过框的玻璃。
* 如果不“退出”（`Switch to default`）：在您点击完框内的按钮后，您想返回点击Pinterest页面底部的“注册”按钮。如果您不退出，机器人仍会在Google的土地上寻找那个按钮，导致命令失败。

总之，Iframe就像一个嵌入在大网页中的缩小版网页，创建了一个独立的空间边界，自动化脚本想要工作时必须明确进出。