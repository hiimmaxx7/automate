---
description: Download a file to your computer via the HTTP protocol.
---

# HTTP Download

HTTP Download is an advanced action used to directly download a file (such as an image, video, document file, zip file...) from an online URL and save it to your computer without needing to open a browser and manually click the Download button.

#### Configuration parameters:

* URL: The online link pointing directly to the file you want to download (Example: `https://example.com/images/avatar.jpg`).
* Save Path: The absolute path on your computer where you want to save the file after downloading, including the file name and format extension (Example: `D:\GPM_Data\downloads\avatar.jpg`).
* Headers: Additional information sent along with the request to authenticate access or simulate a browser if required by the server (Example: `User-Agent: Mozilla/5.0...` or `Authorization: Bearer $token`). If downloading a public file, you can leave this field blank.
* Output variable: The variable name storing the returned result of the action (usually returns a logical value `True` if the file is downloaded successfully, or the response log content from the system).

#### Practical example: Automatically download a video from an available URL to your computer

Suppose you are running a scenario that scrapes posts, and the system has extracted an online video URL saved into the variable `$videoUrl`. You want to download this video to a fixed folder on drive D to prepare for the next processing steps:

* Configuration:
  * URL: Pass the variable `$videoUrl` into the input field.
  * Save Path: Enter the specific file save path, for example: `D:\GPM_Data\Videos\downloaded_video.mp4`.
  * Headers: Leave blank (if the download link is public and doesn't require an account).
  * Output variable: Name the result-storing variable `downloadStatus`.

Result: The system will automatically connect to the network, download the video file from the `$videoUrl` path, and render it into a physical file named `downloaded_video.mp4` neatly placed in the `D:\GPM_Data\Videos\` folder. The `$downloadStatus` variable will receive a value so you can use an If block to check whether the file has been successfully downloaded before moving on to subsequent actions.

<figure><img src="../../.gitbook/assets/image (167).png" alt=""><figcaption></figcaption></figure>