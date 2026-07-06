# 2FA code

2FA code là hành động dùng để tự động tạo ra mã xác thực 2 lớp dạng 6 số biến động theo thời gian (giống như ứng dụng Google Authenticator hay Authy trên điện thoại) từ một mã bảo mật gốc được cung cấp.

Hành động này cực kỳ quan trọng trong các kịch bản MMO, giúp tự động vượt qua bước xác minh bảo mật khi đăng nhập vào các tài khoản Facebook, Google, X (Twitter), Discord, Coinlist... mà không cần phải mở điện thoại lên nhập thủ công.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/nlEQsaxawt4).

#### Tham số cấu hình:

* Secret key: Mã bảo mật gốc (Chuỗi ký tự dạng chữ và số dài, thường được cấp khi bạn bật tính năng bảo mật 2 lớp trên các website).
* Output variable: Tên biến lưu mã xác thực 6 số được sinh ra.

#### Ví dụ thực tế: Tự động điền mã 2FA khi đăng nhập Facebook

Giả sử bạn có dữ liệu một tài khoản Facebook lưu trong Excel, trong đó cột mã bảo mật hai lớp (Secret key) của tài khoản này là: `JBSWY3DPEHPK3PXP`.

Khi trình duyệt điều hướng đến trang đăng nhập Facebook, sau khi điền User/Pass, Facebook sẽ yêu cầu nhập mã xác thực 6 số để vào tài khoản. Bạn cấu hình kịch bản xử lý tự động như sau:

* Cách cấu hình:
  * Gọi hành động 2FA code.
  * Secret key: Điền chuỗi `JBSWY3DPEHPK3PXP` (hoặc truyền biến chứa chuỗi này từ file Excel đọc ra).
  * Output variable: Đặt tên biến là `$twoFACode`.
* Kết quả: Hệ thống sẽ dựa vào thuật toán mã hóa thời gian để tính toán ngay lập tức mã 6 số hiện tại (ví dụ: `482915`) và lưu vào biến `$twoFACode`. Ngay sau hành động này, bạn gọi tiếp lệnh Key press truyền biến `$twoFACode` vào ô nhập mã trên Facebook là có thể đăng nhập thành công.

<figure><img src="../../.gitbook/assets/image (146).png" alt=""><figcaption></figcaption></figure>
