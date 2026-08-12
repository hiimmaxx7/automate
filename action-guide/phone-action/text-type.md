---
description: Type a text string into a specified input field using XPath.
---

# Type text

Type text is the action of entering (typing) a text string into an input field identified by XPath, simulating the typing of each character with a random delay to mimic human behavior.

🎥 Watch the tutorial video: [Here](https://youtu.be/WhRCpYVeagA).

#### Explanation of configuration parameters:

* XPath: The XPath of the input field to type into, for example `//node[@resource-id="com.android.chrome:id/url_bar"]`. See how to get XPath in [XPath & coordinates identification guide](./xpath-and-coordinates-guide.md).
* Text: The content of the text to be typed, for example `tinhte.vn`.
* Min delay (ms): The minimum delay between characters (milliseconds), for example `50`.
* Max delay (ms): The maximum delay between characters (milliseconds), for example `200`. Each character will wait for a random interval between min and max.

<figure><img src="../../.gitbook/assets/px-05.png" alt=""><figcaption></figcaption></figure>