# Folder exists

Folder exists is an action used to check whether a folder currently exists on the computer's hard drive at the specified path. The result returned by this action is a Logic value: True (if the folder is found) or False (if the folder does not exist).

This action is commonly used as a preliminary step before performing operations such as creating a new folder, deleting a folder, or moving files into it, helping the script run smoothly without stopping abruptly due to a path error.

🎥 Watch more tutorial videos: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Folder Path: The absolute path to the folder to be checked on the computer (e.g.: `D:\GPM_Data`).
* Output variable: The name of the variable that stores the check result (`True` or `False`).

#### Practical example: Checking the folder for storing Profile avatar images before downloading

Suppose you have a script that automatically downloads avatar images from the internet to save them into each Profile's own folder, structured as: `D:\GPM_Data\Profile_1`. If this `Profile_1` folder has not been created yet on drive D, the subsequent image download action will fail immediately.

To handle this logic intelligently, you configure it as follows:

* Step 1: Call the Folder exists action, enter the folder path to check as `D:\GPM_Data\Profile_1`, and set the output variable name as `$isFolderReady`.
* Step 2: Use the If conditional block to check: `If $isFolderReady = False` (meaning this folder does not exist yet).
* Step 3: Inside the If block, call the Create folder action with the path `D:\GPM_Data\Profile_1` so the system automatically creates this new folder.

Result: The script will automatically check first. If the folder doesn't exist, it will automatically create it before proceeding to download the image, ensuring the workflow always runs safely and never crashes.

<figure><img src="../../.gitbook/assets/image (157).png" alt=""><figcaption></figcaption></figure>