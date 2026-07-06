# Wait popup

Wait popup is an action that instructs the script to pause and continuously check until the Popup Window appears completely on the screen before proceeding with the subsequent commands. This action helps the script run smoothly, avoiding missed commands due to weak network or slow popup loading on the website.

🎥 Watch the tutorial video: [Here](https://youtu.be/oroexOGjZfw).

#### Configuration parameters:

* Popup Title: The title of the popup window you are waiting for. The system uses a relative search mechanism (as long as the title of the child window contains the phrase you entered, the system will automatically match and record it).
* See more usage in the [Switch to Popup](../switch/switch-to-popup.md) section.