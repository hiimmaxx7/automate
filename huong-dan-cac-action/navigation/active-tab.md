# Active tab

Hành động này giúp tool "nhảy" sang một tab khác đang mở trên trình duyệt.

* Tác dụng: Giúp bạn làm việc đa nhiệm dễ dàng. Ví dụ: bạn đang ở tab A để lấy dữ liệu, sau đó dùng lệnh này để chuyển sang tab B rồi dán dữ liệu vào đó.
* Lưu ý: Sau khi chuyển, mọi thao tác tiếp theo (click, nhập liệu, cào dữ liệu) của tool sẽ chỉ chạy trên tab mới được chọn này thôi.

#### Tham số cấu hình:

* Type: Chọn phương thức để hệ thống xác định tab cần chuyển đổi qua:
  *   By index: Chuyển tab dựa theo số thứ tự vị trí (tính từ trái qua phải, bắt đầu từ số `0`).

      > 💡 _Mẹo nhỏ_: Sau khi trình duyệt bật lên các cửa sổ liên kết dạng popup (như cửa sổ đăng nhập Google, ví MetaMask...), bạn chỉ cần gọi hành động Active tab với chỉ số là `0` để quay trở về màn hình trình duyệt chính một cách nhanh chóng.
  * By prefix URL: Chuyển tab dựa theo phần đầu của địa chỉ đường dẫn (URL). Hệ thống sẽ quét qua các tab đang mở, tab nào có URL bắt đầu bằng chuỗi ký tự bạn điền vào thì sẽ được kích hoạt lên (Ví dụ điền `https://facebook.com` thì hệ thống sẽ tìm và chuyển qua tab Facebook).

<figure><img src="../../.gitbook/assets/image (179).png" alt=""><figcaption></figcaption></figure>
