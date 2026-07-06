# Create empty excel

Create empty excel is an action used to initialize a completely new Excel file (format `.xlsx`) that is empty at a specified path on your computer.

This action is often placed at the beginning of a script to prepare a clean storage file before data scraping actions or logging begin to push information in.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path including the file name and `.xlsx` extension where you want to create the file (e.g., `D:\GPM\data_crawler.xlsx`).

#### Practical example: Initialize the export file before scraping articles

Suppose you are writing a script to automatically browse groups and collect (scrape) article links and interactions for market research. Before the data scraping loop starts running, you need to have an empty Excel file ready to store the results.

* Configuration: In the first step of the script, you call the Create empty excel action.
  * File Path: Enter the path `D:\GPM\ketqua_facebook.xlsx`.
* Result:
  * If there is no file `ketqua_facebook.xlsx` in the `D:\GPM\` directory, the system will immediately create an empty Excel file.
  * If the file already exists, the system will delete the old file and create a completely new empty file to ensure that the data from the previous run does not mix with this run.

After this step, you can confidently use actions like Write excel file or Append excel file to write the scraped data into the file.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>