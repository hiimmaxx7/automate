# Regex

Regex (Regular Expression) is like a magnifying glass that helps you precisely search for a hidden piece of text within a large document, or like a filtering net that helps you retain exactly the data format you need (such as phone numbers, emails, OTP codes) and discard the redundant text surrounding it.

🎥 Watch more tutorial videos: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Text: The raw input text that needs to be filtered (or a variable containing the text).
* Regex: The filter code/syntax used to shape the structure of the string to be extracted.
* Output variable: The name of the variable to store the result after successful filtering.

#### Practical example: Extracting an OTP code from Email content

When you use the mail reading action, the system will return the entire lengthy text content of the Email. Your task is to pick out exactly the 6-digit OTP code contained within it.

Suppose the input Text received is:

> "Your GPM Automate verification code is 834912. Please do not share this code with anyone, the code is valid for 5 minutes."

To filter out the 6-digit OTP, you configure the Regex action as follows:

* Text: Pass in the above text (or a variable containing the email content).
* Regex: Enter `\d{6}` _(this is a regex syntax representing 6 consecutive numeric characters)_.
* Output variable: Enter the variable name to store the result (Example: `$otpCode`).

Result: The Regex "filtering net" will scan through the text, skip all the Vietnamese text parts, and retain exactly the string `834912` to assign to the `$otpCode` variable.

> 💡 Small tip: Does Regex syntax look complicated and hard to remember? Don't worry, you don't need to memorize it by heart. Just open AI tools (such as ChatGPT, DeepSeek, Gemini...) and ask directly in natural language, for example: _"Write me a regex to filter out 6 consecutive numbers"_ or _"Write a regex to get the string between the word 'Your code is:' and the period"_. AI will generate the exact code for you to simply copy-paste into the configuration field of GPM Automate.

<figure><img src="../../.gitbook/assets/image (143).png" alt=""><figcaption></figcaption></figure>