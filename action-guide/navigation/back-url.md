# Back URL

Back URL is an action that instructs the browser to return to the previously visited web page in the browsing history, similar to clicking the Back arrow button in the top-left corner of the Chrome or Firefox browser. This action works automatically and does not have any configuration parameters.

🎥 Watch more tutorial video: [Here](https://youtu.be/a9qNt96X1SM).

#### Practical example: Returning to the product list after checking details

When you create a scraping script or an interaction-boosting script (buff follow/like), the typical flow will be: from the aggregate list page, you click on a detail link to check information or click the follow button. After completing the task on that detail page, instead of using the Go to URL action to re-type the list page address from the start (which forces the web page to reload all data from the server, which is very time-consuming):

* How to apply: You simply need to insert the Back URL action.
* Result: The browser immediately steps back one step to the previous list page, helping the script run smoothly, saving network bandwidth, and optimizing the processing speed of the flow.