# Read mail code

Read mail code is an advanced action that helps the script automatically log in to email inboxes (Gmail, Outlook, Hotmail, Yahoo...) through the secure IMAP connection protocol. The system will automatically scan the latest emails, search for emails from a specified sender, and extract the verification code (OTP/Code) to fill into the website without you having to manually open an email tab.

🎥 Watch more tutorial videos: [Here](https://youtu.be/c9384x0uWiI).

#### Explanation of configuration parameters:

* Email: Enter the email address to read the verification code from (Example: `gpm_user@gmail.com`).
*   Password: Enter the connection password.

    > ⚠️ Important note: For high-security mail providers like Gmail, you must not enter the account's main password here; instead, you must enter an App Password specifically created in that email's security settings (Instructions below).
* Mail server: The IMAP server address of the mail service provider.
  * _Gmail example_: `imap.gmail.com`
  * _Outlook/Hotmail example_: `outlook.office365.com`
* Email sent to contains: Keyword or sender email address containing that phrase (Used to correctly filter the email to find, for example: `noreply@pinterest.com` or `no-reply@pinterest`).
* Proxy: Optional IP configuration to log in to the mail server, helping avoid connection blocks by service providers (such as Google, Microsoft) when handling a large number of accounts. You can set it up in 3 ways:
  * Leave blank: The system will use the original network (real machine IP) to perform the connection and fetch the code.
  * Enter the variable `$profileProxy`: The script will automatically grab the Proxy package assigned specifically to the current GPM Profile to use.
  * Manually enter proxy: Enter directly a Proxy string in a specific format (Example: `ip:port` or `ip:port:user:pass`) that you want to specify specifically for this action.
* Code type: The structure format of the OTP code to be extracted. The system supports 3 options:
  1. Number (Numeric type): Used when the OTP code sent is entirely a sequence of consecutive numbers (Example: `475997`).
     * _Code Length_: The exact length of the number sequence to be extracted (For example, if the code has 6 digits, enter `6`).
  2. Text (Text type): Used when the OTP code contains both letters and numbers interspersed, or is hidden deep within an HTML structure tag of the email.
     * _Code element xpath_: The XPath path leading directly to the tag containing the OTP code inside the email content (Example: `//h1` or `//span[@id="otp"]`).
     * _Code element attribute_: Enter the keyword `text` if the OTP code is located directly between two tags (Example: `<h1>ABCDEF</h1>` ➔ Enter `text`). Or enter the _Attribute name_ if the OTP code is hidden within an attribute of the tag (Example: `<h1 code="ABCDEF"></h1>` ➔ Enter `code`).
  3. Full (Entire Email content): An advanced option that allows the system to fetch the entire source text/HTML of the whole returned email and assign it to a variable. From there, you can pass this variable through the Regex action or Execute js code action to write your own custom extraction algorithm as flexibly as desired (Suitable for mail types with extremely complex OTP structures).
* Output variable: The variable name that stores the verification code string (or the entire email content) after successfully retrieving it, to pass into the next data entry action.

#### Instructions on how to enable Two-Step Verification (2FA) and get an App Password for Gmail

For security reasons, Google blocks all third-party applications from directly connecting to the inbox using the original password. You must perform the following procedure to grant GPM Automate permission to access IMAP:

**1. Enable two-step verification (2FA) for your Google account**

1. Log in to your Google account, access the account management page at: [https://myaccount.google.com](https://myaccount.google.com).
2. In the left-hand menu bar, select Security.
3. Scroll down to the _"How you sign in to Google"_ section, find the 2-Step Verification item. If it is currently _Off_, click on it and follow the instructions (link your phone number or authentication app) to switch it to On.

**2. Create and get an App Password**

1. After successfully enabling Two-Step Verification, access the App password section here: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
2. The App name field will appear; enter any name to remember (Example: `GPM_Automate`), then click the Create button.
3. A small window will appear containing a 16-character code in yellow (Example: `abcd efgh ijkl mnop`).
4. Copy all 16 characters (remove any spaces if present) and paste them directly into the Password field in the _Read mail code_ action configuration of GPM Automate.

_(Note: For Outlook/Hotmail accounts, follow a similar process under Settings > Security > Advanced security options > App passwords to get the corresponding 16-character password string)._

<figure><img src="../../.gitbook/assets/image (177).png" alt=""><figcaption></figcaption></figure>