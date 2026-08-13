---
description: Download a file to your computer via the HTTP protocol.
---

# HTTP Download

HTTP Download is an advanced action used to directly download a file (such as an image, video, document, zip file, etc.) from an online link (URL) to store on your computer without needing to open a browser to manually click the Download button.

#### Configuration parameters:

* URL: The online link that leads directly to the file you want to download (e.g., `https://example.com/images/avatar.jpg`).
* Save Path: The absolute path on your computer where you want to save the file after downloading, including the file name and format extension (e.g., `D:\GPM_Data\downloads\avatar.jpg`).
* Headers: Additional information sent with the request to authenticate access or simulate a browser if the server requires it (e.g., `User-Agent: Mozilla/5.0...` or `Authorization: Bearer $token`). If downloading a public file, you can leave this field blank.
* Output variable: The name of the variable that stores the result returned by the action (usually returns a boolean value `True` if the file download is successful or the log content from the system).

#### Practical example: Automatically download a video from an available link to your computer

Suppose you are running a web scraping script and the system has extracted an online video link stored in the variable `$videoUrl`. You want to download this video to a fixed folder on drive D to prepare for the next processing steps:

* Configuration:
  * URL: Pass the variable `$videoUrl` into the input field.
  * Save Path: Fill in the specific file save path, for example: `D:\GPM_Data\Videos\downloaded_video.mp4`.
  * Headers: Leave blank (if the download link is public and does not require an account).
  * Output variable: Name the variable that stores the result as `downloadStatus`.

Result: The system will automatically connect to the network, download the video file from the link `$videoUrl`, and output it as a physical file named `downloaded_video.mp4` neatly located in the folder `D:\GPM_Data\Videos\`. The variable `$downloadStatus` will receive a value so you can use an If block to check whether the file has been downloaded successfully before proceeding to the next actions.

<figure><img src="../../.gitbook/assets/ht-02.png" alt=""><figcaption></figcaption></figure>