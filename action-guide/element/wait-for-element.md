# Wait element

This action helps the tool pause and "watch" until an element on the webpage (such as a button, input field) appears before proceeding. If the waiting time exceeds the limit without seeing the element, the tool will skip it.

* Effect: Helps the tool run "in sync" with the loading speed of the web. Instead of using a fixed wait command (Delay) that wastes time, this command allows the script to run as quickly as possible and avoids errors of not finding elements due to slow web loading.

#### Configuration parameters:

* Element XPath: The XPath identifier path of the element you need to wait for on the webpage interface (e.g., `//button[@type="submit"]`).
* Timeout (s): The maximum limit time (in seconds) for the system to wait for the element to appear. If this time is exceeded and the element has not loaded, the script will automatically move on to the next action in the flow.

#### Real-world example: Wait for the "Post" button to be ready after uploading an image

When you create a script to automatically post (Post) on social media. After you select an image file and click upload, the website system needs some time to process and render that image on the server. The "Post" button is often grayed out (Disabled) or not yet visible until the image is fully uploaded.

* Configuration method: Immediately after the image upload action, you insert the Wait element action.
  * Element XPath: Enter the XPath of the post button, for example: `//span[text()="Đăng bài"]/ancestor::button`.
  * Timeout: Set `20` (20 seconds).
* Operational logic: The system will continuously check the webpage. If the network is strong and the image uploads in 2 seconds, the button appears, and the script will immediately execute the click command to post (saving 18 seconds of unnecessary waiting). If the network is weak, the system will patiently wait up to 20 seconds to avoid missing the flow.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>