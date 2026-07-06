# Math execute

Math execute is an action used to perform basic arithmetic operations (such as addition `+`, subtraction `-`, multiplication `*`, division `/`) or complex mathematical expressions from available variables, and then store the result in an output variable.

🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Expression: The content of the arithmetic calculation to be performed. You can combine specific numbers and available variables (For example: `(5 + 3) * 2` or `$price * $quantity`).
* Output variable: The name of the variable to store the result after the calculation is complete.

#### Practical example 1: Calculate the total order amount (Multiply and Add)

Suppose you are creating a script for automatic purchasing or scraping order data. You have a product quantity variable as `$quantity = 3`, a unit price variable as `$price = 150000`, and a fixed shipping fee of `30000`.

* Configuration:
  * Expression: Enter the expression `($price * $quantity) + 30000`
  * Output variable: Enter the variable name to store the result as `$totalAmount`.
* Result: The system will calculate the value as `480000` and assign it to the variable `$totalAmount`.

<figure><img src="../../.gitbook/assets/image (145).png" alt=""><figcaption></figcaption></figure>