# Count element

This action helps the tool scan the webpage to see how many items match the "name" (XPath) you provided, then save that total number into a variable.

* Effect: Very useful when you want to check the number of products displayed, count the number of comments, or check if a list has loaded enough data. If the count is 0, it means no items were found; if the count is more than 0, you can use loops to process each item sequentially.

#### Explanation of configuration parameters:

* XPath: The identifier path (XPath) of the set of elements you want to count on the webpage interface.
* Output variable: The name of the variable to store the counted result (Returns an integer: `0`, `1`, `2`, `3`,...).

#### Practical example: Count the total number of products displayed on the store page

When you access a phone store page as shown in the image, you want the automation script to check how many products are currently displayed on the page to set the number of interaction loops or scrape data accurately:

Looking at the source code structure, each product cell is contained within a `div` tag with the attribute `class="card h-100"`. You configure the action as follows:

* Element XPath: Enter the common XPath path of the product cells: `//div[@class="card h-100"]`
* Output variable: Name the output variable `totalProducts`.

Result: The system will scan the entire webpage and count how many tags match the above XPath. For example, if 9 products are displayed on the screen, the variable `$totalProducts` will receive the value `9`.

> 💡 Advanced application: You can use this quantity variable to pass into the configuration of the For loop, allowing the automation script to iterate exactly `9` times to click for details or scrape sufficient information for all 9 products without excess or omission.

<figure><img src="../../.gitbook/assets/image (186).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (187).png" alt=""><figcaption></figcaption></figure>