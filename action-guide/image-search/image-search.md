# Image search

This is an advanced action that scans the entire screen, finds the location of the target image, and returns the exact coordinates (X, Y) of that image's center.

* Purpose: This is the "lifesaver" solution when a website or application has no HTML tags (such as games, legacy applications, or canvas graphs). You use it to determine coordinates, then instruct the tool to click precisely at that position.

🎥 Watch the tutorial video: [Here](https://youtu.be/xWu0g35YTGo).

> ⚠️ Special note about Scale ratio: The screen scale percentage and browser resolution at the time you capture the sample image must be exactly identical to the actual runtime of the workflow. If you set the screen display at 100% when capturing the sample image, but the system automatically opens at 80% or 125% scale when running the profile, the image scanning algorithm will not be able to recognize the target's pixel structure, resulting in failure to find the coordinates.

#### Practical example: Finding the position of a moving object on the screen to click the mouse

Suppose you are running a workflow on a rewards game website or an application with a button that changes position continuously in real time without staying fixed in one place. You need to find where that button is currently located in order to control the mouse to click on it:

* Configuration method: You capture a sample image of that button as the search target.
* Result: During execution, the system will quickly scan the screen. If the button is found, it will immediately calculate the pixel coordinates (e.g., `X = 550`, `Y = 420`) and save these two values into the output System Variables. Right after that, you can call the Mouse move or Mouse click action, passing these two `X` and `Y` coordinate variables directly into it so the mouse automatically moves to and clicks precisely on the target.

> 💡 _Detailed parameters such as sample image area configuration (Image), color deviation (Threshold), True color, and output variable (Output) will be analyzed in depth in the guide combining the trio of actions: Wait to image, Image exists, and Image search._