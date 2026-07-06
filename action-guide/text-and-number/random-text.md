# Random text

Random text is an action used to automatically generate a random string of characters (including letters and numbers) with an optional length, and then save it to an output variable (Output variable).

This action is often used to create new passwords when registering accounts, generate identification codes, or create non-duplicate text content to avoid being flagged by spam systems.

🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Text Length: The length (number of characters) of the random text string you want to generate.

#### Practical example: Generate a random password for automatic account registration

Suppose you are writing a script to automatically register accounts in bulk on a website and need to fill in a random password for each account to ensure security:

* Configuration: You call the Random text action, set the Text Length field to `12` (to create a string of 12 characters), and set the _Output variable_ field to `$randomPassword`.
* Result: When it reaches this step, the system will automatically generate a random string (for example: `"a7K39pXq2wLm"`) and save it to the variable `$randomPassword`. In the subsequent steps, you just need to call the Key press action to input this `$randomPassword` variable into the password field in the browser to complete the registration.