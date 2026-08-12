---
description: Use the GPM UI Automator tool to get the XPath or coordinates of an element on the phone screen.
---

# Guide to Determine XPath & Coordinates

Many actions in the Phone - Action and Phone - Element groups need to point to an element on the phone screen via **XPath** or **coordinates**. You use the **GPM UI Automator** (Find XPath on BoxPhone) tool to obtain these values.

#### Steps to Follow:

1. Select the device in the DEVICE box (for example, `SM G960F`). Click Devices to refresh the list if the device is not visible.
2. Open the correct screen you need to operate on the phone, then click Capture to take a screenshot and reconstruct the UI tree. You can view it in tree (UI tree) or code (XML) format, and quickly filter using the Filter by text / id / class box.
3. Click on the element you need to capture — either in the tree or directly on the screenshot on the left. The selected element will highlight and display information in the SELECTED ELEMENT box on the right.

<figure><img src="../../.gitbook/assets/ui-sel.png" alt=""><figcaption></figcaption></figure>

#### Get XPath:

The SUGGESTED XPATH box suggests various types of XPath along with labels indicating their accuracy:

* `UNIQUE`: matches exactly 1 element — should be prioritized for stable execution.
* `n matches`: matches multiple elements, consider carefully before using.

The suggested types include: CONTENT-DESC, DESC + CLASS, ABSOLUTE, CLASS, BY PARENT ID. Click "click to copy" to copy the XPath, then paste it into the XPath box of the action. You can verify it using the TEST XPATH box and then click Run.

#### Get Coordinates:

The ATTRIBUTES box displays the properties of the element, where `bounds` is the coordinate frame in the format `[x1,y1][x2,y2]`. The center coordinates of the element are the midpoint of this frame. Click Test tap to try tapping on the element to check.

<figure><img src="../../.gitbook/assets/ui-attr.png" alt=""><figcaption></figcaption></figure>