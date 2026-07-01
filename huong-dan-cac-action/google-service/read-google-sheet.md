# Read google sheet

Read google sheet là hành động ra lệnh cho kịch bản tự động kết nối với tài khoản Google Drive của bạn để trích xuất và đọc nội dung từ một ô hoặc một vùng dữ liệu trên tệp Google Sheets trực tuyến.

#### Các tham số cấu hình:

* Credential file: Chọn tệp tin xác thực tài khoản Google (tệp tin có đuôi mở rộng là `.json`). Tệp tin này đóng vai trò như một chiếc chìa khóa bảo mật, mục đích dùng để thiết lập kết nối an toàn với hệ thống Google API, xác thực và cấp quyền cho GPM Automate có thể vào đọc/ghi nội dung trên Google Sheet của bạn.
  * _Hướng dẫn chi tiết_: Bạn có thể xem video hướng dẫn cách tạo tệp tin xác thực này tại đây:&#x20;
* File ID: Mã định danh duy nhất của tệp Google Sheets cần tương tác để hệ thống xác định chính xác tệp cần đọc dữ liệu.
  * _Cách lấy ID_: Khi bạn mở tệp Google Sheet trên trình duyệt, đường dẫn URL sẽ có dạng `https://docs.google.com/spreadsheets/d/abc123xyz_Mã_ID_Nằm_Ở_Đây/edit`. Bạn chỉ cần copy đoạn chuỗi ký tự nằm giữa cụm `/d/` và `/edit` để điền vào ô này.
* Sheet ID: Số thứ tự vị trí của trang tính (Sheet) cần đọc bên trong tệp (được tính bắt đầu từ số `0` cho sheet đầu tiên bên trái, tiếp theo lần lượt là 1, 2, 3... từ trái qua phải).
* Column Name or Index: Chỉ định vị trí cột cần đọc dữ liệu. Bạn có thể nhập theo 2 cách:
  * _Theo tên chữ cái_: Nhập tên cột bắt đầu từ `A`, `B`, `C`, `D`...
  * _Theo số thứ tự (Index)_: Nhập số thứ tự bắt đầu từ số `1` (tương ứng với cột 1 là cột A).
* Row Index: Số thứ tự của hàng cần đọc dữ liệu, được tính bắt đầu từ số `1` (tương ứng với hàng số 1 trên Google Sheet).
* Output variable: Tên biến số của GPM Automate dùng để hứng và lưu trữ lại giá trị nội dung văn bản đọc ra được từ ô tính đó.

#### Ví dụ thực tế: Tự động lấy dữ liệu tài khoản từ Google Sheet để điền Form

Khi bạn lưu trữ danh sách hàng loạt tài khoản MMO (gồm Username, Password) trên một tệp Google Sheet dùng chung, và muốn kịch bản tự động đọc dòng đầu tiên để lấy dữ liệu ra xử lý:

* Cách cấu hình để lấy Username ở ô A1:
  * Credential file: Chọn đường dẫn đến file `client_secret_....json` đã cấu hình.
  * File ID: Nhập mã ID tệp Sheet của bạn.
  * Sheet ID: `0` (Đọc ở sheet đầu tiên).
  * Column Name or Index: Điền `A` (hoặc điền `1`).
  * Row Index: Điền `1`.
  * Output variable: `currentUsername`
* Kết quả: GPM Automate sẽ ngầm kết nối tới Google Sheet, bóc tách dữ liệu tại ô A1 và nạp thẳng nội dung chữ vào biến `$currentUsername`. Sau đó, bạn có thể gọi biến này ra ở hành động nhập liệu Key press một cách mượt mà.

<figure><img src="../../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (228).png" alt=""><figcaption></figcaption></figure>
