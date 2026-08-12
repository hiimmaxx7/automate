---
description: Check the device's network connection by pinging Google.
---

# Check network

Check network is an action to verify whether the device is connected to the Internet by pinging the Google server. The result is stored in a variable to branch the script (for example: if there is no connection, call Reconnect or turn Wi-Fi back on).

#### Explanation of configuration parameters:

* Output Variable Name: The name of the variable that stores the connection check result (connected / not connected). Use this variable in the If block to handle accordingly.

<figure><img src="../../.gitbook/assets/net-chk.png" alt=""><figcaption></figcaption></figure>