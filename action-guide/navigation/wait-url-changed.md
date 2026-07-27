# Wait URL Changed

Wait URL Changed is an action that instructs the script to pause and continuously monitor the browser's address bar until the current URL changes to a new address, or the system will automatically skip if the specified timeout period is reached.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Configuration parameters:

* Timeout (s): The maximum timeout period (in seconds) for the system to wait for the URL to change. If the URL remains the same after this period, the script will automatically proceed to the next action.

#### Practical example: Waiting for payment gateway processing or successful redirect authentication

This action is extremely useful when you set up third-party login flows (like clicking _Continue with Google_ on Pinterest), or when you press the "Pay/Buy Now" button on e-commerce sites:

* How to configure: Immediately after the action of clicking the redirect activation button, you insert the Wait URL Changed action with a Timeout of `30` (30 seconds).
* Operational logic: Instead of using a fixed command like Delay 5-10 seconds arbitrarily (which wastes time if the network is strong, or causes missed clicks if the network is weak), the system will actively monitor the address bar. As soon as Pinterest successfully redirects from the login page to the homepage (`pinterest.com/home`), the script will immediately continue executing the subsequent interaction steps without waiting the full 30 seconds.