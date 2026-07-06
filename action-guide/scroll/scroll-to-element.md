# Scroll to element

This action instructs the browser to intelligently calculate and scroll the page until the selected element appears within the viewport.

* Effect: Ensures that the target element is always in view before the tool performs a click or retrieves data. Accurate scrolling helps reduce the "element not in viewport" error commonly encountered on long web pages or those with lazy loading.

🎥 Watch the tutorial video: [Here](https://youtu.be/cCTEtuMtz-s).

#### Configuration parameters:

* XPath: The identifier path (XPath) of the target element that you want to bring into view (e.g., `//button[@id="btn-load-more"]` or `//div[@class="footer-section"]`).

#### Practical example: Bring a hidden button into view before clicking

Many modern websites implement anti-interaction technologies (bot trap security). If a button (e.g., "Load more" or "Confirm payment" button) is hidden deep within the interface and has not been scrolled to, issuing a `Mouse click` command directly on the XPath of that button may result in a system error, or the website may refuse to acknowledge the click command due to the absence of user scroll behavior.

* Configuration steps:
  1. Drag the Scroll to element action into the flow ➔ Enter the XPath of the target button.
  2. Then drag the Mouse click (or Wait element) action immediately after to perform the interaction.
* Result: The browser will automatically and smoothly scroll to the exact position containing that element, making it clearly visible on the interface, ensuring the next click command is executed successfully 100% like a real user.