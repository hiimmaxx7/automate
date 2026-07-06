# File append line

File append line is an action used to insert a new line of text at the end of a `.txt` file.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

Unlike the overwrite action (File write all text), this action helps preserve all existing data in the file.

* If the file does not exist: The system will automatically create a new `.txt` file at the specified path and then proceed to insert the line of text.
* If the file already exists: The system retains the old content, automatically adds a new line at the end of the file, and appends the new line of data.

#### Configuration parameters:

* File Path: The absolute path to the `.txt` file you want to append data to (e.g., `D:\GPM\history_log.txt`).
* Text: The content of the text (or a variable containing text) that you want to append to the end of the file.

#### Practical example: Logging (Log) successful accounts

Suppose you run an interactive script and want to save the list of accounts that have completed the task into the `success_accounts.txt` file for easy checking at the end of the day:

* Configuration method: After the account has completed all the interaction steps at the end of the script, you call the File append line action:
  * File Path: Enter `D:\GPM\success_accounts.txt`.
  * Text: Pass the variable containing the account name (e.g., `$currentAccount`).
* Result: Each time a flow finishes, that account name will be neatly appended as a new line in the `success_accounts.txt` file (e.g., line 1 is `tk_01`, line 2 is `tk_02`...) without losing the data of previously run accounts.

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>