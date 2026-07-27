# Mouse try to click

Mouse try to click is an advanced action in the mouse command group, allowing the script to perform a mouse click repeatedly on a target until a desired condition is satisfied, at which point it stops.

This action is the perfect solution for handling "stubborn" buttons on websites (the type of button that sometimes lags and needs to be clicked several times before it registers), or for hunting (spamming) reward buttons or gift box buttons that appear for a short period of time.

🎥 Watch more tutorial videos: [Here](https://youtu.be/kQZWs1I76Zo).

#### Core configuration parameters:

* Click type: Similar to the Mouse click action, you also have 3 options to specify the click position:
  1. _Click based on XPath_: The system finds the HTML tag of the element to click on.
  2. _Click based on the current cursor position_: Clicks continuously at the point where the mouse cursor is standing still.
  3. _Click based on coordinates_: Clicks on a fixed pixel or passes a combined coordinate variable in the format `900,800` (combined from the result of the _Image search_ action).
* Number of tries: The maximum number of click attempts the script is allowed to perform (For example, entering `10`, the system will click a maximum of 10 times and then automatically stop the flow to move on to the next action, avoiding an infinite hang of the script).
* Delay each clicks (s): The time interval between 2 consecutive clicks, measured in seconds (For example, enter `0.5` or `1` second so that the mouse doesn't click too fast, causing the system to mistake it for spam/DDoS).
* Stop condition: The condition that causes the system to order an immediate stop to clicking. The mouse will click continuously until this condition is satisfied OR until the number of clicks specified in the _Number of tries_ field has been reached.

#### Practical example: Click continuously on the "Get OTP Code" button until the code entry field appears

When you register an account on websites with slow-loading systems, clicking the "Send Code" button may cause the system to become congested and not respond immediately. You need the mouse to click continuously until an OTP code entry field appears on the screen, at which point it should stop.

* How to configure:
  * Click type: Select _Click based on XPath_ ➔ Enter the XPath of the send code button: `//button[@id="send-code"]`.
  * Number of tries: Enter `5` (try a maximum of 5 times).
  * Delay each clicks: Enter `2` (each click is 2 seconds apart to wait for the webpage to process).
  * Stop condition: Use the function to check for element appearance: `hasElement(//input[@id="otp-input"])`.

Operating logic: The system moves the mouse to the send code button and clicks the 1st time. After 2 seconds, the system checks whether the OTP entry field (`//input[@id="otp-input"]`) has appeared yet. If it hasn't, the system continues to click the 2nd time, 3rd time... As soon as it reaches the 3rd click, the system responds and the OTP entry field appears on the screen (The `hasElement` function returns a true value), and the script will immediately stop this click action and move on to the next step without needing to complete the remaining 2 clicks.

> 💡 Extended tip: You can also use the negation condition `!hasElement(XPATH)` to instruct the mouse to click continuously until an advertising banner or a page loading spinner icon disappears from the screen.

<figure><img src="../../.gitbook/assets/image (192).png" alt=""><figcaption></figcaption></figure>