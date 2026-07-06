# HTTP Request

### Action to send network requests (HTTP Request)

HTTP Request is an advanced action used to send network requests directly from the script to a server system, third-party API, or websites without having to open the browser interface for manual interaction. This action helps optimize data processing speed by several times.

#### Explanation of configuration parameters:

* URL: The address path of the resource or API on the server that needs to be interacted with (For example: `[https://api.telegram.org/bot.../sendMessage](https://api.telegram.org/bot.../sendMessage)`).
* Method: The communication method to define the action performed:
  * `GET`: Retrieve (read) data from the server.
  * `POST`: Send new data to the server (commonly used for logging in, creating posts, sending messages).
  * `PUT` / `PATCH`: Update existing data on the server.
  * `DELETE`: Delete resources on the server.
* Header: Additional information sent with the request for the server to identify the browser or authenticate access.
  * _Example_: `Content-Type: application/json` (the format of the data sent), or `Authorization: Bearer <secret_token>` (the authentication configuration code).
* Data (Body / Payload): The actual data sent with the request (only applicable when selecting methods like `POST`, `PUT`, `PATCH`).
* Timeout: The maximum time (measured in seconds depending on the interface settings) that the action will wait for a response from the server. If the server does not respond within this time, the action will automatically disconnect and report an error (or throw an exception) to prevent the script from hanging indefinitely due to network lag or the opposing server being down.
* Use profile's proxy: An option that allows using the Proxy assigned to that Profile to send the request. If not checked, the system will use your computer's local IP address to send it.

#### Formatting the Data (Body) configuration according to each content type

Depending on the requirements of the API documentation from the server, the Data section must be filled out according to different formatting standards:

**Example 1: With body format `application/json`**

This is the most common format today when working with modern APIs. The body must be filled in the structure of curly braces `{}` and the data fields must be enclosed in double quotes following the JSON standard.

<figure><img src="../../.gitbook/assets/image (163).png" alt=""><figcaption></figcaption></figure>

**Example 2: With body format `application/x-www-form-urlencoded`**

This is the traditional data string format often encountered in old login forms or some payment gateways. The property pairs are concatenated into a continuous text string.

<figure><img src="../../.gitbook/assets/image (164).png" alt=""><figcaption></figcaption></figure>

**Example 3: With body format `multipart/form-data`**

This is a special format that must be used when you need to upload files (such as images, videos, document files) or send complex mixed forms from the computer to the server.

<figure><img src="../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>