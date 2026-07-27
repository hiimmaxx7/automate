---
description: Some default variables used in Automate
---

# 📦Some default variables

### Default System Variables (System Variables)

During script building, GPM Automate automatically provides some system variables. You can call these variables in any action to get information about the Profile or Excel data being processed without having to initialize them yourself.

#### 1. Profile information variable group

These variables help the script identify and process data for each Profile Browser currently operating:

* 🆔 `$profileId`: Returns the unique identification ID of the currently open profile.
* 🏷️ `$profileName`: Returns the display name of the currently open profile.
* 🌐 `$profileProxy`: Returns the Proxy (IP) information that the currently open profile is using.

#### 2. Loop variable group

* 🔄 `$loopIndex`: Returns the current index (count order) of the For loop. This variable automatically increases after each loop iteration.

#### 3. Excel data management variable group (`$inputExcel`)

When your script is configured to use an input Excel file to read/write data, the system will automatically activate the following variables:

* 📂 `$inputExcel`: Represents the input Excel file itself that is currently linked in the script.
* 📍 `$inputExcelFileLocation`: Returns the exact path (File Path) of the input Excel file on the computer.
* 📊 `$inputExcelTotalRows`: Returns the total number of rows containing data inside the input Excel file.
* 🔢 `$inputExcelCurrentRow`: Returns the sequence number of the current row being retrieved and processed during the Excel file reading process.

> 💡 General Rule about Variables: In GPM Automate, all variables (including available system variables and variables you name yourself when creating scripts) start with the character `$`