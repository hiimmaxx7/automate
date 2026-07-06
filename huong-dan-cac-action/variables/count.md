# Count

Count là hành động dùng để đếm số lượng phần tử của một mảng một chiều (hoặc một danh sách dữ liệu) và trả về một giá trị số. Hành động này rất hữu ích khi bạn cần kiểm tra kích thước dữ liệu trước khi xử lý hoặc thiết lập giới hạn cho vòng lặp.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/nlEQsaxawt4).

Các trường hợp ứng dụng thực tế phổ biến bao gồm:

#### 1. Đếm số dòng của một file văn bản (Text)

Khi bạn cần biết một file text (chứa danh sách tài khoản, proxy, bài viết...) có tổng cộng bao nhiêu dòng:

* Cách làm: Sử dụng hành động File read all lines để đọc toàn bộ các dòng trong file thành một danh sách biến, sau đó dùng hành động Count để đếm danh sách đó. Giá trị trả về chính là tổng số dòng của file.

#### Ví dụ thực tế: Đếm số lượng link Facebook trong file `D:\2.txt`

Giả sử bạn có một file lưu trữ danh sách link profile Facebook tại đường dẫn `D:\2.txt` với nội dung gồm 9 dòng như sau:

```
https://www.facebook.com/nguyenvana
https://www.facebook.com/leminhc
...
https://www.facebook.com/demo.account99
```

Để đếm tổng số dòng và truy xuất từng link trong file này, kịch bản sẽ cấu hình qua 2 bước:

* Bước 1: Dùng hành động File read all lines để đọc file `D:\2.txt`. Kết quả trả về sẽ được lưu vào một mảng (danh sách) tên là `$content`. Lúc này hệ thống tự hiểu:
  * `$content[0]` = `"https://www.facebook.com/nguyenvana"` (Dòng 1)
  * `$content[1]` = `"https://www.facebook.com/leminhc"` (Dòng 2)
  * ...
  * `$content[8]` = `"https://www.facebook.com/demo.account99"` (Dòng 9)
* Bước 2: Dùng hành động Count truyền vào mảng `$content` vừa đọc, và đặt tên biến đầu ra (Output variable) là `$lineCount`.

Sau khi chạy xong, biến `$lineCount` sẽ nhận giá trị là `9`. Bạn có thể lấy ngay biến `$lineCount` này để làm tham số End cho vòng lặp For nhằm tự động mở lần lượt từng profile Facebook lên tương tác.

<figure><img src="../../.gitbook/assets/image (120).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (122).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (123).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (124).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (136).png" alt=""><figcaption></figcaption></figure>

#### 2. Đếm số lượng tệp tin trong một thư mục (Folder)

Khi bạn cần kiểm tra số lượng ảnh, video hoặc tài liệu đang có trong một thư mục trên máy tính:

* Cách làm: Sử dụng hành động Folder get file list để lấy ra danh sách tất cả các file, sau đó dùng hành động Count để biết chính xác trong thư mục đó đang chứa bao nhiêu tệp tin.

#### Ví dụ thực tế: Đếm số lượng ảnh bất động sản trong thư mục `D:\bds\cat bi\`

Giả sử bạn có một thư mục chứa ảnh chụp nhà đất tại đường dẫn `D:\bds\cat bi\` gồm có 3 file ảnh được đặt tên ngắn gọn như sau:

* `1.jpg`
* `2.jpg`
* `3.jpg`

Để đếm xem có bao nhiêu file ảnh phục vụ cho việc tự động đăng bài, kịch bản sẽ cấu hình qua 2 bước:

* Bước 1: Dùng hành động Folder get file list trỏ vào đường dẫn thư mục `D:\bds\cat bi\`. Hệ thống sẽ quét qua thư mục và trả về một mảng chứa đường dẫn của toàn bộ các file, lưu vào biến đặt tên là `$fileList`. Lúc này dữ liệu mảng sẽ tự động được gán là:
  * `$fileList[0]` = `"D:\bds\cat bi\1.jpg"`
  * `$fileList[1]` = `"D:\bds\cat bi\2.jpg"`
  * `$fileList[2]` = `"D:\bds\cat bi\3.jpg"`
* Bước 2: Dùng hành động Count truyền vào mảng `$fileList` vừa lấy được, và đặt tên biến đầu ra (Output variable) là `$totalFiles`.

Sau khi chạy xong, biến `$totalFiles` sẽ nhận giá trị là `3`. Bạn có thể dùng kết quả này để chạy các khối lệnh điều kiện (ví dụ: Nếu thư mục có trên 0 file thì mới thực hiện hành động tải ảnh lên Facebook/Website).

<figure><img src="../../.gitbook/assets/image (126).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (127).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (128).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (129).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (135).png" alt=""><figcaption></figcaption></figure>

#### 3. Đếm số phần tử sau khi tách chuỗi (Split text)

Khi bạn có một chuỗi văn bản dài chứa nhiều thông tin được ngăn cách bởi các ký tự đặc biệt và muốn biết sau khi tách ra sẽ được bao nhiêu phần tử:

* Cách làm: Sau khi dùng hành động Split text để tách chuỗi này dựa trên ký tự `|`, bạn cho hành động Count xử lý danh sách vừa tách. Kết quả trả về của biến đếm lúc này sẽ là `6`.

#### Ví dụ thực tế: Đếm số phần tử của chuỗi sau khi dùng Split text

Giả sử bạn có một file cấu hình hoặc một dòng dữ liệu chứa thông tin tài khoản được định dạng theo cấu trúc ngăn cách bởi dấu gạch đứng `|` như sau:

```
thanhnguyen|Pass1234|2FAXYZ|103.83.77.15:9898
```

Để đếm xem chuỗi này có bao nhiêu thông tin thành phần nhằm phục vụ cho việc kiểm tra tính hợp lệ của tài khoản, kịch bản sẽ cấu hình qua 2 bước:

* Bước 2: Dùng hành động Split text để tách chuỗi trên dựa vào ký tự phân tách là `|`. Kết quả trả về sẽ được lưu vào một mảng tên là `$accountData`. Lúc này hệ thống sẽ tự động phân tách dữ liệu thành:
  * `$accountData[0]` = `"thanhnguyen"` (Tài khoản)
  * `$accountData[1]` = `"Pass1234"` (Mật khẩu)
  * `$accountData[2]` = `"2FAXYZ"` (Mã mã hóa 2FA)
  * `$accountData[3]` = `"103.83.77.15:9898"` (Proxy)
* Bước 2: Dùng hành động Count truyền vào mảng `$accountData` vừa tách, và đặt tên biến đầu ra (Output variable) là `$infoCount`.

Sau khi chạy xong, biến `$infoCount` sẽ nhận giá trị là `4`. Bạn có thể dùng kết quả này kết hợp với khối lệnh If để kiểm tra (ví dụ: Nếu `$infoCount = 4` tức là tài khoản đủ thông tin cấu trúc thì mới tiến hành chạy tiếp kịch bản đăng nhập, ngược lại thì bỏ qua để tránh lỗi).

<figure><img src="../../.gitbook/assets/image (131).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (132).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (133).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (134).png" alt=""><figcaption></figcaption></figure>
