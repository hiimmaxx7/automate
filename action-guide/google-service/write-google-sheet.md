---
description: Write data to google sheet
---

# Write Google sheet

Write Google sheet is an action that instructs the automation script to connect to your Google Drive account to overwrite or insert new content into a specific cell on an online Google Sheets file.

#### Configuration parameters:

* Credential file: Select the Google account authentication file (`.json` file). This is a security certificate that grants permission for GPM Automate to connect, authenticate, and execute commands to write content to your Google Sheet.
  * _Instructions for creating the file_: See the tutorial video here:&#x20;
* File ID: The unique identifier of the Google Sheets file to interact with (taken from the string of characters between `/d/` and `/edit` in the file's URL path).
* Sheet ID: The sequential number of the sheet to write content to (starting from `0` for the first sheet counted from left to right).
* Column Name or Index: Specify the column position to write data to. You can enter a letter (e.g., `A`, `B`, `C`...) or enter the index number (e.g., `1` corresponds to column A).
* Row Index: The sequential number of the row to write data to, counted starting from `1`.
* Value: The text content, number, or value from a GPM Automate variable that you want to fill into the target cell.

#### Practical example: Automatically update account status after completion

When you build a script for warming up accounts or posting content, after a Profile successfully completes its task, you want to write the word "Live" or "Success" into the status column on Google Sheet for easier tracking:

* How to configure to write to cell C2:
  * Credential file: Select the path to the configured `client_secret_....json` file.
  * File ID: Enter your Sheet file's ID code.
  * Sheet ID: `0` (Write to the first sheet).
  * Column Name or Index: Enter `C` (or enter `3`).
  * Row Index: Enter `2`.
  * Value: Enter the word `Live` (or pass the status variable `$status`).
* Result: GPM Automate will immediately sync and fill in the word "Live" directly into cell C2 on your online Google Sheet quickly without needing to open the Docs browser.

<figure><img src="../../.gitbook/assets/image (230).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (229).png" alt=""><figcaption></figcaption></figure>