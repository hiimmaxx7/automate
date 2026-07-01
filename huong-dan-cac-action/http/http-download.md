---
description: Tải xuống một file về máy tính thông qua giao thức HTTP.
---

# HTTP Download

HTTP Download là hành động nâng cao dùng để tải trực tiếp một tệp tin (như hình ảnh, video, file tài liệu, file zip...) từ một đường dẫn trực tuyến (URL) về lưu trữ trên máy tính của bạn mà không cần phải mở trình duyệt để nhấn nút Download thủ công.

#### Tham số cấu hình:

* URL: Địa chỉ đường dẫn trực tuyến dẫn thẳng đến tệp tin cần tải về (Ví dụ: `https://example.com/images/avatar.jpg`).
* Save Path: Đường dẫn tuyệt đối trên máy tính nơi bạn muốn lưu tệp tin sau khi tải về, bao gồm cả tên file và đuôi định dạng (Ví dụ: `D:\GPM_Data\downloads\avatar.jpg`).
* Headers: Thông tin bổ sung gửi kèm yêu cầu để xác thực quyền truy cập hoặc giả lập trình duyệt nếu máy chủ yêu cầu (Ví dụ: `User-Agent: Mozilla/5.0...` hoặc `Authorization: Bearer $token`). Nếu tải file công khai, bạn có thể để trống mục này.
* Output variable: Tên biến lưu kết quả trả về của hành động (thường trả về giá trị logic `True` nếu tải file thành công hoặc nội dung log phản hồi từ hệ thống).

#### Ví dụ thực tế: Tự động tải video từ đường dẫn có sẵn về máy tính

Giả sử bạn đang chạy một kịch bản cào bài viết và hệ thống đã trích xuất được một đường dẫn video trực tuyến lưu vào biến `$videoUrl`. Bạn muốn tải video này về một thư mục cố định trên ổ D để chuẩn bị cho các bước xử lý tiếp theo:

* Cách cấu hình:
  * URL: Truyền biến `$videoUrl` vào ô nhập liệu.
  * Save Path: Điền đường dẫn lưu file cụ thể, ví dụ: `D:\GPM_Data\Videos\downloaded_video.mp4`.
  * Headers: Để trống (nếu link tải công khai không cần tài khoản).
  * Output variable: Đặt tên biến lưu kết quả là `downloadStatus`.

Kết quả: Hệ thống sẽ tự động kết nối mạng, tải tệp tin video từ đường dẫn `$videoUrl` về và kết xuất thành một file vật lý tên là `downloaded_video.mp4` nằm gọn gàng tại thư mục `D:\GPM_Data\Videos\`. Biến `$downloadStatus` sẽ nhận giá trị để bạn có thể dùng khối lệnh If kiểm tra xem file đã tải xuống thành công hay chưa trước khi chuyển sang các hành động sau.

<figure><img src="../../.gitbook/assets/image (167).png" alt=""><figcaption></figcaption></figure>
