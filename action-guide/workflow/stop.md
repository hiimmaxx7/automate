# Stop

Stop is an action used to immediately halt the running script at that position.

> 📌 Note on scope: This action only terminates the currently running thread of the current profile itself; it does not affect other threads or other profiles running in parallel during the same operation batch.

This action is often combined inside an If conditional block to handle serious errors, errors that prevent the script from continuing, or when the thread has finished its main task.

#### Practical example: Stop the thread when the account is Checkpointed

Suppose you are running a script to nurture an account. When the browser opens, if it detects that the account has been locked (Checkpoint), then performing further actions such as browsing posts, liking, messaging... would be completely pointless and waste machine resources.

* Configuration:
  * Use an If block to check for the appearance of the error message: `If the text "Account has been locked" appears`.
  * Inside this If block, call the Stop action.
* Result: When the system scans and detects that the account is locked, it will encounter the Stop command and immediately close that profile's thread. Profiles on other threads will continue running normally without being affected.