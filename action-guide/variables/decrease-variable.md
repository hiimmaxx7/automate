---
description: >-
  Decrease variable is used to subtract a numeric value (specified in the
  Decrease by field) from a variable.
---

# Decrease variable

In the Output variable field, you can enter the same name as the old variable to subtract the value cumulatively, or enter a completely different variable name to save the result to a new variable without changing the old variable.

* Decrease by: The amount you want to subtract (Example: `1`, `2`, `5`...).
*   Example: You have a variable `$countdown = 10`.

    * If you enter `$countdown` as the _Output variable_ and `1` as _Decrease by_ ➡️ The variable `$countdown` will decrease to `9` (cumulative subtraction).
    * If you enter `$previousRow` as the _Output variable_ and `1` as _Decrease by_ ➡️ The variable `$countdown` remains unchanged at `10`, while the new variable `$previousRow` will have a value of `9`.

    🎥 See more tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

<figure><img src="../../.gitbook/assets/image (119).png" alt=""><figcaption></figcaption></figure>