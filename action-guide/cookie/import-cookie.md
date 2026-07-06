# 导入 Cookie

导入 Cookie 是将一个字符串或结构化的 Cookie 数据文件加载到浏览器中，以便账户自动登录成功，而无需填写用户名/密码。

#### 配置参数：

* Cookie 文件：指向包含 Cookie 结构的 `.json` 文件的绝对路径（或直接传递数据变量）。
* 结构格式：必须是标准的 JSON 格式。

#### 重要操作注意事项：

* 需要先访问 URL：您必须让浏览器访问正确的目标网站，然后才能调用此操作（例如：先访问 `facebook.com`，然后再导入 Facebook 的 Cookie，这样 Cookie 才能匹配正确的域名）。
* 仅在当前会话中有效：加载的所有 Cookie 数据仅在该工作会话中有效。一旦关闭浏览器的 Profile，这些 Cookie 将自动消失，并且不会覆盖 Profile 的原始数据。

<figure><img src="../../.gitbook/assets/image (214).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (217).png" alt=""><figcaption></figcaption></figure>