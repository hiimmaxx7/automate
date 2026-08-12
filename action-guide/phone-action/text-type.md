---
description: 在指定的输入框中通过XPath输入一段文本。
---

# 输入文本

输入文本是将一段文本输入到通过XPath确定的输入框中，模拟逐个字符输入，具有随机延迟，以类似于真实用户的操作。

#### 配置参数说明：

* XPath: 需要输入的输入框的XPath，例如 `//node[@resource-id="com.android.chrome:id/url_bar"]`。查看获取XPath的方法请参见 [确定XPath和坐标指南](./xpath-and-coordinates-guide.md)。
* Text: 需要输入的文本内容，例如 `tinhte.vn`。
* Min delay (ms): 字符之间的最小延迟（毫秒），例如 `50`。
* Max delay (ms): 字符之间的最大延迟（毫秒），例如 `200`。每个字符将等待一个在最小和最大之间的随机时间。

<figure><img src="../../.gitbook/assets/px-05.png" alt=""><figcaption></figcaption></figure>