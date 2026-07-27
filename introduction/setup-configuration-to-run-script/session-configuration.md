# 🚀 4. Session Configuration

This section is used to set up how the script operates, handle the flow, and deal with error situations when running in bulk. Specifically, the parameters are as follows:

* 🔢 Number of Threads: Enter the number of browser profiles you want the software to launch and run simultaneously (for example, in the image it is `10` threads). Adjust this number according to whether your machine's configuration is strong or weak.
* ⏱️ Thread delay (s): The interval (in seconds) between opening this thread and the next one. It is recommended to set it around 3-5 seconds to avoid opening too many browsers at once, which could cause lag.
* 🛡️ Skip proxy check before opening profile: Check this if you want to skip the step of checking the Proxy's network connection before opening a GPM Login profile (the system does not recommend this option because if the Proxy is dead, the browser will still open but without a network connection).
* ❌ Do not close profile on error: When the tool encounters an error at a certain step, the browser will remain in that error state and will not automatically close. This feature is very convenient for checking and debugging to see where the script got stuck.
* 🧠 Performance limit at 90%: Limits the software's performance to a maximum of 90%. Enabling this helps prevent the computer's CPU/RAM from being overloaded when running many threads continuously.
* 👁️ Hide window when done and active when process resume: Automatically hides the browser window after the task is completed and shows it again when the process resumes.
* 🖱️ Use virtual mouse: Check this to use the system's virtual mouse (as shown enabled in the image). This helps simulate mouse movements and clicks more smoothly and human-like, minimizing the risk of being detected as a bot by websites.
* 🔄 Restart on error. Number of tries: If checked, when the tool encounters an error midway, the system will automatically close that profile and reopen it to run again from the beginning. You can enter the maximum number of retry attempts in the adjacent field.

<figure><img src="../../.gitbook/assets/image (238).png" alt=""><figcaption></figcaption></figure>