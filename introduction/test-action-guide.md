# 🛠️ Test Action Guide (Testing)

Testing is an important step that helps you control the execution flow of your script, allowing you to run individual steps or command blocks to ensure everything works as intended before running it for real.

🎥 Watch more tutorial videos: [Here](https://youtu.be/zrX3ldxvEDE).

### 🎯 Why do you need to Test action?

* Error control: Detect and handle issues right when performing the action, instead of having to run the entire script from the beginning.
* Flexible fine-tuning: You can isolate a single action or a command Block for testing, helping to shorten debugging time.
* Test as you build: GPM Automate supports direct testing on GPM Login profiles, allowing you to observe the results immediately in the browser.

> Note: The Test feature currently only supports profiles in GPM Login.

### ⚙️ Testing Process

To start the testing process, follow these steps:

#### 1️⃣ Step 1: Configure the profile in GPM Login

* Open GPM Login.
* Find the profile you want to use for testing.
* Click the 3-dot icon next to the profile name.
* Select Run with remote port to get the control port information.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

#### 2️⃣ Step 2: Set up in GPM Automate

* In the GPM Automate interface, select the command (Action) or command Block that you want to test.
* On the toolbar above, click the Test button.
* A Test configuration dialog box will appear.
* Enter the Port obtained from GPM Login in Step 1 into the corresponding field.
* Click Start to begin.

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

#### 3️⃣ Step 3: Observe the results

* After clicking Start, the system will execute the command on the selected profile.
* Monitor the results displayed directly in the browser window and the GPM Automate Log to make adjustments to your script if necessary.