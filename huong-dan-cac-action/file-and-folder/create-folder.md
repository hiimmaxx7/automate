# Create folder

Create folder là hành động dùng để khởi tạo một thư mục (folder) mới hoàn toàn trên ổ cứng máy tính theo đường dẫn được chỉ định.

Hành động này sở hữu cơ chế vận hành thông minh và an toàn:

* Nếu thư mục chưa tồn tại: Hệ thống sẽ tự động tạo mới thư mục đó (bao gồm cả việc tự tạo các thư mục cha nếu chúng chưa có sẵn).
* Nếu thư mục đã tồn tại: Hệ thống sẽ bỏ qua và chạy tiếp hành động sau, tuyệt đối không ghi đè hay làm ảnh hưởng đến dữ liệu bên trong thư mục cũ.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/EH7olDLAb9c).

#### Tham số cấu hình:

* Folder Path: Đường dẫn tuyệt đối dẫn đến thư mục bạn muốn khởi tạo (Ví dụ: `D:\GPM_Softwares\Data_Crawler`).

#### Ví dụ thực tế: Tự động tạo thư mục lưu ảnh chụp màn hình (Screenshot) theo ngày

Khi chạy các kịch bản nuôi tài khoản hoặc cào dữ liệu, bạn thường có nhu cầu chụp lại màn hình trình duyệt khi gặp lỗi để tiện kiểm tra lại. Để dễ quản lý, bạn muốn mỗi ngày hệ thống sẽ tự gom ảnh vào một thư mục riêng biệt theo định dạng ngày tháng (Ví dụ: `D:\GPM_Screenshots\2026-06-29`).

* Cách cấu hình:
  * Trước khi gọi lệnh chụp màn hình, bạn gọi hành động Create folder.
  * Folder Path: Bạn kết hợp đường dẫn cố định với biến thời gian hệ thống, điền vào ô: `D:\GPM_Screenshots\$currentDate`.
* Kết quả: Khi kịch bản chạy bước này, hệ thống sẽ tự động kiểm tra xem hôm nay đã có thư mục mang tên ngày hiện tại (ví dụ: `2026-06-29`) chưa. Nếu chưa có, nó sẽ tự động tạo mới một thư mục sạch sẽ. Các hành động Screenshot phía sau chỉ việc trỏ đường dẫn lưu ảnh vào thư mục này là xong, giúp dữ liệu của bạn luôn được phân loại ngăn nắp theo từng ngày.

<figure><img src="../../.gitbook/assets/image (158).png" alt=""><figcaption></figcaption></figure>
