# File write all text

File write all text là hành động dùng để ghi một chuỗi văn bản vào một file định dạng `.txt` trên máy tính.

Hành động này sở hữu cơ chế vận hành đặc biệt (ghi đè và tự động tạo mới):

* Nếu file chưa tồn tại: Hệ thống sẽ tự động tạo mới file `.txt` theo đường dẫn đã chỉ định rồi ghi nội dung vào.
* Nếu file đã tồn tại: Hệ thống sẽ xóa sạch toàn bộ nội dung cũ đang có trong file và ghi đè nội dung mới vào.

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file `.txt` muốn ghi dữ liệu (Ví dụ: `D:\GPM\status.txt`).
* Text: Nội dung văn bản thô (hoặc biến chứa văn bản) mà bạn muốn ghi vào file.

#### Ví dụ thực tế: Tự động khởi tạo file báo cáo trạng thái mới

Giả sử bạn bắt đầu chạy một kịch bản tương tác tài khoản mới vào đầu ngày. Bạn muốn kịch bản tự động làm sạch (hoặc tạo mới) một file văn bản có tên là `report.txt` ở ổ D, sau đó ghi dòng chữ chào mừng đầu tiên vào đó để chuẩn bị lưu nhật ký cho ngày hôm nay.

* Cách cấu hình:
  * Gọi hành động File write all text.
  * File Path: Điền `D:\GPM\report.txt`.
  * Text: Điền nội dung: `"--- Nhật ký chạy kịch bản ngày hôm nay ---"`.
* Kết quả:
  * Nếu chưa có file `report.txt`, hệ thống tự động tạo file này tại thư mục `D:\GPM\`.
  * Nếu file đã có sẵn từ hôm qua (chứa đầy chữ cũ), hệ thống sẽ dọn sạch bách nội dung cũ đó, biến file thành file trắng rồi ghi vào dòng chữ `"--- Nhật ký chạy kịch bản ngày hôm nay ---"`.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>
