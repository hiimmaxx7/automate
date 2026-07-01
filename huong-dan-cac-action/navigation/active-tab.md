# Active tab

Hành động này giúp tool chuyển sang một tab khác đang mở trên trình duyệt.

Giúp bạn làm việc đa nhiệm dễ dàng. Ví dụ: bạn đang ở tab A để lấy dữ liệu, sau đó dùng lệnh này để chuyển sang tab B rồi dán dữ liệu vào đó.

### Lưu Ý Quan Trọng

Sau khi chuyển, mọi thao tác tiếp theo (click, nhập liệu, cào dữ liệu) của tool sẽ chỉ chạy trên tab mới được chọn này.

### Tham Số Cấu Hình

* Type: Chọn phương thức để hệ thống xác định tab cần chuyển đổi:
  * By Index: Chuyển tab dựa theo số thứ tự vị trí (tính từ trái qua phải, bắt đầu từ số 0).
  * By Prefix URL: Chuyển tab dựa theo phần đầu của địa chỉ đường dẫn (URL). Hệ thống sẽ quét qua các tab đang mở, tab nào có URL bắt đầu bằng chuỗi ký tự bạn điền vào thì sẽ được kích hoạt lên.

#### 💡 Lời Khuyên Cho Người Dùng

Khi sử dụng tính năng chuyển tab, bạn nên ưu tiên chọn phương thức **By Prefix URL**.

Lý do là vì thứ tự tab (Index) có thể thay đổi không theo quy luật do cơ chế trả về từ Remote Port, dẫn đến việc dùng số thứ tự có thể không chính xác và làm gián đoạn kịch bản. Việc dùng Prefix URL sẽ đảm bảo tool luôn tìm đúng tab cần thiết bất kể vị trí của nó trên trình duyệt.

_Mẹo nhỏ: Sau khi trình duyệt bật lên các cửa sổ liên kết dạng popup (như cửa sổ đăng nhập Google, ví MetaMask...), bạn chỉ cần gọi hành động Active Tab với chỉ số 0 để quay trở về màn hình trình duyệt chính một cách nhanh chóng._

<figure><img src="../../.gitbook/assets/image (179).png" alt=""><figcaption></figcaption></figure>
