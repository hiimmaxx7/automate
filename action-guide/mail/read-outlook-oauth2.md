# Read outlook (Oauth2)

Read outlook (OAuth2) is an advanced action specifically designed to read the authentication code (OTP) from accounts within the Microsoft ecosystem (Outlook, Hotmail, Live...). Unlike the traditional IMAP method that is easily blocked or requires identity verification by Microsoft, this action uses the OAuth2 protocol (through Refresh Token and Client ID). This is a formal connection mechanism, highly secure, extremely stable, and minimizes the risk of account checkpointing when running in large quantities (mass).

🎥 See more tutorial video: [Here](https://youtu.be/c9384x0uWiI).

#### Detailed explanation of configuration parameters:

* Email|Pass|Refresh token|Client ID: Input field for the account information needed to read the authentication code. Currently, when purchasing Outlook/Hotmail accounts from websites providing MMO resources, you are often given a format structure consisting of 4 pieces of information separated by the vertical bar `|`. You need to fill in this field according to the following standard: `Email|Refresh token|Client ID.`
* Email sent to contains: A keyword or email address that contains that phrase for the system to accurately filter the email needed.
  * _Example_: If you need to retrieve the OTP from an email sent by TikTok with the address `noreply@tiktok.com`, please enter exactly `noreply@tiktok.com` (or a distinguishing phrase like `noreply@tiktok`) in this field.
* Proxy: Optional configuration for the IP address to send connection requests to the Microsoft server to avoid IP duplication when checking emails in bulk. You can set up:
  * _Leave blank_: Use the original network of the computer running.
  * _Fill in variable `$profileProxy`_: The system will automatically use the Proxy assigned specifically for the current GPM Profile.
  * _Manually enter proxy_: Directly enter the specified Proxy string in the format `ip:port` or `ip:port:user:pass`.
* Code type: The format structure of the OTP that the system needs to extract from the email content. Includes 3 options:
  1. Number: Use when the OTP sent is entirely a sequence of numbers.
     * _Code Length_: The length of the OTP string to read (For example, if the code sent is `475997` ➔ Enter Code length as `6`).
  2. Text: Use when the OTP contains both letters and numbers, or is hidden within the HTML tag structure of the email.
     * _Code element xpath_: The XPath path directly to the element containing the OTP to be retrieved from the email content.
     * _Code element attribute_: Enter the word `text` if the OTP is the content between two tags (For example: `<h1>ABCDEF</h1>` ➔ Enter `text`). Or enter the _Attribute name_ if the OTP is the value inside the attribute of the tag (For example: `<h1 @code="ABCDEF"></h1>` ➔ Enter `code`).
  3. Full: An advanced option that allows you to extract the entire source text or HTML code of the returned email into an output variable. You can then pass this variable through the Regex action or Execute JS code to write flexible extraction rules according to your own needs.
* Output variable: The name of the output variable used to store the OTP string (or the entire email content depending on the _Code type_ configuration) for subsequent input actions in the script.

<figure><img src="../../.gitbook/assets/image (178).png" alt=""><figcaption></figcaption></figure>