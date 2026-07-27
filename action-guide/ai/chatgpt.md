# ChatGPT

Chat GPT is a built-in action that allows your script to communicate directly with OpenAI's large language models through the API protocol. This action makes Automation scripts remarkably smart thanks to their ability to automatically process natural language, translate, summarize text, extract information, or automatically generate content directly within the workflow.

#### Step 1: Register an account and Buy Credits (API) on OpenAI

Unlike a ChatGPT Plus account (a $20/month paid plan used on the web interface), an account using the API operates on a Pay-as-you-go mechanism, where you top up credit in advance and it gets deducted based on usage.

1. Register an account: Visit OpenAI's developer page at [https://platform.openai.com](https://platform.openai.com/) and register an account (using an Email or by directly linking with a Google account).
2. Top up to buy API credits:
   * On the management dashboard, go to Settings ➔ Billing.
   * Click on Add credits (or Set up payment) to link your international payment card (Visa/Mastercard).
   * Top up a small minimum amount (usually $5) into your account. This amount will be gradually deducted based on the number of characters (Tokens) of text your script sends to and receives from the AI.

#### Step 2: Generate and Get the API Key (GPT API)

The API Key acts as a security key that helps GPM Automate connect and use the balance you just topped up to call the AI to process tasks.

1. On the left menu bar of the OpenAI Platform interface, go to the API Keys section.
2. Click the Create new secret key button.
3. Give this key a memorable name (Example: `GPM_Automate_Key`).
4.  The system will display a long string of characters starting with `sk-...`.

    > ⚠️ Note: Copy and save this code immediately into a secure file, as OpenAI will only display this string once. If you lose it, you will have to create a new key.

#### Step 3: Get the exact Model name (GPT Model)

OpenAI provides many generations of AI with different speeds, costs, and intelligence levels. To fill in the exact Model name in GPM Automate:

Go to the Models section on the OpenAI Platform page to view the list here: [https://developers.openai.com/api/docs/models/all](https://developers.openai.com/api/docs/models/all). Or take a quick look at the list of the most popular Models below:

| **Model Name (Enter in GPM)** | **Characteristics & Recommendations**                                                                                                               |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| gpt-4o-mini                  | New generation model, ultra-fast response speed, extremely cheap token cost, most optimal for typical Automation tasks.               |
| gpt-4o                       | The smartest model currently available, handling mathematical logic, programming, or in-depth content writing extremely well, but at a higher cost. |
| gpt-3.5-turbo                | A traditional model, with a basic level of intelligence, good at handling translation tasks or simple text cleanup.                         |

#### Explanation of configuration parameters:

* GPT API: Enter the Secret Key API generated from your OpenAI account management page (The string usually starts with `sk-...`).
* GPT Model: Enter the identifier name of the AI model you want to use, for example: `gpt-3.5-turbo`, `gpt-3.5-turbo-0125`, `gpt-4o`...
* Prompt: Enter the question, context, or detailed request that you want ChatGPT to process and answer. You can freely embed data variables scraped from the browser into this field for the AI to analyze.
* Output variable: The name of the variable that stores the entire text string of ChatGPT's response.

#### Practical example: Automatically translate and rewrite the article title (Rewrite Title) to avoid copyright issues

When you do Marketing, POD, or create content for international markets (such as the German market), you need to scrape product titles from English E-commerce sites, then translate them into German and rewrite them slightly to post on your own store in order to optimize SEO and avoid duplicate content.

* Configuration steps:
  * Suppose you have scraped the original English title and saved it into the variable `$originTitle`.
  * Call the Chat GPT action in your script.
  * GPT API: `sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * GPT Model: `gpt-3.5-turbo`
  *   Prompt: Enter instructions for the AI:

      ```
      Hãy dịch tiêu đề sản phẩm sau sang tiếng Đức và viết lại nó sao cho thật tự nhiên, ngắn gọn, hấp dẫn để làm marketing. Tiêu đề gốc: "$originTitle". Chỉ trả về duy nhất chuỗi kết quả sau khi dịch và viết lại, không thêm bất kỳ lời dẫn hay giải thích nào khác.
      ```
  * Output variable: Name the output variable `aiContent`.

Result: The system will push the title in the `$originTitle` variable to ChatGPT for processing. The AI will quickly translate and optimize the wording into German, then load the most refined text result directly into the `$aiContent` variable. In the next steps, you simply call this `$aiContent` variable to automatically fill in the input field on your website, helping to automate the cross-border content creation process extremely professionally.

<figure><img src="../../.gitbook/assets/image (175).png" alt=""><figcaption></figcaption></figure>