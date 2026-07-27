---
description: Delete a file according to the File Path.
---

# Delete file

Delete file is an action used to completely remove a file from the computer's hard drive according to the specified path.

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

> ⚠️ Important note: A file deleted using this action will disappear permanently and will not be placed in the Windows Recycle Bin. Therefore, you need to be sure about the path before executing it to avoid accidentally deleting important data.

#### Configuration parameters:

* File Path: The absolute path to the file that needs to be deleted on the computer (Example: `D:\data\temp_cookie.txt`).

#### Practical example: Automatically clean up temporary files after the script finishes

When running scripts such as downloading videos from the internet to reupload them to another channel, or exporting temporary data to a text file for string processing. After the work is completed (the video has finished uploading, the data has been synced to Google Sheet), you need to delete these intermediate files to avoid filling up the computer's memory.

* Configuration steps:
  * At the end of the script, call the Delete file action.
  * File Path: Enter the path of the temporary file used, for example: `D:\render\temp_video.mp4`.
* Result: The system will completely delete the `temp_video.mp4` file in the D drive folder. Your working directory will always be tidy, and the computer will not run into hard drive overflow issues after many days of running automated threads.

<figure><img src="../../.gitbook/assets/image (151).png" alt=""><figcaption></figcaption></figure>