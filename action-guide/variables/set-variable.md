# Set variable

This is the action used to create or change the value of a variable (data container) in the script. Additionally, this action allows you to create input fields right on the main interface, enabling users to fill in information before starting to run the tool.

* Allow user input from the interface: You check this option to create empty fields on the main screen, allowing users to directly enter values into the script before clicking run.
* Input required: When this option is selected, the system will require users to fill in all data or select a file before allowing them to click the run button. If left empty, the tool will report an error immediately to avoid running mistakenly due to forgotten input.

🎥 Watch the tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

<figure><img src="../../.gitbook/assets/va-01.png" alt=""><figcaption></figcaption></figure>

The system supports 4 types of input data (Input Type) on the interface, including:

#### 1. Text Input Type

Used when you want users to manually enter a string, text, or number from the keyboard.

* Real example: You name the variable `$textContent`. When the user enters the content `"hello world"` into the input field on the interface, the value of the variable `$textContent` will be `"hello world"` (`$textContent = "hello world"`).

<figure><img src="../../.gitbook/assets/va-01b.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/va-01c.png" alt=""><figcaption></figcaption></figure>

#### 2. File Input Type

Used when the script needs to process a specific file on the user's computer (such as an image file, data file, configuration file...). A folder icon button will appear on the UI for users to click and browse for the file.

* Real example: The user selects a file named `bruh.png` located on drive D. The value of the variable `$filePath` will be the absolute path of that file: `"D:\materials\bruh.png"` (`$filePath = "D:\materials\bruh.png"`). You can immediately use this `$filePath` variable to pass into the File upload action in subsequent steps.

<figure><img src="../../.gitbook/assets/va-01d.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/va-01e.png" alt=""><figcaption></figcaption></figure>

#### 3. Checkbox Input Type

Checkbox is a UI component that allows users to toggle a binary option (yes/no, on/off, agree/disagree).

* Characteristics: When checked, the variable will have the value `True`. When unchecked, the variable will have the value `False`.
* Real example: You create an item labeled _"Check to place an order"_ associated with the variable `$checkBox`. If the user checks this box, the variable `$checkBox` will have the value `True` (`$checkBox = True`). You can use an If block to check: if `$checkBox = True`, then proceed with the payment steps.

<figure><img src="../../.gitbook/assets/va-01f.png" alt=""><figcaption></figcaption></figure>

#### 4. Combo Box Input Type

Combo Box (similar to Dropdown) is a UI component that displays a list of available options, allowing users to select a single value at a time. This feature helps minimize the risk of misspelling or incorrect data formatting.

* Characteristics: Helps maintain consistent data when selecting fixed information such as Country, Industry, Product Type, Operational Status...
* Real example: You configure a list of multiple countries associated with the variable `$country`. When the user opens the script and selects `"United States"` from the dropdown list, the variable `$country` in Automate will immediately receive the value `"United States"` (`$country = "United States"`).

<figure><img src="../../.gitbook/assets/va-01g.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/va-01h.png" alt=""><figcaption></figcaption></figure>