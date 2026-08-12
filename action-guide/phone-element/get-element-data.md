---
description: 获取屏幕上元素的属性并将其存储到变量中。
---

# 获取元素数据

获取元素数据是根据 XPath 从设备屏幕上的元素中提取数据（特定属性），然后将其存储到变量中以供后续步骤使用。

#### 配置参数说明：

* XPath: 需要提取数据的元素的 XPath，例如 `//node[@resource-id="com.android.chrome:id/url_bar"]`。有关如何获取 XPath，请参见 [确定 XPath 和坐标的指南](../phone-action/xpath-and-coordinates-guide.md)。
* 属性名称: 需要提取的属性名称，例如 `resource-id`、`text`、`content-desc`、`class`、`bounds`...
* 输出变量名称: 存储读取到的属性值的变量名称。

<figure><img src="../../.gitbook/assets/pe-01.png" alt=""><figcaption></figcaption></figure>