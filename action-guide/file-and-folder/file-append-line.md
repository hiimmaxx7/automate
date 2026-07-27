# File append LINE

File append LINE 是用于在 `.txt` 格式文件的最后位置插入一行新文字的操作。

🎥 观看更多指导视频：[点击这里](https://youtu.be/EH7olDLAb9c)。

与覆盖写入操作（File write all text）不同，此操作有助于完整保留文件中先前已存在的所有数据。

* 如果文件不存在：系统将根据指定的路径自动创建一个新的 `.txt` 文件，然后插入该行文字。
* 如果文件已存在：系统会保留原有内容，自动在文件末尾换行并将新的数据行追加进去。

#### 配置参数：

* File Path：想要插入数据的 `.txt` 文件的绝对路径（例如：`D:\GPM\history_log.txt`）。
* Text：您想要追加到文件末尾的文本内容（或包含文本的变量）。

#### 实际示例：记录已成功运行的账号日志（Log）

假设您运行一个交互脚本，并想将已完成任务的账号列表保存到 `success_accounts.txt` 文件中，以便在一天结束时方便检查：

* 配置方式：在账号完成脚本末尾的交互步骤后，调用 File append LINE 操作：
  * File Path：填写 `D:\GPM\success_accounts.txt`。
  * Text：传入包含账号名称的变量（例如：`$currentAccount`）。
* 结果：每当一个流程运行完成后，该账号名称将依次整齐地排列成 `success_accounts.txt` 文件中的一行（例如：第1行为 `tk_01`，第2行为 `tk_02`……），而不会丢失之前已运行账号的数据。

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>