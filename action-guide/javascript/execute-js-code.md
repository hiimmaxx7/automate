# Execute JS code

Execute JS code is an extremely powerful action that allows you to deeply interact with the browser by directly running JavaScript (JS) code snippets on the current webpage. This action helps you handle complex logic algorithms, mathematical calculations, advanced data extraction, or perform interactive operations that standard No-code blocks do not yet support.

🎥 Watch more tutorial video: [Here](https://youtu.be/I4-kZ7repv8).

#### Configuration parameters:

* Path to js file or code: You can write/paste the JavaScript code directly into this field, or enter the absolute path to a `.js` file stored on your computer.
* Output variable: The GPM Automate variable name to capture the returned value after the JS code finishes running.

#### ⚠️ Core notes when writing JS code in GPM Automate:

1. A `return` statement is required: For the GPM Automate system to receive the processing result from the code and save it into the output variable, you must add a `return` statement at the end of the JS code. Without `return`, the output variable will receive an empty value (`undefined`). If your JS code doesn't need to return any value, you don't need the `return` statement.
2. This action **must** be placed inside a Main logic block, similar to running JS code in the browser's Dev tools. You can test your JS code beforehand in Dev tools before using it in Automate.
3. Rules for embedding Automate variables into JS: You can fully reference previously saved GPM Automate variables inside the JS code block using the syntax `$variable_name`.
   * For Number-type variables: You can write them directly (e.g., `const index = $index;`).
   * For String-type variables: You must wrap the variable with single quotes `'...'`, double quotes `"..."`, or ideally backticks `` `...` `` to avoid breaking the code format when the string contains spaces or special characters, for example: ``const str = `$postContent`;``.

#### Practical example: Extracting a character based on a specified position (Index)

Suppose in your GPM Automate scenario, you already have 2 variables:

* Variable `$str` storing the string: `Hello, world!`
* Variable `$index` storing the number: `7`

You want to use JavaScript code to get the character at position 7 in the above string (the expected result is the letter `w`) and save it into Automate's `$charResult` variable. You would configure the Execute JS code action as follows:

* Output variable: `charResult`
* JS code content:

```
const str = `$str`;
const index = $index;
const char = index >= 0 && index < str.length ? str[index] : "Invalid index";

return char;
```

Operating logic: The system will load the string `Hello, world!` and the number `7` into the code, run the algorithm to check the validity of the position, and extract the character. The `return char;` statement at the end will push out the letter `w` and load it directly into the `$charResult` variable for use in subsequent actions.

<figure><img src="../../.gitbook/assets/image (221).png" alt=""><figcaption></figcaption></figure>