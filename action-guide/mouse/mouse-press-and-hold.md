# Mouse press and hold

Mouse press and hold is an action that commands the mouse cursor to press the left mouse button down and maintain that held state (without releasing it). This action usually does not stand alone but serves as the starting step for complex operations simulating real user behavior.

🎥 Watch more tutorial video: [Here](https://youtu.be/kQZWs1I76Zo).

#### Configuring the press-and-hold position:

Similar to other mouse interaction actions, you can specify the position to press and hold the mouse using 2 main mechanisms:

* By XPath: Move to the center of the element specified by the XPath on the web page, then press and hold.
* By coordinates: Move to a fixed pixel point x,y or pass a variable containing combined coordinates (For example, the variable `$pos` in the format `900,800` obtained from the Image search action) to perform the press and hold.

#### Practical application:

This action is a mandatory link when you want to perform a Drag and Drop sequence:

* Solving Slider Captcha: Press and hold the slider (`Mouse press and hold`) ➔ Move the mouse to an X coordinate range to match the image (`Mouse move`) ➔ Release the mouse to complete verification (`Mouse release`).
* Drawing or area selection actions: Press and hold at the starting point, move the mouse to sweep a data area or draw a straight line on Canvas/Game applications, then release the mouse.