---
description: Chạy một lệnh shell bên trong thiết bị (qua adb shell) và lưu kết quả vào biến.
---

# Execute CMD

Execute CMD là hành động chạy một lệnh shell **bên trong** thiết bị (thông qua `adb shell`) và lưu kết quả trả về vào biến. Nhập lệnh **không** cần tiền tố `adb shell` — phần mềm sẽ tự thêm vào. Khác với Execute ADB (chạy lệnh adb ở phía máy tính), Execute CMD chạy trực tiếp lệnh shell trên hệ điều hành Android của thiết bị.

#### Giải thích các tham số cấu hình:

* Script: Lệnh shell cần chạy trong thiết bị (không kèm `adb shell`), ví dụ `svc wifi enable` hoặc `getprop ro.product.model`.
* Output Variable Name: Tên biến lưu kết quả trả về, ví dụ `check`.

<figure><img src="../../.gitbook/assets/exec-cmd.png" alt=""><figcaption></figcaption></figure>
