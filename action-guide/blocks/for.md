---
description: >-
  For 是一个用于重复一组操作的命令块，重复次数是预先确定的。这个循环使用一个默认计数变量 $loopIndex 来跟踪循环进度。
---

# For

🎥 查看更多教程视频：[在这里](https://youtu.be/4O4dPC-CNHM)。

#### 循环 For 中的配置参数：

* 🟢 Start: 循环变量 `$loopIndex` 的起始值。
* 🔴 End: 结束值。当 `$loopIndex` 达到 `End - 1` 时，循环将停止。
* ⚡ Increase by: 每次完成循环后，`$loopIndex` 的增量（增加值）。

#### 实际示例：结合 For 循环读取 Excel 文件的所有数据

假设您有一个名为 `test.xlsx` 的 Excel 文件，您需要配置脚本以读取该文件 B 列的所有数据。您可以将 For 循环与系统变量 `$inputExcelTotalRows` 结合使用，如下所示：

🎥 查看更多教程视频：[在这里](https://youtu.be/kbh7muMDGtI)。

<figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (103).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (104).png" alt=""><figcaption></figcaption></figure>