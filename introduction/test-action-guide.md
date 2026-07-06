# 🛠️ Action Test Guide

Testing is an important step that helps you control the flow of your script, allowing you to run each step or block of commands to ensure everything operates as intended before the actual run.

🎥 Watch the tutorial video: [Here](https://youtu.be/zrX3ldxvEDE).

### 🎯 Why is it necessary to Test actions?

* Error control: Detect and address issues as actions are performed, rather than having to run the entire script from the beginning.
* Flexible tuning: You can isolate a single action or a block to test, which helps shorten debugging time.
* Test as you go: GPM Automate supports direct testing on GPM Login profiles, allowing you to observe results immediately in the browser.

> Note: The Test feature currently only supports profiles in GPM Login.

### ⚙️ Testing Procedure

To start the testing process, follow these steps:

#### 1️⃣ Step 1: Configure the profile in GPM Login

* Open GPM Login.
* Find the profile you want to use for testing.
* Click on the three dots next to the profile name.
* Select Run with remote port to obtain the control port information.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

#### 2️⃣ Step 2: Set up in GPM Automate

* In the GPM Automate interface, select the action or block that you want to test.
* On the toolbar above, click the Test button.
* A Test configuration dialog will appear.
* Enter the Port obtained from GPM Login in Step 1 into the corresponding field.
* Click Start to begin.

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

#### 3️⃣ Step 3: Observe the results

* After clicking Start, the system will execute the command on the selected profile.
* You can monitor the results displayed in the browser window and the log of GPM Automate to adjust the script if necessary.