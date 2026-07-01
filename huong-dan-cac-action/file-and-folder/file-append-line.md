# File append line

File append line là hành động dùng để chèn thêm một dòng chữ mới vào vị trí cuối cùng của một file định dạng `.txt`.

Khác với hành động ghi đè (File write all text), hành động này giúp bảo toàn nguyên vẹn toàn bộ những dữ liệu đã có từ trước trong file.

* Nếu file chưa tồn tại: Hệ thống sẽ tự động tạo mới file `.txt` theo đường dẫn đã chỉ định rồi tiến hành chèn dòng chữ vào.
* Nếu file đã tồn tại: Hệ thống giữ nguyên nội dung cũ, tự động xuống dòng ở cuối file và nối đuôi dòng dữ liệu mới vào.

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file `.txt` muốn chèn thêm dữ liệu (Ví dụ: `D:\GPM\history_log.txt`).
* Text: Nội dung văn bản (hoặc biến chứa văn bản) mà bạn muốn nối thêm vào cuối file.

#### Ví dụ thực tế: Ghi nhật ký (Log) các tài khoản đã chạy thành công

Giả sử bạn chạy một kịch bản tương tác và muốn lưu lại danh sách những tài khoản đã hoàn thành nhiệm vụ vào file `success_accounts.txt` để cuối ngày tiện kiểm tra:

* Cách cấu hình: Sau khi tài khoản thực hiện xong các bước tương tác ở cuối kịch bản, bạn gọi hành động File append line:
  * File Path: Điền `D:\GPM\success_accounts.txt`.
  * Text: Truyền biến chứa tên tài khoản vào (Ví dụ: `$currentAccount`).
* Kết quả: Mỗi khi có một luồng chạy xong, tên tài khoản đó sẽ được xếp nối đuôi nhau ngay ngắn thành từng dòng trong file `success_accounts.txt` (Ví dụ: dòng 1 là `tk_01`, dòng 2 là `tk_02`...) mà không bị mất dữ liệu của các tài khoản đã chạy trước đó.

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>
