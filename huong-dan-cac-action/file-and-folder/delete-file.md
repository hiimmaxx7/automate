---
description: Xoá file theo đường dẫn File Path.
---

# Delete file

Delete file là hành động dùng để xóa bỏ hoàn toàn một tệp tin ra khỏi ổ cứng máy tính theo đường dẫn được chỉ định.

> ⚠️ Lưu ý quan trọng: Tệp tin bị xóa bằng hành động này sẽ biến mất vĩnh viễn và không nằm trong Thùng rác (Recycle Bin) của Windows. Do đó, bạn cần chắc chắn về đường dẫn trước khi thực thi để tránh xóa nhầm dữ liệu quan trọng.

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file cần xóa trên máy tính (Ví dụ: `D:\data\temp_cookie.txt`).

#### Ví dụ thực tế: Tự động dọn dẹp file tạm sau khi kết thúc kịch bản

Khi chạy các kịch bản như tải video từ trên mạng về để đăng reup sang kênh khác, hoặc xuất dữ liệu tạm thời ra file text để xử lý chuỗi. Sau khi đã hoàn thành xong công việc (video đã upload xong, dữ liệu đã được đồng bộ lên Google Sheet), bạn cần xóa các file trung gian này đi để tránh đầy bộ nhớ máy tính.

* Cách cấu hình:
  * Ở cuối kịch bản, bạn gọi hành động Delete file.
  * File Path: Điền đường dẫn của file tạm đã dùng, ví dụ: `D:\render\temp_video.mp4`.
* Kết quả: Hệ thống sẽ xóa sạch file `temp_video.mp4` tại thư mục ổ D. Thư mục làm việc của bạn sẽ luôn gọn gàng và máy tính không bị tình trạng tràn ổ cứng sau nhiều ngày treo luồng tự động.

<figure><img src="../../.gitbook/assets/image (151).png" alt=""><figcaption></figcaption></figure>
