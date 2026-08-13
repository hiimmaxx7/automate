# 2FA code

2FA code is an action used to automatically generate a time-based 6-digit two-factor authentication code (similar to Google Authenticator or Authy on your phone) from a provided secret key.

This action is extremely important in MMO scenarios, helping to automatically bypass the security verification step when logging into accounts like Facebook, Google, X (Twitter), Discord, Coinlist... without needing to open your phone to manually enter the code.

🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Secret key: The original secret key (A long alphanumeric string, usually provided when you enable two-factor authentication on websites).
* Output variable: The name of the variable that stores the generated 6-digit authentication code.

#### Practical example: Automatically fill in the 2FA code when logging into Facebook

Suppose you have data for a Facebook account stored in Excel, where the two-factor authentication secret key for this account is: `JBSWY3DPEHPK3PXP`.

When the browser navigates to the Facebook login page, after entering the User/Pass, Facebook will request a 6-digit authentication code to access the account. You configure the automation script as follows:

* Configuration steps:
  * Call the 2FA code action.
  * Secret key: Enter the string `JBSWY3DPEHPK3PXP` (or pass a variable containing this string from the Excel file).
  * Output variable: Name the variable `$twoFACode`.
* Result: The system will use the time-based encryption algorithm to immediately calculate the current 6-digit code (for example: `482915`) and store it in the variable `$twoFACode`. Immediately after this action, you call the Key press command to pass the variable `$twoFACode` into the code input field on Facebook to successfully log in.

<figure><img src="../../.gitbook/assets/tn-05.png" alt=""><figcaption></figcaption></figure>