# Count

Count是用于计算一维数组（或数据列表）中元素数量的操作，并返回一个数值。这个操作在您需要在处理之前检查数据大小或设置循环限制时非常有用。

🎥 查看更多教程视频：[在这里](https://youtu.be/nlEQsaxawt4)。

常见的实际应用案例包括：

#### 1. 计算文本文件的行数（Text）

当您需要知道一个文本文件（包含账户列表、代理、文章等）总共有多少行时：

* 做法：使用File read all lines操作读取文件中的所有行到一个变量列表中，然后使用Count操作来计算该列表。返回的值就是文件的总行数。

#### 实际示例：计算文件`D:\2.txt`中Facebook链接的数量

假设您有一个文件存储了Facebook个人资料链接列表，路径为`D:\2.txt`，内容包含9行，如下所示：

```
https://www.facebook.com/nguyenvana
https://www.facebook.com/leminhc
...
https://www.facebook.com/demo.account99
```

为了计算总行数并提取文件中的每个链接，脚本将通过两个步骤进行配置：

* 步骤1：使用File read all lines操作读取文件`D:\2.txt`。返回的结果将被存储到一个名为`$content`的数组（列表）中。此时系统自动理解：
  * `$content[0]` = `"https://www.facebook.com/nguyenvana"`（第1行）
  * `$content[1]` = `"https://www.facebook.com/leminhc"`（第2行）
  * ...
  * `$content[8]` = `"https://www.facebook.com/demo.account99"`（第9行）
* 步骤2：使用Count操作传入刚刚读取的数组`$content`，并将输出变量（Output variable）命名为`$lineCount`。

运行完成后，变量`$lineCount`将接收值`9`。您可以立即使用这个变量`$lineCount`作为For循环的结束参数，以自动依次打开每个Facebook个人资料进行交互。

<figure><img src="../../.gitbook/assets/image (120).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (122).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (123).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (124).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (136).png" alt=""><figcaption></figcaption></figure>

#### 2. 计算文件夹中的文件数量（Folder）

当您需要检查计算机上一个文件夹中有多少张图片、视频或文档时：

* 做法：使用Folder get file list操作获取所有文件的列表，然后使用Count操作准确知道该文件夹中包含多少个文件。

#### 实际示例：计算文件夹`D:\bds\cat bi\`中的房地产图片数量

假设您有一个文件夹存储房产照片，路径为`D:\bds\cat bi\`，其中包含3个简短命名的图片文件，如下所示：

* `1.jpg`
* `2.jpg`
* `3.jpg`

为了计算有多少个图片文件用于自动发布，脚本将通过两个步骤进行配置：

* 步骤1：使用Folder get file list操作指向文件夹路径`D:\bds\cat bi\`。系统将扫描该文件夹并返回一个包含所有文件路径的数组，存储到名为`$fileList`的变量中。此时数组数据将自动赋值为：
  * `$fileList[0]` = `"D:\bds\cat bi\1.jpg"`
  * `$fileList[1]` = `"D:\bds\cat bi\2.jpg"`
  * `$fileList[2]` = `"D:\bds\cat bi\3.jpg"`
* 步骤2：使用Count操作传入刚刚获取的数组`$fileList`，并将输出变量（Output variable）命名为`$totalFiles`。

运行完成后，变量`$totalFiles`将接收值`3`。您可以使用这个结果来运行条件语句（例如：如果文件夹中有超过0个文件，则执行上传图片到Facebook/网站的操作）。

<figure><img src="../../.gitbook/assets/image (126).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (127).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (128).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (129).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (135).png" alt=""><figcaption></figcaption></figure>

#### 3. 计算分割字符串后的元素数量（Split text）

当您有一个长文本字符串，包含多个由特殊字符分隔的信息，并想知道分割后会得到多少个元素时：

* 做法：在使用Split text操作根据字符`|`分割字符串后，您让Count操作处理刚刚分割的列表。此时返回的计数变量结果将是`6`。

#### 实际示例：计算使用Split text分割后的字符串元素数量

假设您有一个配置文件或一行数据，包含按竖线`|`分隔的账户信息，如下所示：

```
thanhnguyen|Pass1234|2FAXYZ|103.83.77.15:9898
```

为了计算这个字符串有多少个组成信息，以便检查账户的有效性，脚本将通过两个步骤进行配置：

* 步骤1：使用Split text操作根据分隔符`|`分割上述字符串。返回的结果将存储到一个名为`$accountData`的数组中。此时系统将自动分割数据为：
  * `$accountData[0]` = `"thanhnguyen"`（账户）
  * `$accountData[1]` = `"Pass1234"`（密码）
  * `$accountData[2]` = `"2FAXYZ"`（2FA编码）
  * `$accountData[3]` = `"103.83.77.15:9898"`（代理）
* 步骤2：使用Count操作传入刚刚分割的数组`$accountData`，并将输出变量（Output variable）命名为`$infoCount`。

运行完成后，变量`$infoCount`将接收值`4`。您可以使用这个结果结合If语句块进行检查（例如：如果`$infoCount = 4`，则表示账户信息结构完整，才继续执行登录脚本，否则跳过以避免错误）。

<figure><img src="../../.gitbook/assets/image (131).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (132).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (133).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (134).png" alt=""><figcaption></figcaption></figure>