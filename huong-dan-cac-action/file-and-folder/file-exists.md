# File exists

Hành động này giúp tool kiểm tra xem một file đã có sẵn trên máy tính hay chưa. Kết quả trả về rất đơn giản: True (nếu thấy file) hoặc False (nếu không thấy).

* Tác dụng: Dùng kết hợp với khối lệnh `If` để xử lý thông minh hơn, tránh trường hợp tool bị lỗi hay dừng đột ngột khi bạn yêu cầu nó mở một file mà thực tế không tồn tại.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/EH7olDLAb9c).

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file cần kiểm tra trên máy tính (Ví dụ: `D:\data\accounts.txt`).
* Output variable: Tên biến lưu kết quả kiểm tra (`True` hoặc `False`).

#### Ví dụ thực tế: Kiểm tra file cấu hình trước khi chạy kịch bản

Giả sử bạn viết một kịch bản tự động điền thông tin và yêu cầu kịch bản phải đọc dữ liệu từ file `D:\GPM\config.json`. Nếu người dùng quên chưa tạo file này hoặc điền sai đường dẫn, kịch bản chạy đến lệnh đọc file sẽ bị lỗi hệ thống ngay.

Để xử lý an toàn, bạn cấu hình kịch bản như sau:

* Bước 1: Gọi hành động File exists, điền đường dẫn `D:\GPM\config.json` và đặt tên biến đầu ra là `$isFileReady`.
* Bước 2: Dùng khối lệnh If để kiểm tra: `Nếu $isFileReady = False`.
* Bước 3: Nằm bên trong khối If này, bạn gọi hành động Throw với nội dung: `"Lỗi: Bạn chưa tạo file config.json tại ổ D, vui lòng kiểm tra lại!"`.

Kết quả: Kịch bản sẽ tự động kiểm tra trước. Nếu file chưa tồn tại, nó sẽ dừng luồng một cách chủ động và bắn ra cảnh báo màu đỏ trực quan cho bạn biết, thay vì cố chạy tiếp để rồi bị crash kịch bản.

<figure><img src="../../.gitbook/assets/image (147).png" alt=""><figcaption></figcaption></figure>
