# File read random line

File read random line 是用于打开一个现有的 `.txt` 文本文件的操作,自动从该文件中随机抽取任意一行,然后将抽取到的该行内容保存到一个输出变量中。

当您在养号社交媒体账户(Facebook、X、Instagram...)并希望随机获取一句评论(Comment)、一句状态(Status)或一个搜索关键词时,此操作非常有用,可以避免各个 Profile 之间脚本重复相同的内容。

🎥 观看更多教学视频:[点击这里](https://youtu.be/EH7olDLAb9c)。

#### 配置参数:

* File Path:指向计算机上包含现有数据列表的 `.txt` 文件的绝对路径。
* Output variable:用于保存刚抽取到的随机行内容的变量名称。

#### 实际示例:自动随机评论以避免刷屏

假设您已准备好一个保存在 `D:\GPM\comments.txt` 的积极评论列表文件,每句话单独占一行:

```
Bài viết hay quá bạn ơi!
Tuyệt vời quá ạ.
Thông tin rất bổ ích, cảm ơn chủ thớt.
```

当脚本将浏览器导航到某篇帖子并准备点击评论时,您可以按如下方式配置:

* 配置方法:
  * 调用 File read random line 操作。
  * File Path:填入路径 `D:\GPM\comments.txt`。
  * Output variable:将保存结果的变量命名为 `$randomComment`。
* 结果:每次流程运行到此步骤时(或每个 Profile 独立运行时),系统将自动随机抽取上述 3 行中的其中 1 行(例如:Profile 1 抽中第 3 行:`"Thông tin rất bổ ích, cảm ơn chủ thớt."`,并将其赋值给变量 `$randomComment`)。您只需调用 Key press 操作,将该变量传入网站上的评论框即可完成。

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>