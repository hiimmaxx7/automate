# HTTP Request

### 发送网络请求的操作（HTTP Request）

HTTP Request 是一种高级操作，用于直接从脚本向服务器系统（Server）、第三方 API 或网站发送网络请求，而无需打开浏览器界面进行手动操作。此操作可以将数据处理速度优化提升数十倍。

#### 配置参数说明：

* URL：需要交互的服务器上资源或 API 的地址路径（例如：`[https://api.telegram.org/bot.../sendMessage](https://api.telegram.org/bot.../sendMessage)`）。
* Method：用于定义执行操作的通信方式：
  * `GET`：从服务器获取（读取）数据。
  * `POST`：向服务器发送新数据（通常用于登录、创建文章、发送消息）。
  * `PUT` / `PATCH`：更新服务器上已有的数据。
  * `DELETE`：删除服务器上的资源。
* Header：随请求发送的附加信息，用于让服务器识别浏览器或验证访问权限。
  * _例如_：`Content-Type: application/json`（发送数据的格式），或 `Authorization: Bearer <token_bí_mật>`（账户身份验证配置代码）。
* Data（Body / Payload）：请求中实际附带发送的数据（仅在选择 `POST`、`PUT`、`PATCH` 等方法时适用）。
* Timeout：该操作等待服务器响应的最长时间（根据设置界面以秒为单位）。如果超过此时间服务器仍未响应，该操作将自动中断连接并报错（或抛出异常），以避免脚本因网络延迟或对方服务器宕机而无限挂起。
* Use profile's proxy：允许使用分配给该 Profile 的 Proxy 来发送请求的选项。如果不勾选，系统将使用您计算机的本地网络 IP 地址（Local IP）发送请求。

#### 根据不同内容类型配置 Data（Body）部分的格式

根据服务器 API 文档的要求，Data 部分必须按照不同的格式规范正确填写：

**示例 1：`application/json` 类型的 body**

这是目前使用现代 API 时最常见的格式。body 部分必须按照花括号 `{}` 结构填写，数据字段需用符合标准 JSON 规范的双引号包裹。

<figure><img src="../../.gitbook/assets/image (163).png" alt=""><figcaption></figcaption></figure>

**示例 2：`application/x-www-form-urlencoded` 类型的 body**

这是常见于旧式登录表单或某些支付网关的传统数据字符串格式。各属性对以连续的文本字符串形式相互连接。

<figure><img src="../../.gitbook/assets/image (164).png" alt=""><figcaption></figcaption></figure>

**示例 3：`multipart/form-data` 类型的 body**

这是一种特殊格式，当您需要从计算机向服务器上传文件（如图片、视频、文档文件）或发送复杂的混合表单时，必须使用此格式。

<figure><img src="../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>