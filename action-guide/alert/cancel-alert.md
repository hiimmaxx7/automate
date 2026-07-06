# 取消警报

取消警报操作会自动在原生系统提示框（Alert Dialog）上点击“取消”或“关闭”。此命令不需要配置参数。

🎥 查看更多教程视频：[在这里](https://youtu.be/3tDWBxDXRfw)。

### ⚠️ 使用注意事项

* 不适用于现代网页界面：使用 HTML/CSS 设计的对话框（Modal, Dialog UI）不是系统警报。对于这些类型，您必须使用相应的 XPath 进行鼠标点击。
* 无法处理浏览器弹出窗口：浏览器的安全提示（相机权限、位置、HTTP Basic Auth 验证等）无法通过此命令进行交互。在运行脚本之前，请在 GPM Login 中直接配置权限。
* 执行机制：
  * 使用 Selenium：Automate 会根据命令正确执行取消操作以拒绝通知。
  * 使用 Puppeteer：此命令将在通知出现时立即跳过或取消通知（相当于执行 Dismiss 操作）。

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>