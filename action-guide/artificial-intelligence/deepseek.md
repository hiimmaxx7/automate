# DeepSeek

DeepSeek 是一个内置的动作，可以让您的 GPM Automate 脚本直接连接到 DeepSeek 的 API 系统。凭借超低的成本和强大的逻辑思维、编程能力和语言能力，这个动作是 Chat GPT 的完美替代或补充，用于自动化内容创建、数据分析或智能文本处理等任务。

#### 注册、购买 API 和配置 DeepSeek 动作的指南

DeepSeek 的 API 工作机制和费用计算与 OpenAI 类似（预付费，使用多少扣除多少）。具体的设置流程包括以下步骤：

**步骤 1：注册账户并充值（API Credits）**

1. 您访问 DeepSeek 的官方 API 管理页面：[https://platform.deepseek.com](https://platform.google.com/url?q=https://platform.deepseek.com)，并创建账户。
2. 登录后，访问 Top up 或 Billing 部分，关联国际支付卡（Visa/Mastercard），并充值所需金额（通常最低为 $2 - $5），以激活 API 使用配额。

**步骤 2：初始化并获取 DeepSeek API Key**

1. 在左侧菜单中，选择 API Keys。
2. 点击 Create new secret key 按钮，为密钥命名（例如：`GPM_DeepSeek_Key`）。
3. 系统将显示一串以 `sk-...` 开头的安全字符。请立即复制并保存，因为这串字符将会隐藏，并且不会再次显示。

**步骤 3：获取准确的模型名称列表**

DeepSeek 提供两个极其优化的核心模型，您只需在 GPM 的配置框中准确填写其中一个标识符即可。您可以在这里查看 DeepSeek 的模型列表：[https://api-docs.deepseek.com/quick\_start/pricing](https://api-docs.deepseek.com/quick_start/pricing)。

#### GPM Automate 中的配置参数：

将 DeepSeek 动作拖入主工作流时，您可以按如下方式进行设置：

* API Key：在此处粘贴步骤 2 中获取的密钥 `sk-...`（或通过变量传递以确保安全）。
* DeepSeek Model：准确填写字符串 `deepseek-chat` 或 `deepseek-reasoning`。
* Prompt：填写您的命令或详细请求内容（例如：`"请分析以下对话并提取客户的电话号码：$webContent"`）。
* Output variable：为输出变量命名（例如：`deepseekResult`），以便系统自动保存 AI 的回答文本字符串，准备进行后续的数据填写操作。

#### 实际示例：自动翻译和重写文章标题（Rewrite Title）以避免版权问题

当您进行市场营销、POD 或在国际市场（例如德国市场）上创建内容时，您需要从英文的电子商务网站抓取产品标题，然后翻译成德语并稍作重写，以便在自己的商店中发布，从而优化 SEO 并避免内容重复。

* 配置方式：
  * 假设您已经抓取了原始英文标题并将其保存到变量 `$originTitle`。
  * 在脚本中调用 DeepSeek 动作。
  * API Key：`sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * DeepSeek Model：`deepseek-v4-flash`
  * Prompt：您填写指示 AI 的内容：

      ```
      请将以下产品标题翻译成德语，并自然、简洁、吸引人地重写，以便进行市场营销。原始标题："$originTitle"。仅返回翻译和重写后的结果字符串，不添加任何引导或解释。
      ```
  * Output variable：将输出变量命名为 `aiContent`。

结果：系统将把变量 `$originTitle` 中的标题推送到 DeepSeek 进行处理。AI 将迅速将其翻译并优化为德语，然后将最精简的文本结果直接加载到变量 `$aiContent` 中。在接下来的步骤中，您只需调用这个变量 `$aiContent`，将其自动填入您网站上的输入框，从而实现跨境内容制作的高度自动化。

<figure><img src="../../.gitbook/assets/image (176).png" alt=""><figcaption></figcaption></figure>