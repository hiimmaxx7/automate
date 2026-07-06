---
description: Get the existing text content in the clipboard.
---

# Get clipboard text

Get clipboard text is an action used to read (retrieve) all the text content currently stored in the clipboard of the computer – which is the text you just copied (`Ctrl + C`) from any source – and then save that value into an output variable.

This action is extremely flexible when you need to coordinate data processing between external software (such as Excel, Notepad, other data scraping tools) and the GPM Automation browser.

#### Configuration parameters:

* Output variable: The name of the variable that stores the text string retrieved from the clipboard.

> ⚠️ A very important note regarding Multi-threading: This action is not suitable for multi-threaded execution. The Windows operating system has only one shared clipboard for the entire computer. If you open multiple profiles running at the same time, the threads will compete and overwrite each other's data, leading to one thread retrieving the wrong data from another. Therefore, this action should only be used when running in single-thread mode (1 profile at a time).

#### Practical example: Retrieve a manually copied discount code to fill in the browser

Suppose you are running an automated ordering script in single-thread mode. Before clicking to run the thread, you browse the web and find a great discount code, you highlight and press `Ctrl + C` on the string `GIAMGA50K` to save it to your computer's clipboard.

In the GPM Automate script, when the browser navigates to the checkout page and needs to enter the code, you configure it as follows:

* Step 1: Call the Get clipboard text action, naming the output variable `$copiedText`.
* Step 2: Call the input action (e.g., Key press), passing the variable `$copiedText` into the discount code input field on the website.

Result: The system will automatically pull the string `GIAMGA50K` from the Windows clipboard and fill it directly into the website to apply the discount code, allowing you to smoothly combine manual actions with automated running. 

<figure><img src="../../.gitbook/assets/image (161).png" alt=""><figcaption></figcaption></figure>