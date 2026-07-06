---
description: Write data to Google Sheets
---

# Write google sheet

Write google sheet is an action that instructs the automation script to connect to your Google Drive account to overwrite or insert new content into a specific cell in an online Google Sheets file.

#### Configuration parameters:

* Credential file: Select the Google account authentication file (the `.json` file). This is a security certificate that authorizes GPM Automate to connect, authenticate, and execute commands to write content to your Google Sheet.
  * _Instructions to create the file_: Watch the tutorial video here:&#x20;
* File ID: The unique identifier of the Google Sheets file to interact with (obtained from the string located between `/d/` and `/edit` in the file's URL).
* Sheet ID: The index number of the sheet to write content to (starting from `0` for the first sheet from left to right).
* Column Name or Index: Specify the column position to write data. You can enter a letter (e.g., `A`, `B`, `C`...) or enter the index number (e.g., `1` corresponds to column A).
* Row Index: The index number of the row to write data, starting from `1`.
* Value: The text, number, or value from GPM Automate variables that you want to fill into the target cell.

#### Practical example: Automatically update account status after completion

When you are scripting for account nurturing or posting, after a Profile successfully completes a task, you want to write "Live" or "Success" into the status column on Google Sheets for easy tracking:

* How to configure to write into cell C2:
  * Credential file: Select the path to the `client_secret_....json` file you have configured.
  * File ID: Enter your Sheet file ID.
  * Sheet ID: `0` (Write in the first sheet).
  * Column Name or Index: Enter `C` (or enter `3`).
  * Row Index: Enter `2`.
  * Value: Enter the word `Live` (or pass the status variable `$status`).
* Result: GPM Automate will immediately sync and fill the word "Live" directly into cell C2 on your online Google Sheet quickly without needing to open the Docs browser.

<figure><img src="../../.gitbook/assets/image (230).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (229).png" alt=""><figcaption></figcaption></figure>