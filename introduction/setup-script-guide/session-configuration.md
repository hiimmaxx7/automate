# 🚀 4. Session Configuration

This section is used to set up how the script operates, handles flows, and deals with error situations during batch runs. Specifically, the parameters are as follows:

* 🔢 Number of Threads: Enter the number of browser profiles you want the software to launch and run simultaneously (for example, in the image, there are `10` threads). Depending on the strength of your machine's configuration, you can adjust this number accordingly.
* ⏱️ Thread delay (s): The time interval (in seconds) between opening this thread and the next one. It is recommended to set it to around 3-5 seconds to avoid the computer launching too many browsers at once, causing lag.
* 🛡️ Skip proxy check before opening profile: Check this option if you want to skip the network connection check of the Proxy before opening the GPM Login profile (the system does not recommend selecting this because if the Proxy fails, the browser will still open but without a network).
* ❌ Do not close profile on error: When the tool encounters an error at any step, the browser will maintain that error state and will not automatically close. This feature is very convenient for checking and debugging to see where the script is stuck.
* 🧠 Performance limit at 90%: Limit the software's performance to a maximum of 90%. Turning this on helps prevent the computer from overloading CPU/RAM when running multiple threads continuously.
* 👁️ Hide window when done and active when process resume: Automatically hide the browser window after the task is completed and show it again when the process continues to run.
* 🖱️ Use virtual mouse: Check this option to use the system's virtual mouse (as shown in the image). This helps simulate mouse movements and clicks smoothly and more like a real person, minimizing the chances of being detected by websites as a bot.
* 🔄 Restart on error. Number of tries: If checked, when the tool encounters an error during execution, the system will automatically close that profile and restart it to run from the beginning. You can enter the maximum number of retries in the box next to it.

<figure><img src="../../.gitbook/assets/image (238).png" alt=""><figcaption></figcaption></figure>