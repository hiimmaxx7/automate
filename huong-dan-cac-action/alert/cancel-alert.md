# Cancel alert

Hành động Cancel Alert tự động nhấn Hủy hoặc Đóng trên các hộp thoại thông báo hệ thống (Alert Dialog) nguyên bản. Lệnh này không yêu cầu tham số cấu hình.

### ⚠️ Lưu Ý Khi Sử Dụng

* Không Tác Dụng Với Giao Diện Web Hiện Đại: Các hộp thoại được thiết kế riêng bằng HTML/CSS (Modal, Dialog UI) không phải là Alert hệ thống. Với các loại này, bạn phải dùng Mouse Click với XPath tương ứng.
* Không Xử Lý Được Popup Nhân Trình Duyệt: Các thông báo bảo mật từ trình duyệt (quyền truy cập Camera, vị trí, xác thực HTTP Basic Auth...) không tương tác được bằng lệnh này. Hãy cấu hình quyền trực tiếp trong GPM Login trước khi chạy kịch bản.
* Cơ Chế Thực Thi:
  * Với Selenium: Automate thực hiện đúng hành động Cancel theo lệnh để từ chối thông báo.
  * Với Puppeteer: Lệnh này sẽ bỏ qua hoặc hủy thông báo ngay khi xuất hiện (tương đương với thao tác Dismiss).

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>
