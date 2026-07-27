# Has popup

Has popup is an action used to check whether, at the current moment, a Popup Window matching the specified title is appearing on the screen. The check result will return a logical value (`True` if there is a popup, or `False` if not) and store it in a variable.

Unlike Wait popup (which must stand by and wait), Has popup only scans once and then continues running immediately, helping you build conditional branches to direct the script's flow.

🎥 Watch the tutorial video: [Here](https://youtu.be/oroexOGjZfw).

#### Configuration parameters:

* Popup Title: The title of the popup window you want to check (supports relative search, just needs to contain a distinctive phrase).
* Output variable: The variable name to store the check result (receives the value `true` or `false`).
* See more usage in the [Switch to Popup](../switch/switch-to-popup.md) section.