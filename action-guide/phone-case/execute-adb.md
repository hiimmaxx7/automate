---
description: Run an ADB command targeting the device and save the result into a variable.
---

# Execute ADB

Execute ADB is the action of running an ADB command targeting the controlled device and saving the returned result into a variable. Enter the command without the prefix `adb -s [serial]` — the system automatically adds the controlled device.

#### Explanation of configuration parameters:

* Script: The ADB command to run (without `adb -s [serial]`), for example `get-serialno` or `shell pm list packages`.
* Output Variable Name: The name of the variable to store the result returned from the command, for example `deviceNo`.

<figure><img src="../../.gitbook/assets/exec-adb.png" alt=""><figcaption></figcaption></figure>