# Mouse move

### Mouse cursor movement action (Mouse move)

Mouse move is an action that controls the mouse cursor to move smoothly from the current position to a specified point on the screen. This action helps accurately simulate the real user's mouse-hovering behavior, helping the script bypass bot-detection security systems (Anti-bot).

🎥 Watch more tutorial video: [Here](https://youtu.be/kQZWs1I76Zo).

#### Supported mouse movement types:

The action supports flexible mouse movement according to 2 main mechanisms:

* Move by XPath: You fill in the identifier path (XPath) of the element on the web page. The system will automatically determine the position of that HTML tag on the interface and bring the mouse cursor to the center of the element.
* Move by coordinates: You directly enter pixel coordinates along the x,y axis or pass a combined coordinate variable (For example, the variable `$pos` in the format `900,800` obtained from the Image search action) to direct the mouse cursor to jump to the exact position on the screen.

#### 💡 Advanced tip: Drag and Drop an element

You can combine a sequence of consecutive actions to perform a press-and-hold, drag and drop operation on any element on the interface (For example: dragging a slider to unlock a captcha, drag and drop bento grid blocks, or moving chess pieces) using the following formula:

1. Mouse press and hold: Press and hold the left mouse button at the starting element's position (can be selected by XPath or coordinates).
2. Mouse move: Move the mouse cursor (along with the data block being held) to the new destination position.
3. Mouse release: Release the left mouse button to complete dropping the element into the new position.