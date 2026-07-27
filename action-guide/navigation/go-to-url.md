# Go to URL

This action instructs the browser to go directly to a website according to the path (URL) you have specified.

* Function: This is the starting step for the tool to begin working. You just need to enter the website address, and the browser will automatically go to that page for you to perform the next steps.

🎥 Watch more tutorial videos: [Here](https://youtu.be/a9qNt96X1SM).

#### Configuration parameters:

*   URL: The exact address of the website you want to open.

    > ⚠️ Mandatory note: The path entered in this field must have the full network protocol `https://` or `http://` at the beginning (Example: `https://24h.com.vn`). If you only enter the shortened form `24h.com.vn`, the system will not be able to recognize the routing structure and will report an action error.
* Timeout (s): The time limit (in seconds) that the script will wait for the website to finish loading all its data. The system default if left blank is `60` seconds.

#### Practical example: Adjusting wait time when using slow Proxies

When you run Marketing scripts or scrape data through Profiles with attached Proxies, sometimes you encounter Proxy packages with very slow connection speeds, long response times, or the target website's server being network-congested. If you keep the default time, the script may be disconnected midway due to timing out:

* Configuration method:
  * URL: `https://pinterest.com`
  * Timeout: Change from `60` to `120` (2 minutes).
* Result: The browser will patiently wait up to 120 seconds for the website to finish loading data in time. Conversely, if your network is very strong and you want to optimize speed so the script doesn't hang when encountering a dead website, you can proactively reduce this number to `20` or `30` seconds so the system can quickly cut off the error flow and switch to another account.