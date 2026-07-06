# Image exists

This action helps the tool to quickly "glance" once to see if the target image is displayed on the screen or not. The result returned immediately is True (if found) or False (if not found).

* Difference: Unlike `Wait to image` (waiting), this action does not stop to wait but only scans once at the time of execution.
* Effect: Very suitable to combine with conditional blocks (`If`, `Else if`), helping the script to make smart decisions immediately (for example: if an advertisement pop-up is detected, close it; if not, proceed to another step).

🎥 For more instructional videos: [Here](https://youtu.be/xWu0g35YTGo).

> ⚠️ Special note about Scale ratio: The percentage scale of the screen and the resolution of the browser when you take the sample image must be exactly the same as when the script runs in reality. If when taking the sample image you set the display to 100%, but when running the profile the system automatically opens at a scale of 80% or 125%, the image scanning algorithm will not be able to recognize the pixel structure of the target and will lead to incorrect results.

#### Real example: Check and close unexpected advertisement notifications (Popup)

When you browse a website, sometimes advertisement windows or survey notifications unexpectedly pop up, obscuring the screen. If there is an advertisement, the script needs to click the "X" button to close it before continuing; if not, the script will skip the closing step to avoid wasting time.

* Configuration method: You take a small sample image of the "X" button to close the advertisement for the system to recognize.
* Result: The system will scan the screen at that moment. If the "X" button appears, the output variable will receive the value `True`. You just need to combine it with the conditional block If (If variable = `True`) to call the Mouse click action at that position to clean up the screen before proceeding.

> 💡 _Detailed parameters such as sample image area configuration (Image), color deviation (Threshold), True color, and output variable (Output) will be analyzed in depth in the guide to combine the trio of actions: Wait to image, Image exists, and Image search._