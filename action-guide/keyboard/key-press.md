---
description: 在网页上输入一段内容。
---

# Key press

Key press 是模拟键盘操作的动作，允许您输入文本、按下单个按键或在浏览器界面上触发快捷键组合。

🎥 观看更多操作指南视频：[点击这里](https://youtu.be/cCTEtuMtz-s)。

#### 支持的按键类型（Type）：

该动作提供 3 种灵活的键盘交互机制：

1. Single key：按下键盘上的单个按键。
2. Combo key：同时按下一组快捷键组合。
   * _系统支持的按键列表_：Alt, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Backspace, Cancel, Clear, Command, Control, Decimal, Delete, Divide, Down, End, Enter, Equal, Escape, F1 到 F12, Help, Home, Insert, Left, LeftAlt, LeftControl, LeftShift, Meta, Multiply, Null, NumberPad0 到 NumberPad9, PageDown, PageUp, Pause, Return, Right, Semicolon, Separator, Shift, Space, Subtract, Tab, Up, ZenkakuHankaku。
3. Text：在输入框中输入或粘贴一段文本（字符串）。

#### 配置参数：

* KEY：交互内容输入框。
  * 如果选择 Text 类型：输入您想要输入的文本内容。
  * 如果选择 Single key 或 Combo key 类型：请准确输入支持列表中的按键名称。对于组合键，各按键之间必须紧密书写并用 `+` 符号连接（例如：`Control+A` 表示全选，`Control+Shift+Delete` 表示清除历史记录）。
* Xpath：您想要交互的输入框（input, textarea）的标识路径（XPath）。
  * _注意_：如果您对整个浏览器使用 `Single key` 或 `Combo key` 类型，可以将此项留空。
* Delay each character：输入文本时每个字符之间的间隔时间。有以下特殊配置：
  * 0,0：超高速打字速度，无等待时间（0 秒）。
  * -1：系统将立即执行直接粘贴（paste）整段内容到输入框，而不是逐个字符输入。
  * _必须注意_：如果您的文本包含表情符号（Emoji），您必须将此项配置为 `-1`，以避免出现显示错误。

#### 实际示例：自动清除旧内容并输入新关键词

当您想让脚本自动清除 Google 搜索框中已有的字符，然后粘贴一个新的关键词并按 Enter 进行搜索时：

1. 第 1 步（点击搜索框）：使用 _Mouse click_ 命令点击输入框。
2. 第 2 步（全选旧文字）：拖入 _Key press_ 命令 ➔ 选择 Type：`Combo key` ➔ KEY：`Control+A` ➔ Xpath：留空。
3. 第 3 步（删除旧文字）：拖入 _Key press_ 命令 ➔ 选择 Type：`Single key` ➔ KEY：`Backspace` ➔ Xpath：留空。
4. 第 4 步（输入带表情符号的新内容）：拖入 _Key press_ 命令 ➔ 选择 Type：`Text` ➔ KEY：`GPM Softwares 🚀` ➔ Delay each character：`-1`（以便快速粘贴并能识别火箭表情符号）➔ Xpath：输入搜索框的 XPath。
5. 第 5 步（按 Enter）：拖入 _Key press_ 命令 ➔ 选择 Type：`Single key` ➔ KEY：`Enter` ➔ Xpath：留空。

<figure><img src="../../.gitbook/assets/image (193).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (194).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (196).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (197).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (198).png" alt=""><figcaption></figcaption></figure>