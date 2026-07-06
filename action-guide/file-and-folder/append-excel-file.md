---
description: >-
  Add new data to the end of an existing Excel file without overwriting the current
  content.
---

# Append excel file

Append excel file is an intelligent action used to automatically find the first empty row at the end of the data table and append content to it, allowing you not to have to calculate or manage the row index manually.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the Excel file where data needs to be appended (e.g., `D:\GPM\data.xlsx`).
* Sheet index: The position of the sheet where data needs to be written, starting from 0 _(The first sheet is `0`)_.
* Column Name or Index: The position of the column where data needs to be written. You can specify it in two ways:
  * By letter: `A`, `B`, `C`, `D`...
  * By index number, starting from 1 _(Column A is `1`, Column B is `2`...)_.
* Value: The text content (or variable containing data) that you want to write into the last empty cell of that column.

#### Practical example: Append content to column B starting from row 6

Suppose you have an Excel file containing a current data list with text from row 1 to row 5. You want to configure a script to automatically append new data (for example, a coupon code just scratched) into the next empty cell of column B (which is cell `B6`).

Instead of using the read file action to count which row is empty and then using the _Write excel file_ command, you just need to configure the Append excel file action as follows:

* Configuration:
  * File Path: `D:\GPM\data.xlsx`
  * Sheet index: `0`
  * Column Name or Index: `B` _(Select column B to append data)_.
  * Value: Enter the string content (or pass a variable containing data, e.g., coupon code variable `$couponCode`).

Result: The system will automatically scan column B from top to bottom, recognize that rows 1 to 5 already have data, and immediately write the variable value into the first empty row (row 6 - cell `B6`). In the next run of the script, the new data will again be automatically pushed down to row 7 (`B7`), row 8 (`B8`)... in a sequential and accurate manner.

<figure><img src="../../.gitbook/assets/image (156).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (155).png" alt=""><figcaption></figcaption></figure>