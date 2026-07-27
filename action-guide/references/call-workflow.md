# Call workflow

Call Workflow 是一个动作,允许正在运行的脚本(父 Workflow)调用并执行系统中已创建好的另一个脚本(子 Workflow)。这是一个强大的工具,可以将复杂的流程拆分为独立管理的模块,有助于优化自动化逻辑的重复使用。

🎥 观看更多指导视频:[点击这里](https://youtu.be/OOqmfpq8IUA)。

> ⚠️ 请注意,Test action 功能对 Call workflow 不起作用。

#### 配置参数:

• Reference file:从您的子 workflow 列表中选择。

#### 运行机制:

当父 Workflow 运行到 Call Workflow 步骤时,系统会暂停主流程,将执行权转移给子 Workflow。子 Workflow 执行完成后,系统会自动返回父 Workflow,继续执行后续步骤。

您可以点击 Main workflow 部分右上角的 + 号来创建子 workflow -> 选择 Create new workflow(如果是新建)或 Import from existing file(如果从现有文件中选择)。

#### 实际案例:自动账户登录流程

假设您正在为 MMO 项目制作批量养号脚本,与其在每个脚本中都编写登录代码,您可以创建一个名为 `login_module` 的独立 Workflow:

• 第 1 步:在主 Workflow 中,打开浏览器后,拖入 Call Workflow 动作。

• 第 2 步:在 Reference file 项目中,选择 `login_module`。

• 第 3 步:在 Parameters 项目中,将变量 `$user` 和 `$pass` 从主 Workflow 传递给子 Workflow。

• 第 4 步:当主 Workflow 运行到此处时,它会"调用" `login_module` 完成填写用户名/密码、点击登录、处理验证码等操作。之后,它会自动返回主 Workflow,继续执行如运行 Tool、进行 Airdrop 或发布产品等任务。

技术说明:

• 请确保子 Workflow 已保存并在调用前检查其逻辑正确性。

• 检查父 Workflow 和子 Workflow 之间变量名的一致性,以确保数据传输准确无误,不会产生冲突。要使用子 workflow 的变量,您需要按照以下语法书写:`$子workflow名称_变量名`,例如下图所示,在 Main workflow 中,如果 login_module 模块中有变量 `$status`,那么要在 Main workflow 中使用它,需要填写为 `$login_module_status`。

<figure><img src="../../.gitbook/assets/image (246).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (247).png" alt=""><figcaption></figcaption></figure>