# HTTP Request

### 发送网络请求的操作 (HTTP Request)

HTTP Request 是一种高级操作，用于直接从脚本向服务器、第三方 API 或网站发送网络请求，而无需打开浏览器界面进行手动交互。此操作有助于将数据处理速度提高数十倍。

#### 配置参数解释：

* URL：需要交互的服务器上资源或 API 的地址路径（例如：[https://api.telegram.org/bot.../sendMessage](https://api.telegram.org/bot.../sendMessage)）。
* Method：定义执行操作的通信方法：
  * `GET`：从服务器获取（读取）数据。
  * `POST`：将新数据发送到服务器（通常用于登录、创建帖子、发送消息）。
  * `PUT` / `PATCH`：更新服务器上已有的数据。
  * `DELETE`：删除服务器上的资源。
* Header：随请求发送的附加信息，以便服务器识别浏览器或验证访问权限。
  * _例如_：`Content-Type: application/json`（发送的数据格式），或 `Authorization: Bearer <token_秘密>`（账户验证配置代码）。
* Data (Body / Payload)：随请求发送的实际数据（仅适用于选择 `POST`、`PUT`、`PATCH` 等方法时）。
* Timeout：最大等待时间（以秒为单位），取决于界面设置，操作将等待服务器的响应。如果超过此时间而服务器未响应，操作将自动断开连接并报告错误（或抛出异常），以避免脚本因网络延迟或对方服务器崩溃而无限挂起。
* Use profile's proxy：允许使用分配给该 Profile 的 Proxy 来发送请求的选项。如果未选中，系统将使用您计算机的局域网 IP 地址发送请求。

#### 根据内容类型配置 Data (Body) 的格式

根据服务器的 API 文档要求，Data 部分必须按照不同的格式规范填写：

**示例 1：使用 `application/json` 格式的 body**

这是当前与现代 API 工作时最常见的格式。Body 必须按照大括号 `{}` 的结构填写，数据字段位于双引号内，符合 JSON 格式标准。

<figure><img src="../../.gitbook/assets/image (163).png" alt=""><figcaption></figcaption></figure>

**示例 2：使用 `application/x-www-form-urlencoded` 格式的 body**

这是传统数据字符串格式，通常出现在旧的登录表单或某些支付网关中。属性对连接成一个连续的文本字符串。

<figure><img src="../../.gitbook/assets/image (164).png" alt=""><figcaption></figcaption></figure>

**示例 3：使用 `multipart/form-data` 格式的 body**

这是特殊格式，必须在您需要上传文件（如图像、视频、文档文件）或从计算机向服务器发送复杂混合表单时使用。

<figure><img src="../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>