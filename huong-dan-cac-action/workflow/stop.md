# Stop

Stop là hành động dùng để dừng ngay lập tức kịch bản đang chạy tại vị trí đó.

> 📌 Lưu ý về phạm vi: Hành động này chỉ có tác dụng kết thúc luồng (thread) đang chạy của chính profile hiện tại, không ảnh hưởng đến các luồng hoặc các profile khác đang chạy song song trong cùng một đợt vận hành.

Hành động này thường được kết hợp bên trong khối lệnh điều kiện If để xử lý các lỗi nghiêm trọng, lỗi không thể tiếp tục kịch bản, hoặc khi luồng đã hoàn thành xong nhiệm vụ chính.

#### Ví dụ thực tế: Dừng luồng khi tài khoản bị Checkpoint

Giả sử bạn làm kịch bản nuôi tài khoản. Khi mở trình duyệt lên, nếu phát hiện tài khoản đã bị khóa (Checkpoint) thì việc thực hiện các hành động tiếp theo như lướt bài viết, thả tim, nhắn tin... là hoàn toàn vô nghĩa và tốn tài nguyên máy.

* Cách cấu hình:
  * Dùng khối lệnh If kiểm tra sự xuất hiện của thông báo lỗi: `Nếu xuất hiện chữ "Tài khoản bị khóa"`.
  * Nằm bên trong khối If này, bạn gọi hành động Stop.
* Kết quả: Khi hệ thống quét thấy tài khoản bị khóa, nó sẽ gặp lệnh Stop và đóng luồng của profile đó lại ngay lập tức. Các profile ở các luồng khác vẫn tiếp tục chạy bình thường mà không bị ảnh hưởng.
