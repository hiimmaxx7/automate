# Move / rename folder

Move / rename folder là hành động đa năng dùng để di chuyển toàn bộ một thư mục (bao gồm tất cả các file và thư mục con bên trong) sang một vị trí mới, hoặc đổi tên của thư mục đó ngay tại vị trí hiện tại trên ổ cứng.

Tương tự như thao tác với tệp tin, hành động này sẽ cắt hẳn thư mục sang vị trí mới (nếu di chuyển) hoặc thay thế hoàn toàn tên cũ (nếu đổi tên).

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/EH7olDLAb9c).

#### Tham số cấu hình:

* Source Folder: Đường dẫn tuyệt đối của thư mục nguồn cần di chuyển hoặc cần đổi tên (Ví dụ: `D:\GPM_Data\old_name`).
* Destination Folder: Đường dẫn tuyệt đối của thư mục đích nơi chuyển đến, hoặc đường dẫn chứa tên thư mục mới sau khi đổi (Ví dụ: `E:\Backup_Data\old_name` hoặc `D:\GPM_Data\new_name`).

#### Ví dụ thực tế 1: Đổi tên thư mục (Rename)

Bạn có một thư mục chứa dữ liệu tạm thời tên là `temp_data`. Sau khi kịch bản xử lý xong toàn bộ dữ liệu bên trong, bạn muốn đổi tên thư mục này thành `processed_data` để đánh dấu hoàn thành.

* Source Folder: `D:\GPM_Data\temp_data`
* Destination Folder: `D:\GPM_Data\processed_data` _(giữ nguyên đường dẫn cha, chỉ thay đổi tên thư mục ở cuối)_.
* Kết quả: Thư mục `temp_data` sẽ được đổi tên ngay lập tức thành `processed_data`.

<figure><img src="../../.gitbook/assets/image (159).png" alt=""><figcaption></figcaption></figure>
