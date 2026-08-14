# Cancel alert

Cancel Alert 动作会自动点击原生系统通知对话框（Alert Dialog）上的取消或关闭按钮。此指令不需要配置参数。

🎥 查看更多操作指南视频：[点击这里](https://youtu.be/3tDWBxDXRfw)。

### ⚠️ 使用注意事项

* 对现代网页界面无效：使用 HTML/CSS 自定义设计的对话框（Modal、Dialog UI）并非系统级 Alert。对于此类弹窗，您必须使用带有相应 XPath 的 Mouse Click。
* 无法处理浏览器内核弹窗：浏览器发出的安全通知（如摄像头、定位权限请求、HTTP Basic Auth 认证等）无法通过此指令进行交互。请在运行脚本前，直接在 GPM Login 中配置好相关权限。
* 执行机制：
  * 使用 Selenium 时：Automate 会按照指令执行准确的 Cancel 动作以拒绝通知。
  * 使用 Puppeteer 时：此指令会在通知出现时立即忽略或取消它（相当于 Dismiss 操作）。

<figure><img src="../../.gitbook/assets/al-01.png" alt=""><figcaption></figcaption></figure>