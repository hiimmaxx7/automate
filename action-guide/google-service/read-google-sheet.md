# Read google sheet

Read google sheet is the action that instructs the automation script to connect to your Google Drive account to extract and read content from a cell or a range of data in an online Google Sheets file.

#### Configuration parameters:

* Credential file: Select the Google account authentication file (the file with the `.json` extension). This file acts as a security key, intended to establish a secure connection with the Google API system, authenticate, and authorize GPM Automate to read/write content on your Google Sheet.
  * _Detailed instructions_: You can watch a video guide on how to create this authentication file here:&#x20;
* File ID: The unique identifier of the Google Sheets file that needs to be interacted with so that the system can accurately identify the file to read data from.
  * _How to get the ID_: When you open the Google Sheet file in the browser, the URL will look like `https://docs.google.com/spreadsheets/d/abc123xyz_ID_IS_HERE/edit`. You just need to copy the string of characters located between `/d/` and `/edit` to fill in this field.
* Sheet ID: The ordinal position number of the sheet that needs to be read within the file (counting starts from `0` for the first sheet on the left, followed by 1, 2, 3... from left to right).
* Column Name or Index: Specify the position of the column to read data. You can enter in 2 ways:
  * _By letter name_: Enter the column name starting from `A`, `B`, `C`, `D`...
  * _By ordinal number (Index)_: Enter the ordinal number starting from `1` (corresponding to column 1 being column A).
* Row Index: The ordinal number of the row to read data, counting starts from `1` (corresponding to row number 1 on Google Sheet).
* Output variable: The variable name of GPM Automate used to capture and store the value of the text content read from that cell.

#### Practical example: Automatically retrieve account data from Google Sheet to fill out a Form

When you store a list of multiple MMO accounts (including Username, Password) on a shared Google Sheet file, and want the script to automatically read the first row to extract data for processing:

* Configuration to retrieve Username from cell A1:
  * Credential file: Select the path to the `client_secret_....json` file that has been configured.
  * File ID: Enter your Sheet file ID.
  * Sheet ID: `0` (Read from the first sheet).
  * Column Name or Index: Enter `A` (or enter `1`).
  * Row Index: Enter `1`.
  * Output variable: `currentUsername`
* Result: GPM Automate will silently connect to Google Sheet, extract the data from cell A1, and load the text content directly into the variable `$currentUsername`. After that, you can call this variable in the Key press input action smoothly.

<figure><img src="../../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (228).png" alt=""><figcaption></figcaption></figure>