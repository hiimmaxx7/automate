# Copy file

Copy file is an action used to copy a file from one location to another location on the computer's hard drive. This action creates a completely new copy at the destination while keeping the original file unchanged at its initial location.

🎥 Watch more tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Source File: The absolute path of the source file to be copied (Example: `D:\data\template.xlsx`).
* Destination File: The absolute path of the destination file to copy to (Example: `D:\backup\report_2026.xlsx`).

#### Practical example: Automatically duplicating a sample Excel file before writing data

When building a data scraping script (Data Crawler) or filling out reports, you often have a sample Excel file (`template.xlsx`) that has already been formatted with header columns. You don't want the script to directly overwrite new data and damage this sample file. The solution is that each time the script runs, the system will automatically duplicate a new file for use:

* How to configure:
  * Source File: Enter the sample file path: `D:\GPM\template.xlsx`
  * Destination File: Enter the path of the new file that will be used to write data: `D:\GPM\data_output.xlsx`
* Result: The system will take the `template.xlsx` file, create an exact copy, and name it `data_output.xlsx` in the specified folder. The subsequent actions in the script (such as _Write excel file_) will only interact with and write data to this `data_output.xlsx` file, keeping your sample file safe and clean for future runs.

<figure><img src="../../.gitbook/assets/image (148).png" alt=""><figcaption></figcaption></figure>