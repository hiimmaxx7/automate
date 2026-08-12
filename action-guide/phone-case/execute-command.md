---
description: Run a shell command inside the device (via adb shell) and save the result to a variable.
---

# Execute CMD

Execute CMD is the action of running a shell command **inside** the device (through `adb shell`) and saving the returned result to a variable. Enter the command **without** the prefix `adb shell` — the software will add it automatically. Unlike Execute ADB (which runs adb commands on the computer), Execute CMD runs the shell command directly on the Android operating system of the device.

#### Explanation of configuration parameters:

* Script: The shell command to run on the device (without `adb shell`), for example `svc wifi enable` or `getprop ro.product.model`.
* Output Variable Name: The name of the variable to store the returned result, for example `check`.

<figure><img src="../../.gitbook/assets/exec-cmd.png" alt=""><figcaption></figcaption></figure>