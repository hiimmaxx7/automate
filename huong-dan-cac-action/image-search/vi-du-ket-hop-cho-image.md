# Ví dụ kết hợp cho Image

Để tạo ra một kịch bản automation thông minh, xử lý mượt mà các tình huống thực tế trên giao diện (UI) trang web hoặc phần mềm, việc kết hợp bộ 3 hành động này theo một luồng logic chặt chẽ là giải pháp tối ưu nhất.

Dưới đây là phần giải thích chi tiết các thông số kỹ thuật chung và các bước thiết lập luồng đi cho một kịch bản thực tế.

#### Các thông số cấu hình cốt lõi cần nắm vững:

* Image (Ảnh mẫu): Vùng ảnh mục tiêu bạn cắt ra từ màn hình để làm dữ liệu đối sánh cho hệ thống.
* Timeout (Thời gian chờ): Giới hạn thời gian tối đa để hệ thống tìm kiếm ảnh (chỉ áp dụng cho _Wait to image_).
* Threshold (Độ lệch màu / Dung sai): Tỷ lệ chính xác khi đối sánh pixel (thường đặt từ `0.7` đến `0.95`). Số càng gần `1` yêu cầu ảnh thực tế phải càng giống ảnh mẫu tuyệt đối. Bạn có thể tăng giảm giá trị này rồi test đến khi phù hợp.
* True color: Tùy chọn bắt buộc hệ thống phải đối sánh chính xác cả dải màu sắc gốc. Nếu tắt, hệ thống sẽ chuyển ảnh về dạng đen trắng (Grayscale) để nhận diện hình khối, giúp tăng tốc độ quét nhưng bỏ qua yếu tố màu sắc.
* Output variable (Biến đầu ra): Biến lưu giá trị logic (`True`/`False`) hoặc lưu tọa độ điểm (`X`, `Y`) tùy thuộc vào hành động được chọn.

### Bài toán thực tế: Tự động nhấn "Continue with Google" trên Pinterest

<figure><img src="../../.gitbook/assets/image (173).png" alt=""><figcaption></figcaption></figure>

**Bước 1: Đồng bộ luồng tải trang với hành động Wait to image**

Sau khi bạn nhấn nút _Sign up_ trên trang chủ Pinterest, Form đăng ký cần một khoảng thời gian ngắn để tải dữ liệu lên màn hình.

* Cách cấu hình: Bạn trỏ vùng ảnh mẫu (Image) vào tiêu đề dòng chữ hoặc một thành phần cố định (nút Continue with Google) chắc chắn sẽ xuất hiện trên Form đăng ký. Thiết lập thời gian Timeout là `10` (10 giây) và đặt mức Threshold phù hợp (ví dụ: `0.7`).
* Logic vận hành: Kịch bản sẽ tạm dừng lại để quan sát màn hình. Ngay khi Form đăng ký vừa hiển thị, hệ thống lập tức kích hoạt bước tiếp theo mà không cần chờ đợi lãng phí thời gian.

<figure><img src="../../.gitbook/assets/image (168).png" alt=""><figcaption></figcaption></figure>

**🔹 Bước 2: Kiểm tra sự tồn tại của nút bấm với hành động Image exists**

Do Pinterest có thể hiển thị biểu mẫu nhập Email đè lên hoặc hiển thị một thông báo điều hướng khác tùy thuộc vào từng Profile, chúng ta cần kiểm tra xem nút Google có thực sự đang nằm trên màn hình hay không.

* Cách cấu hình: Trỏ ảnh mẫu vào biểu tượng chữ "G" bốn màu của Google hoặc dòng chữ Continue with Google. Cấu hình biến đầu ra lưu kết quả.
* Logic vận hành: Hệ thống quét nhanh màn hình tại thời điểm đó đúng 1 lần. Nếu nút Google xuất hiện, biến đầu ra sẽ nhận giá trị logic là `True` (ngược lại là `False`).

<figure><img src="../../.gitbook/assets/image (169).png" alt=""><figcaption></figcaption></figure>

**🔹 Bước 3: Lọc điều kiện xử lý với khối lệnh If**

Để kịch bản chạy thông minh và không bị lỗi click hụt, chúng ta bọc các bước tương tác phía sau vào trong khối lệnh điều kiện.

* Cách cấu hình: Thêm khối lệnh If và thiết lập điều kiện: Kiểm tra nếu biến kết quả ở Bước 2 trả về giá trị `True` (Nghĩa là nút Google đã sẵn sàng trên màn hình).

<figure><img src="../../.gitbook/assets/image (170).png" alt=""><figcaption></figcaption></figure>

**🔹 Bước 4: Tìm vị trí chính xác trong khối If với hành động Image search**

Nằm bên trong khối lệnh If, khi điều kiện thỏa mãn, hệ thống bắt đầu truy vết để lấy tọa độ của nút bấm (vì vị trí Form đăng ký có thể dịch chuyển linh hoạt tùy theo độ phân giải màn hình của từng Profile).

* Cách cấu hình: Sử dụng ảnh mẫu nút "Continue with Google" hoặc logo chữ "G". Thiết lập bật True color sang `Yes` _(Bắt buộc bật để nhận diện chuẩn xác 4 màu gốc đặc trưng của Google, tránh nhầm lẫn với các ký tự chữ khác)_. Đặt biến đầu ra để lưu tọa độ là `pos`.
* Logic vận hành: Hệ thống quét và tính toán ra chính xác vị trí tâm điểm của nút Google trên màn hình (Ví dụ: `$pos = 720,540`).

<figure><img src="../../.gitbook/assets/image (171).png" alt=""><figcaption></figcaption></figure>

**🔹 Bước 5: Thực hiện nhấp chuột với hành động Mouse click**

Đây là bước cuối cùng nằm trong khối If để hoàn tất luồng xử lý.

* Cách cấu hình: Chọn hành động Mouse click, tại ô thiết lập tọa độ, bạn truyền trực tiếp biến vừa tìm được ở bước trên vào ô tương ứng: `$pos`.
* Logic vận hành: Chuột trên hệ thống sẽ tự động di chuyển đến đúng vị trí pixel của nút Google đã quét được và thực hiện lệnh click để tiếp tục luồng đăng nhập xuyên qua lớp Iframe một cách mượt mà.

<figure><img src="../../.gitbook/assets/image (172).png" alt=""><figcaption></figcaption></figure>
