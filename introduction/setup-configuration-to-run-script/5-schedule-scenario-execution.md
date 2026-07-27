# 📅 5. Schedule (Schedule script execution)

This feature is extremely useful for those who want to set up tools to run automatically 24/7 without having to monitor and click manually.

🎥 Watch the tutorial video: [Here](https://youtu.be/C8Kf-d9_-sw).

To use it, check the box Use scheduling feature (as shown in the image below).

> ⚠️ Important note: You must always keep the GPM Automate Runtime software turned on for the schedule to take effect. If you turn off the software, the schedule will not run.

<figure><img src="../../.gitbook/assets/image (241).png" alt=""><figcaption></figcaption></figure>

To create and manage the run time slots, click the `⚙️ Manage schedules` button. The system allows you to set up 2 main scheduling types depending on your needs:

**🔄 Type 1: Repeat after (Run repeatedly after a period of time)**

* How it works: The tool will automatically re-run the script after each time interval (Hour - Minute - Second) that you set.
* Practical example: As shown in the image, the schedule named `15s` is set with the Second field at `15`. This means that every 15 seconds, the tool will automatically trigger the script to run again.

<figure><img src="../../.gitbook/assets/image (243).png" alt=""><figcaption></figcaption></figure>

**📍 Type 2: Time points (Run at fixed time points)**

* How it works: The tool will accurately wait until the specific time points you set during the day to automatically turn on and run. You can click the `+ Add` button to add multiple different time points.
* Practical example: As shown in the image, the schedule named `20h00` is set with the time point `20 : 0 : 0`. This means that exactly at 20:00 (8:00 PM) every day, the tool will automatically open up and run.

<figure><img src="../../.gitbook/assets/image (239).png" alt=""><figcaption></figcaption></figure>