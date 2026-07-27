# Write excel file

Write excel file is an action used to write or update a specific value into a defined data cell in an Excel file (`.xlsx` or `.xls`) based on the specified row and column position.

🎥 Watch more tutorial videos: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the Excel file to write data into (Example: `D:\GPM\data.xlsx`).
* Sheet index: The position of the sheet to write data into, starting from 0 _(The first sheet is `0`, the second sheet is `1`...)_.
* Column Name or Index: The column position to write data into. You can enter it in two ways:
  * By letter name: `A`, `B`, `C`, `D`...
  * By index number, starting from 1 _(Column A is `1`, column B is `2`...)_.
* Row Index: The row position to write data into, starting from 1 _(Row 1 is `1`, row 2 is `2`...)_.
* Value: The text content (or a variable containing data) that you want to write into that Excel cell.

#### Practical example: Updating account status matched to each row of the running Profile

When you operate a multi-thread scenario (running multiple profiles at the same time), each profile will be automatically assigned system variables by GPM Automate to identify itself: the input Excel configuration file path variable (`$inputExcelFileLocation`) and the row number of the data that profile is handling (`$inputExcelCurrentRow`).

Suppose you want the scenario, after successfully completing the login step, to automatically write the word `"Success"` into column C (Status) corresponding to the correct row of that profile in the Excel file:

* Configuration:
  * File Path: Pass in the system variable `$inputExcelFileLocation`.
  * Sheet index: `0` _(Write into the first sheet)_.
  * Column Name or Index: `C` _(Status column)_.
  * Row Index: Pass in the system variable `$inputExcelCurrentRow` _(The system automatically understands the corresponding row of each profile, for example profile 1 running row 2 will write into row 2, profile 2 running row 3 will write into row 3)_.
  * Value: Enter the string content `"Success"` (or a variable containing your log).

Result: As the scenario progresses, it will automatically update the results synchronously and accurately into the Excel file in real time without worrying about overwriting or misaligning data rows between threads.

<figure><img src="../../.gitbook/assets/image (154).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (152).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (153).png" alt=""><figcaption></figcaption></figure>