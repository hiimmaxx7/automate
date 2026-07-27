# Move / rename folder

Move / rename folder is a versatile action used to move an entire folder (including all files and subfolders inside it) to a new location, or to rename that folder right at its current location on the hard drive.

Similar to file operations, this action will completely cut the folder to the new location (if moving) or completely replace the old name (if renaming).

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Source Folder: The absolute path of the source folder to be moved or renamed (Example: `D:\GPM_Data\old_name`).
* Destination Folder: The absolute path of the destination folder to move to, or the path containing the new folder name after renaming (Example: `E:\Backup_Data\old_name` or `D:\GPM_Data\new_name`).

#### Practical example 1: Rename folder (Rename)

You have a folder containing temporary data named `temp_data`. After the script finishes processing all the data inside, you want to rename this folder to `processed_data` to mark it as completed.

* Source Folder: `D:\GPM_Data\temp_data`
* Destination Folder: `D:\GPM_Data\processed_data` _(keep the parent path unchanged, only change the folder name at the end)_.
* Result: The `temp_data` folder will be immediately renamed to `processed_data`.

<figure><img src="../../.gitbook/assets/image (159).png" alt=""><figcaption></figcaption></figure>