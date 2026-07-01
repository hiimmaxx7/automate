# Set variable

Đây là hành động dùng để tạo mới hoặc thay đổi giá trị của một biến (thùng chứa dữ liệu) trong kịch bản. Ngoài ra, hành động này còn cho phép bạn tạo các ô nhập liệu ngay tại giao diện chính, giúp người dùng tự điền thông tin trước khi bắt đầu chạy tool.

* Cho phép nhập liệu (Allow user input from the interface): Bạn tích chọn mục này để tạo các ô trống ở màn hình chính, cho phép người dùng nhập trực tiếp giá trị vào kịch bản trước khi bấm chạy.
* Bắt buộc nhập (Input required): Khi chọn mục này, hệ thống sẽ yêu cầu người dùng phải điền đủ dữ liệu hoặc chọn file thì mới cho bấm nút chạy. Nếu để trống, tool sẽ báo lỗi ngay để tránh tình trạng chạy nhầm do quên nhập thông tin.

<figure><img src="../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>

Hệ thống hỗ trợ 4 kiểu dữ liệu nhập vào (Input Type) trên giao diện bao gồm:

#### 1. Kiểu nhập Chữ (Text)

Dùng khi bạn muốn người dùng tự nhập một giá trị chuỗi, văn bản hoặc số từ bàn phím.

* Ví dụ thực tế: Bạn đặt tên biến là `$textContent`. Khi người dùng nhập nội dung `"hello world"` vào ô nhập liệu trên giao diện, giá trị của biến `$textContent` lúc này sẽ là `"hello world"` (`$textContent = "hello world"`).

<figure><img src="../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (111).png" alt=""><figcaption></figcaption></figure>

#### 2. Kiểu chọn Tệp tin (File)

Dùng khi kịch bản cần xử lý một file cụ thể trong máy tính của người chạy (như file hình ảnh, file dữ liệu, file cấu hình...). Trên giao diện UI sẽ xuất hiện nút hình thư mục để người dùng bấm vào và duyệt tìm file.

* Ví dụ thực tế: Người dùng bấm chọn file có tên `bruh.png` nằm trong ổ D. Giá trị của biến `$filePath` nhận được sẽ là đường dẫn tuyệt đối của file đó: `"D:\materials\bruh.png"` (`$filePath = "D:\materials\bruh.png"`). Bạn có thể lấy ngay biến `$filePath` này để truyền vào hành động File upload ở các bước sau.

<figure><img src="../../.gitbook/assets/image (113).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (114).png" alt=""><figcaption></figcaption></figure>

#### 3. Kiểu tích chọn (Checkbox)

Checkbox là thành phần giao diện cho phép người dùng bật hoặc tắt một tùy chọn nhị phân (có/không, bật/tắt, đồng ý/không đồng ý).

* Đặc điểm: Khi được tích chọn, biến sẽ nhận giá trị là `True`. Khi bỏ tích chọn, biến sẽ nhận giá trị là `False`.
* Ví dụ thực tế: Bạn tạo một mục có nhãn _"Chọn để đặt hàng / Check to place an order"_ gắn với biến `$checkBox`. Nếu người dùng tích chọn vào ô này, biến `$checkBox` sẽ có giá trị là `True` (`$checkBox = True`). Bạn có thể dùng khối lệnh If để kiểm tra: nếu `$checkBox = True` thì mới thực hiện các bước thanh toán.

<figure><img src="../../.gitbook/assets/image (115).png" alt=""><figcaption></figcaption></figure>

#### 4. Kiểu danh sách chọn (Combo Box)

Combo Box (tương tự như Dropdown) là thành phần giao diện hiển thị một danh sách các lựa chọn có sẵn, cho phép người dùng chọn ra một giá trị duy nhất tại một thời điểm. Tính năng này giúp hạn chế tối đa việc nhập sai chính tả hoặc sai định dạng dữ liệu.

* Đặc điểm: Giúp giữ dữ liệu đồng nhất khi cần chọn các thông tin cố định như Quốc gia, Ngành hàng, Loại sản phẩm, Trạng thái hoạt động...
* Ví dụ thực tế: Bạn cấu hình danh sách gồm nhiều quốc gia gắn với biến `$country`. Khi người dùng mở kịch bản và chọn `"United States"` từ danh sách thả xuống, biến `$country` trong Automate sẽ ngay lập tức nhận giá trị là `"United States"` (`$country = "United States"`).

<figure><img src="../../.gitbook/assets/image (116).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (117).png" alt=""><figcaption></figcaption></figure>
