# ChatGPT

Chat GPT 是一个内置的动作，可以让您的脚本通过 API 协议直接与 OpenAI 的大型语言模型进行通信。这个动作使得 Automation 脚本变得智能，能够自动处理自然语言、翻译、文本摘要、信息提取，或在运行过程中自动创作内容。

#### 步骤 1：注册账户并购买 OpenAI 的 Credits (API)

与 ChatGPT Plus 账户（每月 $20 的付费计划，适用于网页界面）不同，使用 API 的账户采用预付费机制，使用多少扣除多少（Pay-as-you-go）。

1. 注册账户：您可以访问 OpenAI 的开发者页面 [https://platform.openai.com](https://platform.openai.com/) 并进行账户注册（通过电子邮件或直接与 Google 账户链接）。
2. 充值购买 API：
   * 在管理界面中，找到设置 ➔ 账单。
   * 点击添加信用额度（或设置支付）以链接您的国际支付卡（Visa/Mastercard）。
   * 向账户充值一小笔最低金额（通常为 $5）。这笔钱将根据您的脚本发送和接收的文本字符（Token）数量逐步扣除。

#### 步骤 2：初始化并获取 API Key (GPT API)

API Key 作为一个安全密钥，帮助 GPM Automate 连接并使用您刚充值的金额来调用 AI 处理任务。

1. 在 OpenAI 平台界面的左侧菜单中，访问 API Keys 部分。
2. 点击创建新秘密密钥（Create new secret key）。
3. 为这个密钥命名一个易于记忆的名称（例如：`GPM_Automate_Key`）。
4. 系统将显示一串以 `sk-...` 开头的长字符。

    > ⚠️ 注意：请立即复制并将此代码保存在一个安全的文件中，因为 OpenAI 只会显示这串字符一次。如果丢失，您将需要创建一个新的密钥。

#### 步骤 3：获取准确的模型名称 (GPT Model)

OpenAI 提供了许多不同代的 AI，具有不同的速度、成本和智能水平。要准确填写模型名称到 GPM Automate：

访问 OpenAI 平台上的 Models 部分查看列表：[https://developers.openai.com/api/docs/models/all](https://developers.openai.com/api/docs/models/all)。或者快速查看以下最常用模型的列表：

| **模型名称（填写到 GPM）** | **特点与推荐使用**                                                                                                               |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| gpt-4o-mini                  | 新一代模型，响应速度超快，token 成本极低，最优化于常规 Automation 任务。               |
| gpt-4o                       | 目前最智能的模型，擅长处理数学逻辑、编程或深入内容创作，但成本较高。 |
| gpt-3.5-turbo                | 传统模型，智能水平基本，适合处理翻译或简单文本清理任务。                         |

#### 配置参数说明：

* GPT API：填写从 OpenAI 账户管理页面生成的秘密密钥（Secret Key API）（字符串通常以 `sk-...` 开头）。
* GPT Model：填写您希望使用的人工智能模型的标识符名称，例如：`gpt-3.5-turbo`、`gpt-3.5-turbo-0125`、`gpt-4o`...
* Prompt：填写您希望 ChatGPT 处理和回答的问题、上下文或详细要求。您可以将从浏览器抓取的数据变量嵌入到此框中，以便 AI 进行分析。
* Output variable：保存 ChatGPT 响应的整个文本字符串的变量名称。

#### 实际示例：自动翻译和重写文章标题（Rewrite Title）以避免版权问题

当您进行市场营销、POD 或在国际市场（例如德国市场）上创作内容时，您需要抓取英文的产品标题，然后翻译成德文并稍作重写，以便在自己的商店中发布，从而优化 SEO 并避免内容重复。

* 配置方式：
  * 假设您已经抓取了原始英文标题并将其保存到变量 `$originTitle` 中。
  * 在脚本中调用 Chat GPT 动作。
  * GPT API：`sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * GPT Model：`gpt-3.5-turbo`
  * Prompt：您填写指示 AI 的内容：

      ```
      请将以下产品标题翻译成德文，并自然、简洁、吸引人地重写，以便进行市场营销。原始标题："$originTitle"。仅返回翻译和重写后的结果字符串，不添加任何其他引导或解释。
      ```
  * Output variable：将输出变量命名为 `aiContent`。

结果：系统将把变量 `$originTitle` 中的标题发送给 ChatGPT 处理。AI 将迅速翻译并优化文本为德文，然后将结果文本直接加载到变量 `$aiContent` 中。在接下来的步骤中，您只需调用这个变量 `$aiContent` 来自动填充到您网站的输入框中，从而实现跨境内容创作的高度自动化。

<figure><img src="../../.gitbook/assets/image (175).png" alt=""><figcaption></figcaption></figure>