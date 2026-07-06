# Throw

Throw 是一个主动抛出您自定义的错误通知（Exception）并立即停止当前脚本流的操作。

Throw 和 Stop 之间的核心区别在于停止流后的报告状态：

* Stop：关闭流，系统仍然记录运行状态为完成（Completed - 显示为绿色）。
* Throw：关闭流，系统将标记状态为错误（Error - 显示为红色），并将具体错误内容记录到系统日志（Log）中。

#### 实际示例：当广告账户余额不足时抛出错误

假设您正在自动化脚本以创建广告活动。在设置之前，脚本需要进入管理页面检查预算。如果余额为 0，脚本将无法继续运行：

* 配置方法：
  * 使用 If 语句块检查：`如果余额 = 0`。
  * 在 If 语句块内，您调用 Throw 操作并填写错误通知内容为：`"错误：账户余额不足，无法创建广告！"`。
* 结果：当运行到这里时，该 profile 的流将立即关闭。在 GPM Automate 的进度管理面板上，该 profile 的状态将变为错误（红色），并附上错误通知文字。您只需浏览列表即可快速筛选出哪些账户出现错误，以便处理，而不会与成功运行的流（Completed）混淆。

<figure><img src="../../.gitbook/assets/image (140).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (141).png" alt=""><figcaption></figcaption></figure>