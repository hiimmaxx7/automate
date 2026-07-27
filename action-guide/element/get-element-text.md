# Get element text

此操作可帮助工具"读取"并获取显示在某个元素上的全部文字（如文章内容、标题、价格或账户名称），然后保存到一个变量中供您使用。

* 作用：当您需要从网站抓取文本数据时使用。您只需指定正确的位置（Element），工具就会自动为您提取界面上显示的文字部分。

#### 配置参数说明：

* XPath：网页界面上包含所需提取文本内容的元素的标识路径（XPath）。
* Output variable：用于保存提取成功后的文本内容的变量名。

#### 实际示例：抓取商品价格

根据您提供的商店界面图片，您想抓取三星 Galaxy S6 手机的价格，用于价格比较或将数据同步到您自己的系统中。

查看图片右侧红色标注的 HTML 源代码：

> 包含价格的标签结构：`<h5>$360</h5>`

要获取这个价格文本字符串 `$360`，您需要按如下方式配置此操作：

* Element XPath：准确输入直接指向该商品价格标签的 XPath 路径，例如：`//div[@class='card h-100']//h5`（如图中您已成功测试的 XPath 搜索框所示）。
* Output variable：将输出变量命名为 `productPrice`。

结果：系统将找到对应商品的 `<h5>` 标签，提取标签中间的纯文本部分，并直接将 `$360` 这个值赋给变量 `$productPrice`。在后续步骤中，您可以调用此变量将其写入 Excel 文件或发送到系统数据中。

<figure><img src="../../.gitbook/assets/image (183).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (184).png" alt=""><figcaption></figcaption></figure>