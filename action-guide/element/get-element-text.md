# Get element text

This action helps the tool "read" and retrieve all the displayed text on an element (such as article content, title, price, or account name) and save it into a variable for your use.

* Effect: Used when you need to scrape text data from a website. You just need to specify the correct position (element), and the tool will automatically extract the displayed text on the interface for you.

#### Explanation of configuration parameters:

* XPath: The XPath identifier path of the element containing the text to be retrieved on the web page interface.
* Output variable: The variable name to store the text content after successful extraction.

#### Practical example: Scraping the price of a product

Based on the store interface image you provided, you want to scrape the price of the Samsung Galaxy S6 phone for price comparison or to synchronize data with your system.

Looking at the HTML source code table highlighted in red on the right side of the image below:

> Structure of the tag containing the price: `<h5>$360</h5>`

To retrieve the text string for the price `$360`, you will configure the action as follows:

* Element XPath: Enter the exact XPath path pointing directly to the tag containing the product price, for example: `//div[@class='card h-100']//h5` (as shown in the XPath search box you successfully tested in the image).
* Output variable: Name the output variable as `productPrice`.

Result: The system will find the corresponding `<h5>` tag of the product, extract the plain text located in the middle of the tag, and directly load the value `$360` into the variable `$productPrice`. In subsequent steps, you can call this variable to write to an Excel file or send it to your system's data. 

<figure><img src="../../.gitbook/assets/image (183).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (184).png" alt=""><figcaption></figcaption></figure>