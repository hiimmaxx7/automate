# DeepSeek

DeepSeek is a built-in action that helps your GPM Automate script connect directly to DeepSeek's API system. With outstanding advantages in ultra-low cost and extremely powerful logical reasoning, programming, and language capabilities, this action is a perfect replacement or complement alongside Chat GPT for automating tasks such as content creation, data analysis, or intelligent text processing.

#### Guide to registering, purchasing API, and configuring the DeepSeek action

The operating mechanism and cost calculation via DeepSeek's API is similar to OpenAI (Top up in advance, pay as you use). The specific setup process includes the following steps:

**Step 1: Register an account and Top up (API Credits)**

1. Go to DeepSeek's official API management page at: [https://platform.deepseek.com](https://platform.google.com/url?q=https://platform.deepseek.com) and create an account.
2. After logging in, go to the Top up or Billing section to link an international payment card (Visa/Mastercard) and top up the desired amount (usually a minimum of $2 - $5) to activate the API usage quota.

**Step 2: Generate and retrieve the DeepSeek API Key**

1. In the left-hand menu bar, select API Keys.
2. Click the Create new secret key button, and name the key (e.g., `GPM_DeepSeek_Key`).
3. The system will display a long secure string starting with `sk-...`. Copy and save it immediately, as this string will be hidden and will not be displayed again.

**Step 3: Get the exact Model names**

DeepSeek provides two extremely optimized core models. You only need to enter one of the following two identifiers exactly into GPM's configuration field. You can view DeepSeek's model list here: [https://api-docs.deepseek.com/quick\_start/pricing](https://api-docs.deepseek.com/quick_start/pricing).

#### Configuration parameters in GPM Automate:

When you drag the DeepSeek action into the Main workflow, configure it as follows:

* API Key: Paste the secret key `sk-...` obtained in Step 2 here (or pass it through a variable for security).
* DeepSeek Model: Enter exactly the string `deepseek-chat` or `deepseek-reasoning`.
* Prompt: Enter your detailed command or request content (e.g., `"Please analyze the following conversation and extract the customer's phone number: $webContent"`).
* Output variable: Name the output variable (e.g., `deepseekResult`) so the system automatically stores the AI's text response, ready for subsequent data-filling actions.

#### Practical example: Automatically translate and rewrite product titles (Rewrite Title) to avoid copyright issues

When doing Marketing, POD, or creating content for international markets (such as the German market), you need to scrape product titles from E-commerce sites in English, then translate them into German and rewrite them slightly to post on your own store in order to optimize SEO and avoid duplicate content.

* How to configure:
  * Suppose you have scraped the original English title and saved it into the variable `$originTitle`.
  * Call the DeepSeek action in your script.
  * API Key: `sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * DeepSeek Model: `deepseek-v4-flash`
  *   Prompt: Enter the instruction content for the AI:

      ```
      Hãy dịch tiêu đề sản phẩm sau sang tiếng Đức và viết lại nó sao cho thật tự nhiên, ngắn gọn, hấp dẫn để làm marketing. Tiêu đề gốc: "$originTitle". Chỉ trả về duy nhất chuỗi kết quả sau khi dịch và viết lại, không thêm bất kỳ lời dẫn hay giải thích nào khác.
      ```
  * Output variable: Name the output variable `aiContent`.

Result: The system will send the title in the variable `$originTitle` to DeepSeek for processing. The AI will quickly translate and optimize the wording into German, then load the resulting refined text directly into the variable `$aiContent`. In the following steps, you simply need to call this `$aiContent` variable to automatically fill it into the input field on your website, helping to automate the cross-border content creation process in a highly professional manner.

<figure><img src="../../.gitbook/assets/image (176).png" alt=""><figcaption></figcaption></figure>