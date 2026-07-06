# 读取邮件代码

读取邮件代码是一个高级操作，帮助脚本自动登录到电子邮件（Gmail、Outlook、Hotmail、Yahoo...）通过安全连接协议IMAP。系统将自动扫描最新邮件，查找指定发件人的电子邮件，并提取验证码（OTP/Code）以填写到网页上，而无需您手动打开电子邮件标签进行操作。

🎥 查看更多视频教程：[在这里](https://youtu.be/c9384x0uWiI)。

#### 配置参数说明：

* 电子邮件：填写需要读取验证码的邮箱地址（例如：`gpm_user@gmail.com`）。
* 密码：填写连接的密码。

    > ⚠️ 重要注意事项：对于像Gmail这样的高安全性邮件，您不能在这里填写账户的主密码，而必须填写在该电子邮件的安全设置中单独创建的应用密码（App Password）（获取指南见下文）。
* 邮件服务器：邮件服务提供商的IMAP服务器地址。
  * _例如Gmail_：`imap.gmail.com`
  * _例如Outlook/Hotmail_：`outlook.office365.com`
* 发送到的电子邮件包含：包含该短语的关键字或电子邮件地址（用于过滤所需查找的电子邮件，例如：`noreply@pinterest.com`或`no-reply@pinterest`）。
* 代理：用于登录邮件服务器的IP配置选项，帮助避免在操作大量账户时被服务提供商（如Google、Microsoft）阻止连接。您可以通过三种方式进行设置：
  * 留空：系统将使用原始网络（实际机器的IP）进行连接和下载代码。
  * 填写变量`$profileProxy`：脚本将自动提取当前GPM配置文件分配的代理包进行使用。
  * 自定义代理：直接输入特定格式的代理字符串（例如：`ip:port`或`ip:port:user:pass`），您希望为此操作指定的代理。
* 代码类型：需要提取的OTP代码的结构格式。系统支持三种选项：
  1. 数字（Number）：当OTP代码完全是连续数字时使用（例如：`475997`）。
     * _代码长度_：所需提取的数字串的确切长度（例如，如果代码由6个数字组成，则填写`6`）。
  2. 文本（Text）：当OTP代码包含字母和数字交替，或深藏在电子邮件的HTML结构标签中时使用。
     * _代码元素xpath_：直接指向电子邮件内容中包含OTP代码的标签的XPath路径（例如：`//h1`或`//span[@id="otp"]`）。
     * _代码元素属性_：如果OTP代码直接位于两个标签之间，请填写关键字`text`（例如：`<h1>ABCDEF</h1>` ➔ 填写`text`）。或者填写_属性名称_，如果OTP代码隐藏在标签的属性中（例如：`<h1 code="ABCDEF"></h1>` ➔ 填写`code`）。
  3. 全部（Full）：高级选项，允许系统提取返回的整个电子邮件的文本/HTML源代码并分配给变量。然后，您可以通过Regex或Execute JS code操作传递此变量，以根据需要编写灵活的提取算法（适用于具有超复杂OTP结构的邮件）。
* 输出变量：成功提取后保存验证码（或整个电子邮件内容）的变量名称，以传递到下一个输入操作。

#### 如何启用两步验证（2FA）并获取Gmail的应用密码（App Password）

为了安全，Google阻止所有第三方应用直接使用主密码连接到邮箱。您必须执行以下步骤以授权GPM Automate访问IMAP：

**1. 为Google账户启用两步验证（2FA）**

1. 登录到您的Google账户，访问账户管理页面：[https://myaccount.google.com](https://myaccount.google.com)。
2. 在左侧菜单中，选择安全性（Security）选项。
3. 向下滚动到_“您如何登录Google”_部分，找到两步验证（2-Step Verification）选项。如果处于_关闭_状态，请点击并按照说明（链接电话号码或验证应用）将其切换为开启状态。

**2. 创建并获取应用密码（App Password）**

1. 成功启用两步验证后，您可以访问此处的应用密码（App password）部分：[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)。
2. 在应用名称（App name）框中，输入一个便于记忆的名称（例如：`GPM_Automate`），然后点击创建（Create）按钮。
3. 弹出一个小窗口，显示一串16个字符的黄色代码（例如：`abcd efgh ijkl mnop`）。
4. 请复制这16个字符（如果有空格，请删除）并直接粘贴到GPM Automate的_Read mail code_操作配置中的密码框中。

_(注意：对于Outlook/Hotmail账户，您可以在设置 > 安全 > 高级安全选项 > 应用密码中执行类似的过程以获取相应的16个字符密码串。)_

<figure><img src="../../.gitbook/assets/image (177).png" alt=""><figcaption></figcaption></figure>