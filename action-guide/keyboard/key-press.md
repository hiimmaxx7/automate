---
description: 在网页上输入内容。
---

# Key press

Key press 是模拟键盘操作的动作，允许您输入文本、按单个键或激活浏览器界面上的快捷键组合。

🎥 查看更多教程视频：[在这里](https://youtu.be/cCTEtuMtz-s)。

#### 支持的按键类型 (Type):

该动作提供了 3 种灵活的键盘交互机制：

1. Single key: 按下键盘上的单个键。
2. Combo key: 同时按下一个快捷键组合。
   * _支持的系统按键列表_: Alt, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Backspace, Cancel, Clear, Command, Control, Decimal, Delete, Divide, Down, End, Enter, Equal, Escape, F1 到 F12, Help, Home, Insert, Left, LeftAlt, LeftControl, LeftShift, Meta, Multiply, Null, NumberPad0 到 NumberPad9, PageDown, PageUp, Pause, Return, Right, Semicolon, Separator, Shift, Space, Subtract, Tab, Up, ZenkakuHankaku。
3. Text: 在输入框中输入或粘贴一段文本（字符字符串）。

#### 配置参数：

* KEY: 交互内容的输入框。
  * 如果选择 Text 类型：输入您想要输入的文本。
  * 如果选择 Single key 或 Combo key 类型：准确输入支持列表中的按键名称。对于组合键，按键必须紧密相连并用 `+` 连接（例如：`Control+A` 选择全部，`Control+Shift+Delete` 删除历史记录）。
* Xpath: 您想要交互的输入框 (input, textarea) 的标识路径 (XPath)。
  * _注意_: 如果您对整个浏览器使用 `Single key` 或 `Combo key` 类型，可以将此框留空。
* Delay each character: 输入文本时每个字符之间的间隔时间。具有以下特殊配置：
  * 0,0: 超高速输入，没有等待时间 (0 秒)。
  * -1: 系统将立即将整个内容粘贴到输入框中，而不是逐个输入按键。
  * _强制注意_: 如果您的文本包含表情符号 (Emoji)，您必须将此项配置为 `-1` 以避免显示错误。

#### 实际示例：自动删除旧内容并输入新关键字

当您希望脚本自动清除 Google 搜索框中已有的字符，然后粘贴一个新关键字并按 Enter 进行搜索时：

1. 步骤 1 (点击搜索框): 使用 _Mouse click_ 命令点击输入框。
2. 步骤 2 (全选旧字): 拖动 _Key press_ 命令 ➔ 选择 Type: `Combo key` ➔ KEY: `Control+A` ➔ Xpath: 留空。
3. 步骤 3 (删除旧字): 拖动 _Key press_ 命令 ➔ 选择 Type: `Single key` ➔ KEY: `Backspace` ➔ Xpath: 留空。
4. 步骤 4 (输入新内容并带 Emoji): 拖动 _Key press_ 命令 ➔ 选择 Type: `Text` ➔ KEY: `GPM Softwares 🚀` ➔ Delay each character: `-1` (以快速粘贴并识别火箭表情) ➔ Xpath: 输入搜索框的 XPath。
5. 步骤 5 (按 Enter): 拖动 _Key press_ 命令 ➔ 选择 Type: `Single key` ➔ KEY: `Enter` ➔ Xpath: 留空。

<figure><img src="../../.gitbook/assets/image (193).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (194).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (196).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (197).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (198).png" alt=""><figcaption></figcaption></figure>