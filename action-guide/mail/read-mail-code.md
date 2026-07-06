# Read mail code

Read mail code is an advanced action that helps the script automatically log into the email inbox (Gmail, Outlook, Hotmail, Yahoo...) via the secure IMAP connection protocol. The system will automatically scan for the latest emails, search for emails from a specified sender, and extract the verification code (OTP/Code) to fill in on the website without you having to open the email tab for manual operation.

🎥 Watch the tutorial video: [Here](https://youtu.be/c9384x0uWiI).

#### Explanation of configuration parameters:

* Email: Enter the email address to read the verification code (For example: `gpm_user@gmail.com`).
* Password: Enter the connection password.

    > ⚠️ Important note: For high-security email accounts like Gmail, you must not enter the main account password here but must enter the App Password created specifically in the email's security settings (Instructions for obtaining it are in the section below).
* Mail server: The IMAP server address of the email service provider.
  * _For example Gmail_: `imap.gmail.com`
  * _For example Outlook/Hotmail_: `outlook.office365.com`
* Email sent to contains: A keyword or email address that contains that phrase (Used to filter the correct email to find, for example: `noreply@pinterest.com` or `no-reply@pinterest`).
* Proxy: Optional IP configuration to log into the mail server, helping to avoid being blocked by service providers (like Google, Microsoft) when operating a large number of accounts. You can set it up in 3 ways:
  * Leave blank: The system will use the original network (real machine IP) to perform the connection and retrieve the code.
  * Enter variable `$profileProxy`: The script will automatically use the Proxy package assigned specifically for the current GPM Profile.
  * Manually enter proxy: Directly input the Proxy string in a specific format (For example: `ip:port` or `ip:port:user:pass`) that you want to assign specifically for this action.
* Code type: The format structure of the OTP code to be extracted. The system supports 3 options:
  1. Number: Used when the OTP code sent is entirely a sequence of numbers (For example: `475997`).
     * _Code Length_: The exact length of the number sequence to be extracted (For example, if the code consists of 6 digits, enter `6`).
  2. Text: Used when the OTP code contains both letters and numbers interspersed, or is hidden deep within an HTML structure tag of the email.
     * _Code element xpath_: The XPath path directly to the tag containing the OTP code within the email content (For example: `//h1` or `//span[@id="otp"]`).
     * _Code element attribute_: Enter the keyword `text` if the OTP code is directly between two tags (For example: `<h1>ABCDEF</h1>` ➔ Enter `text`). Or enter the _Attribute name_ if the OTP code is hidden in the attribute of the tag (For example: `<h1 code="ABCDEF"></h1>` ➔ Enter `code`).
  3. Full: An advanced option that allows the system to extract the entire source code/text/HTML of the entire returned email into a variable. From there, you can pass this variable through the Regex or Execute JS code actions to write a flexible extraction algorithm as desired (Suitable for emails with extremely complex OTP structures).
* Output variable: The variable name that stores the verification code string (or the entire content of the email) after successful retrieval to pass into the next input action.

#### Instructions to Enable Two-Step Verification (2FA) and Obtain App Password for Gmail

For security, Google blocks all third-party applications from directly connecting to the inbox using the original password. You must follow the procedure below to grant GPM Automate access to IMAP:

**1. Enable Two-Step Verification (2FA) for your Google account**

1. Log into your Google account, go to the account management page at: [https://myaccount.google.com](https://myaccount.google.com).
2. In the left menu, select the Security section.
3. Scroll down to the _"How you sign in to Google"_ section, find the Two-Step Verification option. If it is in the _Off_ state, click to select and follow the instructions (phone number link or authentication app) to turn it on.

**2. Create and obtain App Password**

1. After successfully enabling Two-Step Verification, go to the App password section here: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
2. The App name box appears, enter any name to remember (For example: `GPM_Automate`) and then click the Create button.
3. A small window appears containing a 16-character yellow code (For example: `abcd efgh ijkl mnop`).
4. Copy all 16 characters (remove any spaces if present) and paste them directly into the Password box in the configuration of the _Read mail code_ action of GPM Automate.

_(Note: For Outlook/Hotmail accounts, follow a similar procedure in Settings > Security > Advanced security options > App passwords to obtain the corresponding 16-character password string.)_

<figure><img src="../../.gitbook/assets/image (177).png" alt=""><figcaption></figcaption></figure>