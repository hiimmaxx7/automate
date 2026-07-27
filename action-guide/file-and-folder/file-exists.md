# File exists

This action helps the tool check whether a file already exists on the computer. The returned result is very simple: True (if the file is found) or False (if not found).

* Purpose: Used in combination with the `If` block to handle things more intelligently, avoiding cases where the tool encounters an error or stops abruptly when you ask it to open a file that doesn't actually exist.

🎥 Watch more tutorial videos: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the file to be checked on the computer (Example: `D:\data\accounts.txt`).
* Output variable: The name of the variable that stores the check result (`True` or `False`).

#### Real-world example: Checking a configuration file before running a script

Suppose you write an automation script that fills in information and requires the script to read data from the file `D:\GPM\config.json`. If the user forgets to create this file or enters the wrong path, the script will encounter a system error immediately when it reaches the file-reading command.

To handle this safely, you configure the script as follows:

* Step 1: Call the File exists action, enter the path `D:\GPM\config.json`, and name the output variable `$isFileReady`.
* Step 2: Use an If block to check: `If $isFileReady = False`.
* Step 3: Inside this If block, call the Throw action with the content: `"Error: You have not created the config.json file on drive D, please check again!"`.

Result: The script will automatically check beforehand. If the file doesn't exist, it will proactively stop the flow and display a visual red warning to let you know, instead of trying to continue and causing the script to crash.

<figure><img src="../../.gitbook/assets/image (147).png" alt=""><figcaption></figcaption></figure>