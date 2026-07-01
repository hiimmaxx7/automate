# Call workflow

Call Workflow là hành động cho phép kịch bản đang chạy (Workflow cha) gọi và thực thi một kịch bản khác (Workflow con) đã được tạo sẵn trong hệ thống. Đây là công cụ đắc lực để chia nhỏ các quy trình phức tạp thành các module quản lý độc lập, giúp tối ưu hóa việc tái sử dụng logic tự động hóa.

> ⚠️ Lưu ý tính năng Test action sẽ không có tác dụng với Call workflow.

#### Tham số cấu hình:

• Reference file: Chọn từ danh sách workflow phụ của bạn.

#### Cơ chế hoạt động:

Khi Workflow cha chạy đến bước Call Workflow, hệ thống sẽ tạm dừng luồng chính, chuyển quyền thực thi sang Workflow con. Sau khi Workflow con hoàn tất, hệ thống sẽ tự động quay trở lại Workflow cha và tiếp tục thực hiện các bước tiếp theo.

Bạn có thể tạo workflow phụ bằng cách click vào dấu + ở góc trên bên phải phần Main workflow -> Chọn Create new workflow (nếu tạo mới) hoặc Import from existing file (nếu chọn từ file có sẵn).

#### Ví dụ thực tế: Luồng đăng nhập tài khoản tự động

Giả sử bạn làm kịch bản nuôi tài khoản hàng loạt cho các dự án MMO, thay vì viết code đăng nhập trong mọi kịch bản, bạn tạo một Workflow riêng tên là `login_module`:

• Bước 1: Trong Workflow chính, sau khi mở trình duyệt, bạn kéo hành động Call Workflow.

• Bước 2: Tại mục Reference file, bạn chọn `login_module`.

• Bước 3: Tại mục Parameters, bạn truyền biến `$user` và `$pass` từ Workflow chính sang Workflow con.

• Bước 4: Khi Workflow chính chạy tới đây, nó sẽ "gọi" `login_module` thực hiện xong các thao tác điền user/pass, nhấn login, xử lý captcha. Sau đó, nó tự động quay về Workflow chính để tiếp tục các tác vụ như chạy Tool, làm Airdrop, hoặc đăng sản phẩm.

Lưu ý kỹ thuật:

• Đảm bảo Workflow con đã được lưu và kiểm tra tính logic trước khi gọi.

• Kiểm tra sự đồng nhất về tên biến giữa Workflow cha và con để đảm bảo dữ liệu được truyền tải chính xác và không bị xung đột. Để sử dụng biến của workflow phụ bạn viết theo cú pháp: `$tên_workflow_tên_biến`, ví dụ như hình dưới, trong Main workflow, nếu ở module login\_module có biến `$status` thì để dùng nó ở Main workflow cần điền là `$login_module_status`.

<figure><img src="../../.gitbook/assets/image (246).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (247).png" alt=""><figcaption></figcaption></figure>
