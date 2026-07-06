# Import cookie

Import cookie is the action of loading a string or a file of structured cookie data into the browser to automatically log the account into a successful login state without needing to fill in Username/Password.

#### Configuration parameters:

* Cookie file: The absolute path to the `.json` file containing the cookie structure (or directly pass the data variable).
* Structure format: Must be in standard JSON format.

#### Important operational notes:

* Need to Go to URL first: You must allow the browser to access the correct target website before calling this action (For example: Go to `facebook.com` first and then Import cookie Facebook, only then will the cookie match the correct domain).
* Only valid in the current session: All cookie data loaded is only temporarily effective in that working session. As soon as the browser Profile is closed, this amount of cookie will automatically disappear and will not overwrite the original data of the Profile.

<figure><img src="../../.gitbook/assets/image (214).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (217).png" alt=""><figcaption></figcaption></figure>