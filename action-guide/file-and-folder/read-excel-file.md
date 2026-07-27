# Read excel file

Read excel file is an action used to extract the value of a specific data cell in an Excel file (`.xlsx` or `.xls`) based on the specified row and column position, then save that value into an output variable.

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the Excel file to read data from on your computer (Example: `D:\GPM\data.xlsx`).
* Sheet index: The position of the sheet to read in the Excel file, starting from 0 _(the first sheet is `0`, the second sheet is `1`...)_.
* Column Name or Index: The position of the column containing the data to retrieve. You can enter it in two ways:
  * By letter name: `A`, `B`, `C`, `D`...
  * By index number, starting from 1 _(Column A is `1`, column B is `2`...)_.
* Row Index: The position of the row containing the data to retrieve, starting from 1 _(the first row is the header row or data row 1 will be `1`, the next row is `2`...)_.
* Output variable: The name of the variable that stores the value read from that Excel cell.

#### Practical example: Read username and password from an Excel file to log in

Suppose you have an Excel file containing a list of accounts saved at the path `D:\GPM\accounts.xlsx`. The structure of the first sheet (Sheet index = 0) is as follows:

* Column A (Column 1): Contains Username
* Column B (Column 2): Contains Password

You want to read the account data at row 2 (the first data row after the header row):

* How to configure to get the Username:
  * File Path: `D:\GPM\accounts.xlsx`
  * Sheet index: `0`
  * Column Name or Index: `A` (or enter `1`)
  * Row Index: `2`
  * Output variable: `$username`
* How to configure to get the Password: Create an additional action similar to the one below:
  * Keep the other parameters unchanged, only change Column Name or Index to `B` (or enter `2`) and set the Output variable to `$password`.

Result: The system will accurately extract the value of cell `A2` into the variable `$username` and cell `B2` into the variable `$password`. You can then pass these two variables into a browser interaction action to perform automatic login.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>