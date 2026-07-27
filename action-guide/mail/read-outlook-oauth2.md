# Read outlook (Oauth2)

Read outlook (OAuth2) 是专门用于从 Microsoft 生态系统账户（Outlook、Hotmail、Live 等）读取验证码（OTP）的高级操作。与传统的 IMAP 方式容易被 Microsoft 扫描封锁或要求身份验证不同，此操作使用 OAuth2 协议（通过 Refresh Token 和 Client ID）。这是一种官方的连接机制，安全性高，极其稳定，并最大限度地减少大批量（mass）运行时账户被检测（checkpoint）的情况。

🎥 观看更多教程视频：[点击此处](https://youtu.be/c9384x0uWiI)。

#### 配置参数详细说明：

* Email|Pass|Refresh token|Client ID：输入需要读取验证码的账户信息。目前购买 MMO 素材网站的 Outlook/Hotmail 账户时，通常会交付由竖线 `|` 分隔的 4 个信息字段的格式结构。您需要按以下正确格式填写此栏：`Email|Refresh token|Client ID.`
* Email sent to contains：发送邮件的关键词或地址中包含该词组，以便系统精确筛选需要查找的邮件。
  * _例如_：您需要从 TikTok 发送的邮件中获取 OTP 验证码，该邮件地址为 `noreply@tiktok.com`，请在此栏中准确填写 `noreply@tiktok.com`（或区分性词组如 `noreply@tiktok`）。
* Proxy：可选配置 IP 地址以向 Microsoft 服务器发送连接请求，从而避免批量检查邮件时 IP 重复。您可以设置：
  * _留空_：使用运行该操作的计算机原始网络。
  * _填入变量 `$profileProxy`_：系统自动获取当前 GPM Profile 专属分配的 Proxy 来使用。
  * _手动填写代理_：直接输入指定的 Proxy 字符串，格式为 `ip:port` 或 `ip:port:user:pass`。
* Code type：系统需要从邮件内容中提取的 OTP 验证码结构格式。共有 3 个选项：
  1. Number（数字类型）：当发送回来的 OTP 完全为连续数字时使用。
     * _Code Length_：需读取的 OTP 字符串长度（例如发送回来的验证码为 `475997` ➔ 填写 Code length 为 `6`）。
  2. Text（文字类型）：当 OTP 验证码同时包含字母和数字，或隐藏在邮件的 HTML 标签结构中时使用。
     * _Code element xpath_：直接指向邮件内容中包含所需 OTP 验证码的元素的 XPath 路径。
     * _Code element attribute_：如果 OTP 验证码是位于两个标签之间的内容，则填写 `text`（例如：`<h1>ABCDEF</h1>` ➔ 填写 `text`）。或者如果 OTP 验证码是标签属性内部的值，则填写 _属性名称_（例如：`<h1 @code="ABCDEF"></h1>` ➔ 填写 `code`）。
  3. Full（整个邮件内容）：高级选项，可获取返回邮件的整个源文本或 HTML 代码并赋值给输出变量。之后，您可以将此变量传递给 Regex 或 Execute JS code 操作，以便根据个人需求自行编写灵活的提取规则。
* Output variable：用于保存 OTP 验证码字符串（或根据 _Code type_ 配置保存整个邮件内容）的输出变量名称，供脚本中后续的输入操作使用。

<figure><img src="../../.gitbook/assets/image (178).png" alt=""><figcaption></figcaption></figure>