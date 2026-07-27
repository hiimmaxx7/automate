# DeepSeek

DeepSeek 是内置的集成 action,可帮助您的 GPM Automate 脚本直接连接到 DeepSeek 的 API 系统。凭借超低成本以及极其强大的逻辑思维、编程和语言处理能力等突出优势,该 action 是 Chat GPT 之外的完美替代方案或补充,用于自动化内容创建、数据分析或智能文本处理等任务。

#### 注册、购买 API 及配置 DeepSeek action 的指南

DeepSeek 通过 API 的运作机制和费用计算方式与 OpenAI 类似(先充值,用多少扣多少)。具体设置流程包括以下步骤:

**步骤 1:注册账户并充值(API Credits)**

1. 您访问 DeepSeek 官方 API 管理页面,地址为:[https://platform.deepseek.com](https://platform.google.com/url?q=https://platform.deepseek.com),然后创建账户。
2. 登录后,进入 Top up 或 Billing 菜单,关联国际支付卡(Visa/Mastercard)并充值所需金额(通常最低为 $2 - $5)以激活 API 使用额度。

**步骤 2:创建并获取 DeepSeek API Key**

1. 在左侧菜单栏,选择 API Keys 项目。
2. 点击 Create new secret key 按钮,为密钥命名(例如:`GPM_DeepSeek_Key`)。
3. 系统将显示一串以 `sk-...` 开头的长安全字符串。请立即复制并保存,因为该字符串会隐藏,不会第二次显示。

**步骤 3:获取准确的 Model 名称列表**

DeepSeek 提供两种极其优化的核心模型,您只需将以下两个标识代码之一准确填入 GPM 的配置框中。您可以在此处查看 DeepSeek 的 model 列表:[https://api-docs.deepseek.com/quick\_start/pricing](https://api-docs.deepseek.com/quick_start/pricing)。

#### GPM Automate 中的配置参数:

将 DeepSeek action 拖入 Main workflow 流程后,您按如下方式设置:

* API Key:将步骤 2 中获取的 `sk-...` 密钥粘贴到此处(或通过变量传递以确保安全)。
* DeepSeek Model:准确填写 `deepseek-chat` 或 `deepseek-reasoning` 字符串。
* Prompt:填写您的具体指令或详细要求内容(例如:`"Hãy phân tích đoạn hội thoại sau và trích xuất ra số điện thoại của khách hàng: $webContent"`)。
* Output variable:设置输出变量名(例如:`deepseekResult`)以便系统自动保存 AI 回答的文本字符串,为后续的数据填充 action 做好准备。

#### 实际示例:自动翻译并重写文章标题(Rewrite Title)以规避版权问题

当您从事 Marketing、POD 或在国际市场(例如德国市场)从事内容工作时,您需要从电子商务网站抓取英文产品标题,然后翻译成德语并稍作重写后发布到您自己的商店,以优化 SEO 并避免内容重复。

* 配置方法:
  * 假设您已经抓取到原始英文标题并保存到变量 `$originTitle` 中。
  * 在脚本中调用 DeepSeek action。
  * API Key:`sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * DeepSeek Model:`deepseek-v4-flash`
  *   Prompt:您填写给 AI 的指令内容:

      ```
      Hãy dịch tiêu đề sản phẩm sau sang tiếng Đức và viết lại nó sao cho thật tự nhiên, ngắn gọn, hấp dẫn để làm marketing. Tiêu đề gốc: "$originTitle". Chỉ trả về duy nhất chuỗi kết quả sau khi dịch và viết lại, không thêm bất kỳ lời dẫn hay giải thích nào khác.
      ```
  * Output variable:将输出变量命名为 `aiContent`。

结果:系统会将变量 `$originTitle` 中的标题推送到 DeepSeek 进行处理。AI 将快速翻译并将措辞优化为德语,然后将最精炼的文本结果直接载入变量 `$aiContent` 中。在后续步骤中,您只需调用这个 `$aiContent` 变量,将其自动填入您网站上的输入框中,从而帮助您极其专业地实现跨境内容制作流程的自动化。

<figure><img src="../../.gitbook/assets/image (176).png" alt=""><figcaption></figcaption></figure>