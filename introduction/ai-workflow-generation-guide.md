# 🛠️ Guide to Gen AI Workflow Feature (Creating Scripts with AI)

The Gen AI Workflow feature allows you to initiate a complete automation script simply by describing it in natural language. In simple terms, it's like having AI browse the web for you — the AI configured in GPM Automate will automatically read the content, analyze the requirements, combine with a real web browsing Agent to fully analyze the page structure and obtain accurate XPath just like a real user before automatically generating the actions to push into the workflow.

🎥 For more instructional videos: [Here](https://youtu.be/gsLU5H95fl8).

> Note: The Gen AI Workflow feature currently supports direct analysis on profiles in GPM Login when running in Live mode.

### ⚙️ Steps to Execute Gen AI Workflow

To start the process of initiating an automated script using AI, follow these steps:

#### 1️⃣ Step 1: Configure Profile in GPM Login

* Open GPM Login.
* Find the profile you want to use for testing.
* Click on the three dots next to the profile name.
* Select Run with remote port to get the control port information.

> Explanation: Opening the remote port is like creating a "bridge" that allows AI and GPM Automate to directly control and access the open browser profile to browse the web and read the page structure in real-time.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

#### 2️⃣ Step 2: Set Up in GPM Automate

* On the GPM Automate toolbar, select **Generate with AI**.
* The Gen AI configuration window will appear with the following parameters:
  * **Remote debug port:** Paste the port obtained from GPM Login in Step 1 into this field to connect to the profile.
  * **Mode:** 
    * **Static:** Generates according to the script, AI imagines XPath without a web browsing Agent.
    * **Live:** The Agent directly browses the web, reading the full page structure and obtaining accurate XPath like a real person.
  * **AI Provider:** Choose the AI provider (**ChatGPT/OpenAI**, **Claude**, **Gemini**, **DeepSeek**, or **Custom AI** configured in the GPM Automate Settings), then select the appropriate **Model**.
  * **Workflow Description:** Enter the command/natural description of the script you want to initiate.
  * **Apply Mode:** 
    * **Replace current workflow:** Replace the entire current script.
    * **Append to main block:** Append new actions to the end of the main script.
* Click **Start session**, the browser will automatically open and execute the script analysis process.

<figure><img src="../.gitbook/assets/gen ai.jpg" alt=""><figcaption></figcaption></figure>

#### 3️⃣ Step 3: Observe the Results

* After the browser runs automatically and the system completes the Generate process, click **Apply** to push the newly created actions into the workflow.
* You can monitor the command blocks being inserted into the GPM Automate interface and proceed to test the script for adjustments if necessary.