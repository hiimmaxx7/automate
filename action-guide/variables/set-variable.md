# Set variable

This is an action used to create or change the value of a variable (data container) in the script. In addition, this action also allows you to create input fields right on the main interface, helping users fill in information themselves before starting to run the tool.

* Allow user input from the interface: You check this option to create empty fields on the main screen, allowing users to directly enter values into the script before clicking run.
* Input required: When this option is selected, the system will require users to fill in enough data or select a file before allowing the run button to be clicked. If left blank, the tool will report an error immediately to avoid running by mistake due to forgetting to enter information.

🎥 Watch more tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

<figure><img src="../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>

The system supports 4 input types (Input Type) on the interface, including:

#### 1. Text input type (Text)

Used when you want the user to enter a string, text, or number value from the keyboard.

* Practical example: You name the variable `$textContent`. When the user enters the content `"hello world"` into the input field on the interface, the value of the `$textContent` variable at this point will be `"hello world"` (`$textContent = "hello world"`).

<figure><img src="../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (111).png" alt=""><figcaption></figcaption></figure>

#### 2. File selection type (File)

Used when the script needs to process a specific file on the runner's computer (such as an image file, data file, configuration file...). On the UI, a folder-shaped button will appear for the user to click and browse for a file.

* Practical example: The user clicks to select a file named `bruh.png` located in drive D. The value of the received `$filePath` variable will be the absolute path of that file: `"D:\materials\bruh.png"` (`$filePath = "D:\materials\bruh.png"`). You can immediately use this `$filePath` variable to pass into the File upload action in later steps.

<figure><img src="../../.gitbook/assets/image (113).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (114).png" alt=""><figcaption></figcaption></figure>

#### 3. Checkbox type (Checkbox)

Checkbox is an interface component that allows users to turn a binary option on or off (yes/no, on/off, agree/disagree).

* Characteristics: When checked, the variable will receive the value `True`. When unchecked, the variable will receive the value `False`.
* Practical example: You create an item labeled _"Chọn để đặt hàng / Check to place an order"_ linked to the variable `$checkBox`. If the user checks this box, the `$checkBox` variable will have the value `True` (`$checkBox = True`). You can use an If block to check: only perform the payment steps if `$checkBox = True`.

<figure><img src="../../.gitbook/assets/image (115).png" alt=""><figcaption></figcaption></figure>

#### 4. Selection list type (Combo Box)

Combo Box (similar to Dropdown) is an interface component that displays a list of available options, allowing users to select a single value at a time. This feature helps minimize typos or incorrect data formats.

* Characteristics: Helps keep data consistent when needing to select fixed information such as Country, Industry, Product Type, Activity Status...
* Practical example: You configure a list of multiple countries linked to the variable `$country`. When the user opens the script and selects `"United States"` from the dropdown list, the `$country` variable in Automate will immediately receive the value `"United States"` (`$country = "United States"`).

<figure><img src="../../.gitbook/assets/image (116).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (117).png" alt=""><figcaption></figcaption></figure>