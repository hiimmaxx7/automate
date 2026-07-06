# Close tab

Close tab is the action that instructs the browser to immediately close the currently active tab. This action does not have any accompanying configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Practical example: Cleaning up the screen after completing a secondary task

When you open a secondary tab to retrieve the verification code from an email or get information from a digital wallet, after you have copied the desired data to a variable, you need to close that tab to free up RAM and keep the browser interface tidy:

* Processing flow:
  1. Successfully retrieve the OTP in the secondary tab.
  2. Drag the Close tab action into the script.
  3. Call the Active tab action (with index = `0`) to return control to the main working tab.