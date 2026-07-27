# 🛠️ Guide to the Gen AI Workflow Feature (Generate Scripts with AI)

The Gen AI Workflow feature allows you to initialize a complete automation script using only a natural language description. Simply put, AI browses the web for you — the AI pre-configured in GPM Automate will automatically read the content, analyze the requirements, combine with an Agent that browses the web in real time to analyze the full page structure and obtain accurate XPath just like a real user would, before automatically generating actions and pushing them into the workflow.

🎥 Watch more tutorial videos: [Here](https://youtu.be/gsLU5H95fl8).

> Note: The Gen AI Workflow feature currently supports direct analysis on profiles in GPM Login when running in Live mode.

### ⚙️ Gen AI Workflow Process

To start the process of initializing a script using AI, follow these steps:

#### 1️⃣ Step 1: Configure the profile in GPM Login

* Open GPM Login.
* Find the profile you want to use for testing.
* Click the 3-dot icon next to the profile name.
* Select Run with remote port to get the control port information.

> Explanation: Opening the remote port is like creating a "bridge" that allows AI and GPM Automate to directly control and access the currently open browser profile in order to browse the web and read the page structure in real-time.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

#### 2️⃣ Step 2: Set up in GPM Automate

* On the toolbar of GPM Automate, select **Generate with AI**.
* The Gen AI configuration window will appear with the following parameters:
  * **Remote debug port:** Paste the Port obtained from GPM Login in Step 1 into this field to connect with the profile.
  * **Mode:** 
    * **Static:** Automatically generates based on a script, where the AI imagines the XPath without an Agent browsing the web.
    * **Live:** The Agent directly browses the web, reads the full page structure, and retrieves the accurate XPath just like a real person.
  * **AI Provider:** Choose the AI provider (**ChatGPT/OpenAI**, **Claude**, **Gemini**, **DeepSeek**, or a **Custom AI** that has already been configured in the Settings section of GPM Automate), then select the appropriate **Model**.
  * **Workflow Description:** Enter the natural language command/description of the script you want to create.
  * **Apply Mode:** 
    * **Replace current workflow:** Replaces the entire current script.
    * **Append to main block:** Inserts the new actions at the end of the main script.
* Click **Start session**, and the browser will automatically open and run the script analysis process.

<figure><img src="../.gitbook/assets/gen ai.jpg" alt=""><figcaption></figcaption></figure>

#### 3️⃣ Step 3: Observe the results

* After the browser has finished running and the system has completed the Generate process, click **Apply** to push the newly created actions into the workflow.
* Monitor the command blocks inserted into the GPM Automate interface and test the script to make fine-tuning adjustments as needed.