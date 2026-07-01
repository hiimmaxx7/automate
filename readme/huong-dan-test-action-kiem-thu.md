# 🛠️ Hướng dẫn Test action (Kiểm thử)

Việc kiểm thử (Test) là bước quan trọng giúp bạn kiểm soát luồng chạy của kịch bản, cho phép chạy thử từng bước hoặc từng khối lệnh để đảm bảo mọi thứ vận hành đúng ý đồ trước khi chạy thực tế.

### 🎯 Tại sao cần Test action?

* Kiểm soát lỗi: Phát hiện và xử lý vấn đề ngay khi thực hiện hành động, thay vì phải chạy toàn bộ kịch bản từ đầu.
* Tinh chỉnh linh hoạt: Bạn có thể cô lập một hành động đơn lẻ hoặc một khối lệnh (Block) để kiểm tra, giúp rút ngắn thời gian debug.
* Quy trình làm tới đâu, test tới đó: GPM Automate hỗ trợ cơ chế kiểm thử trực tiếp trên các profile của GPM Login, giúp bạn quan sát kết quả ngay lập tức trên trình duyệt.

> Lưu ý: Tính năng Test hiện tại chỉ hỗ trợ các profile trong GPM Login.

### ⚙️ Quy trình thực hiện Test

Để bắt đầu quá trình kiểm thử, bạn thực hiện theo các bước sau:

#### 1️⃣ Bước 1: Cấu hình profile trong GPM Login

* Mở GPM Login.
* Tìm đến profile bạn muốn dùng để test.
* Nhấn vào dấu 3 chấm ở cạnh tên profile.
* Chọn Chạy với remote port để lấy thông số cổng điều khiển.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

#### 2️⃣ Bước 2: Thiết lập trong GPM Automate

* Tại giao diện GPM Automate, chọn lệnh (Action) hoặc khối lệnh (Block) mà bạn muốn thực hiện kiểm thử.
* Trên thanh công cụ phía trên, nhấn vào nút Test.
* Một hộp thoại cấu hình Test sẽ hiện ra.
* Nhập Port (cổng) đã lấy được từ GPM Login ở Bước 1 vào ô tương ứng.
* Nhấn Start để bắt đầu.

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

#### 3️⃣ Bước 3: Quan sát kết quả

* Sau khi nhấn Start, hệ thống sẽ thực thi lệnh trên profile đã chọn.
* Bạn theo dõi kết quả hiển thị ngay tại cửa sổ trình duyệt và nhật ký (Log) của GPM Automate để điều chỉnh kịch bản nếu cần thiết.
