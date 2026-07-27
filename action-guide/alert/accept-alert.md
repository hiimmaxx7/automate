# Accept alert

The Accept alert action automatically clicks OK or Confirm on native system Alert Dialogs. This command does not require any configuration parameters.

🎥 Watch more tutorial videos: [Here](https://youtu.be/3tDWBxDXRfw).

### ⚠️ Notes When Using

* Does Not Work With Modern Web Interfaces: Dialogs custom-built with HTML/CSS (Modal, Dialog UI) are not system Alerts. For these types, you must use Mouse click with the corresponding XPath.
* Cannot Handle Browser-Native Popups: Security notifications from the browser (Camera access permission, location, HTTP Basic Auth authentication...) cannot be interacted with using this command. Please configure permissions directly in GPM Login before running the script.
* Execution Mechanism:
  * With Selenium: Automate performs the exact Accept/Cancel action as commanded.
  * With Puppeteer: The dialog will be automatically accepted (Accept) immediately upon appearing.

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>