# File upload

File upload is the action of instructing the browser to automatically push one or more files (images, videos, Excel documents, txt...) from your computer to the server of the target website.

🎥 Watch more tutorial videos: [Here](https://youtu.be/cCTEtuMtz-s).

#### Configuration parameters:

*   XPath: The identifier path (XPath) leading directly to the file upload field of the website.

    > ⚠️ Important note: When performing automation via code, you should not click directly on buttons labeled "Choose Image" or "Upload Image" (as this will open the file selection window of the Windows/macOS operating system, freezing the script). Instead, you must find the correct hidden tag with a structure like: `//input[@type='file']` on the website to fill in this XPath field.
* File path: The absolute path leading to the file stored on your computer (Example: `C:\Users\Admin\Desktop\avatar.png`). You can pass a variable containing a dynamic path here (Example: `$filePath`).

#### Practical example: Uploading a product image to the system

When you build a script to automatically post product listings (Listing products) to e-commerce platforms or social networks, the standard processing flow will be as follows:

* Configuration:
  * Element XPath: `//input[@type='file' and @name='product_image']` (Scan the website's source code to find this hidden input tag).
  * File path: `D:\DataPOD\Design01.png`
* Operating logic: GPM Automate will pass the file path `D:\DataPOD\Design01.png` directly into the website's `input` element. The website's system will immediately recognize it and begin the process of uploading the image smoothly without ever displaying the operating system's Open File dialog box.

<figure><img src="../../.gitbook/assets/image (199).png" alt=""><figcaption></figcaption></figure>