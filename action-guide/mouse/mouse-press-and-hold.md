# Mouse press and hold

Mouse press and hold is the action that commands the mouse cursor to press down the left mouse button and maintain that pressed state (not released). This action typically does not stand alone but serves as a starting step for complex operations simulating real user behavior.

🎥 See more tutorial video: [Here](https://youtu.be/kQZWs1I76Zo).

#### Configuration of the press and hold position:

Similar to other mouse interaction actions, you can specify the position to press and hold the mouse using two main mechanisms:

* By XPath: Move to the center of the element specified by the XPath on the webpage and then press and hold.
* By coordinates: Move to a fixed pixel point x,y or pass a variable containing coordinates (For example, the variable `$pos` in the form of `900,800` obtained from the action Image search) to perform the press and hold.

#### Practical applications:

This action is a necessary link when you want to perform a series of Drag and Drop operations:

* Slider Captcha decoding: Press and hold the slider (`Mouse press and hold`) ➔ Move the mouse to a coordinate X to match the image (`Mouse move`) ➔ Release the mouse to complete the verification (`Mouse release`).
* Drawing or selecting a region: Press and hold at the starting point, move the mouse to sweep a data area or draw a line on Canvas/Game applications, then release the mouse.