---
description: >-
  For is a command block used to repeat a group of actions a predetermined number of times. This loop uses a default counter variable called $loopIndex to track the progress of the iteration.
---

# For

🎥 Watch the tutorial video: [Here](https://youtu.be/4O4dPC-CNHM).

#### Configuration parameters in the For loop:

* 🟢 Start: The starting value of the loop variable `$loopIndex`.
* 🔴 End: The ending value. The loop will stop when `$loopIndex` reaches the value `End - 1`.
* ⚡ Increase by: The step (increment value) of `$loopIndex` after each completed iteration.

#### Practical example: Combining the For loop to read all data from an Excel file

Suppose you have an Excel file named `test.xlsx` and you need to configure the script to read all the data in column B of this file. You can combine the For loop with the system variable `$inputExcelTotalRows` as follows:

🎥 Watch the tutorial video: [Here](https://youtu.be/kbh7muMDGtI).

<figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (103).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (104).png" alt=""><figcaption></figcaption></figure>