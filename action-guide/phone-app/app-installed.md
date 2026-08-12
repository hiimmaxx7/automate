---
description: Check if an application is installed on the device or not.
---

# Is app installed

Is app installed is an action that checks whether an application (by package name) is installed on the mobile device or not, and then returns the result to a variable to branch the script (for example: if not installed, install it; if installed, open it).

🎥 Watch the tutorial video: [Here](https://youtu.be/Y3fCTzU9M4U).

#### Explanation of configuration parameters:

* Package name: The package name of the application to check, for example, Facebook is `com.facebook.katana`.
* Output Variable Name: The name of the variable that stores the result in true/false format (`true` if the application is installed, `false` if not). Use this variable in the If block to decide the next step.

<figure><img src="../../.gitbook/assets/is-inst.png" alt=""><figcaption></figcaption></figure>