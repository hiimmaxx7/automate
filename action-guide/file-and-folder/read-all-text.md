# 文件读取所有文本

文件读取所有文本是用于一次性读取`.txt`格式文本文件的全部内容的操作。文件中的所有数据将作为一个单一的字符串返回，并存储到一个输出变量（Output variable）中。

🎥 查看更多教程视频：[在这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数：

* 文件路径：指向需要读取的`.txt`文件的绝对路径（例如：`D:\data\content.txt`）。
* 输出变量：存储刚刚读取的字符串结构的变量名称。

#### 实际示例：读取准备好的文章内容

假设您准备了一篇长文章（包含多句、换行符、空格）存储在文件`D:\GPM\post.txt`中。您想要获取这全部内容以自动填充到浏览器的发布框中：

* 配置方式：
  * 文件路径：填写路径`D:\GPM\post.txt`
  * 输出变量：将结果变量命名为`$textContent`。
* 结果：系统将完整提取文件中的所有字符和行结构，并赋值给变量`$textContent`。在接下来的步骤中，您只需调用Key press操作，将变量`$textContent`传入网站的输入框即可完成。

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>