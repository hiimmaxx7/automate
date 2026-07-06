# Random number

Random number là hành động dùng để tạo ra một số nguyên ngẫu nhiên nằm trong khoảng từ giá trị tối thiểu đến giá trị tối đa được thiết lập, sau đó lưu kết quả vào một biến đầu ra.

Hành động này thường được dùng để tạo dữ liệu giả lập (tuổi, số lượng bè bạn muốn kết bạn), chọn ngẫu nhiên một dòng dữ liệu, hoặc tạo thời gian chờ ngẫu nhiên linh hoạt theo logic riêng của bạn.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/nlEQsaxawt4).

#### Tham số cấu hình:

* Min: Giá trị số nhỏ nhất có thể nhận được.
* Max: Giá trị số lớn nhất có thể nhận được.
* Output variable: Tên biến lưu số ngẫu nhiên vừa tạo.

#### Ví dụ thực tế: Chọn ngẫu nhiên số lượng bài viết để tương tác

Khi nuôi tài khoản mạng xã hội, để tránh việc tài khoản nào cũng lướt đúng số lượng bài viết giống nhau gây nghi ngờ cho hệ thống, bạn nên cho mỗi tài khoản tương tác với một số lượng bài viết ngẫu nhiên.

* Cách cấu hình: Bạn gọi hành động Random number, thiết lập Min là `3`, Max là `7`, và ô _Output variable_ đặt là `$randomPosts`.
* Kết quả: Khi luồng chạy đến bước này, hệ thống sẽ bốc ngẫu nhiên một con số trong khoảng từ 3 đến 7 (Ví dụ: Profile 1 bốc trúng số `4`, Profile 2 bốc trúng số `6`). Bạn chỉ cần truyền biến `$randomPosts` này vào ô End của vòng lặp For phía sau, mỗi tài khoản sẽ tự động lướt và tương tác đúng theo số lượt riêng biệt mà nó bốc được.

<figure><img src="../../.gitbook/assets/image (144).png" alt=""><figcaption></figcaption></figure>
