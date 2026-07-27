# Active tab

This action helps the tool switch to another tab that is open in the browser.

It helps you multitask easily. For example: you are on tab A to get data, then use this command to switch to tab B and paste the data there.

🎥 Watch more tutorial videos: [Here](https://youtu.be/a9qNt96X1SM).

### Important Note

After switching, all subsequent actions (click, input, data scraping) of the tool will only run on this newly selected tab.

### Configuration Parameters

* Type: Choose the method for the system to determine which tab to switch to:
  * By Index: Switch tab based on its position order (counted from left to right, starting from 0).
  * By Prefix URL: Switch tab based on the beginning part of the URL address. The system will scan through the open tabs, and any tab whose URL starts with the string you enter will be activated.

#### 💡 Advice For Users

When using the tab switching feature, you should prioritize choosing the **By Prefix URL** method.

The reason is that the tab order (Index) can change irregularly due to the return mechanism from the Remote Port, which may cause the index number to be inaccurate and interrupt the script. Using Prefix URL ensures the tool always finds the correct tab regardless of its position in the browser.

_Small tip: After the browser opens popup windows (such as Google login windows, MetaMask wallet...), you just need to call the Active Tab action with index 0 to quickly return to the main browser screen._

<figure><img src="../../.gitbook/assets/image (179).png" alt=""><figcaption></figcaption></figure>