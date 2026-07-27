# Image to Base64

This action helps you encode an image file on your computer into a long text string (Base64 string).

* Purpose: Extremely useful when you need to send images through network commands such as `HTTP Request`. For example: you want to send an image to AI services to have a captcha decoded, or upload an image to a server without transferring the file in the conventional way.

🎥 Watch more tutorial videos: [Here](https://youtu.be/xWu0g35YTGo).

#### Configuration parameters:

* Image Path: The absolute path to the image file on the computer to be converted (Example: `D:\GPM_Data\captcha.png`).
* Output variable: The name of the variable that stores the Base64 string after successful encoding.

#### Practical example: Converting a Captcha image to send to an automatic solving system via API

When you navigate to a website and encounter a Captcha in image form. You have used the Screenshot action to capture the area containing that Captcha and saved it as an image file at `D:\GPM_Data\captcha.png`. Now, you want to send this image to a third-party API (such as 2Captcha, Anti-Captcha) to have it solved. Since their API requires the image data to be in Base64 text string format, you would configure it as follows:

* Step 1: Call the Image to Base64 action.
  * Image Path: Enter `D:\GPM_Data\captcha.png`.
  * Output variable: Name the variable `base64String`.
* Step 2: Call the HTTP Request action (POST Method) to send the data to the captcha-solving server. In the Data (Body) section, you pass the `$base64String` variable into the JSON structure according to their API documentation.

Result: The image file `captcha.png` will be broken down into a long string in the format `data:image/png;base64,iVBORw0KGgoAAAANSU...` stored in the `$base64String` variable. The subsequent HTTP Request command simply picks up this string and sends it neatly, helping the automation script easily bypass Captcha security layers.

<figure><img src="../../.gitbook/assets/image (174).png" alt=""><figcaption></figcaption></figure>