# Delete folder

The Delete folder action is used to completely remove a directory from the computer's hard drive at the specified path. When executed, this action will thoroughly scan and delete all files as well as subdirectories contained within it.

> ⚠️ Extremely important note: The folder deleted by this action will be permanently destroyed and will not be in the Windows Recycle Bin. You need to carefully check the path to avoid mistakenly deleting system folders or important data on the computer.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Folder Path: The absolute path to the folder that needs to be deleted on the computer (e.g., `D:\GPM_Data\temp_cache`).

#### Practical example: Automatically clean up the cache folder after running the workflow

When you write a script to download short videos (Shorts, Reels, TikTok) to your computer for processing, editing, and then uploading to another channel, the script will typically create a temporary folder to hold raw video files, separate audio files, and data generated during the rendering process.

After the script has successfully uploaded the videos to the platforms, you need to delete this temporary folder to free up space on the hard drive:

* Configuration method: In the last step of the script, you call the Delete folder action.
  * Folder Path: Enter the path of the temporary folder used, for example: `D:\GPM_Softwares\Render_Temp`.
* Result: The system will completely delete the `Render_Temp` folder along with all the junk files generated inside. Your computer will always be clean, run smoothly, and not worry about running out of memory after a long period of automated operation.

<figure><img src="../../.gitbook/assets/image (160).png" alt=""><figcaption></figcaption></figure>