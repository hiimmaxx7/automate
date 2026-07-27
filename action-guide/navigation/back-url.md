# Back URL

Back URL is the action that instructs the browser to return to the previously visited webpage in the browsing history, similar to clicking the back arrow button in the top left corner of the Chrome or Firefox browser. This action works automatically and does not have any accompanying configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Practical example: Go back to the product list after checking details

When you script data scraping or enhance interaction (buff follow/like), the usual flow will be: from the summary list page, you click on a detail link to check information or press the follow button. After completing the task on that detail page, instead of using the Go to URL action to re-enter the address of the list page from the beginning (which requires the website to reload all data from the server, taking a lot of time):

* How to apply: You just need to insert the Back URL action.
* Result: The browser immediately goes back one step to the previous list page instantly, helping the script run smoothly, saving network bandwidth, and optimizing the processing speed of the flow.