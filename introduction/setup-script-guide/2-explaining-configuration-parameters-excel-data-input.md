# 📊 2. Explanation of Excel data configuration parameters (Use input Excel)

When you check Use input Excel, the system will display the following detailed parameters to manage how to read/write data:

* 📂 Excel file: Click the `Browse...` button to select the input data file from your computer. The system supports common file formats such as `.xlsx`, `.xls`, or `.csv`.
* 📄 Sheet Id: Select the index number of the sheet in the Excel file that you want the tool to read data from. This box starts counting from `0` (corresponding to the first sheet on the left in your Excel file).
* 🔄 Map mode: This section determines how the browser profiles will retrieve data from Excel:
  * Each profile reads all rows: Each browser profile that is launched will read and sequentially execute all the rows of data in the Excel file.
  * Each profile reads one row: Each browser profile will only take one single row of data to process (suitable when each row contains information for a separate account).
* 🆔 Map according to the profile name in column A: If you check this box, the tool will automatically match: The name of the running GPM Login profile matches the text in which row in Column A of the Excel file, it will jump directly to that row to retrieve data.
* ✅ Write 'OK' status to the Excel file upon completion: Automatically write 'OK' to the Excel file after the script has finished running. This feature helps you easily track which row and which account have been successfully processed by the tool.

<figure><img src="../../.gitbook/assets/image (235).png" alt=""><figcaption></figcaption></figure>