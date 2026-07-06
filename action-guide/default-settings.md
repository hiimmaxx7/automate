---
description: Some default variables used in Automate
---

# 📦Some default variables

### Default System Variables

During the script building process, GPM Automate automatically provides several system variables. You can call these variables in any action to retrieve information about the Profile or the Excel data being processed without needing to initialize them yourself.

#### 1. Profile Information Variable Group

These variables help the script identify and process data according to each active Browser Profile:

* 🆔 `$profileId`: Returns the unique identifier ID of the currently open profile.
* 🏷️ `$profileName`: Returns the display name of the currently open profile.
* 🌐 `$profileProxy`: Returns the Proxy (IP) information that the currently open profile is using.

#### 2. Loop Variable Group

* 🔄 `$loopIndex`: Returns the current index (count order) of the For loop. This variable automatically increments after each iteration.

#### 3. Excel Data Management Variable Group (`$inputExcel`)

When your script is configured to use an input Excel file to read/write data, the system will automatically activate the following variables:

* 📂 `$inputExcel`: Represents the input Excel file currently linked in the script.
* 📍 `$inputExcelFileLocation`: Returns the exact file path of the input Excel file on the computer.
* 📊 `$inputExcelTotalRows`: Returns the total number of rows that contain data in the input Excel file.
* 🔢 `$inputExcelCurrentRow`: Returns the index of the current row being accessed and processed during the reading of the Excel file.

> 💡 General Rule about Variables: In GPM Automate, all variables (including available system variables and variables you name yourself when scripting) start with the character `$`