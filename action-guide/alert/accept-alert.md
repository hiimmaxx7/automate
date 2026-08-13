# Accept alert

The Accept Alert action automatically clicks OK or Confirm on native system dialog boxes (Alert Dialog). This command does not require any configuration parameters.

🎥 For more tutorial videos: [Here](https://youtu.be/3tDWBxDXRfw).

### ⚠️ Notes When Using

* Not Applicable to Modern Web Interfaces: Dialogs specifically designed with HTML/CSS (Modal, Dialog UI) are not system Alerts. For these types, you must use Mouse Click with the corresponding XPath.
* Cannot Handle Browser Popups: Security alerts from the browser (camera access, location, HTTP Basic Auth authentication...) cannot be interacted with using this command. Please configure permissions directly in GPM Login before running the script.
* Execution Mechanism:
  * With Selenium: Automate performs the Accept/Cancel action as instructed.
  * With Puppeteer: The dialog will be automatically accepted as soon as it appears.

<figure><img src="../../.gitbook/assets/al-01.png" alt=""><figcaption></figcaption></figure>