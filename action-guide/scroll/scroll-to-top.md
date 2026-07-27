# Scroll to top

Scroll to top is an action that commands the browser to immediately scroll the entire screen back to the original starting position of the webpage. This action operates completely automatically and does not have any accompanying configuration parameters.

🎥 Watch the tutorial video: [Here](https://youtu.be/cCTEtuMtz-s).

#### Practical example: Return to the main menu bar after browsing content

When you set up a data scraping or interaction scenario, the processing flow often scrolls the screen down very deep to load more articles (Lazy load) or read comments. After scrolling down, you want to return to the top of the page to click on the search bar, notification panel, or navigation menu fixed at the top:

* How to apply: Instead of using the Mouse scroll action with negative parameters multiple times (which is time-consuming and difficult to accurately adjust the scroll step), you only need to insert a single Scroll to top action.
* Result: The browser will execute the command to scroll the screen to the top of the website immediately, allowing the script to be ready for the next operations quickly and accurately.