# Random text

Random text là hành động dùng để tự động tạo ra một chuỗi ký tự ngẫu nhiên (bao gồm chữ cái và chữ số) với độ dài tùy chọn, sau đó lưu vào một biến đầu ra (Output variable).

Hành động này thường được sử dụng để tạo mật khẩu mới khi đăng ký tài khoản, tạo mã số định danh, hoặc tạo các nội dung văn bản không trùng lặp để tránh bị hệ thống quét spam.

#### Tham số cấu hình:

* Text Length: Độ dài (số lượng ký tự) của chuỗi văn bản ngẫu nhiên mà bạn muốn tạo ra.

#### Ví dụ thực tế: Tạo mật khẩu ngẫu nhiên để đăng ký tài khoản tự động

Giả sử bạn đang viết một kịch bản tự động đăng ký tài khoản hàng loạt trên một website và cần điền một mật khẩu ngẫu nhiên cho mỗi tài khoản để đảm bảo tính bảo mật:

* Cách cấu hình: Bạn gọi hành động Random text, thiết lập ô Text Length là `12` (để tạo chuỗi dài 12 ký tự), và đặt ô _Output variable_ là `$randomPassword`.
* Kết quả: Khi chạy đến bước này, hệ thống sẽ tự động sinh ra một chuỗi ngẫu nhiên (ví dụ: `"a7K39pXq2wLm"`) và lưu vào biến `$randomPassword`. Ở các bước tiếp theo, bạn chỉ cần gọi hành động Key press truyền biến `$randomPassword` này vào ô nhập mật khẩu trên trình duyệt để hoàn tất việc đăng ký.
