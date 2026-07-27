# Switch to popup

Switch to popup is an action that commands the script to transfer control from the current browser window to a new child window that has just popped up (Popup Window).

🎥 Watch more tutorial videos: [Here](https://youtu.be/oroexOGjZfw).

#### The difference between Iframe and Popup:

* Iframe: Is a "frame" embedded within the same web page tab.
* Popup: Is a completely new window torn off from the old tab, operating independently (with its own title bar and maximize/minimize/close buttons).

#### Configuration parameters:

* Popup Title: The title of the popup window you want to switch to. The system applies a relative search mechanism (as long as the popup title contains the phrase you enter, the system will automatically recognize and jump into it).

#### Practical example: Handling the Google login window after clicking "Continue with Google"

Continuing the processing flow on the Pinterest page from the previous step. After you switch into the Iframe and click the _Continue with Google_ button, a small independent window (Popup) will pop up on the screen asking you to enter your Google Gmail and Password.

At this point, the original Pinterest browser will be dimmed, and all subsequent actions must be performed on this new window. You configure it as follows:

* Step 1 (Trigger the Popup to open): Use the click command on the _Continue with Google_ button (as done in the Iframe lesson).
* Step 2 (Wait for the Popup to appear - If needed): You can use the Wait popup command or a short Delay of about 1-2 seconds to let the window finish loading.
* Step 3 (Check if the Popup exists): You can use the Has popup command. If the popup exists, the result returned is True.
* Step 3 (Switch to the Popup): Drag the Switch to popup action into the flow.
  * Popup Title: Enter `Google Accounts` _(Since the full title of this window is usually very long, such as "Sign in - Google Accounts", you only need to enter this distinctive phrase for the system to automatically match it)_.
* Step 4 (Data entry interaction): After this command, control now lies entirely within the new window. You proceed to use Key press commands to enter the account, password, and click Next as usual.

> 💡 Tip for returning: After you complete the login in the Popup window, the Google system will automatically check and close this window. To continue controlling the original Pinterest page, you just need to use the Active tab command or return to the main tab to continue running the subsequent data scraping actions.

<figure><img src="../../.gitbook/assets/image (206).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (207).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (208).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (209).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (210).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (211).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (212).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (213).png" alt=""><figcaption></figcaption></figure>