# Get element attribute

This action helps you "extract" hidden information inside an element on the webpage and save it into a variable for later use.

* Purpose: For example, you can get the image path from the `src` attribute, or get a link from the `href` attribute of a link tag, or get the input value in the `value` field.
* Simple understanding: Each component on the web has accompanying "attributes" (like an information sticker). This command helps you read and "copy" information from that sticker to save it.

#### Explanation of configuration parameters:

* Element XPath: The XPath identifier path of the element containing the attribute to be retrieved on the webpage interface.
* Attribute name: The name of the attribute from which you want to extract data.
  * _Example structure_: `<tag attribute_name="attribute_value">Text</tag>` ➔ You just need to fill in `attribute_name` in this field to retrieve `attribute_value`.
* Output variable: The variable name to store the string value of the attribute after successful retrieval.

#### Practical example: Scraping product image links based on actual images (Figure 5)

Based on the interface of the phone store webpage you are working on in the image, you want to scrape the image path of the Samsung Galaxy S6 phone for data storage or automatic posting to your shop.

Looking at the HTML source code table (red box on the right side of the image):

> Image tag structure: `<img class="card-img-top img-fluid" src="imgs/galaxy_s6.jpg" alt="">`

To retrieve the image path string `imgs/galaxy_s6.jpg`, you will configure the action as follows:

* Element XPath: Enter the exact XPath pointing to that image tag, for example: `//div[@class="card h-100"]/a/img` (or use the syntax as in your image: `//div[@class='card h-100']//img`).
* Attribute name: Enter the word `src` _(This is the name of the attribute containing the file path of the image)_.
* Output variable: Name the output variable `imgUrl`.

Result: The system will find the image tag of the Samsung Galaxy S6, extract the string value in the `src` attribute, and directly load the value `imgs/galaxy_s6.jpg` into the variable `$imgUrl`. You can use this variable for actions like downloading the image or storing it later.

<figure><img src="../../.gitbook/assets/image (181).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (182).png" alt=""><figcaption></figcaption></figure>