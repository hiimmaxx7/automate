# File read all text

File read all text is an action used to read the entire content of a `.txt` file at once. All the data inside the file will be returned as a single string and stored in an output variable.

🎥 See more instructional video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path to the `.txt` file to be read (Example: `D:\data\content.txt`).
* Output variable: The name of the variable that stores the read string structure.

#### Practical example: Reading the content of a prepared article

Suppose you have prepared a long article (consisting of multiple sentences, line breaks, and spaces) stored in the text file `D:\GPM\post.txt`. You want to retrieve all this content to automatically fill in the post field on the browser:

* Configuration:
  * File Path: Enter the path `D:\GPM\post.txt`
  * Output variable: Name the variable that stores the result as `$textContent`.
* Result: The system will capture all characters and line structures in the file and assign them to the variable `$textContent`. In the subsequent steps, you just need to call the Key press action to pass this `$textContent` variable into the input field of the website. 

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>