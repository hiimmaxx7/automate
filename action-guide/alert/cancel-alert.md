# Cancel alert

The Cancel Alert action automatically clicks Cancel or Close on native system dialog boxes (Alert Dialog). This command does not require any configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/3tDWBxDXRfw).

### ⚠️ Usage Notes

* Not Applicable to Modern Web Interfaces: Dialogs specifically designed with HTML/CSS (Modal, Dialog UI) are not system Alerts. For these types, you must use Mouse Click with the corresponding XPath.
* Cannot Handle Browser Popups: Security prompts from the browser (camera access, location, HTTP Basic Auth authentication...) cannot be interacted with using this command. Please configure permissions directly in GPM Login before running the script.
* Execution Mechanism:
  * With Selenium: Automate performs the Cancel action as instructed to dismiss the notification.
  * With Puppeteer: This command will ignore or cancel the notification as soon as it appears (equivalent to the Dismiss action).

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>