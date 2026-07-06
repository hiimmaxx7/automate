# Set clipboard text

Set clipboard text is an action used to assign (write) a string of text or the value of a variable to the operating system's clipboard. This action is equivalent to the operation of highlighting text and pressing the Copy shortcut (`Ctrl + C`) on the computer.

This action is often used as a buffer step before you use the paste command, helping to quickly input long text passages or special characters into the browser without the fear of typing errors.

#### Configuration parameters:

* Text: The raw text content (or variable containing data) that you want to load into the clipboard.

> ⚠️ A very important note regarding Multi-threading: Similar to the action of getting text, Set clipboard text is not suitable for multi-threaded execution. Since the Windows operating system uses a single shared clipboard for the entire system, having multiple profiles write data to the clipboard at the same time will cause contention, with the later thread overwriting the data of the previous thread and distorting the results. Prioritize using this action for single-threaded scenarios.

#### Real-world example: Automatically copy and paste long article content

When you need to fill in a very long text (for example, a sales article with complex line breaks) into an input field on a website. If you use the regular typing action, the system will take a long time to type each character and sometimes encounter Vietnamese font errors. The optimal method is to use the Clipboard:

* Step 1: You call the Set clipboard text action, filling in the article content in the Text field (or passing the data variable `$postContent`).
* Step 2: You click on the input field on the website, then call the Key press action with the key combination `Control+V` to paste the entire text passage into the website immediately.

Result: The entire content of the long article will be pasted into the website in an instant, ensuring that the formatting is preserved, there are no typing errors, and the script execution speed is maximized.

<figure><img src="../../.gitbook/assets/image (162).png" alt=""><figcaption></figcaption></figure>