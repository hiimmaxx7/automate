# Read excel file

Read excel file is an action used to extract the value of a specific data cell in an Excel file (`.xlsx` or `.xls`) based on the specified row and column position, and then save that value into an output variable.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the Excel file to read data from on the computer (e.g., `D:\GPM\data.xlsx`).
* Sheet index: The position of the sheet to read in the Excel file, starting from 0 _(The first sheet is `0`, the second sheet is `1`...)_.
* Column Name or Index: The position of the column containing the data to retrieve. You can fill it in two ways:
  * By letter: `A`, `B`, `C`, `D`...
  * By index number, starting from 1 _(Column A is `1`, Column B is `2`...)_.
* Row Index: The position of the row containing the data to retrieve, starting from 1 _(The first row is the header row or data row 1 will be `1`, the next row is `2`...)_.
* Output variable: The name of the variable that stores the value read from that Excel cell.

#### Practical example: Read username and password from an Excel file to log in

Suppose you have an Excel file containing a list of accounts located at `D:\GPM\accounts.xlsx`. The structure of the first sheet (Sheet index = 0) is as follows:

* Column A (Column 1): Contains Username
* Column B (Column 2): Contains Password

You want to read the account data in row number 2 (the first data row after the header):

* How to configure to get Username:
  * File Path: `D:\GPM\accounts.xlsx`
  * Sheet index: `0`
  * Column Name or Index: `A` (or fill in `1`)
  * Row Index: `2`
  * Output variable: `$username`
* How to configure to get Password: You create another similar action below:
  * The parameters remain the same, just change Column Name or Index to `B` (or fill in `2`) and set Output variable to `$password`.

Result: The system will accurately extract the value of cell `A2` into variable `$username` and cell `B2` into variable `$password`. Then, you can pass these two variables into browser interaction actions to perform automatic login.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>