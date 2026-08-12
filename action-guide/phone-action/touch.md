---
description: Tap on an element by XPath or by coordinates on the screen.
---

# Touch

Touch is the action of tapping on the screen of a mobile device. The touch point can be determined by the XPath of the element or by coordinates (x,y).

🎥 Watch the tutorial video: [Here](https://youtu.be/WhRCpYVeagA).

#### Explanation of configuration parameters:

* Touch type: How to determine the touch point:
  * `Touch by Xpath`: tap on the element by XPath.
  * `Touch by coordinates`: tap on a point by coordinates.
* XPath: (when selecting Touch by Xpath) The XPath of the element to tap, for example `//node[@resource-id="com.android.chrome:id/url_bar"]`. See how to get XPath in [Guide to Determine XPath & Coordinates](./xpath-and-coordinates-guide.md).
* Coordinates (x,y): (when selecting Touch by coordinates) The touch point coordinates in the format `x,y`, for example `500,700`.
* Touch mode: Type of touch:
  * `Normal`: a single regular tap.
  * `Double`: two consecutive taps (double tap).
  * `Hold`: press and hold.

<figure><img src="../../.gitbook/assets/px-01.png" alt=""><figcaption><p>Touch by Xpath</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/px-01b.png" alt=""><figcaption><p>Touch by coordinates</p></figcaption></figure>