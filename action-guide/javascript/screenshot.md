# Screenshot

Screenshot is an action that instructs the browser to automatically capture the interface of the current web page. This action is very useful for storing evidence of a completed task, capturing a QR Code, or saving the error interface when a script encounters an issue, making it easier for Debugging.

🎥 Watch more tutorial videos: [Here](https://youtu.be/c3gYFS7IIr4).

#### Configuration parameters:

* Output path: The absolute path to the folder on your computer where you want to store the image after capturing (Example: `D:\GPM_Automate\Screenshots`).
* File name: The name of the image file you want to set (Example: `success_evidence.png`). You can pass dynamic variables such as account IDs or timestamps here to prevent later files from overwriting earlier ones.
* Full page: Check this option if you want the system to capture the entire scrolled web page from top to bottom. If unchecked, the system will only capture exactly the current viewport (the visible display area) that you are currently seeing.
* Output variable: The variable name of GPM Automate used to store the absolute path of the image file just created after a successful capture.

#### Practical example: Automatically save a confirmation image after a successful post

When you build a script to automatically post for sale items or provide engagement boosting services. After the system displays the message "Post successful", you want to capture the screen to create a report for the customer:

* Configuration:
  * Output path: `D:\MMO_Project\Report`
  * File name: `account01_done.png`
  * Full page: _Checked_ (to capture the entire post content that extends further down).
  * Output variable: `savedImagePath`
* Result: GPM Automate will capture the entire web page, package it into an image file saved in the exact folder you specified, and store that file path in the `$savedImagePath` variable so you can use it for subsequent actions such as sending reports via Telegram/Discord in the following steps.

<figure><img src="../../.gitbook/assets/image (226).png" alt=""><figcaption></figcaption></figure>