---
description: 根据起点和终点坐标滚动/滑动设备屏幕。
---

# Scroll

Scroll是手机设备屏幕的滚动/滑动动作。支持两种类型：按固定方向滚动，或从一个点滑动到另一个点的坐标。

#### 配置参数说明：

* Scroll type: 滚动类型：
  * `By direction`: 按固定方向滚动。
  * `By points`: 从起点滑动到终点的坐标。
* Direction: （选择By direction时）滚动方向 — `Up`, `Down`, `Left`, `Right`。
* Start position (x,y): （选择By points时）滑动起始点的坐标，例如 `500,1500`。
* End position (x,y): （选择By points时）滑动结束点的坐标，例如 `500,500`。
* Duration (ms): （选择By points时）执行滑动的时间，以毫秒为单位；数字越大，滑动越慢。

<figure><img src="../../.gitbook/assets/px-02.png" alt=""><figcaption><p>按方向滚动</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/px-02b.png" alt=""><figcaption><p>按点滚动</p></figcaption></figure>