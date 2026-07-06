# 读取 Outlook (Oauth2)

读取 Outlook (OAuth2) 是一种专门的高级操作，用于从 Microsoft 生态系统（Outlook、Hotmail、Live 等）账户中读取验证码（OTP）。与传统的 IMAP 方法不同，后者容易被 Microsoft 扫描封锁或要求身份验证，此操作使用 OAuth2 协议（通过 Refresh Token 和 Client ID）。这是一个官方连接机制，安全性高，极其稳定，并最大限度地减少在大量运行时（mass）账户被检查点的情况。

🎥 查看更多教程视频：[在这里](https://youtu.be/c9384x0uWiI)。

#### 详细解释配置参数：

* Email|Pass|Refresh token|Client ID: 输入需要读取验证码的账户信息。目前，当您从提供 MMO 材料的网站购买 Outlook/Hotmail 账户时，通常会交付由 4 个信息通过竖线 `|` 分隔的格式结构。您需要按照以下标准填写此框：`Email|Refresh token|Client ID.` 
* Email sent to contains: 关键字或包含该短语的发送电子邮件地址，以便系统准确过滤所需查找的邮件。
  * _例如_: 如果您需要从 TikTok 发送的电子邮件中获取 OTP，地址为 `noreply@tiktok.com`，请准确填写 `noreply@tiktok.com`（或类似的短语如 `noreply@tiktok`）到此项中。
* Proxy: 配置 IP 地址的选项，以便向 Microsoft 服务器发送连接请求，以避免在批量检查邮件时 IP 重复。您可以设置：
  * _留空_: 使用当前计算机的原始网络。
  * _填写变量 `$profileProxy`_: 系统自动获取当前 GPM Profile 分配的代理。
  * _手动填写代理_: 直接输入指定的代理字符串，格式为 `ip:port` 或 `ip:port:user:pass`。
* Code type: 需要系统从邮件内容中提取的 OTP 代码的格式结构。包括 3 个选项：
  1. Number (数字类型): 当发送的 OTP 完全是连续数字时使用。
     * _Code Length_: 需要读取的 OTP 字符串的长度（例如，发送的代码为 `475997` ➔ 填写代码长度为 `6`）。
  2. Text (文本类型): 当 OTP 包含字母和数字，或者隐藏在电子邮件的 HTML 标签结构中时使用。
     * _Code element xpath_: 直接指向包含需要提取的 OTP 的邮件内容中的元素的 XPath 路径。
     * _Code element attribute_: 如果 OTP 是位于两个标签之间的内容，请填写 `text`（例如：`<h1>ABCDEF</h1>` ➔ 填写 `text`）。或者填写 _属性名称_ 如果 OTP 是位于标签属性中的值（例如：`<h1 @code="ABCDEF"></h1>` ➔ 填写 `code`）。
  3. Full (整个邮件内容): 高级选项，帮助提取返回邮件的全部文本源代码或 HTML 代码，并赋值给输出变量。之后，您可以通过 Regex 或 Execute JS code 操作将此变量传递，以根据自己的需求编写灵活的提取规则。
* Output variable: 用于保存 OTP 字符串（或根据 _Code type_ 配置的整个邮件内容）的输出变量名称，以便在后续脚本中的输入操作中使用。

<figure><img src="../../.gitbook/assets/image (178).png" alt=""><figcaption></figcaption></figure>