# File read all text

File read all text is an action used to read the entire content of a text file in `.txt` format all at once. All data inside the file will be returned as a single string and stored in an output variable (Output variable).

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the `.txt` file to be read (Example: `D:\data\content.txt`).
* Output variable: The variable name storing the string structure just read.

#### Practical example: Reading pre-prepared article content

Suppose you have prepared a long article (consisting of multiple sentences, line breaks, spaces) saved in the text file `D:\GPM\post.txt`. You want to retrieve all of this content to automatically fill in the posting box on a browser:

* Configuration:
  * File Path: Enter the path `D:\GPM\post.txt`
  * Output variable: Name the result-storing variable `$textContent`.
* Result: The system will capture all characters and line structures in the file, assigning them to the `$textContent` variable. In the next steps, you just need to call the Key press action, passing this `$textContent` variable into the website's input field, and you're done.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>