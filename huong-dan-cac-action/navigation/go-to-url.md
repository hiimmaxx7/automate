# Go to URL

Hành động này ra lệnh cho trình duyệt đi thẳng đến một trang web theo đường dẫn (URL) mà bạn đã chỉ định.

* Tác dụng: Đây là bước khởi đầu để tool bắt đầu làm việc. Bạn chỉ cần nhập địa chỉ trang web vào, trình duyệt sẽ tự động vào trang đó để bạn thực hiện các bước tiếp theo.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/a9qNt96X1SM).

#### Tham số cấu hình:

*   URL: Địa chỉ chính xác của trang web bạn muốn mở.

    > ⚠️ Lưu ý bắt buộc: Đường dẫn điền vào ô này phải có đầy đủ giao thức mạng là `https://` hoặc `http://` ở đầu (Ví dụ: `https://24h.com.vn`). Nếu bạn chỉ điền dạng vắn tắt là `24h.com.vn`, hệ thống sẽ không nhận diện được cấu trúc định tuyến và báo lỗi hành động.
* Timeout (s): Thời gian giới hạn (tính bằng giây) mà kịch bản sẽ chờ đợi để trang web tải xong toàn bộ dữ liệu. Mặc định của hệ thống nếu bạn để trống là `60` giây.

#### Ví dụ thực tế: Điều chỉnh thời gian chờ khi sử dụng Proxy chậm

Khi bạn chạy kịch bản Marketing hoặc cào dữ liệu qua các Profile có gắn Proxy, đôi khi gặp phải những gói Proxy có tốc độ kết nối rất chậm, thời gian phản hồi lâu hoặc máy chủ của trang web mục tiêu đang bị nghẽn mạng. Nếu giữ nguyên thời gian mặc định, kịch bản có thể bị ngắt kết nối giữa chừng do quá hạn:

* Cách cấu hình:
  * URL: `https://pinterest.com`
  * Timeout: Thay đổi từ `60` lên `120` (2 phút).
* Kết quả: Trình duyệt sẽ kiên nhẫn chờ đợi tối đa lên tới 120 giây để trang web kịp tải dữ liệu xong. Ngược lại, nếu mạng của bạn rất khỏe và bạn muốn tối ưu tốc độ để kịch bản không bị treo khi gặp trang web chết (die), bạn có thể chủ động giảm con số này xuống còn `20` hoặc `30` giây để hệ thống ngắt luồng lỗi nhanh hơn và chuyển sang tài khoản khác.
