---
description: >-
  Increase variable is used to add a numeric value (defined in the Increase by section) to a variable.
---

# Increase variable

In the Output variable field, you can enter the same name as the old variable to accumulate the value, or enter a completely different variable name to save the result to a new variable without changing the old variable.

* Increase by: The amount you want to add (e.g., `1`, `2`, `5`...).
*   Example: You have a variable `$row = 5`.

    * If you enter _Output variable_ as `$row` and _Increase by_ as `1` ➡️ The variable `$row` will increase to `6` (accumulated).
    * If you enter _Output variable_ as `$nextRow` and _Increase by_ as `1` ➡️ The variable `$row` remains `5`, while the new variable `$nextRow` will have a value of `6`.

    🎥 See more tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

<figure><img src="../../.gitbook/assets/image (118).png" alt=""><figcaption></figcaption></figure>