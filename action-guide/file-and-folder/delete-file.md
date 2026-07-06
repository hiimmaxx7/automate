---
description: Delete file by File Path.
---

# Delete file

Delete file is an action used to completely remove a file from the computer's hard drive according to the specified path.

🎥 See more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

> ⚠️ Important note: The file deleted by this action will disappear permanently and will not be in the Recycle Bin of Windows. Therefore, you need to be sure about the path before executing to avoid accidentally deleting important data.

#### Configuration parameters:

* File Path: The absolute path to the file that needs to be deleted on the computer (e.g., `D:\data\temp_cookie.txt`).

#### Practical example: Automatically clean up temporary files after the script ends

When running scripts such as downloading videos from the internet to re-upload to another channel, or exporting temporary data to a text file for string processing. After completing the task (the video has been uploaded, the data has been synchronized to Google Sheet), you need to delete these intermediate files to avoid filling up the computer's memory.

* Configuration method:
  * At the end of the script, you call the Delete file action.
  * File Path: Enter the path of the temporary file used, for example: `D:\render\temp_video.mp4`.
* Result: The system will completely delete the file `temp_video.mp4` in the D drive. Your working directory will always be tidy, and the computer will not experience hard drive overflow after many days of running automated threads.

<figure><img src="../../.gitbook/assets/image (151).png" alt=""><figcaption></figcaption></figure>