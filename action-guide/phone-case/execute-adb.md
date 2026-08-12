---
description: Run an ADB command targeting the device and save the result into a variable.
---

# Execute ADB

Execute ADB is an action that runs an ADB command targeting the controlled device and saves the returned result into a variable. Enter the command without the prefix `adb -s [serial]` — the system automatically adds the controlled device.

🎥 Watch the tutorial video: [Here](https://youtu.be/03NWE3RaSAc).

#### Explanation of configuration parameters:

* Script: The ADB command to run (without `adb -s [serial]`), for example `get-serialno` or `shell pm list packages`.
* Output Variable Name: The name of the variable to store the result returned from the command, for example `deviceNo`.

<figure><img src="../../.gitbook/assets/ps-01.png" alt=""><figcaption></figcaption></figure>