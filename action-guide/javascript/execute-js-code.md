# Execute JS code

Execute JS code is a very powerful action that allows you to deeply intervene in the browser by directly running JavaScript (JS) code on the current webpage. This action helps you handle complex logic algorithms, perform mathematical calculations, extract advanced data, or execute interactive operations that typical No-code blocks do not yet support.

🎥 Watch the tutorial video: [Here](https://youtu.be/I4-kZ7repv8).

#### Configuration parameters:

* Path to js file or code: You can write/paste the JavaScript code directly into this box, or enter the absolute path to a `.js` file stored on your computer.
* Output variable: The variable name of GPM Automate to capture the return value after the JS code has finished executing.

#### ⚠️ Key notes when writing JS code in GPM Automate:

1. The `return` statement is mandatory: For the GPM Automate system to receive the processing result from the code and store it in the output variable, you must add the `return` statement at the end of the JS code. Without `return`, the output variable will receive an empty value (`undefined`). If your JS code does not need to return any value, then the `return` statement is not necessary.
2. This action **must** be placed within the Main logic block, similar to running JS code in the browser's Dev tools. You can test your JS code in the Dev tools before using it in Automate.
3. Rules for embedding Automate variables into JS: You can call previously stored GPM Automate variables within the JS code block using the syntax `$variable_name`.
   * For number type variables (Number): You can write directly (e.g., `const index = $index;`).
   * For string type variables (String): You must wrap the variable in single quotes `'...'`, double quotes `"..."`, or ideally backticks `` `...` `` to avoid breaking the code format when the string contains whitespace or special characters, for example: ``const str = `$postContent`;``.

#### Practical example: Extracting a character based on the specified position (Index)

Suppose in your GPM Automate scenario, you already have 2 variables:

* The variable `$str` storing the string: `Hello, world!`
* The variable `$index` storing the number: `7`

You want to use JavaScript to retrieve the character located at the 7th position in the above string (the desired result is the letter `w`) and store it in the `$charResult` variable of Automate. You will configure the Execute JS code action as follows:

* Output variable: `charResult`
* Content of the JS code:

```
const str = `$str`;
const index = $index;
const char = index >= 0 && index < str.length ? str[index] : "Invalid index";

return char;
```

Operational logic: The system will load the string `Hello, world!` and the number `7` into the code, run the validity check algorithm for the position, and extract the character. The `return char;` statement at the end will push the letter `w` out and load it directly into the `$charResult` variable for you to use in subsequent actions.

<figure><img src="../../.gitbook/assets/image (221).png" alt=""><figcaption></figcaption></figure>