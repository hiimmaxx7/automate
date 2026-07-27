# File write all text

File write all text is an action used to write a text string into a `.txt` format file on the computer.

🎥 See more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

This action has a special operating mechanism (overwrite and automatic creation):

* If the file does not exist yet: The system will automatically create a new `.txt` file at the specified path and then write the content into it.
* If the file already exists: The system will erase all existing old content in the file and overwrite it with the new content.

#### Configuration parameters:

* File Path: The absolute path leading to the `.txt` file you want to write data to (Example: `D:\GPM\status.txt`).
* Text: The raw text content (or a variable containing text) that you want to write into the file.

#### Practical example: Automatically initialize a new status report file

Suppose you start running a new account interaction script at the beginning of the day. You want the script to automatically clean up (or create anew) a text file named `report.txt` on drive D, then write the first welcome line into it to prepare the log for today.

* Configuration:
  * Call the File write all text action.
  * File Path: Enter `D:\GPM\report.txt`.
  * Text: Enter the content: `"--- Today's script run log ---"`.
* Result:
  * If the `report.txt` file does not exist yet, the system automatically creates this file in the `D:\GPM\` folder.
  * If the file already exists from yesterday (full of old text), the system will completely clean up that old content, turning the file into a blank file and then write in the line `"--- Today's script run log ---"`.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>