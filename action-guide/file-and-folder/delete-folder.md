# Delete folder

Delete folder is an action used to completely remove a folder from the computer's hard drive according to the specified path. When executed, this action will thoroughly scan and delete all files as well as subfolders contained within it.

> ⚠️ Extremely important note: A folder deleted using this action will be permanently destroyed and will not be placed in the Windows Recycle Bin. You need to carefully check the path to avoid accidentally deleting system folders or important computer data.

🎥 See more instructional video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Folder Path: The absolute path leading to the folder to be deleted on the computer (Example: `D:\GPM_Data\temp_cache`).

#### Practical example: Automatically clean up the cache folder after the workflow finishes running

When you write a script to download short-form videos (Shorts, Reels, TikTok) to your computer for processing, editing, and then re-uploading to another channel. The script will usually create a temporary folder to store raw video files, separated audio files, and other data generated during the rendering process.

After the script has successfully uploaded the video to the platforms, you need to delete this temporary folder to free up disk space:

* Configuration: At the final step of the script, you call the Delete folder action.
  * Folder Path: Enter the path of the temporary folder used, for example: `D:\GPM_Softwares\Render_Temp`.
* Result: The system will completely delete the `Render_Temp` folder along with all the junk files generated inside it. Your computer will always stay clean, run smoothly, and won't worry about running out of storage after a long period of automatic operation.

<figure><img src="../../.gitbook/assets/image (160).png" alt=""><figcaption></figcaption></figure>