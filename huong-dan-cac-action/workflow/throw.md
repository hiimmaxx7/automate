# Throw

Throw là hành động dùng để chủ động bắn ra một thông báo lỗi (Exception) do bạn tự định nghĩa và dừng ngay lập tức luồng kịch bản hiện tại.

Sự khác biệt cốt lõi giữa Throw và Stop nằm ở trạng thái báo cáo sau khi dừng luồng:

* Stop: Tắt luồng và hệ thống vẫn ghi nhận trạng thái chạy hoàn thành (Completed - hiển thị màu xanh).
* Throw: Tắt luồng và hệ thống sẽ đánh dấu trạng thái gặp lỗi (Error - bôi đỏ) kèm theo nội dung lỗi cụ thể lên nhật ký hệ thống (Log).

#### Ví dụ thực tế: Ném lỗi khi hết số dư tài khoản quảng cáo

Giả sử bạn làm kịch bản tự động lên chiến dịch quảng cáo. Trước khi thiết lập, kịch bản cần vào trang quản lý để kiểm tra ngân sách. Nếu số dư bằng 0, kịch bản không thể chạy tiếp:

* Cách cấu hình:
  * Dùng khối lệnh If kiểm tra: `Nếu số dư = 0`.
  * Nằm bên trong khối If, bạn gọi hành động Throw và điền nội dung thông báo lỗi là: `"Lỗi: Tài khoản hết tiền, không thể lên camp!"`.
* Kết quả: Khi chạy đến đây, luồng của profile này sẽ lập tức đóng lại. Trên bảng quản lý tiến độ của GPM Automate, dòng profile đó sẽ được chuyển sang trạng thái Error (Bôi đỏ) kèm dòng chữ thông báo lỗi. Bạn chỉ cần nhìn lướt qua danh sách là lọc ra ngay những tài khoản nào đang bị lỗi để xử lý mà không bị lẫn lộn với những luồng chạy thành công (Completed).

<figure><img src="../../.gitbook/assets/image (140).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (141).png" alt=""><figcaption></figcaption></figure>
