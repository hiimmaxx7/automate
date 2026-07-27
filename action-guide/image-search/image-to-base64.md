# Image to Base64

此操作可帮助您将计算机上的图片文件编码为一长串文本字符（Base64 字符串）。

* 用途：在需要通过 `HTTP Request` 等网络命令发送图片时极其有用。例如：您想将图片发送给 AI 服务以解码验证码，或将图片上传到服务器而不想以常规方式传输文件。

🎥 查看更多教学视频：[点击这里](https://youtu.be/xWu0g35YTGo)。

#### 配置参数：

* Image Path：需要转换的计算机上图片文件的绝对路径（例如：`D:\GPM_Data\captcha.png`）。
* Output variable：编码成功后用于保存 Base64 字符串的变量名称。

#### 实际示例：转换验证码图片以通过 API 发送到自动解码系统

当您导航进入某个网站并遇到图片形式的验证码。您已使用 Screenshot 操作截取该验证码所在区域，并将其保存为图片文件 `D:\GPM_Data\captcha.png`。现在，您想将此图片发送给第三方 API（如 2Captcha、Anti-Captcha）以请求他们代为解码。由于他们的 API 要求图片数据必须是 Base64 文本字符串格式，您需要如下配置：

* 第一步：调用 Image to Base64 操作。
  * Image Path：填写 `D:\GPM_Data\captcha.png`。
  * Output variable：将变量名设置为 `base64String`。
* 第二步：调用 HTTP Request 操作（Method 为 POST）将数据发送到验证码解码服务器。在 Data（Body）部分，按照对方 API 文档的要求，将变量 `$base64String` 传入 JSON 结构中。

结果：图片文件 `captcha.png` 将被转换为一长串形如 `data:image/png;base64,iVBORw0KGgoAAAANSU...` 的字符串，并保存到变量 `$base64String` 中。后续的 HTTP Request 命令只需简洁地取出该字符串发送出去，即可帮助自动化脚本轻松绕过验证码安全层。

<figure><img src="../../.gitbook/assets/image (174).png" alt=""><figcaption></figcaption></figure>