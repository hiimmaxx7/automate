# Accept alert

Accept alert là hành động ra lệnh cho trình duyệt tự động bấm vào nút OK hoặc Xác nhận (Accept) trên các hộp thoại thông báo hệ thống (Alert Dialog) nguyên bản vừa xuất hiện trên màn hình. Hành động này hoạt động hoàn toàn tự động và không có tham số cấu hình.

#### ⚠️ Lưu ý đặc biệt về khả năng tương tác:

* Không tác dụng với giao diện hiện đại: Hiện nay, hầu hết các website thế hệ mới đều chuyển sang dùng hộp thoại tự dựng bằng mã HTML/CSS (Modal, Toast, Dialog UI) để tăng tính thẩm mỹ. Lệnh Accept alert sẽ không có tác dụng với các loại thông báo tự dựng này. Bạn phải dùng hành động Mouse click thông thường dựa theo XPath của nút bấm để xử lý.
* Không thể kiểm soát popup hệ thống của trình duyệt: Một số hộp thoại bảo mật hoặc thông báo quyền phát ra trực tiếp từ nhân trình duyệt Chromium (Ví dụ: hỏi quyền _Cho phép gửi thông báo_, _Truy cập Camera/Microphone_, hoặc _Xác thực đăng nhập HTTP Basic Auth_...) sẽ không thể tương tác được bằng hành động này. Để xử lý, bạn nên cấu hình cho phép sẵn trong cài đặt của Profile GPM Login trước khi chạy kịch bản.

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>
