# Read mail code

Read mail code 是高级操作，可帮助脚本自动通过安全的 IMAP 连接协议登录电子邮箱（Gmail、Outlook、Hotmail、Yahoo...）。系统将自动扫描最新邮件，查找来自指定发件人的邮件，并提取验证码（OTP/Code）以填入网页，而无需您手动打开邮箱标签页进行操作。

🎥 查看更多教学视频：[点击这里](https://youtu.be/c9384x0uWiI)。

#### 配置参数说明：

* Email：填入需要读取验证码的邮箱地址（例如：`gpm_user@gmail.com`）。
*   Password：填入连接密码。

    > ⚠️ 重要提示：对于安全性较高的邮箱类型（如 Gmail），您不能在此处填入账户的主密码，而必须填入该邮箱在安全设置中单独创建的应用专用密码（App Password）（获取方法见下方说明）。
* Mail server：邮件服务提供商的 IMAP 服务器地址。
  * _Gmail 示例_：`imap.gmail.com`
  * _Outlook/Hotmail 示例_：`outlook.office365.com`
* Email sent to contains：发件人邮箱地址中包含该关键词或字符串（用于筛选出正确的目标邮件，例如：`noreply@pinterest.com` 或 `no-reply@pinterest`）。
* Proxy：用于配置登录邮件服务器所使用的 IP 的可选设置，帮助避免在批量操作大量账户时被服务提供商（如 Google、Microsoft）封锁连接。您可以通过以下 3 种方式设置：
  * 留空：系统将使用原生网络（真实设备的 IP）来执行连接和取码。
  * 填入变量 `$profileProxy`：脚本将自动获取当前 Profile GPM 已单独分配的 Proxy 来使用。
  * 手动填写 proxy：直接按照特定格式（例如：`ip:port` 或 `ip:port:user:pass`）输入您想为此操作单独指定的 Proxy 字符串。
* Code type：需要提取的 OTP 验证码的结构格式。系统支持 3 种选项：
  1. Number（数字类型）：当返回的 OTP 验证码完全由连续数字组成时使用（例如：`475997`）。
     * _Code Length_：需要提取的数字串的确切长度（例如验证码由 6 位数字组成，则填入 `6`）。
  2. Text（文字类型）：当 OTP 验证码中同时混有字母和数字，或隐藏于邮件的某个 HTML 结构标签深处时使用。
     * _Code element xpath_：直接指向邮件内容中包含 OTP 验证码的标签的 XPath 路径（例如：`//h1` 或 `//span[@id="otp"]`）。
     * _Code element attribute_：如果 OTP 验证码直接位于两个标签之间，则填入关键词 `text`（例如：`<h1>ABCDEF</h1>` ➔ 填入 `text`）。或者如果 OTP 验证码隐藏在标签的属性中，则填入 _属性名称_（例如：`<h1 code="ABCDEF"></h1>` ➔ 填入 `code`）。
  3. Full（整封邮件内容）：高级选项，允许系统提取整封返回邮件的全部文本/HTML 源代码并赋值给变量。之后，您可以将该变量传入 Regex 或 Execute JS code 操作，自行编写灵活的算法来按需提取（适用于 OTP 结构极其复杂的邮件类型）。
* Output variable：用于保存验证码字符串（或整封邮件内容）的变量名称，在成功获取后传入下一个输入操作中使用。

#### 为 Gmail 开启两步验证（2FA）并获取应用专用密码（App Password）的操作指南

出于安全考虑，Google 会阻止所有第三方应用使用原始密码直接连接邮箱。您必须执行以下流程，才能授权 GPM Automate 访问 IMAP：

**1. 为 Google 账户开启两步验证（2FA）**

1. 登录您的 Google 账户，访问账户管理页面：[https://myaccount.google.com](https://myaccount.google.com)。
2. 在左侧菜单栏中，选择安全性（Security）选项。
3. 向下滚动至 _"您登录 Google 的方式"_ 部分，找到两步验证（2-Step Verification）选项。如果当前状态为 _关闭_，请点击并按照指引（关联手机号或验证应用）将其切换为开启状态。

**2. 创建并获取应用专用密码（App Password）**

1. 成功开启两步验证后，前往应用专用密码（App password）页面：[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)。
2. 在弹出的应用名称（App name）输入框中，输入任意一个便于记忆的名称（例如：`GPM_Automate`），然后点击创建（Create）按钮。
3. 系统会弹出一个小窗口，其中包含一段黄色的 16 位字符代码（例如：`abcd efgh ijkl mnop`）。
4. 请复制这全部 16 位字符（如有空格请去除），并直接粘贴到 GPM Automate 的 _Read mail code_ 操作配置中的 Password 输入框内。

_（提示：对于 Outlook/Hotmail 账户，您可在 Settings > Security > Advanced security options > App passwords 中执行类似流程，以获取对应的 16 位密码字符串）。_

<figure><img src="../../.gitbook/assets/image (177).png" alt=""><figcaption></figcaption></figure>