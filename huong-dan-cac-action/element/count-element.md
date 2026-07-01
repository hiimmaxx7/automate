# Count element

Hành động này giúp tool quét trên trang web xem có bao nhiêu mục khớp với cái "tên" (XPath) mà bạn đã cung cấp, sau đó lưu con số tổng cộng đó vào một biến.

* Tác dụng: Rất hữu ích khi bạn muốn kiểm tra số lượng sản phẩm đang hiển thị, đếm số comment, hay kiểm tra xem một danh sách đã tải đủ dữ liệu chưa. Nếu đếm được 0 thì tức là không thấy mục nào, nếu đếm được nhiều hơn 0 thì bạn có thể dùng các vòng lặp để xử lý lần lượt từng mục đó.

#### Giải thích các tham số cấu hình:

* XPath: Đường dẫn mã định danh (XPath) của tập hợp các phần tử bạn muốn đếm số lượng trên giao diện trang web.
* Output variable: Tên biến số để lưu lại kết quả số lượng đếm được (Trả về một số nguyên: `0`, `1`, `2`, `3`,...).

#### Ví dụ thực tế: Đếm tổng số sản phẩm đang hiển thị trên trang cửa hàng

Khi bạn truy cập vào trang cửa hàng điện thoại như trong hình, bạn muốn kịch bản tự động kiểm tra xem trên trang hiện tại đang hiển thị bao nhiêu sản phẩm để thiết lập số vòng lặp tương tác hoặc cào dữ liệu cho chính xác:

Nhìn vào cấu trúc mã nguồn, mỗi một ô sản phẩm đều nằm chung trong một khối thẻ `div` có thuộc tính `class="card h-100"`. Bạn cấu hình hành động như sau:

* Element XPath: Nhập đường dẫn XPath chung của các ô sản phẩm: `//div[@class="card h-100"]`
* Output variable: Đặt tên biến đầu ra là `totalProducts`.

Kết quả: Hệ thống sẽ quét toàn bộ trang web và đếm xem có bao nhiêu thẻ khớp với XPath trên. Ví dụ trên màn hình hiển thị 9 sản phẩm, biến `$totalProducts` sẽ nhận giá trị là `9`.

> 💡 Ứng dụng nâng cao: Bạn có thể sử dụng biến số lượng này để truyền vào cấu hình của vòng lặp For, giúp kịch bản tự động lặp đúng `9` lần để click xem chi tiết hoặc cào đủ thông tin của cả 9 sản phẩm mà không bị thừa hay thiếu sót.

<figure><img src="../../.gitbook/assets/image (186).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (187).png" alt=""><figcaption></figcaption></figure>
