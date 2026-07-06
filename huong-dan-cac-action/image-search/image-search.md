# Image search

Đây là hành động nâng cao giúp quét toàn bộ màn hình, tìm vị trí của ảnh mục tiêu và trả về chính xác tọa độ (X, Y) của tâm ảnh đó.

* Tác dụng: Là giải pháp "cứu cánh" khi website hoặc ứng dụng không có thẻ HTML (như game, ứng dụng cũ, hay đồ thị canvas). Bạn dùng nó để xác định tọa độ, từ đó yêu cầu tool click chuột vào đúng vị trí đó một cách chuẩn xác.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/xWu0g35YTGo).

> ⚠️ Lưu ý đặc biệt về tỷ lệ Scale (Thu phóng): Tỷ lệ phần trăm scale màn hình và độ phân giải của trình duyệt lúc bạn chụp ảnh mẫu bắt buộc phải giống y hệt với lúc kịch bản vận hành thực tế. Nếu lúc chụp ảnh mẫu bạn để màn hình hiển thị ở mức 100%, nhưng khi chạy profile hệ thống lại tự động mở ở mức scale 80% hoặc 125%, thuật toán quét ảnh sẽ không thể nhận diện được cấu trúc pixel của mục tiêu và dẫn đến việc không tìm thấy tọa độ.

#### Ví dụ thực tế: Tìm vị trí của một vật thể di động trên màn hình để click chuột

Giả sử bạn đang chạy kịch bản trên một website chơi game nhận thưởng hoặc một ứng dụng có nút bấm thay đổi vị trí liên tục theo thời gian thực mà không cố định một chỗ. Bạn cần tìm ra nút bấm đó đang nằm ở đâu để điều khiển chuột click vào:

* Cách cấu hình: Bạn chụp ảnh mẫu của nút bấm đó làm mục tiêu tìm kiếm.
* Kết quả: Khi thực thi, hệ thống sẽ quét nhanh màn hình. Nếu tìm thấy nút bấm, nó sẽ lập tức tính toán ra tọa độ điểm ảnh (Ví dụ: `X = 550`, `Y = 420`) và lưu hai giá trị này vào biến hệ thống đầu ra. Ngay sau đó, bạn có thể gọi hành động Mouse move hoặc Mouse click truyền trực tiếp hai biến tọa độ `X` và `Y` này vào để chuột tự động tìm đến và bấm chính xác vào mục tiêu.

> 💡 _Các thông số chi tiết như cấu hình vùng ảnh mẫu (Image), độ lệch màu (Threshold), True color và biến đầu ra (Output) sẽ được phân tích sâu ở phần hướng dẫn kết hợp bộ 3 hành động: Wait to image, Image exists và Image search._
