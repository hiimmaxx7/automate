# Read Google sheet

Read Google sheet is an action that instructs the automation script to connect to your Google Drive account to extract and read content from a cell or a data range in an online Google Sheets file.

#### Configuration parameters:

* Credential file: Select the Google account authentication file (a file with a `.json` extension). This file acts as a security key, used to establish a secure connection with the Google API system, authenticate, and grant permission for GPM Automate to read/write content on your Google Sheet.
  * _Detailed instructions_: You can watch the video tutorial on how to create this authentication file here:&#x20;
* File ID: The unique identifier of the Google Sheets file to interact with, so the system can accurately determine which file to read data from.
  * _How to get the ID_: When you open a Google Sheet file in your browser, the URL path will look like `https://docs.google.com/spreadsheets/d/abc123xyz_ID_Code_Is_Here/edit`. You just need to copy the string of characters between `/d/` and `/edit` to fill into this field.
* Sheet ID: The positional order number of the sheet (Sheet) to read within the file (counted starting from `0` for the leftmost first sheet, then subsequently 1, 2, 3... from left to right).
* Column Name or Index: Specifies the column position to read data from. You can enter it in 2 ways:
  * _By letter name_: Enter the column name starting from `A`, `B`, `C`, `D`...
  * _By order number (Index)_: Enter the order number starting from `1` (corresponding to column 1 being column A).
* Row Index: The order number of the row to read data from, counted starting from `1` (corresponding to row number 1 on Google Sheet).
* Output variable: The GPM Automate variable name used to capture and store the text content value read from that cell.

#### Practical example: Automatically retrieve account data from Google Sheet to fill in a Form

When you store a large list of MMO accounts (including Username, Password) on a shared Google Sheet file, and want the script to automatically read the first row to retrieve data for processing:

* How to configure to get the Username in cell A1:
  * Credential file: Select the path to the configured `client_secret_....json` file.
  * File ID: Enter your Sheet file's ID code.
  * Sheet ID: `0` (Read from the first sheet).
  * Column Name or Index: Enter `A` (or enter `1`).
  * Row Index: Enter `1`.
  * Output variable: `currentUsername`
* Result: GPM Automate will silently connect to the Google Sheet, extract the data at cell A1, and load the text content directly into the `$currentUsername` variable. Afterward, you can call this variable in the Key press input action smoothly.

<figure><img src="../../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (228).png" alt=""><figcaption></figcaption></figure>