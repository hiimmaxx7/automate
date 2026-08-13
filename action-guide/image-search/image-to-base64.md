# Image to Base64

This action helps you encode an image file on your computer into a long text string (Base64 string).

* Purpose: Extremely useful when you need to send images via network commands such as `HTTP Request`. For example, you want to send an image to AI services to decode a captcha, or upload an image to a server without transmitting the file in the usual way.

🎥 Watch the tutorial video: [Here](https://youtu.be/xWu0g35YTGo).

#### Configuration parameters:

* Image Path: The absolute path to the image file on your computer that needs to be converted (e.g., `D:\GPM_Data\captcha.png`).
* Output variable: The name of the variable that will store the Base64 string after successful encoding.

#### Practical example: Converting a Captcha image to send to the automatic solving system via API

When you navigate to a website and encounter a Captcha in image form. You have used the Screenshot action to capture the area containing the Captcha code and saved it as an image file at `D:\GPM_Data\captcha.png`. Now, you want to send this image to a third-party API (like 2Captcha, Anti-Captcha) for them to solve it for you. Since their API requires the image data to be in the form of a Base64 text string, you will configure it as follows:

* Step 1: Call the Image to Base64 action.
  * Image Path: Fill in `D:\GPM_Data\captcha.png`.
  * Output variable: Name the variable `base64String`.
* Step 2: Call the HTTP Request action (Method POST) to send the data to the captcha solving Server. In the Data (Body) section, you pass the variable `$base64String` into the JSON structure according to their API documentation.

Result: The image file `captcha.png` will be converted into a long string of code in the format `data:image/png;base64,iVBORw0KGgoAAAANSU...` stored in the variable `$base64String`. The subsequent HTTP Request command will simply send this string neatly, helping the automated script easily bypass Captcha security layers.

<figure><img src="../../.gitbook/assets/is-02.png" alt=""><figcaption></figcaption></figure>