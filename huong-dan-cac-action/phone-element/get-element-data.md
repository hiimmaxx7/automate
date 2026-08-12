---
description: Lấy một thuộc tính của phần tử trên màn hình theo XPath và lưu vào biến.
---

# Get element data

Get element data là hành động lấy dữ liệu (một thuộc tính cụ thể) của một phần tử trên màn hình thiết bị theo XPath, rồi lưu vào biến để dùng ở các bước sau.

#### Giải thích các tham số cấu hình:

* XPath: XPath của phần tử cần lấy dữ liệu, ví dụ `//node[@resource-id="com.android.chrome:id/url_bar"]`. Xem cách lấy XPath tại [Hướng dẫn xác định XPath & toạ độ](../phone-action/huong-dan-xac-dinh-xpath-va-toa-do.md).
* Attribute name: Tên thuộc tính cần lấy, ví dụ `resource-id`, `text`, `content-desc`, `class`, `bounds`...
* Output Variable Name: Tên biến lưu giá trị thuộc tính đọc được.

<figure><img src="../../.gitbook/assets/el-data.png" alt=""><figcaption></figcaption></figure>
