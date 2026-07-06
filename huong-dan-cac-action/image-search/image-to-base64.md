# Image to Base64

Hành động này giúp bạn mã hóa một file ảnh trên máy tính thành một chuỗi ký tự văn bản (chuỗi Base64) dài.

* Tác dụng: Cực kỳ hữu ích khi cần gửi ảnh qua các lệnh mạng như `HTTP Request`. Ví dụ: bạn muốn gửi ảnh lên các dịch vụ AI để nhờ giải mã captcha, hoặc upload ảnh lên server mà không muốn truyền tải file theo cách thông thường.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/xWu0g35YTGo).

#### Tham số cấu hình:

* Image Path: Đường dẫn tuyệt đối dẫn đến file ảnh trên máy tính cần chuyển đổi (Ví dụ: `D:\GPM_Data\captcha.png`).
* Output variable: Tên biến lưu chuỗi ký tự Base64 sau khi mã hóa thành công.

#### Ví dụ thực tế: Chuyển đổi ảnh Captcha để gửi lên hệ thống giải tự động qua API

Khi bạn điều hướng vào một website và gặp mã Captcha dạng hình ảnh. Bạn đã dùng hành động Screenshot để chụp lại vùng chứa mã Captcha đó và lưu thành một file ảnh tại `D:\GPM_Data\captcha.png`. Bây giờ, bạn muốn gửi bức ảnh này lên một API bên thứ ba (như 2Captcha, Anti-Captcha) để nhờ họ giải hộ. Vì API của họ yêu cầu dữ liệu ảnh phải ở dạng chuỗi văn bản Base64, bạn sẽ cấu hình như sau:

* Bước 1: Gọi hành động Image to Base64.
  * Image Path: Điền `D:\GPM_Data\captcha.png`.
  * Output variable: Đặt tên biến là `base64String`.
* Bước 2: Gọi hành động HTTP Request (Method POST) để gửi dữ liệu lên Server giải captcha. Trong phần Data (Body), bạn truyền biến `$base64String` vào cấu trúc JSON theo đúng tài liệu API của họ.

Kết quả: File ảnh `captcha.png` sẽ được bẻ thành một chuỗi mã chữ dài thướt tha dạng `data:image/png;base64,iVBORw0KGgoAAAANSU...` lưu vào biến `$base64String`. Lệnh HTTP Request phía sau chỉ việc bốc chuỗi này gửi đi một cách gọn gàng, giúp kịch bản tự động vượt qua các lớp bảo mật Captcha dễ dàng.

<figure><img src="../../.gitbook/assets/image (174).png" alt=""><figcaption></figcaption></figure>
