# Exit loop

Exit loop là hành động dùng để cưỡng ép thoát ra khỏi vòng lặp hiện tại (For hoặc While) ngay lập tức, bất chấp việc vòng lặp đó đã chạy hết số lần quy định hay chưa. Sau khi thoát ra, hệ thống sẽ tiếp tục thực thi các hành động nằm ngay dưới khối lặp đó.

Hành động này thường được đặt bên trong khối lệnh điều kiện If để xử lý các tình huống bất thường hoặc khi đã tìm thấy kết quả cần thiết trước thời hạn.

#### Ví dụ thực tế: Dừng kiểm tra khi đã tìm thấy tài khoản hợp lệ

Giả sử bạn dùng vòng lặp For để quét qua một danh sách 100 tài khoản trong file Excel nhằm tìm ra một tài khoản có trạng thái là `"Live"` để dùng. Nếu dòng số 5 đã là tài khoản "Live", bạn không cần phải tốn thời gian chạy tiếp 95 dòng còn lại.

* Cách cấu hình:
  * Bên trong khối For, bạn dùng lệnh If để kiểm tra: `Nếu trạng thái = "Live"`.
  * Trong khối If đó, bạn xử lý lấy tài khoản xong rồi gọi hành động Exit loop.
* Kết quả: Hệ thống chạy đến dòng số 5, thấy điều kiện đúng, lập tức nhảy ra khỏi vòng lặp For và chạy tiếp các hành động phía dưới để làm việc.

<figure><img src="../../.gitbook/assets/image (137).png" alt=""><figcaption></figcaption></figure>
