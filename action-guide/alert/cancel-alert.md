# Cancel alert

The Cancel Alert action automatically clicks Cancel or Close on native system notification dialogs (Alert Dialog). This command does not require any configuration parameters.

🎥 Watch more tutorial videos: [Here](https://youtu.be/3tDWBxDXRfw).

### ⚠️ Usage Notes

* Does Not Work With Modern Web Interfaces: Dialogs designed with HTML/CSS (Modal, Dialog UI) are not system Alerts. For these types, you must use Mouse click with the corresponding XPath.
* Cannot Handle Browser-Native Popups: Browser security notifications (Camera access permissions, location, HTTP Basic Auth authentication...) cannot be interacted with using this command. Please configure permissions directly in GPM Login before running the script.
* Execution Mechanism:
  * With Selenium: Automate performs the exact Cancel action as commanded to reject the notification.
  * With Puppeteer: This command will skip or dismiss the notification as soon as it appears (equivalent to a Dismiss operation).

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>