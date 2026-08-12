---
description: Kiểm tra kết nối mạng của thiết bị bằng cách ping tới Google.
---

# Check network

Check network là hành động kiểm tra thiết bị có đang kết nối được Internet hay không, bằng cách ping tới máy chủ Google. Kết quả được lưu vào một biến để rẽ nhánh kịch bản (ví dụ: nếu mất mạng thì gọi Reconnect hoặc bật lại Wi-Fi).

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/CY9salGJqBw).

#### Giải thích các tham số cấu hình:

* Output Variable Name: Tên biến lưu kết quả kiểm tra kết nối (có mạng / không có mạng). Dùng biến này trong khối If để xử lý tương ứng.

<figure><img src="../../.gitbook/assets/net-chk.png" alt=""><figcaption></figcaption></figure>
