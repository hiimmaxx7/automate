# Write excel file

Write excel file is an action used to write or update a specific value into a defined cell in an Excel file (`.xlsx` or `.xls`) based on the specified row and column position.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the Excel file that needs to be written (e.g., `D:\GPM\data.xlsx`).
* Sheet index: The position of the sheet where data needs to be written, starting from 0 _(The first sheet is `0`, the second sheet is `1`...)_.
* Column Name or Index: The position of the column where data needs to be written. You can fill it in two ways:
  * By letter: `A`, `B`, `C`, `D`...
  * By index number, starting from 1 _(Column A is `1`, Column B is `2`...)_.
* Row Index: The position of the row where data needs to be written, starting from 1 _(Row 1 is `1`, Row 2 is `2`...)_.
* Value: The text content (or variable containing data) that you want to write into that Excel cell.

#### Practical example: Update account status corresponding to each row of the running Profile

When you run a multi-threaded script (running multiple profiles at the same time), each profile will be assigned system variables by the GPM Automate system for identification: the variable for the input Excel file path (`$inputExcelFileLocation`) and the row number of data that the profile is handling (`$inputExcelCurrentRow`).

Suppose you want the script to automatically write the text `"Success"` into column C (Status) corresponding to the correct row of that profile in the Excel file after successfully logging in:

* Configuration:
  * File Path: Pass the system variable `$inputExcelFileLocation`.
  * Sheet index: `0` _(Write to the first sheet)_.
  * Column Name or Index: `C` _(Status column)_.
  * Row Index: Pass the system variable `$inputExcelCurrentRow` _(The system automatically understands the corresponding row for each profile, for example, profile 1 running row 2 will write to row 2, profile 2 running row 3 will write to row 3)_.
  * Value: Enter the string `"Success"` (or the variable containing your log).

Result: The script will automatically update the results synchronously and accurately into the Excel file in real-time without fear of overwriting or misaligning data between threads.

<figure><img src="../../.gitbook/assets/image (154).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (152).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (153).png" alt=""><figcaption></figcaption></figure>