---
description: Scroll the device screen in a direction or according to the coordinates of the start and end points.
---

# Scroll

Scroll is the action of scrolling the screen of a mobile device. It supports two types: scrolling in a fixed direction or swiping from one point to another based on coordinates.

#### Explanation of configuration parameters:

* Scroll type: Type of scroll:
  * `By direction`: scroll in a fixed direction.
  * `By points`: swipe from the start point to the end point based on coordinates.
* Direction: (when selecting By direction) Scroll direction — `Up`, `Down`, `Left`, `Right`.
* Start position (x,y): (when selecting By points) Coordinates of the starting swipe point, for example `500,1500`.
* End position (x,y): (when selecting By points) Coordinates of the ending swipe point, for example `500,500`.
* Duration (ms): (when selecting By points) Duration of the swipe action measured in milliseconds; the larger the number, the slower the swipe.

<figure><img src="../../.gitbook/assets/scrl-dir.png" alt=""><figcaption><p>Scroll by direction</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/scrl-pt.png" alt=""><figcaption><p>Scroll by points</p></figcaption></figure>