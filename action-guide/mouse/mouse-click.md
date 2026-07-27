---
description: Click on an element.
---

# Mouse click

Mouse click is the action that controls the mouse cursor to perform a click command at a specific position on the screen. To optimize for different interface interaction scenarios, GPM Automate provides you with 3 flexible configuration options:

🎥 Watch more tutorial video: [Here](https://youtu.be/kQZWs1I76Zo).

#### 3 mouse click selection types compatible with all interfaces

**1. Click based on XPath (Default for Web interface)**

* How it works: You enter the identifier path (XPath) of the element on the web page (for example: `//button[@id="submit"]`). The system will automatically search for this HTML tag, calculate its position in the browser, and move the mouse to click precisely.
* Application: Used for regular web page structures, fixed buttons with clear source code tags.

<figure><img src="../../.gitbook/assets/image (190).png" alt=""><figcaption></figcaption></figure>

**2. Click based on the current position of the mouse cursor**

* How it works: The system does not move the mouse anywhere, but performs the click command right at the exact point where the mouse cursor is currently standing still from the previous action (such as after a Mouse move or Random scroll command).
* Application: Used when you already have a complex sequence of mouse movement actions beforehand and just need to issue a click command to trigger it.

**3. Click based on coordinates (Perfectly combined with Image search)**

* How it works: You directly enter the pixel position according to the horizontal `X` and vertical `Y` axes (Pixel) on the screen for the mouse to jump to and click.
* Optimal combination: This type of click is often combined with the Image search action. When _Image search_ finds the target image, it will return a combined coordinate variable (for example, the default variable name is `pos`) as a text string containing both the X and Y axes separated by a comma: `900,800`.
* Configuration method: In the coordinate input field of the _Mouse click_ action, you just need to directly pass the combined variable `$pos` into it. The smart system of GPM Automate will automatically parse this `900,800` syntax to move the mouse to coordinates x=900, y=800 to click directly on the target.
* Application: Used to click on elements located within a Canvas (game), buttons hidden deep inside secure Iframes, or interact with components that do not have a fixed XPath tag.

<figure><img src="../../.gitbook/assets/image (191).png" alt=""><figcaption></figcaption></figure>