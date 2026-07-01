# Folder exists

Folder exists là hành động dùng để kiểm tra xem một thư mục (folder) có đang tồn tại trên ổ cứng máy tính theo đường dẫn được chỉ định hay không. Kết quả trả về của hành động này là một giá trị Logic: True (Nếu tìm thấy thư mục) hoặc False (Nếu thư mục không tồn tại).

Hành động này thường được dùng làm bước đệm trước khi bạn thực hiện các thao tác như tạo thư mục mới, xóa thư mục hoặc di chuyển file vào trong đó, giúp kịch bản chạy mượt mà và không bị dừng đột ngột do lỗi sai đường dẫn.

#### Tham số cấu hình:

* Folder Path: Đường dẫn tuyệt đối dẫn đến thư mục cần kiểm tra trên máy tính (Ví dụ: `D:\GPM_Data`).
* Output variable: Tên biến lưu kết quả kiểm tra (`True` hoặc `False`).

#### Ví dụ thực tế: Kiểm tra thư mục lưu ảnh Profile trước khi tải về

Giả sử bạn có một kịch bản tự động tải ảnh đại diện từ trên mạng về để lưu vào thư mục riêng của từng Profile theo cấu trúc: `D:\GPM_Data\Profile_1`. Nếu thư mục `Profile_1` này chưa được tạo sẵn trên ổ D, hành động tải ảnh phía sau sẽ bị lỗi ngay lập tức.

Để xử lý logic này một cách thông minh, bạn cấu hình như sau:

* Bước 1: Gọi hành động Folder exists, điền đường dẫn thư mục cần kiểm tra là `D:\GPM_Data\Profile_1`, đặt tên biến đầu ra là `$isFolderReady`.
* Bước 2: Dùng khối lệnh điều kiện If để kiểm tra: `Nếu $isFolderReady = False` (nghĩa là thư mục này chưa tồn tại).
* Bước 3: Nằm bên trong khối If, bạn gọi hành động Create folder với đường dẫn `D:\GPM_Data\Profile_1` để hệ thống tự động tạo mới thư mục này.

Kết quả: Kịch bản sẽ tự động kiểm tra trước. Nếu chưa có thư mục, nó sẽ tự động tạo rồi mới tiến hành tải ảnh về, đảm bảo luồng chạy luôn an toàn và không bao giờ bị crash.

<figure><img src="../../.gitbook/assets/image (157).png" alt=""><figcaption></figcaption></figure>
