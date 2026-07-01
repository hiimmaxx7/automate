# Cancel alert

Cancel alert là hành động ra lệnh cho trình duyệt tự động bấm vào nút Cancel, Hủy bỏ hoặc nút tắt trên các hộp thoại thông báo hệ thống vừa xuất hiện. Tương tự như lệnh trên, hành động này hoạt động tự động và không có tham số cấu hình kèm theo.

#### ⚠️ Lưu ý vận hành quan trọng dành cho khách hàng:

* Hạn chế đối với các trang web hiện đại: Hiện nay, phần lớn các website thế hệ mới đều đã chuyển sang sử dụng các loại hộp thoại thông báo được dựng tự tùy biến bằng mã HTML/CSS (hay còn gọi là Modal, Toast, Dialog UI) thay vì dùng lệnh Alert hệ thống truyền thống. Vì vậy, đối với các loại thông báo tự dựng này, 2 hành động trên sẽ không có tác dụng. Bạn cần phải xử lý bằng cách dùng lệnh Mouse click thông thường dựa theo XPath của nút bấm đó.
* Không thể kiểm soát một số popup của trình duyệt: Một số hộp thoại bảo mật hoặc thông báo hệ thống đặc biệt phát ra trực tiếp từ nhân trình duyệt Chromium (Ví dụ: hộp thoại hỏi _Có cho phép trang web bật thông báo không?_, _Có cho phép truy cập Camera/Microphone không?_, hoặc _Hộp thoại xác thực đăng nhập HTTP Basic Auth_ của trình duyệt...) sẽ không thể tương tác được bằng các lệnh Alert này. Để xử lý các quyền trình duyệt đó, bạn nên cấu hình sẵn trong phần cài đặt của Profile GPM Login trước khi khởi chạy kịch bản automation.

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>
