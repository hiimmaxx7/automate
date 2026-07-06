# Has popup

Has popup 是一个动作，用于检查当前屏幕上是否出现与指定标题匹配的弹出窗口（Popup Window）。检查结果将返回逻辑值（`True` 如果有弹出窗口，或者 `False` 如果没有），并存储在一个变量中。

与 Wait popup（必须等待）不同，Has popup 只扫描一次，然后立即继续运行，帮助您推理条件分支以便于脚本的执行。

🎥 查看更多教程视频：[在这里](https://youtu.be/oroexOGjZfw)。

#### 配置参数：

* Popup Title: 您想要检查的弹出窗口的标题（支持相对搜索，只需包含特征短语）。
* Output variable: 用于存储检查结果的变量名称（接收值 `true` 或 `false`）。
* 查看更多用法请参见 [Switch to Popup](../switch/switch-to-popup.md)。