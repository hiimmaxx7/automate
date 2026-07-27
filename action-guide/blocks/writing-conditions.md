---
description: >-
  When using navigation blocks such as If, Else if, or While, you need to set
  up a conditional expression for the system to check at runtime. This
  expression will return a result of True (true) or False (false).
---

# Guide to Writing Conditions

🎥 See more tutorial video: [Here](https://youtu.be/L-w9dT8B2DM).

> ⚠️ Core rule about Strings: For text/string data types, you must wrap them in double quotes `""` (Example: `$name = "admin"`). For numbers, you enter them directly.

#### 1. Arithmetic comparison operators (Only applicable to Numbers)

* `>` : Greater than. (Example: `$count > 5`)
* `<` : Less than. (Example: `$loopIndex < 10`)
* `>=` : Greater than or equal to.
* `<=` : Less than or equal to.

#### 2. Logical comparison operators (Applicable to both Numbers and Strings)

* `=` : Equal to.
  * _Example_: `3 = 3` ➡️ `true`
  * _Example_: `"hello" = "hola"` ➡️ `false`
* `!=` : Not equal to (Negation of equal).
  * _Example_: `3 != 4` ➡️ `true`
  * _Example_: `"hello" != "hello"` ➡️ `false`

#### 3. String operators

* `contains` : Checks whether the preceding string contains the following string.
  * _Example_: `"ABCD" contains "AB"` ➡️ `true`
  * _Example_: `"AB" contains "ABCD"` ➡️ `false`
* `!contains` : Checks whether the preceding string does NOT contain the following string.
  * _Example_: `!"ABCD" contains "AB"` ➡️ `false`
  * _Example_: `!"AB" contains "ABCD"` ➡️ `true`
* `contains "B"` (When standing alone before B): Checks whether the variable or string being examined is an empty string.
  * _Result_: Returns `true` if empty, and `false` if it contains data.

#### 4. Function for checking Element on the interface (Element)

This function helps the script recognize the appearance of buttons, input fields, etc. on the webpage via the XPath path:

* `hasElement(XPATH)` : The condition is true when the element exists on the page.
* `!hasElement(XPATH)` : The condition is true when the element does not exist on the page (Negation of `hasElement`).

#### 5. How to combine multiple complex conditions

You can combine multiple conditions together in a single row by using logical symbols and parentheses `()` for grouping:

* `&&` : AND operation (All conditions must be true simultaneously).
* `||` : OR operation (Only one of the conditions needs to be true).

Practical examples when writing conditions:

*   _Case 1_: Check if the number of loop iterations is greater than 5 and the account name contains the word "abc":

    ```
    $count > 5 && $name contains "abc"
    ```
*   _Case 2_: Check if the Login button does not appear (already logged in) OR the error variable is displaying "true":

    ```
    !hasElement(//div[@id='x']) || $error = "true"
    ```