# Wait to image

This action helps the tool pause and continuously "watch" the screen until the target image appears (or the timeout expires).

* Effect: It is essential for synchronization, ensuring that the website or application has finished loading data before the tool continues, preventing the script from being rushed, running out of order, or clicking incorrectly when the web has not loaded in time.

🎥 See more instructional video: [Here](https://youtu.be/xWu0g35YTGo).

> ⚠️ Special note about Scale ratio: The percentage scale of the screen and the resolution of the browser when you capture the sample image must be exactly the same as when the script runs in practice. If you set the display to 100% when capturing the sample image, but when running the profile the system automatically opens at a scale of 80% or 125%, the image scanning algorithm will not be able to recognize the pixel structure of the target, leading to incorrect results.

#### Real example: Waiting for the login button to fully display

When you navigate the browser to a website, due to changing network speeds, the "Login" button may appear immediately or take a few seconds to load. Setting a fixed wait time (Delay) can waste time or still result in errors if the network is too slow. Using Wait to image will make the script more flexible:

* Configuration method: You take a small image of the "Login" button as a sample image, set the maximum wait time, and the accuracy for image scanning.
* Result: The script will actively wait, and as soon as the "Login" button appears on the screen, the system will immediately recognize it and move on to the next action without wasting time on unnecessary waiting.

> 💡 _Detailed parameters such as sample image area configuration (Image), wait time (Timeout), color deviation (Threshold), True color, and output variable (Output) will be analyzed in depth in the guide combining the three actions: Wait to image, Image exists, and Image search._