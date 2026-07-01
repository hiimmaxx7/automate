---
description: Ghi dữ liệu lên trên google sheet
---

# Write google sheet

Write google sheet là hành động ra lệnh cho kịch bản tự động kết nối với tài khoản Google Drive của bạn để ghi đè hoặc chèn nội dung mới vào một ô tính cụ thể trên tệp Google Sheets trực tuyến.

#### Các tham số cấu hình:

* Credential file: Chọn tệp tin xác thực tài khoản Google (tệp `.json`). Đây là chứng chỉ bảo mật cấp quyền cho GPM Automate kết nối, xác thực và thực hiện lệnh ghi nội dung lên Google Sheet của bạn.
  * _Hướng dẫn tạo file_: Xem video hướng dẫn tại đây:&#x20;
* File ID: Mã định danh duy nhất của tệp Google Sheets cần tương tác (lấy từ chuỗi ký tự nằm giữa cụm `/d/` và `/edit` trên đường dẫn URL của tệp).
* Sheet ID: Số thứ tự của trang tính cần ghi nội dung (bắt đầu từ số `0` cho sheet đầu tiên tính từ trái qua phải).
* Column Name or Index: Chỉ định vị trí cột cần ghi dữ liệu. Bạn có thể nhập chữ cái (Ví dụ: `A`, `B`, `C`...) hoặc nhập số thứ tự index (Ví dụ: `1` tương ứng với cột A).
* Row Index: Số thứ tự của hàng cần ghi dữ liệu, được tính bắt đầu từ số `1`.
* Value: Nội dung văn bản, số hoặc giá trị từ biến số GPM Automate mà bạn muốn điền vào ô tính mục tiêu.

#### Ví dụ thực tế: Tự động cập nhật trạng thái tài khoản sau khi chạy xong

Khi bạn làm kịch bản nuôi tài khoản hoặc đăng bài, sau khi một Profile hoàn thành nhiệm vụ thành công, bạn muốn ghi chữ "Live" hoặc "Thành công" vào cột trạng thái trên Google Sheet để tiện theo dõi:

* Cách cấu hình để ghi vào ô C2:
  * Credential file: Chọn đường dẫn đến file `client_secret_....json` đã cấu hình.
  * File ID: Nhập mã ID tệp Sheet của bạn.
  * Sheet ID: `0` (Ghi ở sheet đầu tiên).
  * Column Name or Index: Điền `C` (hoặc điền `3`).
  * Row Index: Điền `2`.
  * Value: Điền chữ `Live` (hoặc truyền biến trạng thái `$status`).
* Kết quả: GPM Automate sẽ lập tức đồng bộ và điền chữ "Live" thẳng vào ô C2 trên Google Sheet trực tuyến của bạn một cách nhanh chóng mà không cần mở trình duyệt Docs.

<figure><img src="../../.gitbook/assets/image (230).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (229).png" alt=""><figcaption></figcaption></figure>
