# Close all tab

Close all tab is the action that instructs the browser to clean up and close all open tabs in bulk, keeping only the very first tab (the tab with index = `0`) on the navigation bar. This action has no configuration parameters attached.

🎥 Watch more tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Practical example: Reset the browser before switching accounts or ending a workflow

During an automation run, your script may open a lot of extra tabs due to clicking on ad links, popups, or mail/wallet check pages. Leaving too many tabs running in the background will consume the computer's RAM resources and can cause confusion with the interface in subsequent workflows.

* How to apply: Place the Close all tab action at the end of the script (before the block that fully closes the browser) or at the beginning of the script to ensure the browser is always in the cleanest state before starting a new work cycle.