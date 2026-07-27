# Wait URL Changed

Wait URL Changed is an action that instructs the script to pause and continuously monitor the browser's address bar until the current URL changes to a new address, or the system automatically skips it when the specified Timeout is reached.

🎥 Watch more tutorial videos: [Here](https://youtu.be/a9qNt96X1SM).

#### Configuration Parameters:

* Timeout (s): The maximum time limit (in seconds) for the system to wait for the URL to change. If this time is exceeded and the URL remains unchanged, the script will automatically move on to the next action.

#### Real-world example: Waiting for payment gateway processing or successful redirect verification

This action is extremely useful when you set up third-party login flows (such as clicking _Continue with Google_ on Pinterest), or when you press the "Checkout/Buy Now" button on e-commerce sites:

* How to configure: Right after the click action that triggers the redirect, insert the Wait URL Changed action with a Timeout of `30` (30 seconds).
* Operating logic: Instead of using a fixed command like Delay 5-10 seconds based on guesswork (which wastes time if the network is fast, or causes missed-click errors if the network is slow), the system will actively observe the address bar. As soon as Pinterest successfully redirects from the login page to the homepage (`pinterest.com/home`), the script will immediately proceed to the subsequent interaction steps without having to wait for the full 30 seconds.