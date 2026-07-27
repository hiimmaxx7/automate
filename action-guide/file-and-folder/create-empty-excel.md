# Create empty excel

Create empty excel is an action used to initialize a completely new and empty Excel file (`.xlsx` format) at a specified path on your computer.

This action is usually placed at the beginning of a script to prepare a clean storage file before data crawling actions (Data Crawler) or logging actions begin pushing information into it.

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* File Path: The absolute path including both the file name and the `.xlsx` extension where you want to create the file (Example: `D:\GPM\data_crawler.xlsx`).

#### Practical example: Initializing an export file before crawling posts

Suppose you are writing a script that automatically browses groups and collects (crawls) post links and interaction counts for market research purposes. Before the data crawling loop starts running, you need an empty Excel file ready to save the results.

* How to configure: At the first step of the script, call the Create empty excel action.
  * File Path: Enter the path `D:\GPM\ketqua_facebook.xlsx`.
* Result:
  * If the file `ketqua_facebook.xlsx` does not exist in the `D:\GPM\` folder yet, the system will immediately create a new empty Excel file.
  * If the file already exists, the system will delete the old file and recreate a completely new empty file to ensure that data from the previous run doesn't get mixed with this run.

After this step, you can safely use actions such as Write excel file or Append excel file to write the newly crawled data into the file.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>