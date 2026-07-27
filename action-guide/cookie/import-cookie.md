# Import cookie

Import cookie is an action that loads an available cookie string or structured data file into the browser so that the account automatically enters a successfully logged-in state without needing to fill in Username/Password.

#### Configuration parameters:

* Cookie file: The absolute path to the `.json` file containing the cookie structure (or directly pass a data variable).
* Structure format: Must be standard JSON format.

#### Important operational notes:

* Go to URL is required first: You must have the browser access the correct target website before calling this action (For example: Go to `facebook.com` first, then Import cookie for Facebook, so that the cookie matches the correct domain).
* Only valid within the current session: All cookie data loaded is only temporarily effective during that session. As soon as the browser Profile is closed, this cookie data will automatically disappear and will not overwrite the original Profile data.

<figure><img src="../../.gitbook/assets/image (214).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (217).png" alt=""><figcaption></figcaption></figure>