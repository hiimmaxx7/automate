# Import cookie

Import cookie is the action of loading a string or a file of structured cookie data into the browser to automatically log the account into a successful login state without needing to fill in Username/Password.

🎥 Watch the tutorial video: [Here](https://youtu.be/OLHoUtANkXw).

#### Configuration parameters:

* Cookie file: The absolute path to the `.json` file containing the cookie structure (or directly pass the data variable).
* Structure format: Must be in standard JSON format.

#### Important operational notes:

* Need to Go to URL first: You must allow the browser to access the correct target website before calling this action (For example: Go to `facebook.com` first and then Import cookie Facebook, only then will the cookie match the correct domain).
* Only valid in the current session: All cookie data loaded is only temporarily effective in that working session. As soon as you close the browser Profile, this amount of cookie will automatically disappear and will not overwrite the original data of the Profile.

<figure><img src="../../.gitbook/assets/ck-01.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/ck-01b.png" alt=""><figcaption></figcaption></figure>