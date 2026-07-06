# Get URL

Get URL is an action used to extract the entire address (URL) of the currently opened webpage in the browser and save it to a variable.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Configuration parameters:

* Output variable: The name of the variable you choose to store the webpage address string after successful extraction.

#### Real-world example: Check the redirect status after successful login

When you create an automated login script to a platform (for example, Pinterest or Facebook). After filling in the information and clicking the login button, you want to check whether the account has successfully reached the homepage or has been redirected to an error page/identity verification page (Checkpoint):

* Configuration method:
  * Wait a few seconds after clicking the login button, then call the Get URL action.
  * Output variable: Name the variable `currentLink`.
  * Combine with an If condition block afterwards to check the data of the variable `$currentLink`:
    * _Case 1_: If the variable `$currentLink` contains the phrase `checkpoint` or `login_error` ➔ The script identifies an account error and processes to stop the flow.
    * _Case 2_: If the variable `$currentLink` contains the phrase `home` or the data switches to the personal page ➔ The script identifies a successful login and continues with the account nurturing tasks.