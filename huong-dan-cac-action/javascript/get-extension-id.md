# Get extension id

Get extension id là hành động ra lệnh cho trình duyệt trích xuất mã định danh duy nhất (Extension ID) của các tiện ích (Extensions) đang được cài đặt bên trong Profile trình duyệt hiện tại. Mã ID này cực kỳ quan trọng để bạn có thể dùng trong các lệnh tiếp theo như điều hướng trực tiếp đến trang cấu hình hoặc ví điện tử của tiện ích đó (ví dụ: mở nhanh ví MetaMask, Tonkeeper, OKX Wallet...).

#### Tham số cấu hình:

* Extension name: Tên của tiện ích mở rộng hiển thị trên trình duyệt mà bạn muốn lấy ID.
  * _Lưu ý_: Hệ thống áp dụng cơ chế tìm kiếm tương đối, bạn không cần điền chính xác toàn bộ tên mà chỉ cần chứa cụm từ đặc trưng là được (Ví dụ: chỉ cần điền `MetaMask` hoặc `OKX` thay vì phải gõ đầy đủ tên dài dòng).
* Output variable: Tên biến số để lưu lại chuỗi ID sau khi trích xuất được (Ví dụ: lưu vào biến `extId`).

#### ⚠️ Lưu ý vận hành bắt buộc để lấy ID thành công:

Do cơ chế bảo mật và quản lý luồng dữ liệu nội bộ của nhân trình duyệt Chromium, nếu bạn đang ở một trang web thông thường và gọi lệnh này ngay lập tức, hệ thống sẽ không thể quét được danh sách tiện ích. Để hành động này hoạt động chính xác 100%, bạn cần tuân thủ quy trình sau:

* Bắt buộc phải truy cập trang quản lý trước: Kịch bản của bạn bắt buộc phải sử dụng hành động Go to URL để truy cập vào địa chỉ nội bộ của trình duyệt là `chrome://extensions/` trước.
* Bắt buộc phải có thời gian chờ (Delay): Sau khi chuyển hướng đến trang quản lý tiện ích, bạn phải chèn thêm một lệnh Delay ngắn (khoảng 1 - 2 giây). Việc trì hoãn này giúp giao diện quản lý của trình duyệt kịp tải xong hoàn toàn cấu trúc mã nguồn của các tiện ích, tránh việc chạy quá nhanh khiến kịch bản không thể bắt được ID.

#### Ví dụ thực tế: Luồng lấy ID tiện ích để tự động mở ví điện tử

Khi bạn làm kịch bản tự động hóa cho các tác vụ Crypto/Airdrop, bạn muốn lấy ID của ví MetaMask để truy cập nhanh vào trang mở khóa ví:

* Bước 1: Dùng hành động Go to URL ➔ Điền địa chỉ URL: `chrome://extensions/`.
* Bước 2: Kéo hành động Delay ➔ Điền thời gian chờ: `2000` (tương đương 2 giây).
* Bước 3: Kéo hành động Get extension id:
  * _Extension name_: `MetaMask` (chỉ cần chứa từ khóa này).
  * _Output variable_: `metaMaskId`.
* Bước 4: Sau khi đã có ID lưu trong biến `$metaMaskId`, bạn có thể dùng hành động Go to URL tiếp theo với cấu trúc: `chrome-extension://$metaMaskId/home.html` để lập tức bật thẳng giao diện ví lên xử lý mà không cần click tìm kiếm thủ công trên thanh công cụ.

<figure><img src="../../.gitbook/assets/image (222).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (223).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (224).png" alt=""><figcaption></figcaption></figure>
