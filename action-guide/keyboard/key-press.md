---
description: Type content on the website.
---

# Key press

Key press is an action that simulates keyboard operations, allowing you to type text, press single keys, or activate shortcut key combinations on the browser interface.

🎥 Watch the tutorial video: [Here](https://youtu.be/cCTEtuMtz-s).

#### Supported key types (Type):

The action provides 3 flexible keyboard interaction mechanisms:

1. Single key: Press a single key on the keyboard.
2. Combo key: Press a combination of keys simultaneously.
   * _Supported system keys_: Alt, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Backspace, Cancel, Clear, Command, Control, Decimal, Delete, Divide, Down, End, Enter, Equal, Escape, F1 to F12, Help, Home, Insert, Left, LeftAlt, LeftControl, LeftShift, Meta, Multiply, Null, NumberPad0 to NumberPad9, PageDown, PageUp, Pause, Return, Right, Semicolon, Separator, Shift, Space, Subtract, Tab, Up, ZenkakuHankaku.
3. Text: Type or paste a string of text into the input field.

#### Configuration parameters:

* KEY: The interactive content input field.
  * If you choose the Text type: Enter the text you want to type.
  * If you choose the Single key or Combo key type: Enter the exact names of the keys from the supported list. For key combinations, the keys must be written together and connected by the `+` sign (e.g., `Control+A` to select all, `Control+Shift+Delete` to clear history).
* Xpath: The identifier path (XPath) of the input frame (input, textarea) you want to interact with.
  * _Note_: If you use the `Single key` or `Combo key` type for the entire browser, you can leave this field blank.
* Delay each character: The time interval between each character when typing text. There are special configurations as follows:
  * 0,0: Super fast typing speed with no wait time (0 seconds).
  * -1: The system will execute the paste command directly, pasting all content into the input field immediately instead of typing each key.
  * _Mandatory note_: If your text contains emoji characters, you must configure this item to `-1` to avoid display errors.

#### Practical example: Automatically clear old content and enter a new keyword

When you want the script to automatically clear any existing characters in the Google search box, then paste a new keyword and press Enter to search:

1. Step 1 (Click on the search box): Use the _Mouse click_ command on the input field.
2. Step 2 (Select all old text): Drag the _Key press_ command ➔ Select Type: `Combo key` ➔ KEY: `Control+A` ➔ Xpath: leave blank.
3. Step 3 (Delete old text): Drag the _Key press_ command ➔ Select Type: `Single key` ➔ KEY: `Backspace` ➔ Xpath: leave blank.
4. Step 4 (Enter new content with Emoji): Drag the _Key press_ command ➔ Select Type: `Text` ➔ KEY: `GPM Softwares 🚀` ➔ Delay each character: `-1` (to paste quickly and recognize the rocket emoji) ➔ Xpath: Enter the XPath of the search box.
5. Step 5 (Press Enter): Drag the _Key press_ command ➔ Select Type: `Single key` ➔ KEY: `Enter` ➔ Xpath: leave blank.

<figure><img src="../../.gitbook/assets/image (193).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (194).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (196).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (197).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (198).png" alt=""><figcaption></figcaption></figure>