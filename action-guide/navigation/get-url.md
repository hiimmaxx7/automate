# Get URL

Get URL is an action used to extract the entire URL address of the current webpage open in the browser and save it into a variable.

🎥 Watch more tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Configuration parameters:

* Output variable: The variable name you set yourself to store the website address string after successful extraction.

#### Practical example: Checking redirect status after successful login

When you build an automated Login script for a platform (such as Pinterest or Facebook). After filling in the information and clicking the login button, you want to check whether the account has successfully accessed the home page or has been redirected to an error page/identity verification page (Checkpoint):

* Configuration method:
  * Wait a few seconds after clicking the login button, then call the Get URL action.
  * Output variable: Name the variable `currentLink`.
  * Combine with an If condition block afterward to check the data of the `$currentLink` variable:
    * _Case 1_: If the `$currentLink` variable contains the phrase `checkpoint` or `login_error` ➔ The script identifies an account error and stops the flow.
    * _Case 2_: If the `$currentLink` variable contains the phrase `home` or the data has changed to the profile page ➔ The script identifies a successful login and continues running the account nurturing tasks.