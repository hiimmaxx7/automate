# Has popup

Has popup is an action used to check whether there is currently a popup window on the screen that matches the specified title. The result of the check will return a boolean value (`True` if there is a popup, or `False` if there isn't) and store it in a variable.

Unlike Wait popup (which must wait), Has popup only scans once and then continues running, allowing you to reason about conditional branches for the script.

🎥 For more instructional videos: [Here](https://youtu.be/oroexOGjZfw).

#### Configuration parameters:

* Popup Title: The title of the popup window you want to check (supports relative searching, just needs to contain the distinctive phrase).
* Output variable: The variable name to store the result of the check (receives the value `true` or `false`).
* See more usage in the [Switch to Popup](../switch/switch-to-popup.md) section.