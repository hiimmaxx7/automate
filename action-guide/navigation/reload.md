# Reload

Reload is the action that instructs the browser to refresh and reload all content of the current webpage, similar to pressing the circular arrow button (F5) on the browser. This action operates automatically and does not have any accompanying configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Real-world example: Troubleshooting when the website is down or temporarily disconnected

During the automation process, you may sometimes encounter situations where the website displays errors, popup dialogs freeze and cannot be closed, or network congestion causes some elements on the interface to fail to load.

* How to apply: Combine the If conditional block with the Wait element or Image exists action. If the target element is not found after a certain period (the website is down), you have the script call the Reload action.
* Result: The browser will reload the page data from the beginning to fix temporary display errors, allowing the script to self-recover from errors and continue operating without abruptly stopping the flow.