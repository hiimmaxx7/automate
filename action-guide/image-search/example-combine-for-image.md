# Example Combination for Image

To create an intelligent automation script that smoothly handles real-world scenarios on the website or software interface, combining these three actions in a tight logical flow is the optimal solution.

Below is a detailed explanation of the general technical parameters and the steps to set up the workflow for a practical scenario.

🎥 Watch the tutorial video: [Here](https://youtu.be/xWu0g35YTGo).

#### Core configuration parameters to master:

* Image: The target image area you cut from the screen to serve as matching data for the system.
* Timeout: The maximum time limit for the system to search for the image (only applies to _Wait to image_).
* Threshold: The accuracy ratio when matching pixels (usually set from `0.7` to `0.95`). The closer the number is to `1`, the more the actual image must resemble the sample image absolutely. You can adjust this value and test until it fits.
* True color: An option that requires the system to match the original color range accurately. If turned off, the system will convert the image to black and white (Grayscale) for shape recognition, speeding up the scanning process but ignoring color factors.
* Output variable: A variable that stores a logical value (`True`/`False`) or the coordinates of the point (`X`, `Y`) depending on the selected action.

### Practical Problem: Automatically Click "Continue with Google" on Pinterest

<figure><img src="../../.gitbook/assets/image (173).png" alt=""><figcaption></figcaption></figure>

**Step 1: Synchronize the page load flow with the action Wait to image**

After you click the _Sign up_ button on the Pinterest homepage, the registration form needs a short period to load data onto the screen.

* Configuration method: Point the sample image (Image) at the title of the text line or a fixed component (the Continue with Google button) that will definitely appear on the registration form. Set the Timeout to `10` (10 seconds) and adjust the Threshold accordingly (e.g., `0.7`).
* Operational logic: The script will pause to observe the screen. As soon as the registration form appears, the system immediately activates the next step without wasting time waiting.

<figure><img src="../../.gitbook/assets/image (168).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 2: Check the existence of the button with the action Image exists**

Since Pinterest may display the Email input form overlay or show a different navigation message depending on each Profile, we need to check if the Google button is actually on the screen.

* Configuration method: Point the sample image at the four-color "G" icon of Google or the text line Continue with Google. Configure the output variable to store the result.
* Operational logic: The system scans the screen at that moment exactly once. If the Google button appears, the output variable will receive a logical value of `True` (otherwise `False`).

<figure><img src="../../.gitbook/assets/image (169).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 3: Filter processing conditions with the If block**

To ensure the script runs intelligently and does not miss clicks, we wrap the interaction steps in a conditional block.

* Configuration method: Add an If block and set the condition: Check if the result variable from Step 2 returns a value of `True` (meaning the Google button is ready on the screen).

<figure><img src="../../.gitbook/assets/image (170).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 4: Find the exact position in the If block with the action Image search**

Inside the If block, when the condition is met, the system begins to trace to get the coordinates of the button (since the position of the registration form may shift flexibly depending on the screen resolution of each Profile).

* Configuration method: Use the sample image of the "Continue with Google" button or the "G" logo. Set True color to `Yes` _(Must be enabled to accurately recognize the four characteristic colors of Google, avoiding confusion with other character letters)_. Set the output variable to store the coordinates as `pos`.
* Operational logic: The system scans and calculates the exact position of the Google button on the screen (e.g., `$pos = 720,540`).

<figure><img src="../../.gitbook/assets/image (171).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 5: Perform a mouse click with the action Mouse click**

This is the final step within the If block to complete the processing flow.

* Configuration method: Select the Mouse click action, and in the coordinate setup box, directly pass the variable found in the previous step into the corresponding box: `$pos`.
* Operational logic: The mouse on the system will automatically move to the exact pixel position of the Google button that has been scanned and execute the click command to continue the login flow smoothly through the Iframe layer.

<figure><img src="../../.gitbook/assets/image (172).png" alt=""><figcaption></figcaption></figure>