# File read random line

File read random line là hành động dùng để mở một file văn bản `.txt` có sẵn, tự động bốc ngẫu nhiên một dòng bất kỳ trong file đó, sau đó lưu nội dung dòng bốc được vào một biến đầu ra.

Hành động này cực kỳ hữu ích khi bạn nuôi tài khoản mạng xã hội (Facebook, X, Instagram...) và muốn lấy ngẫu nhiên một câu bình luận (Comment), một câu trạng thái (Status) hoặc một từ khóa tìm kiếm để kịch bản không bị lặp đi lặp lại một nội dung giống nhau giữa các profile.

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file `.txt` chứa danh sách dữ liệu có sẵn trên máy tính.
* Output variable: Tên biến lưu nội dung dòng ngẫu nhiên vừa bốc được.

#### Ví dụ thực tế: Tự động bình luận ngẫu nhiên để tránh spam

Giả sử bạn chuẩn bị sẵn một file danh sách các câu bình luận tích cực lưu tại `D:\GPM\comments.txt`, mỗi câu nằm trên một dòng riêng biệt:

```
Bài viết hay quá bạn ơi!
Tuyệt vời quá ạ.
Thông tin rất bổ ích, cảm ơn chủ thớt.
```

Khi kịch bản điều hướng trình duyệt đến một bài viết và chuẩn bị nhấn bình luận, bạn cấu hình như sau:

* Cách cấu hình:
  * Gọi hành động File read random line.
  * File Path: Điền đường dẫn `D:\GPM\comments.txt`.
  * Output variable: Đặt tên biến lưu kết quả là `$randomComment`.
* Kết quả: Mỗi lần luồng chạy đến bước này (hoặc mỗi profile chạy độc lập), hệ thống sẽ tự động bốc ngẫu nhiên 1 trong 3 dòng trên (Ví dụ: Profile 1 bốc trúng dòng số 3: `"Thông tin rất bổ ích, cảm ơn chủ thớt."` và gán vào biến `$randomComment`). Bạn chỉ cần gọi hành động Key press truyền biến này vào ô bình luận trên website là xong.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>
