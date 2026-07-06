# Select dropdown

Select dropdown là hành động ra lệnh cho trình duyệt tự động lựa chọn một giá trị cụ thể trong danh sách menu thả xuống.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/cCTEtuMtz-s).

> ⚠️ Chú ý quan trọng: Hành động này chỉ có tác dụng đối với các thẻ có cấu trúc HTML chuẩn là `<select>` (ví dụ: các menu chọn Tỉnh/Thành phố, chọn Năm sinh truyền thống).
>
> Với các ô dropdown thế hệ mới được dựng tùy biến từ các thẻ `<div>` hoặc `<span>` (như giao diện của một số mạng xã hội hiện đại), hành động này sẽ không có tác dụng. Trong trường hợp đó, bạn cần xử lý bằng cách: Dùng lệnh Mouse click ấn vào ô dropdown để danh sách xổ ra ➔ Dùng tiếp một lệnh Mouse click thứ hai để bấm vào giá trị cần chọn dựa theo XPath của dòng đó.

#### Tham số cấu hình:

* XPath: Đường dẫn mã định danh (XPath) dẫn thẳng vào thẻ `<select>` trên trang web (Ví dụ: `(//select)[1]`.
* Select text: Điền dựa theo phần chữ hiển thị công khai trên màn hình (Ví dụ: `<option value="VN">Việt Nam</option>` ➔ Điền giá trị là `Việt Nam`).

#### Ví dụ thực tế: Tự động chọn Quốc gia khi đăng ký tài khoản

Khi kịch bản của bạn chạy đến bước đăng ký thông tin tài khoản và gặp một ô menu chọn quốc gia.

* Cách cấu hình:
  * XPath: `(//select)[1]`
  * Select text: Điền Australia
* Kết quả: Hệ thống sẽ lập tức kích hoạt ô chọn và chuyển giá trị hiển thị trên màn hình sang "Australia" một cách chính xác và an toàn.

<figure><img src="../../.gitbook/assets/image (202).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (201).png" alt=""><figcaption></figcaption></figure>
