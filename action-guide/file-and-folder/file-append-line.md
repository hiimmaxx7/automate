# File append line

File append line is an action used to insert a new line of text into the last position of a `.txt` format file.

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

Unlike the overwrite action (File write all text), this action helps preserve intact all the data that already existed in the file beforehand.

* If the file does not exist yet: The system will automatically create a new `.txt` file at the specified path and then insert the line of text into it.
* If the file already exists: The system keeps the old content unchanged, automatically moves to a new line at the end of the file, and appends the new line of data to it.

#### Configuration parameters:

* File Path: The absolute path leading to the `.txt` file you want to append data to (Example: `D:\GPM\history_log.txt`).
* Text: The text content (or a variable containing text) that you want to append to the end of the file.

#### Practical example: Logging successfully run accounts

Suppose you run an interactive scenario and want to save the list of accounts that have completed their tasks into a file called `success_accounts.txt` for convenient review at the end of the day:

* Configuration method: After the account finishes the interaction steps at the end of the scenario, you call the File append line action:
  * File Path: Enter `D:\GPM\success_accounts.txt`.
  * Text: Pass in the variable containing the account name (Example: `$currentAccount`).
* Result: Each time a flow finishes running, that account name will be neatly appended one after another as separate lines in the `success_accounts.txt` file (Example: line 1 is `tk_01`, line 2 is `tk_02`...) without losing the data of the previously run accounts.

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>