# Close tab

Close tab is an action that instructs the browser to immediately close the currently active tab. This action has no accompanying configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Practical example: Cleaning up the screen after completing a sub-task

When you open a secondary tab to retrieve a verification code from an email or get e-wallet information, after successfully copying the desired data into a variable, you need to close that tab to free up RAM and keep the browser interface tidy:

* Processing flow:
  1. Successfully retrieve the OTP code in the secondary tab.
  2. Drag the Close tab action into the script.
  3. Call the Active tab action (with index = `0`) to return control to the main working tab.