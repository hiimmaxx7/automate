# Get element attribute

Hành động này giúp bạn "bóc tách" những thông tin ẩn bên trong một phần tử trên trang web và lưu nó vào một biến để dùng sau.

* Tác dụng: Ví dụ, bạn có thể lấy đường dẫn ảnh từ thuộc tính `src`, hoặc lấy link từ thuộc tính `href` của một thẻ liên kết, hay lấy giá trị nhập trong ô `value`.
* Cách hiểu đơn giản: Mỗi thành phần trên web đều có những "thuộc tính" đi kèm (như cái nhãn dán thông tin). Lệnh này giúp bạn đọc và "chép" thông tin từ cái nhãn đó ra để lưu lại.

#### Giải thích các tham số cấu hình:

* Element XPath: Đường dẫn mã định danh (XPath) của phần tử chứa thuộc tính cần lấy trên giao diện trang web.
* Attribute name: Tên của thuộc tính mà bạn muốn bốc tách dữ liệu.
  * _Ví dụ cấu trúc_: `<thẻ tên_thuộc_tính="giá_trị_thuộc_tính">Văn bản</thẻ>` ➔ Bạn chỉ cần điền `tên_thuộc_tính` vào ô này để lấy ra `giá_trị_thuộc_tính`.
* Output variable: Tên biến số để lưu lại chuỗi giá trị thuộc tính sau khi lấy thành công.

#### Ví dụ thực tế: Cào link ảnh sản phẩm dựa trên hình ảnh thực tế (Hình 5)

Dựa trên giao diện trang web cửa hàng điện thoại mà bạn đang thao tác trong hình, bạn muốn cào (scrape) đường dẫn hình ảnh của chiếc điện thoại Samsung galaxy s6 để phục vụ cho việc lưu trữ dữ liệu hoặc đăng tải tự động lên shop của mình.

Nhìn vào bảng mã nguồn HTML (khung đỏ bên phải hình):

> Cấu trúc thẻ ảnh: `<img class="card-img-top img-fluid" src="imgs/galaxy_s6.jpg" alt="">`

Để lấy được chuỗi đường dẫn ảnh `imgs/galaxy_s6.jpg`, bạn sẽ cấu hình hành động như sau:

* Element XPath: Nhập chính xác đường dẫn XPath đang chỉ vào thẻ ảnh đó, ví dụ: `//div[@class="card h-100"]/a/img` (hoặc dùng cú pháp như trong hình của bạn: `//div[@class='card h-100']//img`).
* Attribute name: Điền chữ `src` _(Đây là tên thuộc tính chứa đường dẫn tệp tin của hình ảnh)_.
* Output variable: Đặt tên biến đầu ra là `imgUrl`.

Kết quả: Hệ thống sẽ tìm đến thẻ ảnh của Samsung Galaxy S6, bóc tách chuỗi giá trị nằm trong thuộc tính `src` và nạp thẳng giá trị `imgs/galaxy_s6.jpg` vào biến `$imgUrl`. Bạn có thể sử dụng biến này cho các hành động tải ảnh hoặc lưu trữ ở phía sau.

<figure><img src="../../.gitbook/assets/image (181).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (182).png" alt=""><figcaption></figcaption></figure>
