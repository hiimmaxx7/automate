# Accept alert

The Accept Alert action automatically clicks OK or Confirm on native system dialog boxes (Alert Dialog). This command does not require any configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/3tDWBxDXRfw).

### ⚠️ Notes When Using

* Does Not Work With Modern Web Interfaces: Dialogs specifically designed with HTML/CSS (Modal, Dialog UI) are not system Alerts. For these types, you must use Mouse Click with the corresponding XPath.
* Cannot Handle Browser Popups: Security prompts from the browser (camera access, location, HTTP Basic Auth authentication...) cannot be interacted with using this command. Please configure permissions directly in GPM Login before running the script.
* Execution Mechanism:
  * With Selenium: Automate performs the Accept/Cancel action as instructed.
  * With Puppeteer: The dialog will be automatically accepted as soon as it appears.

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>