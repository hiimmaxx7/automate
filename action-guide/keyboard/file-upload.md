# 文件上传

文件上传是指命令浏览器自动将一个或多个文件（图像、视频、Excel文档、txt等）从您的计算机上传到目标网站的服务器。

🎥 查看更多教程视频：[在这里](https://youtu.be/cCTEtuMtz-s)。

#### 配置参数：

*   XPath：指向网站文件上传框的标识符路径（XPath）。

    > ⚠️ 重要提示：在通过代码进行自动化时，您不要直接点击带有“选择图片”或“上传图片”字样的按钮（因为这会打开Windows/macOS操作系统的文件选择窗口，从而导致脚本卡顿）。相反，您必须在网站上找到正确的结构为：`//input[@type='file']`的隐藏标签，并将XPath填入此框中。
* 文件路径：指向您计算机上正在保存的文件的绝对路径（例如：`C:\Users\Admin\Desktop\avatar.png`）。您可以在这里传递包含动态路径的变量（例如：`$filePath`）。

#### 实际示例：将产品图片上传到系统

当您编写自动发布销售商品（Listing产品）脚本到电子商务平台或社交网络时，标准处理流程如下：

* 配置方式：
  * 元素XPath：`//input[@type='file' and @name='product_image']`（扫描网页源代码以查找此隐藏input标签）。
  * 文件路径：`D:\DataPOD\Design01.png`
* 运行逻辑：GPM Automate将直接将文件路径`D:\DataPOD\Design01.png`传递给网站的`input`元素。网站系统将立即识别并开始顺利上传图片，而不会出现操作系统的打开文件对话框。

<figure><img src="../../.gitbook/assets/image (199).png" alt=""><figcaption></figcaption></figure>