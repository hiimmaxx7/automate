# Mouse try to click

Mouse try to click is an advanced action of the mouse command group, allowing the script to perform repeated clicks on a target until a desired condition is met before stopping.

This action is the perfect solution for dealing with "stubborn" buttons on websites (types of buttons that may lag and require several clicks to register), or for spamming reward buttons or gift box buttons that appear for a short time.

🎥 Watch the tutorial video: [Here](https://youtu.be/kQZWs1I76Zo).

#### Core configuration parameters:

* Click type: Similar to the Mouse click action, you have 3 types of options to specify the click position:
  1. _Click based on XPath_: The system finds the HTML tag of the element to click on.
  2. _Click based on the current mouse pointer position_: Continuously clicks at the point where the mouse pointer is stationary.
  3. _Click based on coordinates_: Click on a fixed pixel point or pass a combined coordinate variable in the format `900,800` (combined from the result of the _Image search_ action).
* Number of tries: The maximum number of click attempts that the script is allowed to perform (For example, entering `10`, the system will click a maximum of 10 times and then automatically stop the flow to move on to the next action, avoiding the script hanging indefinitely).
* Delay each clicks (s): The time interval between two consecutive clicks, measured in seconds (For example, entering `0.5` or `1` second to prevent the mouse from clicking too quickly, causing the system to misinterpret it as spam/DDoS).
* Stop condition: The condition for the system to issue an immediate stop click command. The mouse will continuously click until this condition is met OR until the specified number of times in the _Number of tries_ section has been clicked.

#### Practical example: Continuously click the "Receive OTP code" button until the code input box appears

When you register an account on websites with slow loading systems, when clicking the "Send Code" button, the system may become congested and not respond immediately. You need the mouse to click continuously until an OTP input box appears on the screen before stopping.

* Configuration:
  * Click type: Select _Click based on XPath_ ➔ Enter the XPath of the send code button: `//button[@id="send-code"]`.
  * Number of tries: Enter `5` (try a maximum of 5 times).
  * Delay each clicks: Enter `2` (each click is spaced 2 seconds apart to wait for the website to process).
  * Stop condition: Use the function to check if the element appears: `hasElement(//input[@id="otp-input"])`.

Operational logic: The system moves the mouse to the send code button and clicks for the first time. After 2 seconds, the system checks if the OTP input box (`//input[@id="otp-input"]`) has appeared. If not, the system continues to click for the second, third time... As soon as it clicks for the third time, the system responds and the OTP input box appears on the screen (The `hasElement` function returns true), the script will immediately stop this click action and move on to the next step without needing to click the remaining 2 times.

> 💡 Expansion tip: You can also use the negation condition `!hasElement(XPATH)` to command the mouse to click continuously until an advertisement banner or a loading circle icon disappears from the screen.

<figure><img src="../../.gitbook/assets/mo-02.png" alt=""><figcaption></figcaption></figure>