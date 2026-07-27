# 2FA code

2FA code is an action used to automatically generate a 6-digit two-factor authentication code that changes based on time (similar to the Google Authenticator or Authy app on phones) from an original secret key provided.

This action is extremely important in MMO scenarios, helping to automatically pass the security verification step when logging into Facebook, Google, X (Twitter), Discord, Coinlist accounts, etc. without needing to open your phone to enter it manually.

🎥 Watch more tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Secret key: The original security key (a long string of letters and numbers, usually provided when you enable two-factor authentication on websites).
* Output variable: The name of the variable that stores the generated 6-digit authentication code.

#### Practical example: Automatically fill in the 2FA code when logging into Facebook

Suppose you have data for a Facebook account stored in Excel, where the two-factor security key (Secret key) column for this account is: `JBSWY3DPEHPK3PXP`.

When the browser navigates to the Facebook login page, after entering the User/Pass, Facebook will require entering a 6-digit authentication code to access the account. You configure the automated processing scenario as follows:

* How to configure:
  * Call the 2FA code action.
  * Secret key: Enter the string `JBSWY3DPEHPK3PXP` (or pass a variable containing this string read from an Excel file).
  * Output variable: Name the variable `$twoFACode`.
* Result: The system will use the time-based encryption algorithm to immediately calculate the current 6-digit code (for example: `482915`) and save it to the `$twoFACode` variable. Right after this action, you continue by calling the Key press command passing the `$twoFACode` variable into the code input field on Facebook to successfully log in.

<figure><img src="../../.gitbook/assets/image (146).png" alt=""><figcaption></figcaption></figure>