# Regex

Regex (Regular Expression) giống như một chiếc kính lúp giúp bạn soi tìm chính xác một đoạn text ẩn nấp trong một văn bản lớn, hoặc như một chiếc lưới lọc giúp bạn giữ lại đúng định dạng dữ liệu mình cần (như số điện thoại, email, mã OTP) và gạt bỏ đi những phần chữ thừa thãi xung quanh.

#### Tham số cấu hình:

* Text: Văn bản thô đầu vào cần lọc dữ liệu (hoặc biến chứa đoạn văn bản).
* Regex: Đoạn mã/cú pháp bộ lọc dùng để định hình cấu trúc chuỗi cần lấy.
* Output variable: Tên biến lưu kết quả sau khi lọc thành công.

#### Ví dụ thực tế: Trích xuất mã OTP từ nội dung Email

Khi bạn dùng hành động đọc thư điện tử, hệ thống sẽ trả về toàn bộ nội dung text của Email dài loằng ngoằng. Nhiệm vụ của bạn là phải nhặt ra đúng mã OTP gồm 6 chữ số nằm trong đó.

Giả sử đoạn Text đầu vào nhận được là:

> "Mã xác minh GPM Automate của bạn là 834912. Vui lòng không chia sẻ mã này cho bất kỳ ai, mã có hiệu lực trong 5 phút."

Để lọc lấy 6 số OTP, bạn cấu hình hành động Regex như sau:

* Text: Truyền vào đoạn văn bản trên (hoặc biến chứa nội dung email).
* Regex: Điền là `\d{6}` _(đây là cú pháp regex đại diện cho 6 ký tự số liên tiếp)_.
* Output variable: Điền tên biến cần lưu (Ví dụ: `$otpCode`).

Kết quả: Chiếc "lưới lọc" Regex sẽ quét qua văn bản, bỏ qua toàn bộ phần chữ tiếng Việt và giữ lại chính xác chuỗi `834912` để gán vào biến `$otpCode`.

> 💡 Mẹo nhỏ: Cú pháp Regex trông có vẻ loằng ngoằng và khó nhớ? Đừng lo, bạn không cần phải tự học thuộc lòng làm gì cho đau đầu. Hãy mở các công cụ AI (như ChatGPT, DeepSeek, Gemini...) và hỏi trực tiếp bằng ngôn ngữ tự nhiên, ví dụ: _"Viết cho tao đoạn regex để lọc lấy 6 số liên tiếp"_ hoặc _"Viết regex lấy chuỗi nằm giữa chữ 'Mã của bạn là:' và dấu chấm"_. AI sẽ sinh ra đoạn mã chính xác để bạn chỉ việc copy-paste vào ô cấu hình của GPM Automate.

<figure><img src="../../.gitbook/assets/image (143).png" alt=""><figcaption></figcaption></figure>
