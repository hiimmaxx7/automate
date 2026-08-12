---
description: Use the GPM UI Automator tool to obtain the XPath or coordinates of an element on the phone screen.
---

# Guide to Identify XPath & Coordinates

Many actions in the Phone - Action and Phone - Element groups need to point to an element on the phone screen via **XPath** or **coordinates**. You use the **GPM UI Automator** (Find XPath on BoxPhone) to obtain these values.

#### Steps to Follow:

1. Select the device in the DEVICE box (for example, `SM G960F`). Click Devices to refresh the list if the device is not visible.
2. Open the correct screen to operate on the phone, then click Capture to take a screenshot and reconstruct the UI tree. You can view it in tree format (UI tree) or code (XML), and quickly filter using the Filter by text / id / class box.
3. Click to select the element you need to obtain — either in the tree or directly on the screenshot on the left. The selected element will highlight and show information in the SELECTED ELEMENT box on the right.

<figure><img src="../../.gitbook/assets/ui-01.png" alt=""><figcaption></figcaption></figure>

#### Obtain XPath:

The SUGGESTED XPATH box suggests various types of XPath along with labels indicating their accuracy:

* `UNIQUE`: matches exactly 1 element — should be prioritized for stable execution.
* `n matches`: matches multiple elements, consider carefully before use.

Suggested types include: CONTENT-DESC, DESC + CLASS, ABSOLUTE, CLASS, BY PARENT ID. Click "click to copy" to copy the XPath, then paste it into the XPath box of the action. You can verify it using the TEST XPATH box and then click Run.

#### Obtain Coordinates:

The ATTRIBUTES box displays the properties of the element, where `bounds` is the coordinate frame in the format `[x1,y1][x2,y2]`. The center coordinates of the element are the midpoint of this frame. Click Test tap to try tapping on the element for verification.

<figure><img src="../../.gitbook/assets/ui-02.png" alt=""><figcaption></figcaption></figure>