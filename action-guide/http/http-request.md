# HTTP Request

### Action to send network requests (HTTP Request)

HTTP Request is an advanced action used to send network requests directly from the script to a server system, third-party API, or websites without needing to open a browser interface for manual interaction. This action helps optimize data processing speed by dozens of times.

#### Explanation of configuration parameters:

* URL: The path address of the resource or API on the server that needs to be interacted with (Example: `[https://api.telegram.org/bot.../sendMessage](https://api.telegram.org/bot.../sendMessage)`).
* Method: The communication method to define the action to be performed:
  * `GET`: Retrieve (read) data from the server.
  * `POST`: Send new data to the server (commonly used for logging in, creating posts, sending messages).
  * `PUT` / `PATCH`: Update existing data on the server.
  * `DELETE`: Delete a resource on the server.
* Header: Additional information sent along with the request to help the server identify the browser or authenticate access.
  * _Example_: `Content-Type: application/json` (format of the data being sent), or `Authorization: Bearer <secret_token>` (account authentication configuration code).
* Data (Body / Payload): The actual data sent along with the request (only applicable when selecting methods such as `POST`, `PUT`, `PATCH`).
* Timeout: The maximum time (in seconds, depending on the setup interface) that the action will wait for a response from the server. If the server does not respond within this time, the action will automatically disconnect and report an error (or throw an exception) to prevent the script from hanging indefinitely due to network lag or the target server being down.
* Use profile's proxy: An option that allows using the Proxy currently assigned to that Profile to send the request. If not checked, the system will use your computer's local network IP address (Local IP) to send it.

#### Configuration format for the Data (Body) section by content type

Depending on the requirements of the API documentation from the server, the Data section must be filled in according to different formatting standards:

**Example 1: With body type `application/json`**

This is the most common format today when working with modern APIs. The body must be filled in according to the curly brace `{}` structure, with data fields enclosed in double quotes following standard JSON encoding.

<figure><img src="../../.gitbook/assets/image (163).png" alt=""><figcaption></figcaption></figure>

**Example 2: With body type `application/x-www-form-urlencoded`**

This is a traditional data string format commonly found in older login forms or some payment gateways. The attribute pairs are joined together into one continuous text string.

<figure><img src="../../.gitbook/assets/image (164).png" alt=""><figcaption></figcaption></figure>

**Example 3: With body type `multipart/form-data`**

This is a special format that must be used when you need to upload files (such as images, videos, document files) or send complex mixed forms from your computer to the server.

<figure><img src="../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>