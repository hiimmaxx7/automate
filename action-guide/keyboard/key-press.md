---
description: Type content onto the web page.
---

# Key press

Key press is an action that simulates keyboard operations, allowing you to type text, press a single key, or trigger keyboard shortcuts on the browser interface.

🎥 Watch more tutorial video: [Here](https://youtu.be/cCTEtuMtz-s).

#### Supported key types (Type):

The action provides 3 flexible keyboard interaction mechanisms:

1. Single key: Press a single key on the keyboard.
2. Combo key: Press a combination of keys simultaneously.
   * _List of supported system keys_: Alt, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Backspace, Cancel, Clear, Command, Control, Decimal, Delete, Divide, Down, End, Enter, Equal, Escape, F1 to F12, Help, Home, Insert, Left, LeftAlt, LeftControl, LeftShift, Meta, Multiply, Null, NumberPad0 to NumberPad9, PageDown, PageUp, Pause, Return, Right, Semicolon, Separator, Shift, Space, Subtract, Tab, Up, ZenkakuHankaku.
3. Text: Type or paste a piece of text (string of characters) into the input field.

#### Configuration parameters:

* KEY: Interaction content input field.
  * If Text type is selected: Enter the text you want to type.
  * If Single key or Combo key type is selected: Enter the exact key names from the supported list. For key combinations, the keys must be written consecutively and joined with a `+` sign (Example: `Control+A` to select all, `Control+Shift+Delete` to clear history).
* Xpath: The identifier path (XPath) of the input frame (input, textarea) that you want to interact with.
  * _Note_: If you use `Single key` or `Combo key` type for the entire browser, you can leave this field blank.
* Delay each character: The time interval between each character when typing text. There are the following special configurations:
  * 0,0: Ultra-fast key typing speed with no delay (0 seconds).
  * -1: The system will perform a direct paste command of the entire content into the input field immediately instead of typing each key.
  * _Mandatory note_: If your text contains Emoji symbol characters, you must configure this field as `-1` to avoid display errors.

#### Practical example: Automatically clear old content and enter a new keyword

When you want the script to automatically clear all existing characters in Google's search box, then paste a new keyword and press Enter to search:

1. Step 1 (Click on the search box): Use the _Mouse click_ command on the input field.
2. Step 2 (Select all old text): Drag the _Key press_ command ➔ Select Type: `Combo key` ➔ KEY: `Control+A` ➔ Xpath: leave blank.
3. Step 3 (Delete old text): Drag the _Key press_ command ➔ Select Type: `Single key` ➔ KEY: `Backspace` ➔ Xpath: leave blank.
4. Step 4 (Enter new content with Emoji): Drag the _Key press_ command ➔ Select Type: `Text` ➔ KEY: `GPM Softwares 🚀` ➔ Delay each character: `-1` (for fast pasting and recognizing the rocket emoji) ➔ Xpath: Enter the XPath of the search box.
5. Step 5 (Press Enter): Drag the _Key press_ command ➔ Select Type: `Single key` ➔ KEY: `Enter` ➔ Xpath: leave blank.

<figure><img src="../../.gitbook/assets/image (193).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (194).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (196).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (197).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (198).png" alt=""><figcaption></figcaption></figure>