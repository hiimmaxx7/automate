---
description: Gõ một nội dung lên trang web.
---

# Key press

Key press là hành động mô phỏng các thao tác từ bàn phím, cho phép bạn gõ văn bản, bấm phím đơn hoặc kích hoạt các tổ hợp phím tắt trên giao diện trình duyệt.

#### Các kiểu phím hỗ trợ (Type):

Hành động cung cấp 3 cơ chế tương tác bàn phím linh hoạt:

1. Single key: Nhấn một phím đơn lẻ trên bàn phím.
2. Combo key: Nhấn một tổ hợp phím tắt đồng thời.
   * _Danh sách phím hệ thống hỗ trợ_: Alt, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Backspace, Cancel, Clear, Command, Control, Decimal, Delete, Divide, Down, End, Enter, Equal, Escape, F1 đến F12, Help, Home, Insert, Left, LeftAlt, LeftControl, LeftShift, Meta, Multiply, Null, NumberPad0 đến NumberPad9, PageDown, PageUp, Pause, Return, Right, Semicolon, Separator, Shift, Space, Subtract, Tab, Up, ZenkakuHankaku.
3. Text: Gõ hoặc dán một đoạn văn bản (chuỗi ký tự) vào ô nhập liệu.

#### Các tham số cấu hình:

* KEY: Ô nhập nội dung tương tác.
  * Nếu chọn kiểu Text: Nhập đoạn văn bản bạn muốn gõ.
  * Nếu chọn kiểu Single key hoặc Combo key: Nhập chính xác tên các phím từ danh sách hỗ trợ. Đối với tổ hợp phím, các phím phải được viết liền và nối với nhau bằng dấu `+` (Ví dụ: `Control+A` để chọn tất cả, `Control+Shift+Delete` để xóa lịch sử).
* Xpath: Đường dẫn mã định danh (XPath) của khung nhập liệu (input, textarea) mà bạn muốn tương tác.
  * _Lưu ý_: Nếu bạn sử dụng kiểu `Single key` hoặc `Combo key` cho toàn bộ trình duyệt, bạn có thể bỏ trống ô này.
* Delay each character: Thời gian giãn cách giữa mỗi ký tự khi gõ văn bản. Có các cấu hình đặc biệt sau:
  * 0,0: Tốc độ gõ phím siêu tốc không có thời gian chờ (0 giây).
  * -1: Hệ thống sẽ thực hiện lệnh dán thẳng (paste) toàn bộ nội dung vào ô nhập liệu ngay lập tức thay vì gõ từng phím.
  * _Lưu ý bắt buộc_: Nếu đoạn văn bản của bạn có chứa các ký tự biểu tượng cảm xúc (Emoji), bạn bắt buộc phải cấu hình mục này là `-1` để tránh bị lỗi hiển thị.

#### Ví dụ thực tế: Tự động xóa nội dung cũ và nhập từ khóa mới

Khi bạn muốn kịch bản tự động xóa sạch các ký tự đang có sẵn trong ô tìm kiếm của Google, sau đó dán một từ khóa mới và nhấn Enter để tìm kiếm:

1. Bước 1 (Click vào ô tìm kiếm): Dùng lệnh _Mouse click_ vào ô input.
2. Bước 2 (Chọn tất cả chữ cũ): Kéo lệnh _Key press_ ➔ Chọn Type: `Combo key` ➔ KEY: `Control+A` ➔ Xpath: bỏ trống.
3. Bước 3 (Xóa chữ cũ): Kéo lệnh _Key press_ ➔ Chọn Type: `Single key` ➔ KEY: `Backspace` ➔ Xpath: bỏ trống.
4. Bước 4 (Nhập nội dung mới kèm Emoji): Kéo lệnh _Key press_ ➔ Chọn Type: `Text` ➔ KEY: `GPM Softwares 🚀` ➔ Delay each character: `-1` (để dán nhanh và nhận diện được emoji tên lửa) ➔ Xpath: Nhập XPath ô tìm kiếm.
5. Bước 5 (Nhấn Enter): Kéo lệnh _Key press_ ➔ Chọn Type: `Single key` ➔ KEY: `Enter` ➔ Xpath: bỏ trống.

<figure><img src="../../.gitbook/assets/image (193).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (194).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (196).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (197).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (198).png" alt=""><figcaption></figcaption></figure>
