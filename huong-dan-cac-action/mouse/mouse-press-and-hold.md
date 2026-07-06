# Mouse press and hold

Mouse press and hold là hành động ra lệnh cho con trỏ chuột thực hiện thao tác ấn nút chuột trái xuống và duy trì trạng thái nhấn giữ đó (chưa thả ra). Hành động này thường không đứng độc lập mà đóng vai trò là bước khởi đầu cho các thao tác phức tạp mô phỏng hành vi của người dùng thật.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/kQZWs1I76Zo).

#### Cấu hình vị trí nhấn giữ:

Tương tự như các hành động tương tác chuột khác, bạn có thể chỉ định vị trí để nhấn giữ chuột theo 2 cơ chế chính:

* Theo XPath: Di chuyển đến tâm của phần tử được chỉ định bởi đường dẫn XPath trên trang web rồi nhấn giữ.
* Theo tọa độ: Di chuyển đến điểm ảnh cố định x,y hoặc truyền biến gộp tọa độ (Ví dụ biến `$pos` có dạng `900,800` thu được từ hành động Image search) để thực hiện nhấn giữ.

#### Ứng dụng thực tế:

Hành động này là một mắt xích bắt buộc khi bạn muốn thực hiện chuỗi thao tác Kéo và thả (Drag and Drop):

* Giải mã Captcha thanh trượt (Slider Captcha): Nhấn giữ thanh trượt (`Mouse press and hold`) ➔ Di chuyển chuột sang một khoảng tọa độ X để khớp hình ảnh (`Mouse move`) ➔ Thả chuột ra để hoàn tất xác minh (`Mouse release`).
* Thao tác vẽ hoặc chọn vùng: Nhấn giữ tại điểm đầu, di chuyển chuột để quét một vùng dữ liệu hoặc vẽ một đường thẳng trên các ứng dụng Canvas/Game, sau đó buông chuột.
