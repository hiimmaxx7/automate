# Throw

Throw is an action used to actively raise a custom error message (Exception) that you define yourself and immediately stop the current script flow.

The core difference between Throw and Stop lies in the reporting status after the flow stops:

* Stop: Turns off the flow and the system still records the run status as completed (Completed - displayed in green).
* Throw: Turns off the flow and the system will mark the status as encountering an error (Error - highlighted in red) along with the specific error content in the system log (Log).

#### Practical example: Throwing an error when the ad account balance runs out

Suppose you are building a script to automatically set up an ad campaign. Before setting it up, the script needs to go to the management page to check the budget. If the balance is 0, the script cannot continue:

* Configuration:
  * Use an If block to check: `If balance = 0`.
  * Inside the If block, call the Throw action and enter the error message content as: `"Error: Account is out of money, cannot set up campaign!"`.
* Result: When the flow reaches this point, this profile's flow will immediately close. On the GPM Automate progress management table, that profile's row will be switched to Error status (highlighted in red) along with the error message text. You just need to glance through the list to immediately filter out which accounts are experiencing errors to handle them, without confusing them with successfully run flows (Completed).

<figure><img src="../../.gitbook/assets/image (140).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (141).png" alt=""><figcaption></figcaption></figure>