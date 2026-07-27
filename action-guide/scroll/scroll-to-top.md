# Scroll to top

Scroll to top is an action that commands the browser to immediately scroll the entire screen back up to the very first starting position of the web page. This action operates completely automatically and does not come with any configuration parameters.

🎥 Watch more tutorial video: [Here](https://youtu.be/cCTEtuMtz-s).

#### Practical example: Returning to the main menu bar after browsing content

When you set up a data scraping or interaction scenario, the processing flow often scrolls the screen very deep downward to load more posts (Lazy load) or read comments. After scrolling all the way down, you want to return to the top of the page to click on the search bar, notification panel, or navigation menu bar that is fixed at the top:

* How to apply: Instead of using the Mouse scroll action with negative parameters multiple times (which wastes time and is difficult to calibrate accurately), you only need to insert a single Scroll to top action.
* Result: The browser will execute the command to sweep the screen up to the very top of the website immediately, helping the scenario be ready for subsequent operations quickly and accurately.