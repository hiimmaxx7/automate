# Get element text

This action helps the tool "read" and retrieve all the text displayed on an element (such as article content, a title, a price, or an account name) and then save it into a variable for you to use.

* Purpose: Used when you need to scrape text data from a website. You just need to specify the correct position (element), and the tool will automatically extract the text currently displayed on the interface for you.

#### Explanation of configuration parameters:

* XPath: The identifier path (XPath) of the element containing the text to be retrieved on the web page interface.
* Output variable: The variable name used to store the text content after it has been successfully extracted.

#### Practical example: Scraping the price of a product

Based on the store interface image you provided, you want to scrape the price of the Samsung Galaxy S6 phone in order to compare prices or synchronize data to your system.

Looking at the HTML source code circled in red on the right side of the image below:

> Structure of the tag containing the price: `<h5>$360</h5>`

To retrieve this price text string `$360`, you would configure the action as follows:

* Element XPath: Enter the exact XPath pointing directly to the tag containing that product's price, for example: `//div[@class='card h-100']//h5` (as shown in the XPath search box you successfully tested in the image).
* Output variable: Name the output variable `productPrice`.

Result: The system will locate the corresponding `<h5>` tag of the product, extract the plain text located between the tags, and load the value `$360` directly into the `$productPrice` variable. In subsequent steps, you can call this variable to write it into an Excel file or send it to your system's data.

<figure><img src="../../.gitbook/assets/image (183).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (184).png" alt=""><figcaption></figcaption></figure>