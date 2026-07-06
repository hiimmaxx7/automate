# 图像转 Base64

此操作帮助您将计算机上的图像文件编码为一串文本字符（Base64 字符串）。

* 作用：在需要通过网络命令如 `HTTP Request` 发送图像时极为有用。例如：您想将图像发送到 AI 服务以请求解码验证码，或将图像上传到服务器而不想以常规方式传输文件。

🎥 查看更多教程视频：[在这里](https://youtu.be/xWu0g35YTGo)。

#### 配置参数：

* Image Path: 指向需要转换的计算机上图像文件的绝对路径（例如：`D:\GPM_Data\captcha.png`）。
* Output variable: 用于存储成功编码后的 Base64 字符串的变量名称。

#### 实际示例：转换验证码图像以通过 API 发送到自动解码系统

当您导航到一个网站并遇到图像验证码时。您已经使用 Screenshot 操作截取了包含验证码的区域，并将其保存为 `D:\GPM_Data\captcha.png` 的图像文件。现在，您想将此图像发送到第三方 API（如 2Captcha、Anti-Captcha）请求他们代为解码。由于他们的 API 要求图像数据必须以 Base64 文本字符串的形式提供，您将按如下配置：

* 步骤 1：调用 Image to Base64 操作。
  * Image Path: 填写 `D:\GPM_Data\captcha.png`。
  * Output variable: 将变量命名为 `base64String`。
* 步骤 2：调用 HTTP Request 操作（方法 POST）将数据发送到验证码解码服务器。在 Data（Body）部分，您将变量 `$base64String` 传入符合他们 API 文档的 JSON 结构中。

结果：图像文件 `captcha.png` 将被转换为一串长长的代码字符串 `data:image/png;base64,iVBORw0KGgoAAAANSU...` 存储在变量 `$base64String` 中。后面的 HTTP Request 命令只需将此字符串整齐地发送出去，帮助自动脚本轻松绕过验证码的安全层。 

<figure><img src="../../.gitbook/assets/image (174).png" alt=""><figcaption></figcaption></figure>