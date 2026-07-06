# Wait to image

Hành động này giúp tool tạm dừng và liên tục "canh" màn hình cho đến khi hình ảnh mục tiêu xuất hiện (hoặc hết thời gian chờ).

* Tác dụng: Rất cần thiết để đồng bộ, đảm bảo trang web hoặc ứng dụng đã tải xong dữ liệu rồi tool mới chạy tiếp, giúp kịch bản không bị vội, chạy lệch bước hay bấm nhầm khi web chưa tải kịp.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/xWu0g35YTGo).

> ⚠️ Lưu ý đặc biệt về tỷ lệ Scale (Thu phóng): Tỷ lệ phần trăm scale màn hình và độ phân giải của trình duyệt lúc bạn chụp ảnh mẫu bắt buộc phải giống y hệt với lúc kịch bản vận hành thực tế. Nếu lúc chụp ảnh mẫu bạn để màn hình hiển thị ở mức 100%, nhưng khi chạy profile hệ thống lại tự động mở ở mức scale 80% hoặc 125%, thuật toán quét ảnh sẽ không thể nhận diện được cấu trúc pixel của mục tiêu và dẫn đến kết quả sai lệch.

#### Ví dụ thực tế: Chờ nút đăng nhập hiển thị hoàn toàn

Khi bạn điều hướng trình duyệt đến một trang web, do tốc độ mạng thay đổi nên nút "Đăng nhập" có thể xuất hiện ngay lập tức hoặc mất vài giây để tải xong. Việc đặt cố định một khoảng thời gian chờ (Delay) có thể gây lãng phí thời gian hoặc vẫn bị lỗi nếu mạng quá chậm. Sử dụng Wait to image sẽ giúp kịch bản xử lý linh hoạt hơn:

* Cách cấu hình: Bạn cắt một ảnh nhỏ của nút "Đăng nhập" làm ảnh mẫu, thiết lập thời gian chờ tối đa và độ chính xác khi quét ảnh.
* Kết quả: Kịch bản sẽ chủ động chờ đợi, ngay khi nút "Đăng nhập" vừa hiển thị trên màn hình, hệ thống sẽ lập tức nhận diện được và chuyển sang hành động tiếp theo mà không cần phí thời gian chờ đợi dư thừa.

> 💡 _Các thông số chi tiết như cấu hình vùng ảnh mẫu (Image), thời gian chờ (Timeout), độ lệch màu (Threshold), True color và biến đầu ra (Output) sẽ được phân tích sâu ở phần hướng dẫn kết hợp bộ 3 hành động: Wait to image, Image exists và Image search._
