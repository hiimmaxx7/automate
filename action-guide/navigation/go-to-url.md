# Go to URL

This action instructs the browser to go directly to a website at the path (URL) you specified.

* Effect: This is the starting step for the tool to begin working. You just need to enter the website address, and the browser will automatically navigate to that page for you to perform the next steps.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Configuration parameters:

*   URL: The exact address of the website you want to open.

    > ⚠️ Mandatory note: The path filled in this field must include the full network protocol as `https://` or `http://` at the beginning (e.g., `https://24h.com.vn`). If you only enter the short form `24h.com.vn`, the system will not recognize the routing structure and will report an action error.
* Timeout (s): The time limit (in seconds) that the script will wait for the website to fully load all data. The system's default if you leave it blank is `60` seconds.

#### Real-world example: Adjusting the wait time when using slow Proxy

When you run a Marketing script or scrape data through Profiles with attached Proxy, you may sometimes encounter Proxy packages with very slow connection speeds, long response times, or the target website's server being congested. If you keep the default time, the script may get disconnected midway due to timeout:

* Configuration method:
  * URL: `https://pinterest.com`
  * Timeout: Change from `60` to `120` (2 minutes).
* Result: The browser will patiently wait up to 120 seconds for the website to finish loading data. Conversely, if your network is very strong and you want to optimize speed so that the script does not hang when encountering a dead website, you can proactively reduce this number to `20` or `30` seconds for the system to quickly terminate the error flow and switch to another account.