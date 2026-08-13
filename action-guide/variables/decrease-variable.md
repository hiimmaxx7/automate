---
description: >-
  Decrease variable is used to subtract a numerical value (defined in the Decrease
  by section) from a variable.
---

# Decrease variable

In the Output variable field, you can enter the same name as the old variable to subtract the value cumulatively, or enter a completely different variable name to save the result to a new variable without changing the old variable.

* Decrease by: The amount you want to subtract (e.g., `1`, `2`, `5`, ...).
*   Example: You have a variable `$countdown = 10`.

    * If you enter _Output variable_ as `$countdown` and _Decrease by_ as `1` ➡️ The variable `$countdown` will decrease to `9` (cumulative subtraction).
    * If you enter _Output variable_ as `$previousRow` and _Decrease by_ as `1` ➡️ The variable `$countdown` remains `10`, while the new variable `$previousRow` will have a value of `9`.

    🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

<figure><img src="../../.gitbook/assets/va-03.png" alt=""><figcaption></figcaption></figure>