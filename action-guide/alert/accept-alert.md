# 接受警报

接受警报操作会自动点击系统通知对话框（Alert Dialog）上的“确定”或“确认”。此命令不需要配置参数。

🎥 查看更多教程视频：[在这里](https://youtu.be/3tDWBxDXRfw)。

### ⚠️ 使用注意事项

* 不适用于现代网页界面：使用HTML/CSS（Modal, Dialog UI）单独设计的对话框不是系统警报。对于这些类型，您必须使用相应的XPath进行鼠标点击。
* 无法处理浏览器弹出窗口：浏览器的安全通知（相机访问权限、位置、HTTP基本认证等）无法通过此命令进行交互。请在运行脚本之前直接在GPM Login中配置权限。
* 执行机制：
  * 使用Selenium：自动化将根据命令正确执行接受/取消操作。
  * 使用Puppeteer：对话框将在出现时立即被自动接受。

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>