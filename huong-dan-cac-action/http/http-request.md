# HTTP Request

### Hành động gửi yêu cầu mạng (HTTP Request)

HTTP Request là hành động nâng cao dùng để gửi các yêu cầu mạng trực tiếp từ kịch bản đến một hệ thống máy chủ (Server), API bên thứ ba hoặc các website mà không cần phải mở giao diện trình duyệt để tương tác thủ công. Hành động này giúp tối ưu hóa tốc độ xử lý dữ liệu lên gấp hàng chục lần.

#### Giải thích các tham số cấu hình:

* URL: Địa chỉ đường dẫn của tài nguyên hoặc API trên máy chủ cần tương tác (Ví dụ: `[https://api.telegram.org/bot.../sendMessage](https://api.telegram.org/bot.../sendMessage)`).
* Method: Phương thức giao tiếp để định nghĩa hành động thực hiện:
  * `GET`: Lấy (đọc) dữ liệu từ máy chủ về.
  * `POST`: Gửi dữ liệu mới lên máy chủ (thường dùng để đăng nhập, tạo bài viết, gửi tin nhắn).
  * `PUT` / `PATCH`: Cập nhật dữ liệu đã có trên máy chủ.
  * `DELETE`: Xóa tài nguyên trên máy chủ.
* Header: Thông tin bổ sung gửi kèm yêu cầu để máy chủ nhận diện trình duyệt hoặc xác thực quyền truy cập.
  * _Ví dụ_: `Content-Type: application/json` (định dạng dữ liệu gửi lên), hoặc `Authorization: Bearer <token_bí_mật>` (mã cấu hình xác thực tài khoản).
* Data (Body / Payload): Dữ liệu thực tế được gửi kèm trong yêu cầu (chỉ áp dụng khi chọn các phương thức như `POST`, `PUT`, `PATCH`).
* Timeout: Thời gian tối đa (tính bằng giây tùy giao diện thiết lập mà hành động sẽ chờ đợi phản hồi từ máy chủ. Nếu quá thời gian này mà máy chủ không phản hồi, hành động sẽ tự động ngắt kết nối và báo lỗi (hoặc ném ra biệt lệ) để tránh việc kịch bản bị treo vô hạn do mạng lag hoặc server đối phương bị sập.
* Use profile's proxy: Tùy chọn cho phép sử dụng chính Proxy đang gán cho Profile đó để gửi request. Nếu không tích chọn, hệ thống sẽ dùng địa chỉ IP mạng nội bộ (Local IP) của máy tính bạn để gửi đi.

#### Định dạng cấu hình phần Data (Body) theo từng loại nội dung

Tùy thuộc vào yêu cầu của tài liệu API từ máy chủ, phần Data sẽ phải điền theo đúng quy chuẩn định dạng khác nhau:

**Ví dụ 1: Với dạng body `application/json`**

Đây là định dạng phổ biến nhất hiện nay khi làm việc với các API hiện đại. Phần body phải được điền theo cấu trúc cặp ngoặc nhọn `{}` và các trường dữ liệu nằm trong dấu nháy kép bọc chuẩn mã JSON.

<figure><img src="../../.gitbook/assets/image (163).png" alt=""><figcaption></figcaption></figure>

**Ví dụ 2: Với dạng body `application/x-www-form-urlencoded`**

Đây là định dạng chuỗi dữ liệu truyền thống thường gặp ở các form đăng nhập cũ hoặc một số cổng thanh toán. Các cặp thuộc tính được nối liền nhau thành một chuỗi văn bản liên tục.

<figure><img src="../../.gitbook/assets/image (164).png" alt=""><figcaption></figcaption></figure>

**Ví dụ 3: Với dạng body `multipart/form-data`**

Đây là định dạng đặc biệt, bắt buộc phải dùng khi bạn có nhu cầu tải tệp tin (như hình ảnh, video, file tài liệu) hoặc gửi các biểu mẫu hỗn hợp phức tạp từ máy tính lên máy chủ.

<figure><img src="../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>
