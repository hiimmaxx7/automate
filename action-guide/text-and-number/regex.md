# Regex

Regex (Regular Expression) is like a magnifying glass that helps you precisely find a piece of text hidden within a large document, or like a filter that allows you to retain the exact data format you need (such as phone numbers, emails, OTP codes) while discarding the unnecessary surrounding text.

🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Text: The raw input text that needs data filtering (or a variable containing the text).
* Regex: The filter code/syntax used to define the structure of the string to be extracted.
* Output variable: The name of the variable to store the result after successful filtering.

#### Real-world example: Extracting OTP code from Email content

When you use the action to read emails, the system will return the entire text content of a long email. Your task is to pick out the correct 6-digit OTP code contained within it.

Suppose the input Text received is:

> "Your GPM Automate verification code is 834912. Please do not share this code with anyone, the code is valid for 5 minutes."

To filter out the 6-digit OTP, you configure the Regex action as follows:

* Text: Pass in the above text (or a variable containing the email content).
* Regex: Enter `\d{6}` _(this is the regex syntax representing 6 consecutive numeric characters)_.
* Output variable: Enter the name of the variable to store (e.g., `$otpCode`).

Result: The "filter" Regex will scan through the text, ignoring all the Vietnamese text and accurately retaining the string `834912` to assign to the variable `$otpCode`.

> 💡 Tip: Does the Regex syntax seem complicated and hard to remember? Don't worry, you don't need to memorize it. Just open AI tools (like ChatGPT, DeepSeek, Gemini...) and ask directly in natural language, for example: _"Write me a regex to filter out 6 consecutive digits"_ or _"Write regex to get the string between 'Your code is:' and the period"_. AI will generate the exact code for you to simply copy-paste into the configuration field of GPM Automate.

<figure><img src="../../.gitbook/assets/image (143).png" alt=""><figcaption></figcaption></figure>