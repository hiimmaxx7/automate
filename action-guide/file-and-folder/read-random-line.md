# File read random line

File read random line is an action used to open an existing `.txt` text file, randomly select any line from that file, and then save the content of the selected line into an output variable.

This action is extremely useful when you manage social media accounts (Facebook, X, Instagram...) and want to randomly retrieve a comment, a status, or a search keyword to prevent the script from repeating the same content across different profiles.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the `.txt` file containing the available data list on your computer.
* Output variable: The name of the variable that stores the content of the randomly selected line.

#### Practical example: Automatically comment randomly to avoid spam

Suppose you have prepared a file containing a list of positive comments stored at `D:\GPM\comments.txt`, with each comment on a separate line:

```
Great post!
Absolutely wonderful.
Very useful information, thank you to the author.
```

When the script navigates the browser to a post and is about to click comment, you configure as follows:

* Configuration steps:
  * Call the action File read random line.
  * File Path: Enter the path `D:\GPM\comments.txt`.
  * Output variable: Name the variable that stores the result as `$randomComment`.
* Result: Each time the flow reaches this step (or each profile runs independently), the system will automatically randomly select one of the three lines above (For example: Profile 1 selects line number 3: `"Very useful information, thank you to the author."` and assigns it to the variable `$randomComment`). You just need to call the Key press action to pass this variable into the comment box on the website. 

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>