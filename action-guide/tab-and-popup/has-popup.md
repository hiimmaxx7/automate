# Has popup

Has popup is an action used to check whether there is a popup window currently appearing on the screen that matches the specified title. The result of the check will return a boolean value (`True` if there is a popup, or `False` if there is not) and store it in a variable.

Unlike Wait popup (which must wait), Has popup only scans once and then continues running, allowing you to branch conditional logic for the scenario.

🎥 Watch the tutorial video: [Here](https://youtu.be/oroexOGjZfw).

#### Configuration parameters:

* Popup Title: The title of the popup window you want to check (supports relative searching, just needs to contain the characteristic phrase).
* Output variable: The variable name to store the check result (receives the value `true` or `false`).
* See more usage in the section [Switch to Popup](../switch/switch-to-popup.md).