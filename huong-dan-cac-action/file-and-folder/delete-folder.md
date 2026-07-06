# Delete folder

Delete folder là hành động dùng để xóa bỏ hoàn toàn một thư mục ra khỏi ổ cứng máy tính theo đường dẫn được chỉ định. Khi thực thi, hành động này sẽ quét sạch và xóa toàn bộ các tệp tin cũng như các thư mục con nằm bên trong nó.

> ⚠️ Lưu ý cực kỳ quan trọng: Thư mục bị xóa bằng hành động này sẽ bị hủy vĩnh viễn và không nằm trong Thùng rác (Recycle Bin) của Windows. Bạn cần kiểm tra kỹ lưỡng đường dẫn để tránh xóa nhầm các thư mục hệ thống hoặc dữ liệu quan trọng của máy tính.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/EH7olDLAb9c).

#### Tham số cấu hình:

* Folder Path: Đường dẫn tuyệt đối dẫn đến thư mục cần xóa trên máy tính (Ví dụ: `D:\GPM_Data\temp_cache`).

#### Ví dụ thực tế: Tự động dọn dẹp thư mục bộ nhớ đệm (Cache) sau khi chạy xong luồng

Khi bạn viết kịch bản tải các video dạng ngắn (Shorts, Reels, TikTok) về máy để xử lý, chỉnh sửa rồi đăng tải lên kênh khác. Kịch bản thường sẽ tạo ra một thư mục tạm thời để chứa các file video thô, file âm thanh tách rời và dữ liệu phát sinh trong quá trình render.

Sau khi kịch bản đã upload video thành công lên các nền tảng, bạn cần xóa bỏ thư mục tạm này để giải phóng dung lượng cho ổ cứng:

* Cách cấu hình: Ở bước cuối cùng của kịch bản, bạn gọi hành động Delete folder.
  * Folder Path: Điền đường dẫn thư mục tạm đã dùng, ví dụ: `D:\GPM_Softwares\Render_Temp`.
* Kết quả: Hệ thống sẽ xóa sạch bách thư mục `Render_Temp` cùng toàn bộ các file rác phát sinh bên trong. Máy tính của bạn sẽ luôn sạch sẽ, chạy mượt mà và không lo bị đầy bộ nhớ sau một thời gian dài treo máy tự động.

<figure><img src="../../.gitbook/assets/image (160).png" alt=""><figcaption></figcaption></figure>
