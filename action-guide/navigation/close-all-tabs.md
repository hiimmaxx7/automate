# Close all tab

Close all tab is an action that instructs the browser to clean up and close multiple open tabs, leaving only the first tab (the tab with index = `0`) in the navigation bar. This action does not have any accompanying configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Real-life example: Reset the browser before switching accounts or ending a workflow

During the automation run, your script may open many auxiliary tabs due to clicking on advertisement links, popups, or pages to check mail or wallets. Keeping too many tabs running in the background will consume your computer's RAM resources and make it easier for subsequent workflows to confuse the interface.

* How to apply: Place the Close all tab action at the end of the script (before the block of commands that completely closes the browser) or at the beginning of the script to ensure the browser is always in the cleanest state before starting a new working cycle.