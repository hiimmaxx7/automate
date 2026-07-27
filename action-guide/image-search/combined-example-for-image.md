# Combined Example for Image

To create an intelligent automation script that smoothly handles real-world situations on the user interface (UI) of a website or software, combining these 3 actions in a tight logical flow is the optimal solution.

Below is a detailed explanation of the general technical parameters and the steps for setting up the flow for a real-world scenario.

🎥 Watch more tutorial video: [Here](https://youtu.be/xWu0g35YTGo).

#### Core configuration parameters to master:

* Image (Sample image): The target image area you crop from the screen to serve as matching data for the system.
* Timeout (Waiting time): The maximum time limit for the system to search for the image (only applicable to _Wait to image_).
* Threshold (Color deviation / Tolerance): The exact ratio when matching pixels (usually set from `0.7` to `0.95`). The closer the number is to `1`, the more the actual image must absolutely resemble the sample image. You can increase or decrease this value and test until it fits.
* True color: An option that requires the system to match exactly the original color range. If turned off, the system will convert the image to black and white (Grayscale) to recognize shapes, helping to increase scanning speed but ignoring the color factor.
* Output variable: A variable that stores a logical value (`True`/`False`) or stores point coordinates (`X`, `Y`) depending on the selected action.

### Real-world problem: Automatically click "Continue with Google" on Pinterest

<figure><img src="../../.gitbook/assets/image (173).png" alt=""><figcaption></figcaption></figure>

**Step 1: Synchronize the page loading flow with the Wait to image action**

After you click the _Sign up_ button on the Pinterest homepage, the Registration Form needs a short period of time to load data onto the screen.

* Configuration method: You point the sample image area (Image) at the title text or a fixed element (the Continue with Google button) that will definitely appear on the Registration Form. Set the Timeout to `10` (10 seconds) and set an appropriate Threshold level (for example: `0.7`).
* Operating logic: The script will pause to observe the screen. As soon as the Registration Form appears, the system immediately triggers the next step without wasting time waiting.

<figure><img src="../../.gitbook/assets/image (168).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 2: Check for the existence of the button with the Image exists action**

Since Pinterest may display an Email input form overlapping or show another navigation notification depending on each Profile, we need to check whether the Google button is actually on the screen.

* Configuration method: Point the sample image at Google's four-colored "G" icon or the "Continue with Google" text. Configure the output variable to store the result.
* Operating logic: The system quickly scans the screen at that moment exactly once. If the Google button appears, the output variable will receive the logical value `True` (otherwise `False`).

<figure><img src="../../.gitbook/assets/image (169).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 3: Filter processing conditions with the If block**

For the script to run intelligently and avoid missed-click errors, we wrap the subsequent interaction steps inside a conditional block.

* Configuration method: Add an If block and set the condition: Check if the result variable from Step 2 returns the value `True` (meaning the Google button is ready on the screen).

<figure><img src="../../.gitbook/assets/image (170).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 4: Find the exact position inside the If block with the Image search action**

Located inside the If block, when the condition is satisfied, the system starts tracing to get the coordinates of the button (since the position of the Registration Form can shift flexibly depending on each Profile's screen resolution).

* Configuration method: Use the sample image of the "Continue with Google" button or the "G" logo. Set True color to `Yes` _(Must be enabled to accurately recognize Google's 4 characteristic original colors, avoiding confusion with other text characters)_. Set the output variable that stores the coordinates as `pos`.
* Operating logic: The system scans and calculates exactly the center position of the Google button on the screen (Example: `$pos = 720,540`).

<figure><img src="../../.gitbook/assets/image (171).png" alt=""><figcaption></figcaption></figure>

**🔹 Step 5: Perform the mouse click with the Mouse click action**

This is the final step inside the If block to complete the processing flow.

* Configuration method: Select the Mouse click action, and in the coordinate setting field, pass directly the variable found in the previous step into the corresponding field: `$pos`.
* Operating logic: The mouse on the system will automatically move to the exact pixel position of the scanned Google button and perform the click command to continue the login flow smoothly through the Iframe layer.

<figure><img src="../../.gitbook/assets/image (172).png" alt=""><figcaption></figcaption></figure>