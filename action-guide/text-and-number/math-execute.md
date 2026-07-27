# Math execute

Math execute is an action used to perform basic mathematical calculations (such as addition `+`, subtraction `-`, multiplication `*`, division `/`) or complex arithmetic expressions from available variables, then save the result into an output variable.

🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Expression: The content of the mathematical calculation to be performed. You can combine specific numbers with available variables (Example: `(5 + 3) * 2` or `$price * $quantity`).
* Output variable: The name of the variable to store the result after the calculation is complete.

#### Practical example 1: Calculate the total order amount (Multiplication and Addition)

Suppose you are creating an automated shopping scenario or scraping order data. You have a product quantity variable `$quantity = 3`, a unit price variable `$price = 150000`, and a fixed shipping fee of `30000`.

* Configuration:
  * Expression: Enter the expression `($price * $quantity) + 30000`
  * Output variable: Enter the variable name to store the result as `$totalAmount`.
* Result: The system will calculate the value `480000` and assign it to the `$totalAmount` variable.

<figure><img src="../../.gitbook/assets/image (145).png" alt=""><figcaption></figcaption></figure>