# Read excel file

Read excel file là hành động dùng để trích xuất giá trị của một ô dữ liệu cụ thể trong file Excel (`.xlsx` hoặc `.xls`) dựa trên vị trí hàng và cột được chỉ định, sau đó lưu giá trị đó vào một biến đầu ra.

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file Excel cần đọc dữ liệu trên máy tính (Ví dụ: `D:\GPM\data.xlsx`).
* Sheet index: Vị trí của trang tính (sheet) cần đọc trong file Excel, bắt đầu tính từ 0 _(Sheet đầu tiên là `0`, sheet thứ hai là `1`...)_.
* Column Name or Index: Vị trí cột chứa dữ liệu cần lấy. Bạn có thể điền theo hai cách:
  * Theo tên ký tự chữ cái: `A`, `B`, `C`, `D`...
  * Theo số mục chỉ số, bắt đầu tính từ 1 _(Cột A là `1`, cột B là `2`...)_.
* Row Index: Vị trí hàng chứa dữ liệu cần lấy, bắt đầu tính từ 1 _(Hàng đầu tiên là hàng tiêu đề hoặc hàng dữ liệu 1 sẽ là `1`, hàng tiếp theo là `2`...)_.
* Output variable: Tên biến lưu giá trị đọc được từ ô Excel đó.

#### Ví dụ thực tế: Đọc tài khoản và mật khẩu từ file Excel để đăng nhập

Giả sử bạn có một file Excel chứa danh sách tài khoản lưu tại đường dẫn `D:\GPM\accounts.xlsx`. Cấu trúc của sheet đầu tiên (Sheet index = 0) như sau:

* Cột A (Cột 1): Chứa Username
* Cột B (Cột 2): Chứa Password

Bạn muốn đọc dữ liệu tài khoản ở hàng số 2 (hàng dữ liệu đầu tiên sau hàng tiêu đề):

* Cách cấu hình lấy Username:
  * File Path: `D:\GPM\accounts.xlsx`
  * Sheet index: `0`
  * Column Name or Index: `A` (hoặc điền `1`)
  * Row Index: `2`
  * Output variable: `$username`
* Cách cấu hình lấy Password: Bạn tạo thêm một hành động tương tự bên dưới:
  * Các thông số giữ nguyên, chỉ thay Column Name or Index thành `B` (hoặc điền `2`) và đặt Output variable là `$password`.

Kết quả: Hệ thống sẽ trích xuất chính xác giá trị của ô `A2` vào biến `$username` và ô `B2` vào biến `$password`. Sau đó, bạn có thể truyền hai biến này vào hành động tương tác trình duyệt để tiến hành đăng nhập tự động.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>
