---
description: 点击鼠标到一个元素上。
---

# Mouse click

Mouse click 是控制鼠标指针在屏幕上特定位置执行点击（click）命令的动作。为了优化不同界面的交互情况，GPM Automate 为您提供了 3 个灵活的设置选项：

🎥 查看更多视频教程：[在这里](https://youtu.be/kQZWs1I76Zo)。

#### 3 种兼容所有界面的鼠标点击选择方式

**1. 基于 XPath 的点击（Web 界面的默认设置）**

* 工作原理：您填写网页上元素的标识路径（XPath）（例如：`//button[@id="submit"]`）。系统会自动搜索此 HTML 标签，计算其在浏览器上的位置，并将鼠标移动到准确的点击位置。
* 应用：用于普通网页结构，具有明确源代码标签的固定按钮。

<figure><img src="../../.gitbook/assets/image (190).png" alt=""><figcaption></figcaption></figure>

**2. 基于当前鼠标指针位置的点击**

* 工作原理：系统不会将鼠标移动到其他地方，而是在鼠标指针从之前的动作（如 Mouse move 或 Random scroll）静止的位置执行点击命令。
* 应用：在您之前已经有一系列复杂的鼠标移动动作后，只需发出点击命令以激活。

**3. 基于坐标的点击（与 Image search 完美结合）**

* 工作原理：您直接输入屏幕上横轴 `X` 和纵轴 `Y` 的像素位置，以便鼠标跳到并点击。
* 优化结合：这种点击方式通常与 Image search 动作结合使用。当 _Image search_ 找到目标图像时，它将返回一个合并坐标变量（例如，默认变量名为 `pos`），以文本字符串的形式包含 X 和 Y 轴，用逗号分隔：`900,800`。
* 配置方式：在 _Mouse click_ 动作的坐标输入框中，您只需直接传递合并变量 `$pos`。GPM Automate 的智能系统将自动解析 `900,800` 的语法，以将鼠标移动到坐标 x=900, y=800 进行点击。
* 应用：用于点击位于 Canvas（游戏）中的元素、深藏在安全 Iframe 中的按钮，或与没有固定 XPath 标签的组件进行交互。

<figure><img src="../../.gitbook/assets/image (191).png" alt=""><figcaption></figcaption></figure>