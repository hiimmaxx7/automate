# Read mail code

Read mail code là hành động nâng cao giúp kịch bản tự động đăng nhập vào hộp thư điện tử (Gmail, Outlook, Hotmail, Yahoo...) thông qua giao thức kết nối bảo mật IMAP. Hệ thống sẽ tự động quét thư mới nhất, tìm kiếm email từ người gửi chỉ định và trích xuất ra mã xác thực (OTP/Code) để điền vào trang web mà không cần bạn phải mở tab email lên thao tác thủ công.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/c9384x0uWiI).

#### Giải thích các tham số cấu hình:

* Email: Điền địa chỉ hộp thư cần đọc mã xác thực (Ví dụ: `gpm_user@gmail.com`).
*   Password: Điền mật khẩu kết nối.

    > ⚠️ Chú ý quan trọng: Với các dòng mail bảo mật cao như Gmail, bạn không được điền mật khẩu chính của tài khoản vào đây mà bắt buộc phải điền Mật khẩu ứng dụng (App Password) được tạo riêng trong cài đặt bảo mật của email đó (Hướng dẫn lấy ở mục dưới).
* Mail server: Địa chỉ máy chủ IMAP của nhà cung cấp dịch vụ mail.
  * _Ví dụ Gmail_: `imap.gmail.com`
  * _Ví dụ Outlook/Hotmail_: `outlook.office365.com`
* Email sent to contains: Từ khóa hoặc địa chỉ email gửi đến có chứa cụm từ đó (Dùng để lọc đúng email cần tìm, ví dụ: `noreply@pinterest.com` hoặc `no-reply@pinterest`).
* Proxy: Tùy chọn cấu hình IP để đăng nhập vào máy chủ mail, giúp tránh bị các nhà cung cấp dịch vụ (như Google, Microsoft) chặn kết nối khi thao tác số lượng lớn tài khoản. Bạn có thể thiết lập theo 3 cách:
  * Để trống: Hệ thống sẽ sử dụng mạng mạng gốc (IP máy thực) để thực hiện kết nối và tải mã.
  * Điền biến `$profileProxy`: Kịch bản sẽ tự động bốc gói Proxy đang được gán riêng cho Profile GPM hiện tại để sử dụng.
  * Tự điền proxy: Nhập trực tiếp chuỗi Proxy theo định dạng cụ thể (Ví dụ: `ip:port` hoặc `ip:port:user:pass`) mà bạn muốn chỉ định riêng cho hành động này.
* Code type: Định dạng cấu trúc của mã OTP cần bóc tách. Hệ thống hỗ trợ 3 tùy chọn:
  1. Number (Kiểu số): Dùng khi mã OTP gửi về hoàn toàn là các con số liên tiếp (Ví dụ: `475997`).
     * _Code Length_: Độ dài chính xác của dãy số cần bóc (Ví dụ mã gồm 6 số thì điền `6`).
  2. Text (Kiểu chữ): Dùng khi mã OTP có chứa cả ký tự chữ và số xen kẽ, hoặc nằm ẩn sâu trong một thẻ cấu trúc HTML của email.
     * _Code element xpath_: Đường dẫn XPath dẫn thẳng đến thẻ chứa mã OTP bên trong nội dung email (Ví dụ: `//h1` hoặc `//span[@id="otp"]`).
     * _Code element attribute_: Điền từ khóa `text` nếu mã OTP nằm trực tiếp giữa hai thẻ (Ví dụ: `<h1>ABCDEF</h1>` ➔ Điền `text`). Hoặc điền _Tên thuộc tính_ nếu mã OTP nằm ẩn trong thuộc tính của thẻ (Ví dụ: `<h1 code="ABCDEF"></h1>` ➔ Điền `code`).
  3. Full (Cả nội dung Email): Tùy chọn nâng cao cho phép hệ thống bốc toàn bộ mã nguồn văn bản/HTML của toàn bộ email trả về gán vào biến. Từ đó, bạn có thể truyền biến này qua hành động Regex hoặc Execute JS code để tự viết thuật toán bóc tách linh hoạt theo ý muốn (Phù hợp cho các loại mail có cấu trúc OTP siêu phức tạp).
* Output variable: Tên biến lưu lại chuỗi mã xác thực (hoặc nội dung toàn bộ email) sau khi lấy thành công để truyền vào hành động nhập liệu tiếp theo.

#### Hướng dẫn cách Bật Xác minh 2 bước (2FA) và Lấy Mật khẩu ứng dụng (App Password) cho Gmail

Để bảo mật, Google chặn tất cả các ứng dụng bên thứ ba kết nối trực tiếp vào hộp thư bằng mật khẩu gốc. Bạn bắt buộc phải thực hiện quy trình sau để cấp quyền cho GPM Automate truy cập IMAP:

**1. Bật xác minh 2 bước (2FA) cho tài khoản Google**

1. Đăng nhập vào tài khoản Google của bạn, truy cập trang quản lý tài khoản tại: [https://myaccount.google.com](https://myaccount.google.com).
2. Tại thanh thực đơn bên trái, chọn mục Bảo mật (Security).
3. Cuộn xuống phần _"Cách bạn đăng nhập vào Google"_, tìm mục Xác minh 2 bước (2-Step Verification). Nếu đang ở trạng thái _Tắt_, hãy nhấp chọn và làm theo hướng dẫn (liên kết số điện thoại hoặc app xác thực) để chuyển nó sang trạng thái Bật.

**2. Tạo và lấy Mật khẩu ứng dụng (App Password)**

1. Sau khi đã bật thành công Xác minh 2 bước, bạn truy cập phần Mật khẩu ứng dụng (App password) tại đây: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
2. Ô Tên ứng dụng (App name) hiện ra, bạn nhập một tên bất kỳ để ghi nhớ (Ví dụ: `GPM_Automate`) rồi nhấn nút Tạo (Create).
3. Một cửa sổ nhỏ hiện lên chứa một đoạn mã chữ gồm 16 ký tự màu vàng (Ví dụ: `abcd efgh ijkl mnop`).
4. Bạn hãy copy toàn bộ 16 ký tự này (xóa các khoảng trắng nếu có) và dán trực tiếp vào ô Password trong cấu hình hành động _Read mail code_ của GPM Automate.

_(Lưu ý: Đối với tài khoản Outlook/Hotmail, bạn thực hiện quy trình tương tự trong mục Settings > Security > Advanced security options > App passwords để lấy chuỗi mật khẩu 16 ký tự tương ứng)._

<figure><img src="../../.gitbook/assets/image (177).png" alt=""><figcaption></figcaption></figure>
