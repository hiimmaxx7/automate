# Select dropdown

Select dropdown is an action that instructs the browser to automatically select a specific value from a dropdown menu.

🎥 Watch the tutorial video: [Here](https://youtu.be/cCTEtuMtz-s).

> ⚠️ Important note: This action only works for elements with the standard HTML structure `<select>` (for example: dropdown menus for selecting Province/City, selecting traditional Year of Birth).
>
> For newer generation dropdowns that are custom-built from `<div>` or `<span>` elements (like the interfaces of some modern social networks), this action will not work. In that case, you need to handle it by: Using the Mouse click command to click on the dropdown to expand the list ➔ Then use a second Mouse click command to select the desired value based on the XPath of that row.

#### Configuration parameters:

* XPath: The identifier path (XPath) that directly leads to the `<select>` element on the webpage (Example: `(//select)[1]`).
* Select text: Fill in based on the publicly displayed text on the screen (Example: `<option value="VN">Việt Nam</option>` ➔ Fill in the value as `Việt Nam`).

#### Practical example: Automatically select Country when registering an account

When your script reaches the account registration step and encounters a country selection dropdown.

* Configuration:
  * XPath: `(//select)[1]`
  * Select text: Fill in Australia
* Result: The system will immediately activate the selection box and change the displayed value on the screen to "Australia" accurately and safely.

<figure><img src="../../.gitbook/assets/image (202).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (201).png" alt=""><figcaption></figcaption></figure>