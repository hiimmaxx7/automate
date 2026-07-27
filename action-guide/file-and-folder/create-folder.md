# Create folder

Create folder is an action used to initialize a completely new folder on the computer's hard drive at the specified path.

This action has a smart and safe operating mechanism:

* If the folder does not exist yet: The system will automatically create that folder (including automatically creating parent folders if they don't already exist).
* If the folder already exists: The system will skip and continue running the next action, absolutely without overwriting or affecting the data inside the old folder.

🎥 Watch more instructional videos: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Folder Path: The absolute path leading to the folder you want to initialize (Example: `D:\GPM_Softwares\Data_Crawler`).

#### Practical example: Automatically create a folder to store Screenshots by date

When running account nurturing or data scraping scripts, you often need to capture the browser screen when encountering an error for easy review later. To make management easier, you want the system to automatically group images into a separate folder each day based on the date format (Example: `D:\GPM_Screenshots\2026-06-29`).

* How to configure:
  * Before calling the screenshot command, you call the Create folder action.
  * Folder Path: You combine the fixed path with the system time variable, filling in the field: `D:\GPM_Screenshots\$currentDate`.
* Result: When the script runs this step, the system will automatically check whether a folder named with today's date (for example: `2026-06-29`) already exists. If not, it will automatically create a new clean folder. The Screenshot actions afterward simply need to point the image save path to this folder, helping your data always be neatly organized by day.

<figure><img src="../../.gitbook/assets/image (158).png" alt=""><figcaption></figcaption></figure>