---
description: Download a file to your computer via the HTTP protocol.
---

# HTTP Download

HTTP Download is an advanced action used to directly download a file (such as an image, video, document, zip file, etc.) from an online link (URL) to store it on your computer without needing to open a browser to click the Download button manually.

#### Configuration parameters:

* URL: The online address that leads directly to the file you want to download (For example: `https://example.com/images/avatar.jpg`).
* Save Path: The absolute path on your computer where you want to save the file after downloading, including the file name and format extension (For example: `D:\GPM_Data\downloads\avatar.jpg`).
* Headers: Additional information sent with the request to authenticate access or simulate a browser if the server requires it (For example: `User-Agent: Mozilla/5.0...` or `Authorization: Bearer $token`). If downloading a public file, you can leave this field blank.
* Output variable: The name of the variable that stores the result returned by the action (usually returns a logical value `True` if the file download is successful or the log content from the system).

#### Practical example: Automatically download a video from an available link to your computer

Suppose you are running a web scraping script, and the system has extracted an online video link stored in the variable `$videoUrl`. You want to download this video to a fixed directory on drive D to prepare for further processing steps:

* Configuration:
  * URL: Pass the variable `$videoUrl` into the input field.
  * Save Path: Enter the specific file save path, for example: `D:\GPM_Data\Videos\downloaded_video.mp4`.
  * Headers: Leave blank (if the download link is public and does not require an account).
  * Output variable: Name the variable that stores the result as `downloadStatus`.

Result: The system will automatically connect to the network, download the video file from the link `$videoUrl`, and output it as a physical file named `downloaded_video.mp4` neatly located in the directory `D:\GPM_Data\Videos\`. The variable `$downloadStatus` will receive a value so you can use an If block to check whether the file has been successfully downloaded before proceeding to the next actions.

<figure><img src="../../.gitbook/assets/image (167).png" alt=""><figcaption></figcaption></figure>