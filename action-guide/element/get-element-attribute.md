# Get element attribute

This action helps you "extract" hidden information within an element on a web page and save it into a variable for later use.

* Purpose: For example, you can get an image path from the `src` attribute, or get a link from the `href` attribute of a link tag, or get the value entered in a `value` field.
* Simple explanation: Every element on a web page comes with "attributes" (like an information label). This command helps you read and "copy" the information from that label to save it.

#### Explanation of configuration parameters:

* Element XPath: The identifier path (XPath) of the element containing the attribute you want to get on the web page interface.
* Attribute name: The name of the attribute you want to extract data from.
  * _Example structure_: `<tag attribute_name="attribute_value">Text</tag>` ➔ You just need to fill in `attribute_name` in this field to get `attribute_value`.
* Output variable: The name of the variable to save the attribute value string after successfully retrieving it.

#### Practical example: Scraping the product image link based on the actual image (Figure 5)

Based on the phone shop website interface you are working with in the image, you want to scrape (crawl) the image path of the Samsung Galaxy S6 phone for the purpose of storing data or automatically uploading it to your shop.

Looking at the HTML source code table (red box on the right side of the image):

> Image tag structure: `<img class="card-img-top img-fluid" src="imgs/galaxy_s6.jpg" alt="">`

To get the image path string `imgs/galaxy_s6.jpg`, you will configure the action as follows:

* Element XPath: Enter the exact XPath pointing to that image tag, for example: `//div[@class="card h-100"]/a/img` (or use the syntax shown in your image: `//div[@class='card h-100']//img`).
* Attribute name: Fill in `src` _(This is the attribute name that contains the file path of the image)_.
* Output variable: Set the output variable name as `imgUrl`.

Result: The system will find the image tag for the Samsung Galaxy S6, extract the value string within the `src` attribute, and directly load the value `imgs/galaxy_s6.jpg` into the `$imgUrl` variable. You can use this variable for subsequent image download or storage actions.

<figure><img src="../../.gitbook/assets/image (181).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (182).png" alt=""><figcaption></figcaption></figure>