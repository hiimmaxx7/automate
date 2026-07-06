# Math execute

Math execute là hành động dùng để thực hiện các phép tính toán học cơ bản (như cộng `+`, trừ `-`, nhân `*`, chia `/`) hoặc các biểu thức số học phức tạp từ các biến số có sẵn, sau đó lưu kết quả vào một biến đầu ra.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/nlEQsaxawt4).

#### Tham số cấu hình:

* Expression (Biểu thức): Nội dung phép tính toán học cần thực hiện. Bạn có thể kết hợp giữa các con số cụ thể và các biến số có sẵn (Ví dụ: `(5 + 3) * 2` hoặc `$price * $quantity`).
* Output variable: Tên biến để lưu lại kết quả sau khi tính toán xong.

#### Ví dụ thực tế 1: Tính tổng số tiền đơn hàng (Nhân và Cộng)

Giả sử bạn đang làm kịch bản tự động mua hàng hoặc cào dữ liệu đơn hàng. Bạn có biến số lượng sản phẩm là `$quantity = 3`, biến đơn giá là `$price = 150000`, và phí vận chuyển cố định là `30000`.

* Cách cấu hình:
  * Expression: Điền biểu thức `($price * $quantity) + 30000`
  * Output variable: Điền tên biến lưu kết quả là `$totalAmount`.
* Kết quả: Hệ thống sẽ tính ra giá trị là `480000` và gán vào biến `$totalAmount`.

<figure><img src="../../.gitbook/assets/image (145).png" alt=""><figcaption></figcaption></figure>
