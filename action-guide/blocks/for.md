---
description: >-
  For 是一个用于将一组操作按照预先设定的次数重复执行的代码块。该循环使用一个默认名为 $loopIndex 的计数变量来跟踪循环的进度。
---

# For

🎥 观看更多教程视频：[点击这里](https://youtu.be/4O4dPC-CNHM)。

#### For 循环中的配置参数：

* 🟢 Start：循环变量 `$loopIndex` 的起始值。
* 🔴 End：结束值。当 `$loopIndex` 达到 `End - 1` 时，循环将停止。
* ⚡ Increase by：每次循环完成后 `$loopIndex` 的增量（增加的步长）。

#### 实际示例：结合 For 循环读取整个 Excel 文件的数据

假设您有一个名为 `test.xlsx` 的 Excel 文件，您需要配置脚本以读取该文件 B 列中的全部数据。您可以将 For 循环与系统变量 `$inputExcelTotalRows` 结合使用，如下所示：

🎥 观看更多教程视频：[点击这里](https://youtu.be/kbh7muMDGtI)。

<figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (103).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (104).png" alt=""><figcaption></figcaption></figure>