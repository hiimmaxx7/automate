# Mouse move

### Hành động di chuyển con trỏ chuột (Mouse move)

Mouse move là hành động điều khiển con trỏ chuột di chuyển mượt mà từ vị trí hiện tại đến một điểm chỉ định trên màn hình. Hành động này giúp mô phỏng chính xác hành vi rê chuột của người dùng thật, giúp kịch bản vượt qua các hệ thống quét bot bảo mật (Anti-bot).

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/kQZWs1I76Zo).

#### Các kiểu di chuyển chuột hỗ trợ:

Hành động hỗ trợ di chuyển chuột linh hoạt theo 2 cơ chế chính:

* Di chuyển theo XPath: Bạn điền đường dẫn mã định danh (XPath) của phần tử trên trang web. Hệ thống sẽ tự động xác định vị trí của thẻ HTML đó trên giao diện và đưa con trỏ chuột đến tâm của phần tử.
* Di chuyển theo tọa độ: Bạn nhập trực tiếp điểm ảnh theo trục x,y hoặc truyền một biến gộp tọa độ (Ví dụ biến `$pos` có dạng `900,800` thu được từ hành động Image search) để điều hướng con trỏ chuột nhảy đến vị trí chính xác trên màn hình.

#### 💡 Mẹo nâng cao: Kéo và thả phần tử (Drag and Drop)

Bạn có thể kết hợp chuỗi các hành động liên tiếp để thực hiện thao tác nhấn giữ, kéo và thả một phần tử bất kỳ trên giao diện (Ví dụ: kéo thanh trượt mở khóa captcha, kéo thả các khối bento grid, hoặc di chuyển các quân cờ) theo công thức sau:

1. Mouse press and hold: Nhấn và giữ chuột trái tại vị trí phần tử bắt đầu (có thể chọn theo XPath hoặc tọa độ).
2. Mouse move: Di chuyển con trỏ chuột (kèm theo khối dữ liệu đang giữ) đến vị trí đích mới.
3. Mouse release: Thả chuột trái ra để hoàn tất việc thả phần tử vào vị trí mới.
