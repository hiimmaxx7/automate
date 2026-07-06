# File write all text

File write all text is an action used to write a string of text to a `.txt` file on the computer.

🎥 See more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

This action has a special operating mechanism (overwrite and auto-create):

* If the file does not exist: The system will automatically create a new `.txt` file at the specified path and write the content into it.
* If the file already exists: The system will completely clear all old content in the file and overwrite it with the new content.

#### Configuration parameters:

* File Path: The absolute path to the `.txt` file you want to write data to (e.g., `D:\GPM\status.txt`).
* Text: The raw text content (or a variable containing text) that you want to write to the file.

#### Practical example: Automatically create a new status report file

Suppose you start running a script for a new account interaction at the beginning of the day. You want the script to automatically clean (or create) a text file named `report.txt` on drive D, and then write the first welcome line into it to prepare for logging today.

* How to configure:
  * Call the File write all text action.
  * File Path: Enter `D:\GPM\report.txt`.
  * Text: Enter the content: `"--- Log of today's script run ---"`.
* Result:
  * If the `report.txt` file does not exist, the system will automatically create this file in the `D:\GPM\` directory.
  * If the file has been available since yesterday (filled with old text), the system will clear all that old content, turning the file into a blank file, and then write the line `"--- Log of today's script run ---"` into it.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>