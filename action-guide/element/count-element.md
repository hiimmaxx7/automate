# Count element

This action helps the tool scan the web page to see how many items match the "name" (XPath) you provided, then save that total number into a variable.

* Purpose: Very useful when you want to check the number of products being displayed, count the number of comments, or check whether a list has fully loaded its data. If the count is 0, it means no items were found; if the count is greater than 0, you can use loops to process each item one by one.

#### Explanation of configuration parameters:

* XPath: The identifier path (XPath) of the set of elements you want to count on the web page interface.
* Output variable: The name of the variable used to store the counted result (Returns an integer: `0`, `1`, `2`, `3`,...).

#### Practical example: Counting the total number of products displayed on a store page

When you access a phone store page as shown in the image, you want the automated script to check how many products are currently displayed on the page in order to set up the correct number of loop iterations for interaction or data scraping:

Looking at the source code structure, each product cell is contained within a `div` tag block with the attribute `class="card h-100"`. You configure the action as follows:

* Element XPath: Enter the common XPath path of the product cells: `//div[@class="card h-100"]`
* Output variable: Set the output variable name to `totalProducts`.

Result: The system will scan the entire web page and count how many tags match the above XPath. For example, if the screen displays 9 products, the variable `$totalProducts` will receive the value `9`.

> 💡 Advanced application: You can use this quantity variable to pass into the configuration of a For loop, helping the script automatically loop exactly `9` times to click and view details or scrape complete information for all 9 products without any excess or omission.

<figure><img src="../../.gitbook/assets/image (186).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (187).png" alt=""><figcaption></figcaption></figure>