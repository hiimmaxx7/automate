# Folder exists

Folder exists is an action used to check whether a folder exists on the computer's hard drive at the specified path. The return result of this action is a Logic value: True (if the folder is found) or False (if the folder does not exist).

This action is often used as a preliminary step before performing operations such as creating a new folder, deleting a folder, or moving files into it, helping the script run smoothly and not abruptly stop due to path errors.

🎥 See more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Folder Path: The absolute path to the folder to check on the computer (e.g., `D:\GPM_Data`).
* Output variable: The name of the variable to store the check result (`True` or `False`).

#### Practical example: Check the Profile image storage folder before downloading

Suppose you have an automated script to download profile pictures from the internet to save in a separate folder for each Profile structured as: `D:\GPM_Data\Profile_1`. If the `Profile_1` folder has not been created on drive D, the subsequent image download action will fail immediately.

To handle this logic intelligently, you configure as follows:

* Step 1: Call the Folder exists action, fill in the folder path to check as `D:\GPM_Data\Profile_1`, and name the output variable `$isFolderReady`.
* Step 2: Use the If conditional block to check: `If $isFolderReady = False` (meaning this folder does not exist).
* Step 3: Inside the If block, call the Create folder action with the path `D:\GPM_Data\Profile_1` to have the system automatically create this folder.

Result: The script will automatically check first. If the folder does not exist, it will create it before proceeding to download the image, ensuring the flow runs safely and never crashes.

<figure><img src="../../.gitbook/assets/image (157).png" alt=""><figcaption></figcaption></figure>