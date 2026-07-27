# Read json

Read json is used to extract a value from a JSON-formatted text string based on a specified path structure.

🎥 Watch more tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* JSON Text: The input JSON text string to be read (or a variable containing the JSON string).
* Nodes: The path (JSON Path) leading to the key containing the data to retrieve.

#### Practical example: Get a phone number from a data list

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

To extract the phone number of the first person in the list, configure the Read json action:

* JSON Text: Enter the above JSON string (or pass a variable containing the string).
* Nodes: Enter `data.[0].phone` _(where `data` goes into the data array, `[0]` is the position of the first person, and `phone` is the property to retrieve)_.
* Output variable: Enter the variable name to store the result (Example: `$phoneNumber`).

Result: The variable `$phoneNumber` will receive the value `"0987654321"`.

<figure><img src="../../.gitbook/assets/image (142).png" alt=""><figcaption></figcaption></figure>