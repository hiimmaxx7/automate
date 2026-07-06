# File exists

This action helps the tool check whether a file already exists on the computer. The result returned is very simple: True (if the file is found) or False (if not found).

* Purpose: Used in conjunction with the `If` block for smarter handling, avoiding situations where the tool encounters errors or stops abruptly when you request it to open a file that does not actually exist.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the file to check on the computer (e.g., `D:\data\accounts.txt`).
* Output variable: The name of the variable to store the check result (`True` or `False`).

#### Practical example: Check configuration file before running the script

Suppose you write a script to automatically fill in information and require the script to read data from the file `D:\GPM\config.json`. If the user forgets to create this file or enters the wrong path, the script will encounter a system error when it reaches the file reading command.

To handle this safely, you configure the script as follows:

* Step 1: Call the File exists action, enter the path `D:\GPM\config.json`, and name the output variable `$isFileReady`.
* Step 2: Use the If block to check: `If $isFileReady = False`.
* Step 3: Inside this If block, call the Throw action with the content: `"Error: You have not created the config.json file on drive D, please check again!"`.

Result: The script will automatically check first. If the file does not exist, it will proactively stop the flow and trigger a visually red warning to let you know, instead of trying to continue and crashing the script.

<figure><img src="../../.gitbook/assets/image (147).png" alt=""><figcaption></figcaption></figure>