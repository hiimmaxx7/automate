# ChatGPT

Chat GPT is a built-in action that allows your script to communicate directly with OpenAI's large language models via the API protocol. This action makes Automation scripts exceptionally intelligent thanks to its ability to automatically process natural language, translate, summarize text, extract information, or automatically create content directly within the runtime.

#### Step 1: Register an account and Purchase Credits (API) on OpenAI

Unlike the ChatGPT Plus account (the $20/month paid plan used on the web interface), the API account operates on a Pay-as-you-go basis.

1. Register an account: You visit the OpenAI developer page at [https://platform.openai.com](https://platform.openai.com/) and proceed to register an account (using Email or directly linking with your Google account).
2. Add funds to purchase API:
   * In the management interface, go to Settings ➔ Billing.
   * Click Add credits (or Set up payment) to link your international payment card (Visa/Mastercard).
   * Proceed to add a small minimum amount (usually $5) to your account. This amount will be deducted based on the number of characters (Tokens) your script sends to and receives from the AI.

#### Step 2: Initialize and Retrieve the API Key (GPT API)

The API Key acts as a security key that allows GPM Automate to connect and use the funds you just added to call the AI for processing tasks.

1. In the left menu of the OpenAI Platform interface, go to API Keys.
2. Click the Create new secret key button.
3. Give a memorable name to this key (e.g., `GPM_Automate_Key`).
4. The system will display a long string of characters starting with `sk-...`.

    > ⚠️ Note: Please Copy and save this code immediately into a secure file, as OpenAI will only display this string once. If lost, you will need to create a new key.

#### Step 3: Get the exact Model names (GPT Model)

OpenAI offers many generations of AI with varying speeds, costs, and intelligence levels. To accurately fill in the Model name in GPM Automate:

Access the Models section on the OpenAI Platform page to see the list here: [https://developers.openai.com/api/docs/models/all](https://developers.openai.com/api/docs/models/all). Or quickly view the list of the most popular Models below:

| **Model Name (Fill in GPM)** | **Characteristics & Recommendations**                                                                                                               |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| gpt-4o-mini                  | New generation model, ultra-fast response speed, extremely low token cost, optimal for regular Automation tasks.               |
| gpt-4o                       | The smartest model currently, excels in handling mathematical logic, programming, or in-depth content writing but at a higher cost. |
| gpt-3.5-turbo                | Traditional model, basic intelligence level, handles translation tasks or simple text cleanup well.                         |

#### Explanation of configuration parameters:

* GPT API: Enter the secret key (Secret Key API) generated from your OpenAI account management page (the string usually starts with `sk-...`).
* GPT Model: Enter the identifier name of the AI model you want to use, e.g., `gpt-3.5-turbo`, `gpt-3.5-turbo-0125`, `gpt-4o`...
* Prompt: Enter the question, context, or detailed request that you want ChatGPT to process and respond to. You can embed variables scraped from the browser into this field for AI analysis.
* Output variable: The name of the variable that stores the entire text string of the response from ChatGPT.

#### Practical example: Automatically translate and rewrite article titles (Rewrite Title) to avoid copyright

When you are doing Marketing, POD, or content creation in the international market (such as the German market), you need to scrape product titles from E-commerce sites in English, then translate them into German and rewrite them a bit to post on your store to optimize SEO and avoid duplicate content.

* Configuration method:
  * Suppose you have scraped the original English title and stored it in the variable `$originTitle`.
  * Call the Chat GPT action in the script.
  * GPT API: `sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * GPT Model: `gpt-3.5-turbo`
  * Prompt: You enter the instruction content for the AI:

      ```
      Please translate the following product title into German and rewrite it to be as natural, concise, and appealing as possible for marketing. Original title: "$originTitle". Only return the result string after translation and rewriting, without adding any leading or explanatory words.
      ```
  * Output variable: Name the output variable `aiContent`.

Result: The system will push the title in the variable `$originTitle` to ChatGPT for processing. The AI will quickly translate and optimize the wording into German, then directly load the most concise text result into the variable `$aiContent`. In the next steps, you just need to call this variable `$aiContent` to automatically fill it into the input field on your website, helping to automate the cross-border content creation process very professionally.

<figure><img src="../../.gitbook/assets/image (175).png" alt=""><figcaption></figcaption></figure>