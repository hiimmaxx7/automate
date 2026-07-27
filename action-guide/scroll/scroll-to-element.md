# Scroll to element

This action instructs the browser to intelligently calculate and scroll the page until the element you select appears directly within the screen's viewport.

* Purpose: Ensures the target element always stays within the viewing area before the tool performs a click or retrieves data. Precise scrolling helps reduce the "element not in viewport" error commonly encountered on long web pages or pages with lazy loading.

🎥 Watch more tutorial videos: [Here](https://youtu.be/cCTEtuMtz-s).

#### Configuration Parameters:

* XPath: The identifier path (XPath) of the target element you want to bring into view (Example: `//button[@id="btn-load-more"]` or `//div[@class="footer-section"]`).

#### Practical Example: Bringing a hidden button into view before clicking

Many modern websites apply hidden interaction-blocking technology (bot-trap security). If a button (for example: a "See more" button or "Confirm payment" button) is hidden deep below the interface and hasn't been scrolled to yet, issuing a `Mouse click` command directly on that button's XPath may result in a system error, or the website may refuse to register the click command because there was no user scrolling behavior beforehand.

* How to configure:
  1. Drag the Scroll to element action into the flow ➔ Enter the XPath of the target button.
  2. Drag the Mouse click action (or Wait element) right after it to perform the interaction.
* Result: The browser will automatically and smoothly scroll the screen down to the exact position containing that element, displaying it clearly on the interface, helping the subsequent click command succeed 100% just like a real user.