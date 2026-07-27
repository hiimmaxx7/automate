# Select dropdown

Select dropdown is an action that instructs the browser to automatically select a specific value from a dropdown menu list.

🎥 Watch more tutorial video: [Here](https://youtu.be/cCTEtuMtz-s).

> ⚠️ Important note: This action only works with tags that have standard HTML structure such as `<select>` (for example: Province/City selection menus, traditional Year of Birth selection menus).
>
> For newer generation dropdown boxes custom-built from `<div>` or `<span>` tags (such as the interface of some modern social networks), this action will not work. In that case, you need to handle it by: Using a Mouse click command to click on the dropdown box to open the list ➔ Then using a second Mouse click command to click on the value you need to select based on the XPath of that row.

#### Configuration parameters:

* XPath: The identifier path (XPath) leading directly to the `<select>` tag on the web page (Example: `(//select)[1]`.
* Select text: Fill in based on the text publicly displayed on the screen (Example: `<option value="VN">Việt Nam</option>` ➔ Fill in the value `Việt Nam`).

#### Practical example: Automatically selecting Country when registering an account

When your script runs to the account registration step and encounters a country selection menu.

* Configuration method:
  * XPath: `(//select)[1]`
  * Select text: Fill in Australia
* Result: The system will immediately activate the selection box and change the value displayed on the screen to "Australia" accurately and safely.

<figure><img src="../../.gitbook/assets/image (202).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (201).png" alt=""><figcaption></figcaption></figure>