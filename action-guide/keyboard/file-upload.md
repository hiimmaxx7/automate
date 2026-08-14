# File upload

File upload 是指令浏览器自动将一个或多个文件(图片、视频、Excel文档、txt等)从您的计算机上传到目标网站服务器的操作。

🎥 观看更多教程视频:[点击这里](https://youtu.be/cCTEtuMtz-s)。

#### 配置参数:

*   XPath: 直接指向网站文件上传框的标识路径(XPath)。

    > ⚠️ 重要提示:在使用代码执行自动化时,请不要直接点击写有"选择图片"或"上传图片"的按钮(因为这会打开Windows/macOS操作系统的文件选择窗口,导致脚本卡死)。相反,您必须在网页上找到结构类似于以下的隐藏标签:`//input[@type='file']`,然后将该 XPath 填入此栏。
* File path: 指向存储在您计算机上文件的绝对路径(例如:`C:\Users\Admin\Desktop\avatar.png`)。您可以在此处传入包含动态路径的变量(例如:`$filePath`)。

#### 实际示例:上传产品图片到系统

当您制作在电商平台或社交媒体上自动发布销售帖子(产品列表)的脚本时,标准处理流程如下:

* 配置方法:
  * Element XPath: `//input[@type='file' and @name='product_image']`(扫描网页源代码以查找此隐藏的 input 标签)。
  * File path: `D:\DataPOD\Design01.png`
* 运行逻辑: GPM Automate 会将文件路径 `D:\DataPOD\Design01.png` 直接传递到网站的 `input` 元素中。网站系统会立即识别并顺畅地开始图片上传过程,而不会弹出操作系统的 Open File 对话框。

<figure><img src="../../.gitbook/assets/kb-02.png" alt=""><figcaption></figcaption></figure>