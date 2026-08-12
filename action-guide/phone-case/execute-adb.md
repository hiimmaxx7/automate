---
description: 运行一个针对设备的 ADB 命令并将结果保存到变量中。
---

# 执行 ADB

执行 ADB 是一个针对正在控制的设备运行 ADB 命令并将返回结果保存到变量中的操作。输入命令时 **不** 需要前缀 `adb -s [serial]` — 系统会自动添加正在控制的设备。

#### 配置参数解释：

* 脚本：需要运行的 ADB 命令（不带 `adb -s [serial]`），例如 `get-serialno` 或 `shell pm list packages`。
* 输出变量名称：保存命令返回结果的变量名称，例如 `deviceNo`。

<figure><img src="../../.gitbook/assets/ps-01.png" alt=""><figcaption></figcaption></figure>