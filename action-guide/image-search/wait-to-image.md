# Wait to image

This action helps the tool pause and continuously "watch" the screen until the target image appears (or the wait time runs out).

* Purpose: Essential for synchronization, ensuring the web page or application has finished loading data before the tool continues, so the script doesn't rush, skip steps, or click by mistake when the web hasn't loaded yet.

🎥 Watch more tutorial video: [Here](https://youtu.be/xWu0g35YTGo).

> ⚠️ Special note on Scale ratio (Zoom): The screen scale percentage and browser resolution at the time you capture the sample image must be exactly the same as when the script actually runs. If you set the screen display to 100% when capturing the sample image, but the system automatically opens at 80% or 125% scale when running the profile, the image scanning algorithm will not be able to recognize the target's pixel structure, leading to incorrect results.

#### Practical example: Waiting for the login button to fully display

When you navigate the browser to a website, due to varying network speeds, the "Login" button may appear immediately or take a few seconds to load. Setting a fixed wait time (Delay) can waste time or still cause errors if the network is too slow. Using Wait to image will help the script handle this more flexibly:

* How to configure: Crop a small image of the "Login" button as the sample image, set the maximum wait time and accuracy for image scanning.
* Result: The script will actively wait, and as soon as the "Login" button appears on the screen, the system will immediately recognize it and move on to the next action without wasting any excess waiting time.

> 💡 _Detailed parameters such as sample image area configuration (Image), wait time (Timeout), color deviation (Threshold), True color, and output variable (Output) will be analyzed in depth in the guide combining the three actions: Wait to image, Image exists, and Image search._