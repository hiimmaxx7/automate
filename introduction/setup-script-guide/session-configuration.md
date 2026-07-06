# 🚀 4. Session Configuration (会话配置)

本节用于设置脚本的运行方式、处理流程以及在批量运行时应对错误情况。具体参数如下：

* 🔢 Number of Threads (线程数): 输入您希望软件同时启动并运行的浏览器配置文件数量（例如图中为 `10` 个线程）。根据计算机的配置强弱调整此数字以适应。
* ⏱️ Thread delay (s) (线程延迟时间): 打开此线程与下一个线程之间的间隔时间（以秒为单位）。建议设置为 3-5 秒，以避免计算机同时启动过多浏览器导致卡顿。
* 🛡️ Skip proxy check before opening profile: 如果希望在打开 GPM Login 配置文件之前跳过代理的网络连接检查，请勾选此项（系统不建议选择，因为如果代理失效，浏览器仍会打开但没有网络）。
* ❌ Do not close profile on error: 当工具在某一步骤遇到错误时，浏览器将保持错误状态而不会自动关闭。此功能非常方便用于检查和调试脚本卡住的位置。
* 🧠 Performance limit at 90%: 将软件的性能限制在最大 90%。启用此项可以帮助计算机在连续插入多个线程时不至于过载 CPU/RAM。
* 👁️ Hide window when done and active when process resume: 在完成工作后自动隐藏浏览器窗口，并在过程继续运行时重新显示。
* 🖱️ Use virtual mouse: 勾选以使用系统的虚拟鼠标（如图所示）。此操作有助于模拟更流畅、更像真实人的鼠标悬停和点击操作，最大限度地减少被网站检测为机器人。
* 🔄 Restart on error. Number of tries: 如果勾选，当工具运行中途出现错误时，系统将自动关闭该配置文件并重新启动以从头开始运行。您可以在旁边的框中输入希望最大重试的次数。

<figure><img src="../../.gitbook/assets/image (238).png" alt=""><figcaption></figcaption></figure>