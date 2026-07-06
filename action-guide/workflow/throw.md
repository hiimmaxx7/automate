# Throw

Throw is an action used to actively throw an error message (Exception) that you define and immediately stop the current script flow.

The core difference between Throw and Stop lies in the reporting status after stopping the flow:

* Stop: Stops the flow and the system still records the running status as completed (Completed - displayed in green).
* Throw: Stops the flow and the system will mark the status as encountered an error (Error - highlighted in red) along with the specific error message in the system log (Log).

#### Practical example: Throwing an error when the advertising account balance is depleted

Suppose you are automating a script to launch an advertising campaign. Before setting it up, the script needs to go to the management page to check the budget. If the balance is 0, the script cannot continue:

* Configuration method:
  * Use an If block to check: `If balance = 0`.
  * Inside the If block, you call the Throw action and fill in the error message as: `"Error: Account out of funds, cannot launch camp!"`.
* Result: When it reaches this point, the flow of this profile will immediately close. On the progress management board of GPM Automate, that profile line will be switched to Error status (Highlighted in red) along with the error message. You can easily glance through the list to filter out which accounts are encountering errors for processing without mixing them up with successful flows (Completed).

<figure><img src="../../.gitbook/assets/image (140).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (141).png" alt=""><figcaption></figcaption></figure>