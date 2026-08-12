---
description: Run a shell command inside the device (via adb shell) and save the result to a variable.
---

# Execute CMD

Execute CMD is an action that runs a shell command **inside** the device (through `adb shell`) and saves the returned result to a variable. Unlike Execute ADB (which runs adb commands on the computer), Execute CMD directly executes shell commands on the Android operating system of the device.

#### Explanation of configuration parameters:

* Script: The shell command to run on the device, for example `svc wifi enable` or `getprop ro.product.model`.
* Output Variable Name: The name of the variable to store the returned result, for example `check`.

<figure><img src="../../.gitbook/assets/ps-02.png" alt=""><figcaption></figcaption></figure>