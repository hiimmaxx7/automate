# 📊 2. Explanation of Excel data configuration parameters (Use input Excel)

When you check Use input Excel, the system will display the following detailed parameters to manage how data is read/written:

* 📂 Excel file: Click the `Browse...` button to select the input data file from your computer. The system supports common file formats such as `.xlsx`, `.xls`, or `.csv`.
* 📄 Sheet Id: Select the sequence number of the sheet (Sheet) in the Excel file that you want the tool to read data from. This field starts counting from `0` (corresponding to the first Sheet on the left in your Excel file).
* 🔄 Map mode (Row reading mode): This section determines how the browser profiles will retrieve data from Excel:
  * Each profile reads all rows: Each browser profile, when launched, will read and run through all the data rows in the Excel file one by one.
  * Each profile reads one row: Each browser profile only takes exactly one single data row to process (suitable when each row represents information for a separate account).
* 🆔 Map according to the profile name in column A: If this box is checked, the tool will automatically cross-check: if the name of the currently running GPM Login profile matches the text in a row in Column A of the Excel file, it will jump directly to that row to retrieve data.
* ✅ Write 'OK' status to the Excel file upon completion: Automatically writes the word 'OK' into the Excel file after the script finishes running. This feature helps you easily track which rows/accounts have been successfully processed by the tool.

<figure><img src="../../.gitbook/assets/image (235).png" alt=""><figcaption></figcaption></figure>