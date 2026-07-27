# Count

Count is an action used to count the number of elements in a one-dimensional array (or a list of data) and return a numeric value. This action is very useful when you need to check the size of data before processing or set a limit for a loop.

🎥 Watch more tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

Common real-world use cases include:

#### 1. Counting the number of lines in a text file (Text)

When you need to know how many lines a text file (containing a list of accounts, proxies, articles...) has in total:

* How to do it: Use the File read all lines action to read all the lines in the file into a list variable, then use the Count action to count that list. The returned value is the total number of lines in the file.

#### Practical example: Counting the number of Facebook links in the file `D:\2.txt`

Suppose you have a file storing a list of Facebook profile links at the path `D:\2.txt` with content consisting of 9 lines as follows:

```
https://www.facebook.com/nguyenvana
https://www.facebook.com/leminhc
...
https://www.facebook.com/demo.account99
```

To count the total number of lines and retrieve each link in this file, the script will be configured in 2 steps:

* Step 1: Use the File read all lines action to read the file `D:\2.txt`. The returned result will be stored in an array (list) named `$content`. At this point, the system automatically understands:
  * `$content[0]` = `"https://www.facebook.com/nguyenvana"` (Line 1)
  * `$content[1]` = `"https://www.facebook.com/leminhc"` (Line 2)
  * ...
  * `$content[8]` = `"https://www.facebook.com/demo.account99"` (Line 9)
* Step 2: Use the Count action, passing in the array `$content` just read, and name the output variable (Output variable) `$lineCount`.

After running, the variable `$lineCount` will have the value `9`. You can immediately use this `$lineCount` variable as the End parameter for a For loop in order to automatically open each Facebook profile one by one for interaction.

<figure><img src="../../.gitbook/assets/image (120).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (122).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (123).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (124).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (136).png" alt=""><figcaption></figcaption></figure>

#### 2. Counting the number of files in a folder (Folder)

When you need to check the number of images, videos, or documents currently in a folder on your computer:

* How to do it: Use the Folder get file list action to retrieve the list of all files, then use the Count action to know exactly how many files that folder contains.

#### Practical example: Counting the number of real estate images in the folder `D:\bds\cat bi\`

Suppose you have a folder containing property photos at the path `D:\bds\cat bi\` with 3 image files named briefly as follows:

* `1.jpg`
* `2.jpg`
* `3.jpg`

To count how many image files there are to serve automatic posting, the script will be configured in 2 steps:

* Step 1: Use the Folder get file list action pointing to the folder path `D:\bds\cat bi\`. The system will scan the folder and return an array containing the paths of all files, stored in a variable named `$fileList`. At this point, the array data will automatically be assigned as:
  * `$fileList[0]` = `"D:\bds\cat bi\1.jpg"`
  * `$fileList[1]` = `"D:\bds\cat bi\2.jpg"`
  * `$fileList[2]` = `"D:\bds\cat bi\3.jpg"`
* Step 2: Use the Count action, passing in the array `$fileList` just obtained, and name the output variable (Output variable) `$totalFiles`.

After running, the variable `$totalFiles` will have the value `3`. You can use this result to run conditional blocks (for example: If the folder has more than 0 files, then perform the action of uploading images to Facebook/Website).

<figure><img src="../../.gitbook/assets/image (126).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (127).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (128).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (129).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (135).png" alt=""><figcaption></figcaption></figure>

#### 3. Counting the number of elements after splitting a string (Split text)

When you have a long text string containing multiple pieces of information separated by special characters and you want to know how many elements it will result in after splitting:

* How to do it: After using the Split text action to split this string based on the `|` character, you have the Count action process the newly split list. The returned value of the counter variable in this case will be `6`.

#### Practical example: Counting the number of elements of a string after using Split text

Suppose you have a configuration file or a data line containing account information formatted according to a structure separated by vertical bars `|` as follows:

```
thanhnguyen|Pass1234|2FAXYZ|103.83.77.15:9898
```

To count how many pieces of information this string contains in order to check the validity of the account, the script will be configured in 2 steps:

* Step 2: Use the Split text action to split the above string based on the separator character `|`. The returned result will be stored in an array named `$accountData`. At this point, the system will automatically split the data into:
  * `$accountData[0]` = `"thanhnguyen"` (Account)
  * `$accountData[1]` = `"Pass1234"` (Password)
  * `$accountData[2]` = `"2FAXYZ"` (2FA encryption code)
  * `$accountData[3]` = `"103.83.77.15:9898"` (Proxy)
* Step 2: Use the Count action, passing in the array `$accountData` just split, and name the output variable (Output variable) `$infoCount`.

After running, the variable `$infoCount` will have the value `4`. You can use this result combined with an If block for checking (for example: If `$infoCount = 4`, meaning the account has enough structural information, then proceed to run the rest of the login script; otherwise, skip it to avoid errors).

<figure><img src="../../.gitbook/assets/image (131).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (132).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (133).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (134).png" alt=""><figcaption></figcaption></figure>