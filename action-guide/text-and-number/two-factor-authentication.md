# 2FA code

2FA code 是一个用于自动生成基于时间变化的 6 位数字双重验证代码的操作（类似于手机上的 Google Authenticator 或 Authy），该代码基于提供的原始安全密钥生成。

此操作在 MMO 场景中至关重要，帮助自动绕过登录 Facebook、Google、X (Twitter)、Discord、Coinlist 等账户时的安全验证步骤，而无需打开手机手动输入。

🎥 查看更多教程视频：[在这里](https://youtu.be/nlEQsaxawt4)。

#### 配置参数：

* Secret key: 原始安全密钥（由字母和数字组成的长字符串，通常在您启用网站上的双重安全功能时提供）。
* Output variable: 存储生成的 6 位数字验证码的变量名称。

#### 实际示例：自动填写 Facebook 登录时的 2FA 代码

假设您在 Excel 中有一个 Facebook 账户的数据，其中该账户的双重安全密钥（Secret key）为：`JBSWY3DPEHPK3PXP`。

当浏览器导航到 Facebook 登录页面后，在填写用户/密码后，Facebook 会要求输入 6 位数字验证码以登录账户。您可以按如下方式配置自动处理脚本：

* 配置方式：
  * 调用 2FA code 操作。
  * Secret key: 填入字符串 `JBSWY3DPEHPK3PXP`（或从读取的 Excel 文件中传递包含该字符串的变量）。
  * Output variable: 将变量命名为 `$twoFACode`。
* 结果：系统将基于时间加密算法立即计算出当前的 6 位数字代码（例如：`482915`），并将其存储在变量 `$twoFACode` 中。在此操作之后，您可以继续调用 Key press 命令，将变量 `$twoFACode` 传入 Facebook 的验证码输入框，从而成功登录。

<figure><img src="../../.gitbook/assets/image (146).png" alt=""><figcaption></figcaption></figure>