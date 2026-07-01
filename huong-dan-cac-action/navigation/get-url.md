# Get URL

Get URL là hành động dùng để trích xuất toàn bộ đường dẫn địa chỉ (URL) của trang web hiện tại đang mở trên trình duyệt và lưu vào một biến số.

#### Tham số cấu hình:

* Output variable: Tên biến số do bạn tự đặt để lưu lại chuỗi địa chỉ trang web sau khi bóc tách thành công.

#### Ví dụ thực tế: Kiểm tra trạng thái chuyển hướng sau khi đăng nhập thành công

Khi bạn làm kịch bản tự động đăng nhập (Login) vào một nền tảng nào đó (ví dụ như Pinterest hoặc Facebook). Sau khi điền thông tin và bấm nút đăng nhập, bạn muốn kiểm tra xem tài khoản đã vào được trang chủ thành công hay bị chuyển hướng sang trang báo lỗi/bắt xác minh danh tính (Checkpoint):

* Cách cấu hình:
  * Đợi một vài giây sau khi bấm nút đăng nhập, gọi hành động Get URL.
  * Output variable: Đặt tên biến là `currentLink`.
  * Kết hợp chèn khối lệnh điều kiện If phía sau để kiểm tra dữ liệu của biến `$currentLink`:
    * _Trường hợp 1_: Nếu biến `$currentLink` chứa cụm từ `checkpoint` hoặc `login_error` ➔ Kịch bản nhận diện tài khoản lỗi và xử lý dừng luồng.
    * _Trường hợp 2_: Nếu biến `$currentLink` chứa cụm từ `home` hoặc dữ liệu chuyển sang trang cá nhân ➔ Kịch bản nhận diện đăng nhập thành công và chạy tiếp các tác vụ nuôi tài khoản.
