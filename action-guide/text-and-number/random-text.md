# Random text

Random text is an action used to automatically generate a random string of characters (including letters and numbers) with a customizable length, then save it to an output variable (Output variable).

This action is commonly used to create new passwords when registering accounts, generate identification codes, or create non-duplicate text content to avoid being flagged by spam detection systems.

🎥 Watch more tutorial videos: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Text Length: The length (number of characters) of the random text string you want to generate.

#### Practical example: Generate a random password for automatic account registration

Suppose you are writing a script to automatically register multiple accounts on a website and need to fill in a random password for each account to ensure security:

* Configuration: Call the Random text action, set the Text Length field to `12` (to generate a 12-character string), and set the _Output variable_ field to `$randomPassword`.
* Result: When this step is executed, the system will automatically generate a random string (e.g., `"a7K39pXq2wLm"`) and save it to the `$randomPassword` variable. In the following steps, you just need to call the Key press action, passing this `$randomPassword` variable into the password input field on the browser to complete the registration.