---
description: 在设备内执行 shell 命令（通过 adb shell）并将结果保存到变量中。
---

# Execute CMD

Execute CMD 是在设备 **内部** 执行 shell 命令（通过 `adb shell`）并将返回结果保存到变量中的操作。与 Execute ADB（在计算机上运行 adb 命令）不同，Execute CMD 直接在设备的 Android 操作系统上运行 shell 命令。

#### 配置参数说明：

* Script: 需要在设备上运行的 shell 命令，例如 `svc wifi enable` 或 `getprop ro.product.model`。
* Output Variable Name: 保存返回结果的变量名称，例如 `check`。

<figure><img src="../../.gitbook/assets/ps-02.png" alt=""><figcaption></figcaption></figure>