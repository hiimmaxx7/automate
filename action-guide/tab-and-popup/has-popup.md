# Has popup

Has popup 是用于检测当前时刻屏幕上是否正在出现与指定标题相匹配的弹出窗口(Popup Window)的操作。检测结果将返回一个逻辑值(如果有 popup 则为 `True`,如果没有则为 `False`)并保存到一个变量中。

与 Wait popup(必须停下等待)不同,Has popup 只扫描一次便立即继续运行,帮助您为脚本推理出分支条件走向。

🎥 观看更多指导视频:[点击这里](https://youtu.be/oroexOGjZfw)。

#### 配置参数:

* Popup Title:您想要检测的 popup 窗口的标题(支持相对搜索,只需包含特征词组即可)。
* Output variable:用于保存检测结果的变量名称(取值为 `true` 或 `false`)。
* 更多使用方法请参见 [Switch to Popup](../switch/switch-to-popup.md) 部分。