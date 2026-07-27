# Image exists

This action helps the tool "glance" quickly once to see whether the target image is currently displayed on the screen. The result returned immediately is True (if found) or False (if not found).

* Key difference: Unlike `Wait to image` (which waits), this action does not pause to wait but only scans once at the moment it runs.
* Purpose: Very suitable for combining with conditional blocks (`If`, `Else if`), helping the script make smart decisions immediately (for example: if an ad pop-up is seen, close it; if not, proceed to another step).

🎥 See more tutorial video: [Here](https://youtu.be/xWu0g35YTGo).

> ⚠️ Special note about Scale ratio: The screen scale percentage and browser resolution at the time you capture the sample image must be exactly identical to those during actual script operation. If you set the screen display to 100% when capturing the sample image, but when running the profile the system automatically opens at 80% or 125% scale, the image scanning algorithm will not be able to recognize the pixel structure of the target, leading to incorrect results.

#### Practical example: Checking and closing an unexpected advertisement notification (Popup)

While browsing a website, sometimes unexpected advertisement windows or survey notifications will pop up and cover the screen. If there is an ad, the script needs to click the "X" button to close it before continuing; if not, the script will skip the close step to avoid wasting time.

* Configuration method: You capture a small sample image of the "X" button used to close the ad so the system can recognize it.
* Result: The system will scan the screen at that moment. If the "X" button appears, the output variable will receive the value `True`. You just need to combine it with an If conditional block (If the variable = `True`) to call the Mouse click action at that position to clean up the screen before proceeding.

> 💡 _Detailed parameters such as sample image area configuration (Image), color deviation (Threshold), True color, and output variable (Output) will be analyzed in depth in the guide combining the trio of actions: Wait to image, Image exists, and Image search._