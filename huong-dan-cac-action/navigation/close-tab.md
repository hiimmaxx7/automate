# Close tab

Close tab là hành động ra lệnh cho trình duyệt lập tức tắt thẻ (tab) hiện tại đang được kích hoạt (active). Hành động này không có bất kỳ tham số cấu hình nào kèm theo.

#### Ví dụ thực tế: Dọn dẹp màn hình sau khi hoàn thành tác vụ phụ

Khi bạn mở một tab phụ để lấy mã xác thực từ email hoặc lấy thông tin ví điện tử, sau khi đã copy được dữ liệu mong muốn về biến, bạn cần đóng tab đó đi để giải phóng bộ nhớ RAM và giữ cho giao diện trình duyệt gọn gàng:

* Luồng xử lý:
  1. Thao tác lấy mã OTP tại tab phụ thành công.
  2. Kéo hành động Close tab vào kịch bản.
  3. Gọi hành động Active tab (với index = `0`) để đưa quyền điều khiển quay trở lại tab làm việc chính.
