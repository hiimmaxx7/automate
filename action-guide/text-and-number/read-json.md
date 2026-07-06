# Read json

Read json is used to extract values from a JSON formatted text based on the specified path structure.

🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* JSON Text: The input JSON text string to read (or a variable containing the JSON string).
* Nodes: The path (JSON Path) leading to the key containing the data to retrieve.

#### Practical example: Extracting phone numbers from a data list

Suppose you have a JSON string containing a list of customer information as follows:

JSON

```
{
  "status": "success",
  "data": [
    {
      "name": "Nguyen Van A",
      "phone": "0987654321"
    },
    {
      "name": "Le Minh C",
      "phone": "0123456789"
    }
  ]
}
```

To extract the phone number of the first person in the list, you configure the Read json action:

* JSON Text: Fill in the above JSON string (or pass a variable containing the string).
* Nodes: Fill in as `data.[0].phone` _(where `data` enters the data array, `[0]` is the position of the first person, and `phone` is the property to retrieve)_.
* Output variable: Fill in the variable name to store the result (e.g., `$phoneNumber`).

Result: The variable `$phoneNumber` will receive the value of `"0987654321"`.

<figure><img src="../../.gitbook/assets/image (142).png" alt=""><figcaption></figcaption></figure>