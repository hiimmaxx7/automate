# Switch to popup

Switch to popup là hành động ra lệnh cho kịch bản dịch chuyển quyền điều khiển từ cửa sổ trình duyệt hiện tại sang một cửa sổ con mới vừa được bật lên (Popup Window).

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/oroexOGjZfw).

#### Sự khác biệt giữa Iframe và Popup:

* Iframe: Là một "khung tranh" nằm nhúng bên trong cùng một tab trang web.
* Popup: Là một cửa sổ hoàn toàn mới xé toạc ra khỏi tab cũ, hoạt động độc lập (có thanh tiêu đề và nút phóng to/thu nhỏ/tắt riêng).

#### Tham số cấu hình:

* Popup Title: Tiêu đề của cửa sổ popup bạn muốn chuyển sang. Hệ thống áp dụng cơ chế tìm kiếm tương đối (chỉ cần tiêu đề popup chứa cụm từ bạn nhập là hệ thống sẽ tự động nhận diện và nhảy vào).

#### Ví dụ thực tế: Xử lý cửa sổ đăng nhập Google sau khi bấm "Continue with Google"

Tiếp tục luồng xử lý trên trang Pinterest ở bước trước. Sau khi bạn chuyển vào Iframe và click vào nút _Continue with Google_, một cửa sổ nhỏ (Popup) độc lập sẽ bật ra ngoài màn hình để yêu cầu bạn điền Gmail và Password của Google.

Lúc này, trình duyệt gốc Pinterest sẽ bị mờ đi, và toàn bộ thao tác tiếp theo phải được thực hiện trên cái cửa sổ mới này. Bạn cấu hình như sau:

* Bước 1 (Kích hoạt mở Popup): Dùng lệnh click vào nút _Continue with Google_ (như đã làm ở bài học Iframe).
* Bước 2 (Chờ Popup xuất hiện - Nếu cần): Bạn có thể dùng lệnh Wait popup hoặc Delay ngắn khoảng 1-2 giây để cửa sổ kịp tải ra.
* Bước 3 (Kiểm tra Popup có tồn tại không): Bạn có thể dùng lệnh Has popup. Nếu popup tồn tại, kết quả trả về là True.
* Bước 3 (Chuyển sang Popup): Kéo hành động Switch to popup vào luồng.
  * Popup Title: Điền chữ `Google Accounts` _(Vì tiêu đề đầy đủ của cửa sổ này thường rất dài như "Sign in - Google Accounts", bạn chỉ cần điền cụm từ đặc trưng này là hệ thống tự khớp)_.
* Bước 4 (Tương tác nhập liệu): Sau lệnh này, quyền kiểm soát đã nằm trọn trong cửa sổ mới. Bạn tiến hành dùng các lệnh Key press để nhập tài khoản, mật khẩu và bấm Tiếp theo như bình thường.

> 💡 Mẹo quay về: Sau khi bạn hoàn tất đăng nhập ở cửa sổ Popup, hệ thống Google sẽ tự động kiểm tra và đóng cửa sổ này lại. Để tiếp tục điều khiển trang Pinterest gốc, bạn chỉ cần dùng lệnh Active tab hoặc quay về tab chính để chạy tiếp các hành động cào dữ liệu phía sau.

<figure><img src="../../.gitbook/assets/image (206).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (207).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (208).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (209).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (210).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (211).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (212).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (213).png" alt=""><figcaption></figcaption></figure>
