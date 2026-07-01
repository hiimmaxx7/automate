# Get element text

Hành động này giúp tool "đọc" và lấy toàn bộ chữ hiển thị trên một phần tử (như nội dung bài viết, tiêu đề, giá tiền, hay tên tài khoản) rồi lưu vào một biến để bạn sử dụng.

* Tác dụng: Dùng khi bạn cần cào dữ liệu văn bản từ website. Bạn chỉ cần chỉ định đúng vị trí (element), tool sẽ tự động bóc tách phần chữ đang hiển thị trên giao diện ra cho bạn.

#### Giải thích các tham số cấu hình:

* XPath: Đường dẫn mã định danh (XPath) của phần tử chứa đoạn văn bản cần lấy trên giao diện trang web.
* Output variable: Tên biến số để lưu lại nội dung văn bản sau khi bóc tách thành công.

#### Ví dụ thực tế: Cào giá tiền của sản phẩm

Dựa trên hình ảnh giao diện cửa hàng mà bạn cung cấp, bạn muốn cào mức giá của chiếc điện thoại Samsung galaxy s6 để phục vụ việc so sánh giá hoặc đồng bộ dữ liệu lên hệ thống của mình.

Nhìn vào bảng mã nguồn HTML được khoanh đỏ bên phải hình dưới:

> Cấu trúc thẻ chứa giá tiền: `<h5>$360</h5>`

Để lấy được chuỗi văn bản giá tiền `$360` này, bạn sẽ cấu hình hành động như sau:

* Element XPath: Nhập chính xác đường dẫn XPath đang chỉ thẳng vào thẻ chứa giá tiền của sản phẩm đó, ví dụ: `//div[@class='card h-100']//h5` (như ô tìm kiếm XPath bạn đã kiểm tra thành công trong hình).
* Output variable: Đặt tên biến đầu ra là `productPrice`.

Kết quả: Hệ thống sẽ tìm đến thẻ `<h5>` tương ứng của sản phẩm, bóc tách phần văn bản thuần nằm ở giữa thẻ và nạp thẳng giá trị `$360` vào biến `$productPrice`. Ở các bước sau, bạn có thể gọi biến này ra để ghi vào file Excel hoặc gửi lên dữ liệu hệ thống.

<figure><img src="../../.gitbook/assets/image (183).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (184).png" alt=""><figcaption></figcaption></figure>
