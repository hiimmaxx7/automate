# Switch to frame

In web page design structure, Iframe (Inline Frame) is understood as an independent browser window embedded inside another web page.

When an element (such as a button, input field) is located inside an `<iframe>` tag, the GPM Automate system will not be able to find its XPath if you are still in the main page space. You must use the Switch to frame action to "get inside" that Iframe in order to interact with it. After finishing the interaction, you must use Switch to default to "exit" back to the main interface.

🎥 Watch more tutorial video: [Here](https://youtu.be/oroexOGjZfw).

#### 1. Switch to frame action

* Purpose: Transfers control of the script into a specified Iframe window.
* Configuration parameters:
  * XPath: The XPath path leading directly to the target `<iframe>` tag on the web page.

#### 2. Switch to default action

* Purpose: Moves control out of the current Iframe to return to the original main page structure. This action has no configuration parameters.

#### Practical example: Click the "Continue with Google" button on Pinterest (Attached images)

Based on the image below, the Continue with Google button is actually not located directly on the Pinterest page, but is contained within a secure Iframe window embedded by Google (the red arrow at the top right of the source code points directly to the `<iframe src="https://accounts.google.com...">` tag).

If you only use the _Mouse click_ command directly on the _Continue with Google_ button (`//span[text()="Continue with Google"]`), the script will immediately report a missing element error. The standard handling process must be configured as follows:

* Step 1 (Get into the Iframe): Drag the Switch to frame action into the script.
  * _XPath_: Enter the XPath of the iframe tag as you found it: `//iframe[contains(@src,'accounts.google.com')]`
* Step 2 (Click the button): Drag the Mouse click action into the flow.
  * _Click type_: Click based on XPath.
  * _XPath_: Enter the XPath of the button located inside the iframe: `//span[contains(text(),"Continue with Google")]`
* Step 3 (Exit): Drag the Switch to default action right after to bring the browser back to the main space of the Pinterest page, ready for the outside registration Form filling steps (Email, Password) if needed.

<figure><img src="../../.gitbook/assets/image (203).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (204).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (205).png" alt=""><figcaption></figcaption></figure>

To understand Iframe (Frame) in web programming in the simplest and most imaginable way, think of a wall and picture frames hung on it.

#### 1. Metaphorical image of the Picture Frame

* The main wall: This is the entire web page you are visiting (for example, the `pinterest.com` page). This wall has its own paint color, its own doors, its own furniture around it.
* The picture frame hung on the wall (Iframe): This is a frame that is cut out or hung on that wall. What's special is that inside this picture frame is not a static picture, but a piece of land belonging entirely to someone else (for example, a corner office of `accounts.google.com`).

#### 2. The nature of how Iframe works on a website

When a website embeds an Iframe, they are opening a "small window" to allow another web page to display its content right on their own page:

* Independent content: The owner of the wall (Pinterest) only rents out the spot to hang the picture frame, but has no right to interfere with what's inside that frame or how it operates. Everything inside the frame is fully managed and secured by the owner of the frame (Google).
* The viewer (Automation script): When you stand outside the room, you can see both the wall and the picture frame. But if you want to take a pen and draw on the picture, you cannot stand far away and scribble on the wall randomly. You must step your foot right into the scope of the picture frame (`Switch to frame`), and only then can you touch the details inside it (such as the _Continue with Google_ button).

#### 3. Why must you "Get in" and "Get out" when doing Automation?

Due to the security nature of browsers, the world outside the wall and the world inside the picture frame are separated by an invisible sheet of glass:

* If you don't "Get in" (`Switch to frame`): The automation tool will stand outside the wall and confusedly ask: _"Huh, I clearly see the Google Login button on the screen, but why can't I find any XPath code at all?"_ -> Because the robot is scanning the wall's code, and hasn't been able to see through the glass of the picture frame yet.
* If you don't "Get out" (`Switch to default`): After you finish clicking the button inside the picture frame, you want to go out and click the "Sign up" button at the bottom of the Pinterest page. If you don't exit, the robot will still keep looking for that button... inside Google's piece of land, resulting in a missing command error.

In short, Iframe is like a miniature web page nested inside a larger web page, creating a separate spatial boundary that an automation script must clearly enter/exit in order to work with.