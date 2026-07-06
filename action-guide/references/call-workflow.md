# Call workflow

Call Workflow 是一个允许正在运行的脚本（父工作流）调用和执行系统中已创建的另一个脚本（子工作流）的动作。这是一个强大的工具，可以将复杂的流程拆分为独立管理的模块，从而优化自动化逻辑的重用。

🎥 查看更多教程视频：[在这里](https://youtu.be/OOqmfpq8IUA)。

> ⚠️ 请注意，Test action 功能对 Call workflow 无效。

#### 配置参数：

• Reference file: 从您的子工作流列表中选择。

#### 工作机制：

当父工作流运行到 Call Workflow 步骤时，系统将暂停主线程，将执行权转移到子工作流。子工作流完成后，系统将自动返回父工作流并继续执行后续步骤。

您可以通过点击主工作流部分右上角的 + 号来创建子工作流 -> 选择 Create new workflow（如果是新建）或 Import from existing file（如果是从现有文件中选择）。

#### 实际示例：自动登录账户流程

假设您为多个 MMO 项目编写了批量账户养成脚本，而不是在每个脚本中编写登录代码，您创建一个名为 `login_module` 的独立工作流：

• 步骤 1：在主工作流中，打开浏览器后，您拖动 Call Workflow 动作。

• 步骤 2：在 Reference file 项中，选择 `login_module`。

• 步骤 3：在 Parameters 项中，您将变量 `$user` 和 `$pass` 从主工作流传递到子工作流。

• 步骤 4：当主工作流运行到这里时，它将“调用” `login_module` 完成填写用户/密码、点击登录、处理验证码等操作。之后，它会自动返回主工作流以继续执行诸如运行工具、进行空投或发布产品等任务。

技术注意事项：

• 确保子工作流已保存并检查逻辑后再调用。

• 检查父工作流和子工作流之间变量名称的一致性，以确保数据准确传递且不冲突。要使用子工作流的变量，您需要按照语法：`$workflow_name_variable_name` 编写，例如在主工作流中，如果在 login_module 模块中有变量 `$status`，则在主工作流中使用时需要填写为 `$login_module_status`。

<figure><img src="../../.gitbook/assets/image (246).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (247).png" alt=""><figcaption></figcaption></figure>