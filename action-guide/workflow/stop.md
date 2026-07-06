# Stop

Stop is an action used to immediately halt the currently running script at that point.

> 📌 Note about scope: This action only affects the termination of the running thread of the current profile, without impacting other threads or profiles running concurrently in the same operation.

This action is often combined within an If conditional block to handle critical errors, errors that cannot continue the script, or when the thread has completed its main task.

#### Real-world example: Stop the thread when the account is at Checkpoint

Suppose you are scripting for account management. When you open the browser, if it detects that the account has been locked (Checkpoint), then performing subsequent actions like scrolling through posts, liking, messaging... is completely pointless and wastes system resources.

* Configuration method:
  * Use an If block to check for the appearance of the error message: `If the text "Account is locked" appears`.
  * Inside this If block, you call the Stop action.
* Result: When the system scans and detects the account is locked, it will encounter the Stop command and immediately close that profile's thread. Other profiles in different threads will continue to run normally without being affected.