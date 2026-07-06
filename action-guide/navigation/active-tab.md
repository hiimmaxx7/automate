# Active tab

This action helps the tool switch to another open tab in the browser.

It allows you to multitask easily. For example, you are in tab A to retrieve data, then use this command to switch to tab B and paste the data there.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

### Important Note

After switching, all subsequent actions (click, input, scrape data) of the tool will only run on this newly selected tab.

### Configuration Parameters

* Type: Choose the method for the system to determine the tab to switch to:
  * By Index: Switch the tab based on the position index (from left to right, starting from 0).
  * By Prefix URL: Switch the tab based on the beginning of the URL. The system will scan through the open tabs, and any tab with a URL starting with the string you enter will be activated.

#### 💡 User Advice

When using the tab switching feature, you should prioritize selecting the **By Prefix URL** method.

The reason is that the order of tabs (Index) can change unpredictably due to the return mechanism from the Remote Port, leading to using the index number being inaccurate and disrupting the script. Using Prefix URL will ensure the tool always finds the necessary tab regardless of its position in the browser.

_A little tip: After the browser opens popup windows (like Google login windows, MetaMask...), you can simply call the Active Tab action with index 0 to quickly return to the main browser screen._

<figure><img src="../../.gitbook/assets/image (179).png" alt=""><figcaption></figcaption></figure>