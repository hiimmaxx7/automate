---
description: Stop waiting for a period of time.
---

# Delay

Delay is an action used to pause the script for a period of time before performing the next action. In the GPM Automate configuration, time is measured in milliseconds (ms), where 1s = 1000 ms.

This action supports a random stop mechanism (Random Delay) that helps accurately simulate real user actions, minimizing the frequency of being scanned for automated behavior by systems/platforms (Anti-bot).

#### Configuration parameters:

* Min (ms): Minimum wait time.
* Max (ms): Maximum wait time.

#### Practical example:

If you configure Min as `2000` and Max as `4000`. When the script runs to this action, the system will automatically calculate and pause the flow for a random period of time ranging from 2000ms to 4000ms (for example: this time it stops for `2843 ms`, the next time it may stop for `3120 ms`).