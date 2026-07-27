# Read outlook (Oauth2)

Read outlook (OAuth2) is an advanced, specialized action used to read authentication codes (OTP) from accounts within the Microsoft ecosystem (Outlook, Hotmail, Live...). Unlike the traditional IMAP method, which is easily scanned and blocked by Microsoft or triggers identity verification, this action uses the OAuth2 protocol (via Refresh Token and Client ID). This is an official connection mechanism with high security, extremely stable, and minimizes the risk of accounts being checkpointed when running in large quantities (mass).

🎥 Watch more tutorial video: [Here](https://youtu.be/c9384x0uWiI).

#### Detailed explanation of configuration parameters:

* Email|Pass|Refresh token|Client ID: The field for entering account information needed to read the authentication code. Nowadays, when purchasing Outlook/Hotmail accounts from websites providing MMO resources, you are usually given a format consisting of 4 pieces of information separated by a vertical bar `|`. You need to fill in this field according to the following standard: `Email|Refresh token|Client ID.`
* Email sent to contains: Keyword or the sending email address containing that phrase so the system can accurately filter the required email.
  * _Example_: You need to get the OTP code from an email sent by TikTok with the address `noreply@tiktok.com`, enter exactly `noreply@tiktok.com` (or a distinguishing phrase like `noreply@tiktok`) into this field.
* Proxy: An optional configuration for the IP address used to send connection requests to Microsoft's server to avoid IP duplication when checking mail in bulk. You can set:
  * _Leave blank_: Use the native network of the computer currently running.
  * _Enter the variable `$profileProxy`_: The system automatically picks up the Proxy assigned specifically to the current GPM Profile to use.
  * _Enter proxy manually_: Directly enter the designated Proxy string in the format `ip:port` or `ip:port:user:pass`.
* Code type: The structural format of the OTP code the system needs to extract from the email content. There are 3 options:
  1. Number (Number type): Used when the returned OTP code is entirely consecutive digits.
     * _Code Length_: The length of the OTP string to be read (For example, if the returned code is `475997` ➔ Enter Code length as `6`).
  2. Text (Text type): Used when the OTP code contains both letters and numbers, or is hidden within the HTML tag structure of the email.
     * _Code element xpath_: The XPath path leading directly to the element containing the OTP code to be retrieved in the email content.
     * _Code element attribute_: Enter the word `text` if the OTP code is the content between two tags (For example: `<h1>ABCDEF</h1>` ➔ Enter `text`). Or enter the _Attribute name_ if the OTP code is a value inside a tag's attribute (For example: `<h1 @code="ABCDEF"></h1>` ➔ Enter `code`).
  3. Full (Entire Email content): An advanced option that helps retrieve the entire source text or HTML code of the returned email and assign it to the output variable. Afterwards, you can pass this variable through the Regex action or Execute js code action to write your own flexible extraction rules according to your specific needs.
* Output variable: The name of the output variable used to store the OTP code string (or the entire email content, depending on the _Code type_ configuration) for use in subsequent data entry actions within the scenario.

<figure><img src="../../.gitbook/assets/image (178).png" alt=""><figcaption></figcaption></figure>