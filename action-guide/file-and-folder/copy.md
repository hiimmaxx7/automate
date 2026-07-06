# Copy file

Copy file is an action used to copy a file from one location to another on the computer's hard drive. This action will create a completely new copy at the destination while keeping the original file intact at its original location.

🎥 Watch the tutorial video: [Here](https://youtu.be/EH7olDLAb9c).

#### Configuration parameters:

* Source File: The absolute path of the source file to be copied (e.g., `D:\data\template.xlsx`).
* Destination File: The absolute path of the destination file where the copy will be made (e.g., `D:\backup\report_2026.xlsx`).

#### Practical example: Automatically duplicate the sample Excel file before writing data

When creating a data scraping script (Data Crawler) or filling out reports, you often have a sample Excel file (`template.xlsx`) that has pre-formatted header columns. You do not want the script to overwrite the new data directly, which would ruin this sample file. The solution is that each time the script runs, the system will automatically duplicate a new file for use:

* Configuration:
  * Source File: Enter the path of the sample file: `D:\GPM\template.xlsx`
  * Destination File: Enter the path of the new file that will be used to write data: `D:\GPM\data_output.xlsx`
* Result: The system will take the file `template.xlsx`, create an exact copy, and name it `data_output.xlsx` in the specified directory. Subsequent actions in the script (such as _Write excel file_) will only interact with and write data to this `data_output.xlsx` file, keeping your sample file safe and clean for future runs.

<figure><img src="../../.gitbook/assets/image (148).png" alt=""><figcaption></figcaption></figure>