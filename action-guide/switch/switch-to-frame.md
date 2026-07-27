# Switch to frame

在网页设计结构中，Iframe（内联框架）被理解为一个独立的浏览器窗口，嵌入在另一个网页内部。

当某个元素（如按钮、输入框）位于 `<iframe>` 标签内部时，如果您仍处于主网页空间中，GPM Automate 系统将无法找到其 XPath。您必须使用 Switch to frame 操作"进入"该 Iframe 内部才能进行交互。交互完成后，您必须使用 Switch to default 操作"退出"回到主界面。

🎥 查看更多教学视频：[点击这里](https://youtu.be/oroexOGjZfw)。

#### 1. 进入 Iframe 的操作（Switch to frame）

* 目的：将脚本的控制权转移到指定的 Iframe 窗口内部。
* 配置参数：
  * XPath：直接指向网页上目标 `<iframe>` 标签的 XPath 路径。

#### 2. 返回主界面的操作（Switch to default）

* 目的：使控制权退出当前 Iframe，返回到原始的网页结构中。此操作没有配置参数。

#### 实际示例：在 Pinterest 上点击"Continue with Google"按钮（附图）

根据下方图片，Continue with Google 按钮实际上并不直接位于 Pinterest 页面上，而是包含在 Google 嵌入的一个安全 Iframe 窗口中（源代码右上方的红色箭头直接指向 `<iframe src="https://accounts.google.com...">` 标签）。

如果您只是直接使用 _Mouse click_ 命令点击 _Continue with Google_ 按钮（`//span[text()="Continue with Google"]`），脚本会立即报错，提示找不到该元素。标准处理流程必须如下配置：

* 第一步（进入 Iframe）：将 Switch to frame 操作拖入脚本中。
  * _XPath_：输入您找到的 iframe 标签的 XPath：`//iframe[contains(@src,'accounts.google.com')]`
* 第二步（点击按钮）：将 Mouse click 操作拖入流程中。
  * _点击类型_：根据 XPath 点击。
  * _XPath_：输入 iframe 内部按钮的 XPath：`//span[contains(text(),"Continue with Google")]`
* 第三步（退出）：紧接着拖入 Switch to default 操作，将浏览器带回 Pinterest 页面的主空间，为后续需要在外部填写注册表单（Email、Password）的步骤做好准备。

<figure><img src="../../.gitbook/assets/image (203).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (204).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (205).png" alt=""><figcaption></figcaption></figure>

要以最通俗、最容易想象的方式理解网页编程中的 Iframe（Frame），您可以立刻想到一面墙以及挂在墙上的那些画框。

#### 1. 关于画框的形象比喻

* 主墙面：即您正在访问的整个网页（例如：`pinterest.com` 页面）。这面墙有自己的涂料颜色，有出入的门，周围有桌椅。
* 挂在墙上的画框（Iframe）：是在这面墙上开出的一个洞或挂上去的一个框。特别之处在于，这个画框内部并不是一张静止的图片，而是完全属于另一个人的一块土地（例如：`accounts.google.com` 的一个办公角落）。

#### 2. Iframe 在网站上的运作本质

当一个网站嵌入 Iframe 时，他们其实是打开了一个"小窗口"，允许另一个网站在自己的页面上直接显示其内容：

* 内容独立：墙的主人（Pinterest）只是出租了挂画框的位置，无权干涉画框内部具体有什么内容、如何运作。画框内部的一切完全由画框的主人（Google）自主管理和保护。
* 观察者（Automation 脚本）：当您站在房间外面时，您可以同时看到墙面和画框。但如果您想拿笔在画上作画，您不能站在远处随意在墙上乱涂。您必须真正走进画框的范围内（`Switch to frame`），这时您才能触碰到其内部的细节（如 _Continue with Google_ 按钮）。

#### 3. 为什么做 Automation 时必须"进入"和"退出"？

由于浏览器的安全特性，墙外世界和画框内世界之间被一块无形的玻璃隔开：

* 如果不"进入"（`Switch to frame`）：自动化工具会站在墙外，一头雾水地问："咦，我在屏幕上明明清楚地看到了 Google 登录按钮，为什么怎么找都找不到它的 XPath 代码？" —— 因为机器人正在扫描的是墙面的代码，还无法透过画框的玻璃看进去。
* 如果不"退出"（`Switch to default`）：当您在画框内点击完按钮后，想要退回去点击 Pinterest 页面下方角落的"注册"按钮。如果您不退出，机器人仍会在……Google 的那块地盘内部徘徊寻找那个按钮，从而导致命令执行失败的错误。

总而言之，Iframe 就像是嵌套在一个大网页内部的一个缩小版网页，形成了一个独立的空间边界，自动化脚本想要在其中工作，就必须明确地"进入/退出"。