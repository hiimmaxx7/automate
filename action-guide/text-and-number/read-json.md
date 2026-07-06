# 读取 JSON

读取 JSON 用于根据指定路径结构从 JSON 格式的文本中提取值。

🎥 查看更多教程视频：[在这里](https://youtu.be/nlEQsaxawt4)。

#### 配置参数：

* JSON 文本：需要读取的输入 JSON 文本字符串（或包含 JSON 字符串的变量）。
* 节点：指向包含所需数据的键的路径（JSON Path）。

#### 实际示例：从数据列表中获取电话号码

假设您有一个包含客户信息列表的 JSON 字符串，如下所示：

JSON

```
{
  "status": "success",
  "data": [
    {
      "name": "Nguyen Van A",
      "phone": "0987654321"
    },
    {
      "name": "Le Minh C",
      "phone": "0123456789"
    }
  ]
}
```

要提取列表中第一个人的电话号码，您可以配置读取 JSON 操作：

* JSON 文本：填写上述 JSON 字符串（或传递包含该字符串的变量）。
* 节点：填写为 `data.[0].phone` _(其中 `data` 进入数据数组，`[0]` 是第一个人的位置，`phone` 是需要获取的属性)_。
* 输出变量：填写需要保存结果的变量名称（例如：`$phoneNumber`）。

结果：变量 `$phoneNumber` 将接收值为 `"0987654321"`。

<figure><img src="../../.gitbook/assets/image (142).png" alt=""><figcaption></figcaption></figure>