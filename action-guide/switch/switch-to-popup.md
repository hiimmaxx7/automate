# Switch to popup

Switch to popup is an action that instructs the script to transfer control from the current browser window to a newly opened child window (Popup Window).

🎥 Watch the tutorial video: [Here](https://youtu.be/oroexOGjZfw).

#### The difference between Iframe and Popup:

* Iframe: Is an "inline frame" embedded within the same web page tab.
* Popup: Is a completely new window that breaks away from the old tab, operating independently (with its own title bar and maximize/minimize/close buttons).

#### Configuration parameters:

* Popup Title: The title of the popup window you want to switch to. The system applies a relative search mechanism (as long as the popup title contains the phrase you entered, the system will automatically recognize and switch).

#### Practical example: Handling the Google login window after clicking "Continue with Google"

Continue the processing flow on Pinterest from the previous step. After you switch to Iframe and click the _Continue with Google_ button, a small independent window (Popup) will appear outside the screen asking you to enter your Gmail and Google Password.

At this point, the original Pinterest browser will be dimmed, and all subsequent actions must be performed in this new window. You configure as follows:

* Step 1 (Activate Popup opening): Use the click command on the _Continue with Google_ button (as done in the Iframe lesson).
* Step 2 (Wait for Popup to appear - if needed): You can use the Wait popup command or a short Delay of about 1-2 seconds for the window to load.
* Step 3 (Check if Popup exists): You can use the Has popup command. If the popup exists, the result returned is True.
* Step 3 (Switch to Popup): Drag the Switch to popup action into the flow.
  * Popup Title: Enter the text `Google Accounts` _(Since the full title of this window is often very long like "Sign in - Google Accounts", you only need to enter this distinctive phrase for the system to match)_.
* Step 4 (Input interaction): After this command, control is entirely within the new window. You proceed to use Key press commands to enter the account, password, and click Next as usual.

> 💡 Tip to go back: After you complete the login in the Popup window, the Google system will automatically check and close this window. To continue controlling the original Pinterest page, you just need to use the Active tab command or return to the main tab to continue executing the subsequent data scraping actions.