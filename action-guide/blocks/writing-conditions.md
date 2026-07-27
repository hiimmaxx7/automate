---
description: >-
  When using control blocks like If, Else if, or While, you need to set up
  a condition expression for the system to check at runtime. This expression will return
  a result of True (true) or False (false).
---

# Guide to Writing Conditions

🎥 Watch the tutorial video: [Here](https://youtu.be/L-w9dT8B2DM).

> ⚠️ Core rule about Strings: For data types that are text/string, you must wrap them in double quotes `""` (Example: `$name = "admin"`). For numbers, enter them directly.

#### 1. Arithmetic Comparison Operators (Only applicable to Numbers)

* `>` : Greater than. (Example: `$count > 5`)
* `<` : Less than. (Example: `$loopIndex < 10`)
* `>=` : Greater than or equal to.
* `<=` : Less than or equal to.

#### 2. Logical Comparison Operators (Applicable to both Numbers and Strings)

* `=` : Equal.
  * _Example_: `3 = 3` ➡️ `true`
  * _Example_: `"hello" = "hola"` ➡️ `false`
* `!=` : Not equal (Negation of equality).
  * _Example_: `3 != 4` ➡️ `true`
  * _Example_: `"hello" != "hello"` ➡️ `false`

#### 3. String Handling Operators

* `contains` : Checks if the preceding string contains the following string.
  * _Example_: `"ABCD" contains "AB"` ➡️ `true`
  * _Example_: `"AB" contains "ABCD"` ➡️ `false`
* `!contains` : Checks if the preceding string does NOT contain the following string.
  * _Example_: `!"ABCD" contains "AB"` ➡️ `false`
  * _Example_: `!"AB" contains "ABCD"` ➡️ `true`
* `contains "B"` (When standing alone before B): Checks if the variable or string being examined is an empty string.
  * _Result_: Returns `true` if empty, and `false` if it contains data.

#### 4. Function to Check Element on the Interface (Element)

This function helps the script identify the presence of buttons, input fields, etc., on the webpage via XPath:

* `hasElement(XPATH)` : Condition is true when the element exists on the page.
* `!hasElement(XPATH)` : Condition is true when the element does not exist on the page (Negation of `hasElement`).

#### 5. How to Combine Multiple Complex Conditions

You can combine multiple conditions in one line using logical symbols and parentheses `()` to group:

* `&&` : AND (All conditions must be true simultaneously).
* `||` : OR (Only one of the conditions needs to be true).

Practical examples when writing conditions:

*   _Case 1_: Check if the number of iterations is greater than 5 and the account name contains the text "abc":

    ```
    $count > 5 && $name contains "abc"
    ```
*   _Case 2_: Check if the Login button does not appear (already logged in) OR the error variable is displaying the text "true":

    ```
    !hasElement(//div[@id='x']) || $error = "true"
    ```