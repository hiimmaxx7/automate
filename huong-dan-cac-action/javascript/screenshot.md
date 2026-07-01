# Screenshot

Screenshot là hành động ra lệnh cho trình duyệt tự động chụp lại giao diện của trang web hiện tại. Hành động này rất hữu ích để bạn lưu trữ bằng chứng đã hoàn thành tác vụ, chụp mã QR Code, hoặc lưu lại giao diện lỗi khi kịch bản gặp sự cố để thuận tiện cho việc kiểm tra (Debug).

#### Các tham số cấu hình:

* Output path: Đường dẫn tuyệt đối tới thư mục trên máy tính mà bạn muốn dùng để chứa bức ảnh sau khi chụp (Ví dụ: `D:\GPM_Automate\Screenshots`).
* File name: Tên của tệp tin ảnh mà bạn muốn đặt (Ví dụ: `success_evidence.png`). Bạn có thể truyền các biến động như mã số tài khoản hoặc thời gian vào đây để tránh file sau đè lên file trước.
* Full page: Tích chọn vào mục này nếu bạn muốn hệ thống chụp cuộn toàn bộ trang web từ đầu đến cuối. Nếu bỏ tích, hệ thống sẽ chỉ chụp lại đúng khung màn hình (khu vực hiển thị hiện tại) mà bạn đang nhìn thấy.
* Output variable: Tên biến số của GPM Automate dùng để lưu lại đường dẫn tuyệt đối của tệp ảnh vừa được tạo ra sau khi chụp thành công.

#### Ví dụ thực tế: Tự động lưu ảnh xác nhận sau khi đăng bài thành công

Khi bạn làm kịch bản tự động đăng bài bán hàng hoặc làm dịch vụ tăng tương tác. Sau khi hệ thống hiển thị thông báo "Đăng bài thành công", bạn muốn chụp lại màn hình để làm báo cáo cho khách hàng:

* Cách cấu hình:
  * Output path: `D:\MMO_Project\Report`
  * File name: `account01_done.png`
  * Full page: _Tích chọn_ (để chụp được toàn bộ nội dung bài đăng kéo dài phía dưới).
  * Output variable: `savedImagePath`
* Kết quả: GPM Automate sẽ chụp lại toàn bộ trang web, đóng gói thành file ảnh lưu vào đúng thư mục bạn yêu cầu, và lưu đường dẫn file đó vào biến `$savedImagePath` để bạn có thể dùng tiếp cho các hành động gửi báo cáo qua Telegram/Discord ở các bước sau.

<figure><img src="../../.gitbook/assets/image (226).png" alt=""><figcaption></figcaption></figure>
