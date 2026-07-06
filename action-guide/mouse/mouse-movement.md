# Mouse move

### Mouse move action

Mouse move is the action of controlling the mouse pointer to smoothly move from the current position to a designated point on the screen. This action helps accurately simulate the real user's mouse hovering behavior, allowing the script to bypass anti-bot security systems.

🎥 Watch the tutorial video: [Here](https://youtu.be/kQZWs1I76Zo).

#### Supported mouse move types:

The action supports flexible mouse movement through two main mechanisms:

* Move by XPath: You enter the XPath of the element on the webpage. The system will automatically determine the position of that HTML tag on the interface and move the mouse pointer to the center of the element.
* Move by coordinates: You directly input the pixel point along the x,y axis or pass a variable that combines coordinates (for example, the variable `$pos` in the format `900,800` obtained from the Image search action) to navigate the mouse pointer to the exact position on the screen.

#### 💡 Advanced tip: Drag and Drop an element

You can combine a series of consecutive actions to perform a press-and-hold, drag, and drop operation on any element on the interface (for example: dragging the slider to unlock captcha, dragging and dropping bento grid blocks, or moving game pieces) using the following formula:

1. Mouse press and hold: Press and hold the left mouse button at the starting element position (can be selected by XPath or coordinates).
2. Mouse move: Move the mouse pointer (along with the held data block) to the new destination position.
3. Mouse release: Release the left mouse button to complete dropping the element into the new position.