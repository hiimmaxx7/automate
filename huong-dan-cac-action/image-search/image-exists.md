# Image exists

Hành động này giúp tool "liếc" nhanh một lần xem hình ảnh mục tiêu có đang hiển thị trên màn hình hay không. Kết quả trả về ngay lập tức là True (nếu thấy) hoặc False (nếu không thấy).

* Điểm khác biệt: Khác với `Wait to image` (chờ đợi), hành động này không dừng lại để chờ mà chỉ quét duy nhất một lần tại thời điểm chạy.
* Tác dụng: Rất phù hợp để kết hợp với các khối lệnh điều kiện (`If`, `Else if`), giúp kịch bản đưa ra quyết định thông minh ngay lập tức (ví dụ: nếu thấy pop-up quảng cáo thì đóng, nếu không thấy thì làm bước khác).

> ⚠️ Lưu ý đặc biệt về tỷ lệ Scale (Thu phóng): Tỷ lệ phần trăm scale màn hình và độ phân giải của trình duyệt lúc bạn chụp ảnh mẫu bắt buộc phải giống y hệt với lúc kịch bản vận hành thực tế. Nếu lúc chụp ảnh mẫu bạn để màn hình hiển thị ở mức 100%, nhưng khi chạy profile hệ thống lại tự động mở ở mức scale 80% hoặc 125%, thuật toán quét ảnh sẽ không thể nhận diện được cấu trúc pixel của mục tiêu và dẫn đến kết quả sai lệch.

#### Ví dụ thực tế: Kiểm tra và tắt thông báo quảng cáo bất ngờ (Popup)

Khi bạn lướt một trang web, đôi khi sẽ có các cửa sổ quảng cáo hoặc thông báo khảo sát bất ngờ hiện lên che khuất màn hình. Nếu có quảng cáo, kịch bản cần bấm nút "X" để tắt đi rồi mới chạy tiếp; nếu không có, kịch bản sẽ bỏ qua bước tắt để tránh mất thời gian.

* Cách cấu hình: Bạn chụp một ảnh mẫu nhỏ của nút "X" tắt quảng cáo để hệ thống nhận diện.
* Kết quả: Hệ thống sẽ quét màn hình tại giây phút đó. Nếu xuất hiện nút "X", biến đầu ra sẽ nhận giá trị `True`. Bạn chỉ cần kết hợp với khối lệnh điều kiện If (Nếu biến = `True`) thì sẽ gọi hành động Mouse click vào vị trí đó để dọn dẹp màn hình trước khi đi tiếp.

> 💡 _Các thông số chi tiết như cấu hình vùng ảnh mẫu (Image), độ lệch màu (Threshold), True color và biến đầu ra (Output) sẽ được phân tích sâu ở phần hướng dẫn kết hợp bộ 3 hành động: Wait to image, Image exists và Image search._
