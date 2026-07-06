# Read outlook (Oauth2)

Read outlook (OAuth2) là hành động nâng cao chuyên biệt dùng để đọc mã xác thực (OTP) từ các tài khoản thuộc hệ sinh thái Microsoft (Outlook, Hotmail, Live...). Khác với phương thức IMAP truyền thống dễ bị Microsoft quét block hoặc bắt xác minh danh tính, hành động này sử dụng giao thức OAuth2 (thông qua Refresh Token và Client ID). Đây là cơ chế kết nối chính thống, có độ bảo mật cao, cực kỳ ổn định và hạn chế tối đa tình trạng tài khoản bị checkpoint khi chạy số lượng lớn (mass).

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/c9384x0uWiI).

#### Giải thích chi tiết các thông số cấu hình:

* Email|Pass|Refresh token|Client ID: Ô nhập thông tin tài khoản cần đọc mã xác thực. Hiện nay khi mua tài khoản Outlook/Hotmail từ các trang web cung cấp nguyên liệu MMO, bạn thường được bàn giao cấu trúc định dạng gồm 4 thông tin ngăn cách bởi dấu gạch đứng `|`. Bạn cần điền vào ô này theo đúng quy chuẩn sau: `Email|Refresh token|Client ID.`
* Email sent to contains: Từ khóa hoặc địa chỉ email gửi đến có chứa cụm từ đó để hệ thống lọc chính xác thư cần tìm.
  * _Ví dụ_: Bạn cần lấy mã OTP từ email do TikTok gửi về có địa chỉ là `noreply@tiktok.com`, hãy điền chính xác `noreply@tiktok.com` (hoặc cụm từ phân biệt như `noreply@tiktok`) vào mục này.
* Proxy: Tùy chọn cấu hình địa chỉ IP để gửi yêu cầu kết nối đến máy chủ Microsoft nhằm tránh trùng lặp IP khi check mail hàng loạt. Bạn có thể thiết lập:
  * _Để trống_: Sử dụng mạng gốc của máy tính đang chạy.
  * _Điền biến `$profileProxy`_: Hệ thống tự bốc Proxy đang gán riêng cho Profile GPM hiện tại để dùng.
  * _Tự điền proxy_: Nhập trực tiếp chuỗi Proxy chỉ định theo dạng `ip:port` hoặc `ip:port:user:pass`.
* Code type: Định dạng cấu trúc của mã OTP cần hệ thống trích xuất từ nội dung thư. Gồm 3 tùy chọn:
  1. Number (Kiểu số): Dùng khi mã OTP gửi về hoàn toàn là các con số liên tiếp.
     * _Code Length_: Độ dài của chuỗi OTP cần đọc (Ví dụ mã gửi về là `475997` ➔ Điền Code length là `6`).
  2. Text (Kiểu chữ): Dùng khi mã OTP chứa cả chữ và số, hoặc nằm ẩn trong cấu trúc thẻ HTML của email.
     * _Code element xpath_: Đường dẫn XPath dẫn thẳng đến phần tử chứa mã OTP cần lấy trong nội dung email.
     * _Code element attribute_: Điền chữ `text` nếu mã OTP là nội dung nằm giữa hai thẻ (Ví dụ: `<h1>ABCDEF</h1>` ➔ Điền `text`). Hoặc điền _Tên thuộc tính_ nếu mã OTP là giá trị nằm bên trong thuộc tính của thẻ (Ví dụ: `<h1 @code="ABCDEF"></h1>` ➔ Điền `code`).
  3. Full (Cả nội dung Email): Tùy chọn nâng cao giúp bốc toàn bộ mã nguồn văn bản hoặc mã HTML của email trả về gán vào biến đầu ra. Sau đó, bạn có thể truyền biến này qua hành động Regex hoặc Execute JS code để tự viết quy luật bóc tách linh hoạt theo nhu cầu riêng.
* Output variable: Tên biến đầu ra dùng để lưu chuỗi mã OTP (hoặc toàn bộ nội dung email tùy thuộc vào cấu hình _Code type_) phục vụ cho các hành động nhập liệu tiếp theo trong kịch bản.

<figure><img src="../../.gitbook/assets/image (178).png" alt=""><figcaption></figcaption></figure>
