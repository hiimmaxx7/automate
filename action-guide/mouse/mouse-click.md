---
description: Click mouse on an element.
---

# Mouse click

Mouse click is the action of controlling the mouse cursor to perform a click command at a specific location on the screen. To optimize for different interface interaction scenarios, GPM Automate provides you with 3 flexible setup options:

🎥 Watch the tutorial video: [Here](https://youtu.be/kQZWs1I76Zo).

#### 3 types of mouse click options compatible with all interfaces

**1. Click based on XPath (Default for Web interfaces)**

* How it works: You enter the XPath of the element on the webpage (e.g., `//button[@id="submit"]`). The system will automatically search for this HTML tag, calculate its position in the browser, and move the mouse to click accurately.
* Application: Used for typical webpage structures, fixed buttons with clear source code tags.

<figure><img src="../../.gitbook/assets/image (190).png" alt=""><figcaption></figcaption></figure>

**2. Click based on the current position of the mouse cursor**

* How it works: The system does not move the mouse anywhere but will perform the click command right at the point where the mouse cursor is currently stationary from the previous action (such as after the Mouse move or Random scroll commands).
* Application: Used when you have a complex series of mouse movement actions beforehand and just need to issue a click command to activate.

**3. Click based on coordinates (Perfectly combined with Image search)**

* How it works: You directly enter the pixel position along the horizontal `X` and vertical `Y` axes (Pixel) on the screen for the mouse to jump and click.
* Optimal combination: This click type is often combined with the Image search action. When _Image search_ finds the target image, it will return a combined coordinate variable (for example, the default variable name is `pos`) as a text string containing both the X and Y axes separated by a comma: `900,800`.
* Configuration method: In the coordinate input box of the _Mouse click_ action, you just need to pass the combined variable `$pos` directly. GPM Automate's intelligent system will automatically parse this syntax `900,800` to move the mouse to coordinates x=900, y=800 to click directly on the target.
* Application: Used to click on elements within a Canvas (game), buttons hidden deep within secure Iframes, or interact with components that do not have a fixed XPath tag.

<figure><img src="../../.gitbook/assets/image (191).png" alt=""><figcaption></figcaption></figure>