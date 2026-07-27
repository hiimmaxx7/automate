# Exit loop

Exit loop is an action used to forcibly exit the current loop (For or While) immediately, regardless of whether the loop has completed its specified number of iterations or not. After exiting, the system will continue executing the actions located right below that loop block.

This action is often placed inside an If conditional block to handle abnormal situations or when the necessary result has already been found ahead of time.

#### Practical example: Stop checking when a valid account has already been found

Suppose you use a For loop to scan through a list of 100 accounts in an Excel file to find an account with the status `"Live"` to use. If row 5 is already a "Live" account, you don't need to waste time running through the remaining 95 rows.

* Configuration method:
  * Inside the For block, you use an If statement to check: `If status = "Live"`.
  * Inside that If block, after processing to get the account, you call the Exit loop action.
* Result: The system runs to row 5, sees that the condition is true, immediately jumps out of the For loop, and continues running the actions below to proceed with the task.

<figure><img src="../../.gitbook/assets/image (137).png" alt=""><figcaption></figcaption></figure>