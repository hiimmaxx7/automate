# Get extension id

Get extension id is an action that instructs the browser to extract the unique identifier (Extension ID) of the extensions installed within the current browser Profile. This ID is extremely important as you can use it in subsequent commands, such as navigating directly to the configuration page or the wallet interface of that extension (e.g., quickly opening MetaMask, Tonkeeper, OKX Wallet, etc.).

🎥 Watch more tutorial video: [Here](https://youtu.be/I4-kZ7repv8).

#### Configuration parameters:

* Extension name: The name of the extension displayed on the browser for which you want to get the ID.
  * _Note_: The system applies a relative search mechanism, so you don't need to enter the exact full name — just include the characteristic phrase (e.g., just enter `MetaMask` or `OKX` instead of typing the full lengthy name).
* Output variable: The variable name used to store the ID string after extraction (e.g., save into the `extId` variable).

#### ⚠️ Required operational notes to successfully get the ID:

Due to the security mechanism and internal data flow management of the Chromium browser engine, if you are on a regular webpage and call this action immediately, the system will not be able to scan the list of extensions. For this action to work 100% correctly, you need to follow this procedure:

* You must access the management page first: Your script must use the Go to URL action to access the browser's internal address `chrome://extensions/` first.
* A waiting time (Delay) is required: After navigating to the extension management page, you must insert a short Delay command (about 1 - 2 seconds). This delay allows the browser's management interface to fully finish loading the source code structure of the extensions, preventing the script from running too fast and failing to capture the ID.

#### Practical example: Flow to get the extension ID to automatically open a digital wallet

When creating an automation script for Crypto/Airdrop tasks, you want to get the ID of the MetaMask wallet to quickly access the wallet unlock page:

* Step 1: Use the Go to URL action ➔ Enter the URL address: `chrome://extensions/`.
* Step 2: Drag in the Delay action ➔ Enter the wait time: `2000` (equivalent to 2 seconds).
* Step 3: Drag in the Get extension id action:
  * _Extension name_: `MetaMask` (just include this keyword).
  * _Output variable_: `metaMaskId`.
* Step 4: Once you have the ID stored in the `$metaMaskId` variable, you can use the next Go to URL action with the structure: `chrome-extension://$metaMaskId/home.html` to immediately open the wallet interface directly, without needing to manually click and search on the toolbar.

<figure><img src="../../.gitbook/assets/image (222).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (223).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (224).png" alt=""><figcaption></figcaption></figure>