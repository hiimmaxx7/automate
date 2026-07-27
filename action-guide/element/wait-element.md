# Wait element

This action helps the tool pause and "watch" until an element on the web page (such as a button, an input field) appears before continuing. If the element does not appear within the timeout period, the tool will automatically skip it.

* Purpose: Helps the tool run in "sync" with the web page's loading speed. Instead of using a fixed wait command (Delay) which wastes time, this action helps the script run as fast as possible while avoiding errors caused by elements not being found due to slow page loading.

#### Configuration parameters:

* Element XPath: The identifier path (XPath) of the element you need to wait for on the web page interface (Example: `//button[@type="submit"]`).
* Timeout (s): The maximum time limit (in seconds) for the system to wait for the element to appear. If this time is exceeded and the element still hasn't loaded, the script will automatically move on to the next action in the flow.

#### Practical example: Waiting for the "Post" button to be ready after uploading an image

When you create an automation script to Post a post on social media. After you select an image file and click upload, the website system needs some time to process and render that image on the server. The "Post" button is usually grayed out (Disabled) or does not appear until the image has fully finished uploading.

* How to configure: Right after the upload image action, insert the Wait element action.
  * Element XPath: Enter the XPath of the post button, for example: `//span[text()="Post"]/ancestor::button`.
  * Timeout: Set `20` (20 seconds).
* Operating logic: The system will continuously check the web page. If the network is strong and the image finishes uploading within 2 seconds, the button appears, and the script will immediately run the click command to post right away (saving 18 seconds of unnecessary waiting). If the network is weak, the system will patiently wait up to a maximum of 20 seconds to avoid flow errors.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>