# Image search

This is an advanced action that scans the entire screen, finds the location of the target image, and returns the exact coordinates (X, Y) of the center of that image.

* Purpose: It serves as a "lifesaver" when the website or application does not have HTML tags (such as games, old applications, or canvas graphics). You use it to determine the coordinates, from which you can instruct the tool to click the mouse at that exact position accurately.

🎥 Watch the tutorial video: [Here](https://youtu.be/xWu0g35YTGo).

> ⚠️ Special note about Scale ratio: The percentage scale of the screen and the resolution of the browser at the time you take the sample image must be exactly the same as when the script runs in practice. If at the time of taking the sample image you set the display to 100%, but when running the profile the system automatically opens at a scale of 80% or 125%, the image scanning algorithm will not be able to recognize the pixel structure of the target and will result in not finding the coordinates.

#### Real-world example: Finding the position of a moving object on the screen to click the mouse

Suppose you are running a script on a reward game website or an application with a button that changes position continuously in real-time without being fixed in one place. You need to find out where that button is located to control the mouse to click on it:

* Configuration method: You take a sample image of that button as the target for searching.
* Result: When executed, the system will quickly scan the screen. If it finds the button, it will immediately calculate the pixel coordinates (For example: `X = 550`, `Y = 420`) and store these two values in the output system variable. Immediately after, you can call the Mouse move or Mouse click action directly passing these two coordinate variables `X` and `Y` to have the mouse automatically find and click precisely on the target.

> 💡 _Detailed parameters such as configuring the sample image area (Image), color deviation (Threshold), True color, and output variable (Output) will be analyzed in depth in the guide combining the three actions: Wait to image, Image exists, and Image search._