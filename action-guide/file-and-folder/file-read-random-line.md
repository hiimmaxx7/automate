# File read random line

File read random line is an action used to open an existing `.txt` text file, automatically pick a random line from that file, and then save the content of the picked line into an output variable.

This action is extremely useful when you are warming up social media accounts (Facebook, X, Instagram...) and want to randomly get a comment (Comment), a status post (Status), or a search keyword so that the script doesn't repeat the same content across profiles.

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the `.txt` file containing the available data list on your computer.
* Output variable: The name of the variable that stores the content of the randomly picked line.

#### Practical example: Automatically comment randomly to avoid spam

Suppose you have prepared a list file of positive comments stored at `D:\GPM\comments.txt`, with each sentence on a separate line:

```
Bài viết hay quá bạn ơi!
Tuyệt vời quá ạ.
Thông tin rất bổ ích, cảm ơn chủ thớt.
```

When the script navigates the browser to a post and is about to click comment, you configure as follows:

* How to configure:
  * Call the File read random line action.
  * File Path: Enter the path `D:\GPM\comments.txt`.
  * Output variable: Set the result variable name to `$randomComment`.
* Result: Each time the flow reaches this step (or each profile runs independently), the system will automatically pick 1 of the 3 lines above at random (For example: Profile 1 picks line 3: `"Thông tin rất bổ ích, cảm ơn chủ thớt."` and assigns it to the `$randomComment` variable). You just need to call the Key press action, passing this variable into the comment field on the website, and you're done.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>