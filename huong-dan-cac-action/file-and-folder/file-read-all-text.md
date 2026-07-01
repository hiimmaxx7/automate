# File read all text

File read all text là hành động dùng để đọc trọn vẹn nội dung của một file văn bản định dạng `.txt` cùng một lúc. Toàn bộ dữ liệu bên trong file sẽ được trả về dưới dạng một chuỗi văn bản (string) duy nhất và lưu vào một biến đầu ra (Output variable).

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file `.txt` cần đọc (Ví dụ: `D:\data\content.txt`).
* Output variable: Tên biến lưu cấu trúc chuỗi ký tự vừa đọc được.

#### Ví dụ thực tế: Đọc nội dung bài viết chuẩn bị sẵn

Giả sử bạn chuẩn bị một bài viết dài (gồm nhiều câu, dấu xuống dòng, khoảng trắng) lưu trong file văn bản `D:\GPM\post.txt`. Bạn muốn lấy toàn bộ nội dung này để tự động điền vào ô đăng bài trên trình duyệt:

* Cách cấu hình:
  * File Path: Điền đường dẫn `D:\GPM\post.txt`
  * Output variable: Đặt tên biến lưu kết quả là `$textContent`.
* Kết quả: Hệ thống sẽ bốc trọn vẹn mọi ký tự và cấu trúc dòng có trong file gán vào biến `$textContent`. Ở các bước tiếp theo, bạn chỉ cần gọi hành động Key press truyền biến `$textContent` này vào ô nhập liệu của website là xong.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>
