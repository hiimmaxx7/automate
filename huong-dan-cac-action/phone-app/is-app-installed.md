---
description: Kiểm tra một ứng dụng đã được cài trên thiết bị hay chưa.
---

# Is app installed

Is app installed là hành động kiểm tra xem một ứng dụng (theo tên gói) đã được cài đặt trên thiết bị điện thoại hay chưa, rồi trả kết quả về một biến để rẽ nhánh kịch bản (ví dụ: chưa cài thì cài, đã cài thì mở lên).

#### Giải thích các tham số cấu hình:

* Package name: Tên gói (package name) của ứng dụng cần kiểm tra, ví dụ Facebook là `com.facebook.katana`.
* Output Variable Name: Tên biến lưu kết quả trả về dạng đúng/sai (`true` nếu ứng dụng đã được cài, `false` nếu chưa). Dùng biến này trong khối If để quyết định bước tiếp theo.

<figure><img src="../../.gitbook/assets/is-inst.png" alt=""><figcaption></figcaption></figure>
