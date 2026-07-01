# Import cookie

Import cookie là hành động nạp một chuỗi hoặc tệp dữ liệu cấu trúc cookie có sẵn vào trình duyệt để tài khoản tự động vào trạng thái đăng nhập thành công mà không cần điền Username/Password.

#### Tham số cấu hình:

* Cookie file: Đường dẫn tuyệt đối dẫn tới tệp tin `.json` chứa cấu trúc cookie (hoặc truyền thẳng biến dữ liệu).
* Định dạng cấu trúc: Bắt buộc phải là định dạng JSON chuẩn.

#### Lưu ý vận hành quan trọng:

* Cần Go to URL trước: Bạn bắt buộc phải cho trình duyệt truy cập vào đúng trang web mục tiêu trước khi gọi hành động này (Ví dụ: Vào `facebook.com` trước rồi mới Import cookie Facebook, lúc đó cookie mới ăn khớp vào đúng tên miền).
* Chỉ có giá trị trong session hiện tại: Toàn bộ dữ liệu cookie được nạp vào chỉ có hiệu lực tạm thời trong phiên làm việc đó. Ngay khi tắt Profile trình duyệt, lượng cookie này sẽ tự động biến mất và không lưu đè vào dữ liệu gốc của Profile.

<figure><img src="../../.gitbook/assets/image (214).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (217).png" alt=""><figcaption></figcaption></figure>
