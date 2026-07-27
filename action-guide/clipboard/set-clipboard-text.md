# Set clipboard text

Set clipboard text is an action used to assign (write) a text string or the value of a variable into the operating system's temporary memory (Clipboard). This action is equivalent to highlighting text and pressing the Copy shortcut (`Ctrl + C`) on a computer.

This action is commonly used as an intermediate step before you use a paste command, helping you enter long text segments or special characters into the browser quickly without worrying about typing errors.

#### Configuration parameters:

* Text: The raw text content (or a variable containing the data) that you want to load into the clipboard.

> ⚠️ Extremely important note regarding Multi-threading: Similar to the text-retrieving action, Set clipboard text is not suitable when running multi-threaded. Since the Windows operating system only uses a single shared Clipboard for the entire system, multiple profiles writing data to the Clipboard at the same time will cause conflicts, where a later thread overwrites the data of an earlier thread and distorts the results. Prioritize using this action for single-threaded scenarios.

#### Practical example: Automatically copying and pasting long article content

When you need to fill in a very long text segment (for example, a sales article with complex line-break formatting) into an input field on a website. If you use the regular key-typing action, the system will take a long time to type each character, and sometimes Vietnamese font errors may occur. The most optimal method is to use the Clipboard:

* Step 1: Call the Set clipboard text action, enter the article content into the Text field (or pass the data variable `$postContent`).
* Step 2: Click on the input field on the website, then call the Key press action with the key combination `Control+V` to paste the entire text segment directly onto the web page instantly.

Result: The entire long article content will be pasted onto the website in an instant, ensuring the formatting is preserved, no typing errors occur, and the script's execution speed is maximized.

<figure><img src="../../.gitbook/assets/image (162).png" alt=""><figcaption></figcaption></figure>