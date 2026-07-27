---
description: Get the text content currently in the clipboard.
---

# Get clipboard text

Get clipboard text is an action used to read (retrieve) all the text content currently stored in the computer's clipboard – which is the text you just performed a Copy command (`Ctrl + C`) on from any source – and then save that value into an output variable.

This action is extremely flexible when you need to coordinate data processing between external software (such as Excel, Notepad, other data scraping tools) with the GPM Automation browser.

#### Configuration parameters:

* Output variable: The variable name that stores the text string retrieved from the clipboard.

> ⚠️ Extremely important note regarding Multi-threading: This action is not suitable for running with multiple threads. The Windows operating system only has a single shared clipboard for the entire computer. If you open multiple profiles running at the same time, the threads will compete and overwrite each other's data, resulting in one thread mistakenly picking up the data of another thread. Therefore, this action should only be used when running single-threaded (1 profile at a time).

#### Real-world example: Retrieve a discount code manually copied outside to fill into the browser

Suppose you are running an automated ordering scenario in single-threaded mode. Before clicking to run the workflow, you browse the web and find a great discount code, so you highlight the string `GIAMGA50K` with your mouse and press `Ctrl + C` to save it into the computer's memory.

In the GPM Automate scenario, when the browser navigates to the checkout page and needs to enter the code, you configure as follows:

* Step 1: Call the Get clipboard text action, name the output variable `$copiedText`.
* Step 2: Call an input action (e.g. Key press), pass the `$copiedText` variable into the discount code field on the website.

Result: The system will automatically pull the `GIAMGA50K` string from Windows' clipboard and fill it directly into the website to apply the discount code, helping you smoothly combine manual actions with the automated workflow.

<figure><img src="../../.gitbook/assets/image (161).png" alt=""><figcaption></figcaption></figure>