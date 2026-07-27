---
description: >-
  While is a command block used to repeat a group of actions continuously
  until a condition (Condition) is satisfied, at which point it stops.
---

# While

Unlike the For loop (which repeats a fixed number of times), the While loop is usually used when you don't know in advance how many times the scenario needs to repeat, as it depends entirely on the actual state at runtime.

🎥 Watch more tutorial videos: [Here](https://youtu.be/4O4dPC-CNHM).

#### How it works:

* Before starting each loop iteration, the system will check the condition (Condition) that you have configured.
* If the condition is not yet satisfied, the actions inside the While block will continue to be executed.
* As soon as the condition is satisfied, the system will stop the loop and move on to the next actions below the While block.

#### Real-world example: Waiting to get an OTP code from Mail/Telegram

Suppose you are building a scenario to register an account and need to wait for the system to send an OTP code to Email. Since the time it takes for the Mail to arrive can be fast or slow, you cannot know in advance how long to wait:

* You place the Read mail code action inside the While block.
* The loop's stopping condition: When the variable `$otpCode` receives a value (is no longer empty).
* The system will continuously check and read the mailbox. As soon as the OTP code is successfully retrieved, the condition is satisfied, and the loop stops so the scenario can continue with the code entry step.

<figure><img src="../../.gitbook/assets/image (105).png" alt=""><figcaption></figcaption></figure>

> ⚠️ Important note: When using a While loop, you need to make sure that the actions inside the command block will change the state of the stopping condition. If the condition is configured incorrectly or the Mail never arrives, the scenario will fall into an infinite loop (the scenario will hang).
>
> For optimization, you should also combine this with a counter variable that tracks the number of checks. If more than 10 attempts pass without any Mail, use the Exit loop action to exit the loop, or the Stop action to completely stop the program and move on to the next profile.