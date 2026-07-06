---
description: Pause for a period of time.
---

# Delay

Delay is an action used to pause the script for a period of time before executing the next action. In GPM Automate configuration, the time is measured in milliseconds (ms), where 1s = 1000 ms.

This action supports a random pause mechanism (Random Delay) that helps accurately simulate actions like a real user, minimizing the frequency of being detected by the system/platform for automated behavior (Anti-bot).

#### Configuration parameters:

* Min (ms): Minimum pause time.
* Max (ms): Maximum pause time.

#### Practical example:

If you configure Min as `2000` and Max as `4000`. When the script reaches this action, the system will automatically calculate and pause the flow for a random period between 2000ms and 4000ms (for example: this time it pauses for `2843 ms`, the next time it may pause for `3120 ms`).