# Reload

Reload là hành động ra lệnh cho trình duyệt tiến hành làm mới và tải lại toàn bộ nội dung của trang web hiện tại, tương tự như việc bạn nhấn vào nút mũi tên vòng tròn (F5) trên trình duyệt. Hành động này hoạt động tự động và không có bất kỳ tham số cấu hình nào kèm theo.

#### Ví dụ thực tế: Xử lý sự cố khi trang web bị lỗi hoặc mất kết nối tạm thời

Trong quá trình chạy automation, đôi khi bạn sẽ gặp phải tình trạng trang web bị lỗi hiển thị, bảng popup bị đơ không tắt được, hoặc mạng bị nghẽn khiến một vài thành phần (element) trên giao diện không thể tải ra.

* Cách áp dụng: Kết hợp khối lệnh điều kiện If với hành động Wait element hoặc Image exists. Nếu sau một khoảng thời gian nhất định không tìm thấy phần tử mục tiêu (trang web bị lỗi), bạn cho kịch bản gọi hành động Reload.
* Kết quả: Trình duyệt sẽ nạp lại dữ liệu của trang từ đầu để sửa các lỗi hiển thị tạm thời, giúp kịch bản tự vượt lỗi và tiếp tục vận hành mà không bị dừng luồng đột ngột.
