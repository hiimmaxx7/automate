# Wait URL Changed

Wait URL Changed là hành động ra lệnh cho kịch bản tạm dừng lại và liên tục theo dõi thanh địa chỉ của trình duyệt cho đến khi đường dẫn (URL) hiện tại chuyển sang một địa chỉ mới, hoặc hệ thống sẽ tự động bỏ qua khi hết thời gian giới hạn (Timeout) được chỉ định.

#### Tham số cấu hình:

* Timeout (s): Thời gian giới hạn tối đa (tính bằng giây) để hệ thống ngồi chờ URL thay đổi. Nếu quá thời gian này mà URL vẫn giữ nguyên, kịch bản sẽ tự động chuyển sang hành động tiếp theo.

#### Ví dụ thực tế: Chờ xử lý cổng thanh toán hoặc xác thực chuyển hướng thành công

Hành động này cực kỳ hữu ích khi bạn thiết lập các luồng đăng nhập bằng bên thứ ba (như bấm _Continue with Google_ trên Pinterest), hoặc khi bạn nhấn nút "Thanh toán/Mua ngay" trên các trang thương mại điện tử:

* Cách cấu hình: Ngay sau hành động click vào nút kích hoạt chuyển hướng, bạn chèn hành động Wait URL Changed với Timeout là `30` (30 giây).
* Logic vận hành: Thay vì bạn phải dùng lệnh cố định như Delay 5-10 giây một cách cảm tính (gây lãng phí thời gian nếu mạng khỏe, hoặc bị lỗi click hụt nếu mạng yếu), hệ thống sẽ chủ động quan sát thanh địa chỉ. Ngay khi Pinterest chuyển hướng thành công từ trang đăng nhập về trang chủ (`pinterest.com/home`), kịch bản sẽ lập tức chạy tiếp các bước tương tác phía sau ngay mà không cần đợi hết 30 giây.
