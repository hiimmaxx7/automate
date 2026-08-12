---
description: 检查一个元素是否存在于屏幕上，并将结果返回给变量。
---

# Has element

Has element 是一个检查一个元素（根据 XPath）是否存在于当前屏幕上的动作，然后将结果 true/false 返回给变量以便分支脚本。

#### 解释配置参数：

* XPath: 需要检查的元素的 XPath，例如 `//node[@resource-id="com.android.chrome:id/url_bar"]`。查看获取 XPath 的方法请参见 [确定 XPath 和坐标指南](../phone-action/xpath-and-coordinates-guide.md)。
* Output Variable Name: 存储结果 `true`/`false` 的变量名称（如果元素存在则为 true）。在 If 块中使用此变量进行分支。

<figure><img src="../../.gitbook/assets/pe-02.png" alt=""><figcaption></figcaption></figure>