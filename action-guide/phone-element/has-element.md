---
description: Check whether an element exists on the screen or not, returning the result to a variable.
---

# Has element

Has element is the action of checking whether an element (by XPath) exists on the current screen, then returning the true/false result to a variable to branch the script.

🎥 Watch the tutorial video: [Here](https://youtu.be/WhRCpYVeagA).

#### Explanation of configuration parameters:

* XPath: The XPath of the element to check, for example `//node[@resource-id="com.android.chrome:id/url_bar"]`. See how to get XPath in [Guide to Determine XPath & Coordinates](../phone-action/xpath-and-coordinates-guide.md).
* Output Variable Name: The name of the variable to store the result `true`/`false` (true if the element exists). Use this variable in the If block to branch. 

<figure><img src="../../.gitbook/assets/pe-02.png" alt=""><figcaption></figcaption></figure>