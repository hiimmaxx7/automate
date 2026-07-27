# Wait popup

Wait popup 是命令脚本暂停并持续检查，直到弹出窗口（Popup Window）完全出现在屏幕上后才继续执行后续命令的操作。此操作有助于脚本流畅运行，避免因网络不稳定或网页加载弹窗缓慢而导致漏执行命令的错误。

🎥 查看更多指导视频：[点击这里](https://youtu.be/oroexOGjZfw)。

#### 配置参数：

* Popup Title：您正在等待的弹出窗口的标题。系统使用相对搜索机制（只需子窗口的标题包含您输入的短语，系统就会自动匹配并识别）。
* 请查看 [Switch to Popup](../switch/switch-to-popup.md) 部分了解更多使用方法。