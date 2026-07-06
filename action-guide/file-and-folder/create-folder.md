# Create folder

Create folder is an action used to initialize a completely new folder on the computer's hard drive at the specified path.

This action has an intelligent and safe operating mechanism:

* If the folder does not exist: The system will automatically create the new folder (including creating parent folders if they are not already available).
* If the folder already exists: The system will skip and continue to the next action, absolutely not overwriting or affecting the data inside the old folder.

🎥 See more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Folder Path: The absolute path to the folder you want to create (e.g., `D:\GPM_Softwares\Data_Crawler`).

#### Practical example: Automatically create a folder to save screenshots by date

When running account farming scripts or scraping data, you often need to take screenshots of the browser when encountering errors for easy review. To manage easily, you want the system to automatically group images into a separate folder each day in the date format (e.g., `D:\GPM_Screenshots\2026-06-29`).

* Configuration steps:
  * Before calling the screenshot command, you call the Create folder action.
  * Folder Path: You combine the fixed path with the system time variable, filling in the field: `D:\GPM_Screenshots\$currentDate`.
* Result: When the script runs this step, the system will automatically check if there is already a folder named with the current date (e.g., `2026-06-29`). If not, it will automatically create a new clean folder. The subsequent Screenshot actions just need to point the image save path to this folder, helping your data always be neatly categorized by day.

<figure><img src="../../.gitbook/assets/image (158).png" alt=""><figcaption></figcaption></figure>