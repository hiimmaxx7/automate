# 获取元素属性

此操作帮助您“提取”网页上元素内部的隐藏信息，并将其保存到变量中以供后用。

* 功能：例如，您可以从属性 `src` 中获取图片路径，或从链接标签的 `href` 属性中获取链接，或者获取输入框中的 `value` 值。
* 简单理解：网页上的每个组件都有一些“属性”随之而来（就像信息标签）。此命令帮助您读取并“复制”该标签上的信息以保存下来。

#### 配置参数说明：

* Element XPath：包含要提取属性的元素在网页界面的标识路径（XPath）。
* Attribute name：您想要提取数据的属性名称。
  * _示例结构_：`<标签 名称属性="属性值">文本</标签>` ➔ 您只需在此框中填写 `名称属性` 以提取 `属性值`。
* Output variable：用于保存成功提取的属性值字符串的变量名称。

#### 实际示例：根据实际图片抓取产品图片链接（图5）

根据您正在操作的手机商店网页界面，您想抓取三星 Galaxy S6 手机的图片路径，以便用于数据存储或自动上传到您的商店。

查看 HTML 源代码表（图右侧红框）：

> 图片标签结构：`<img class="card-img-top img-fluid" src="imgs/galaxy_s6.jpg" alt="">`

要获取图片路径字符串 `imgs/galaxy_s6.jpg`，您将配置操作如下：

* Element XPath：准确输入指向该图片标签的 XPath 路径，例如：`//div[@class="card h-100"]/a/img`（或使用您图中的语法：`//div[@class='card h-100']//img`）。
* Attribute name：填写 `src` _(这是包含图片文件路径的属性名称)_。
* Output variable：将输出变量命名为 `imgUrl`。

结果：系统将找到三星 Galaxy S6 的图片标签，提取 `src` 属性中的字符串值，并将值 `imgs/galaxy_s6.jpg` 直接加载到变量 `$imgUrl` 中。您可以将此变量用于下载图片或在后台存储。

<figure><img src="../../.gitbook/assets/image (181).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (182).png" alt=""><figcaption></figcaption></figure>