---
description: 点击鼠标到某个 element 上。
---

# Mouse click

Mouse click 是控制鼠标指针在屏幕上的特定位置执行点击（click）命令的操作。为了针对不同的界面交互情况进行优化,GPM Automate 为您提供了 3 种灵活的设置选项:

🎥 观看更多教程视频: [点击这里](https://youtu.be/kQZWs1I76Zo)。

#### 兼容所有界面的 3 种鼠标点击选择方式

**1. 根据 XPath 点击(Web 界面的默认方式)**

* 工作原理: 您填写网页上元素的标识路径(XPath)(例如: `//button[@id="submit"]`)。系统将自动查找此 HTML 标签,计算其在浏览器中的位置,并将鼠标移动到该位置进行精准点击。
* 应用场景: 用于具有清晰源码标签的常规网页结构和固定按钮。

<figure><img src="../../.gitbook/assets/image (190).png" alt=""><figcaption></figcaption></figure>

**2. 根据鼠标指针当前位置点击**

* 工作原理: 系统不会将鼠标移动到任何位置,而是会在鼠标指针因先前操作(例如 Mouse move 或 Random scroll 命令之后)静止不动的确切位置执行点击命令。
* 应用场景: 当您已经有一系列复杂的鼠标移动探测操作,只需要下达点击命令来触发时使用。

**3. 根据坐标点击(与 Image search 完美结合)**

* 工作原理: 您直接输入屏幕上像素点的横轴 `X` 和纵轴 `Y`(Pixel)位置,以使鼠标跳转到该位置进行点击。
* 优化组合: 这种点击方式通常与 Image search 操作结合使用。当 _Image search_ 找到目标图像时,它会返回一个合并的坐标变量(例如默认变量名为 `pos`),该变量以文本字符串形式包含用逗号分隔的 X 轴和 Y 轴: `900,800`。
* 配置方式: 在 _Mouse click_ 操作的坐标输入框中,您只需直接传入合并变量 `$pos` 即可。GPM Automate 的智能系统会自动解析 `900,800` 这种语法,将鼠标移动到 x=900, y=800 的坐标处直接点击目标。
* 应用场景: 用于点击 Canvas(游戏)中的元素、深藏在安全 Iframe 中的隐藏按钮,或与没有固定 XPath 标签的组件进行交互。

<figure><img src="../../.gitbook/assets/image (191).png" alt=""><figcaption></figcaption></figure>