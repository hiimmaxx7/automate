---
description: Check whether an element exists on the screen or not, returning the result to a variable.
---

# Has element

Has element is the action to check whether an element (by XPath) exists on the current screen or not, then return the true/false result to a variable to branch the script.

#### Explanation of configuration parameters:

* XPath: The XPath of the element to check, for example `//node[@resource-id="com.android.chrome:id/url_bar"]`. See how to get XPath at [Guide to Determine XPath & Coordinates](../phone-action/xpath-and-coordinates-guide.md).
* Output Variable Name: The name of the variable to store the result `true`/`false` (true if the element exists). Use this variable in the If block to branch.

<figure><img src="../../.gitbook/assets/el-has.png" alt=""><figcaption></figcaption></figure>