---
description: >-
  Add new data to the end of an existing excel file without overwriting the
  current content.
---

# Append excel file

Append excel file is a smart action used to automatically find the first empty row at the end of the data table and write content sequentially into it, helping you avoid having to calculate or manage row numbers (`Row Index`) manually.

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the Excel file you want to append data to (Example: `D:\GPM\data.xlsx`).
* Sheet index: The position of the sheet to write data to, starting from 0 _(The first sheet is `0`)_.
* Column Name or Index: The position of the column to write data to. You can fill it in two ways:
  * By letter name: `A`, `B`, `C`, `D`...
  * By index number, starting from 1 _(Column A is `1`, column B is `2`...)_.
* Value: The text content (or a variable containing data) that you want to write into the last empty cell of that column.

#### Practical example: Appending content sequentially into column B starting from row 6

Suppose you have an Excel file containing a data list that currently has content from row 1 to row 5. You want to configure a scenario to automatically add new data (for example, a coupon code you just scraped) into the next empty cell of column B (which is cell `B6`).

Instead of using a file reading action to count which row is empty and then using the _Write excel file_ command, you just need to configure the Append excel file action as follows:

* Configuration:
  * File Path: `D:\GPM\data.xlsx`
  * Sheet index: `0`
  * Column Name or Index: `B` _(Select column B to append data to)_.
  * Value: Enter the string content (or pass a variable containing data, for example the coupon code variable `$couponCode`).

Result: The system will automatically scan column B from top to bottom, recognize that rows 1 to 5 already have data, and immediately write the value of the variable into the first empty row (row 6 - cell `B6`). On the next run of the scenario, the new data will automatically be pushed down to row 7 (`B7`), row 8 (`B8`)... sequentially and accurately.

<figure><img src="../../.gitbook/assets/image (156).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (155).png" alt=""><figcaption></figcaption></figure>