---
description: Get an attribute of an element on the screen by XPath and save it to a variable.
---

# Get element data

Get element data is the action of retrieving data (a specific attribute) of an element on the device screen by XPath, and then saving it to a variable for use in subsequent steps.

🎥 Watch the tutorial video: [Here](https://youtu.be/WhRCpYVeagA).

#### Explanation of configuration parameters:

* XPath: The XPath of the element to retrieve data from, for example `//node[@resource-id="com.android.chrome:id/url_bar"]`. See how to get XPath at [Guide to Determine XPath & Coordinates](../phone-action/xpath-and-coordinates-guide.md).
* Attribute name: The name of the attribute to retrieve, for example `resource-id`, `text`, `content-desc`, `class`, `bounds`...
* Output Variable Name: The name of the variable to store the retrieved attribute value.

<figure><img src="../../.gitbook/assets/el-data.png" alt=""><figcaption></figcaption></figure>