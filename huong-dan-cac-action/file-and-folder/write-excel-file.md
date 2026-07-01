# Write excel file

### Hành động ghi dữ liệu vào Excel (Write excel file)

Write excel file là hành động dùng để ghi hoặc cập nhật một giá trị cụ thể vào một ô dữ liệu xác định trong file Excel (`.xlsx` hoặc `.xls`) dựa trên vị trí hàng và cột được chỉ định.

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file Excel cần ghi dữ liệu (Ví dụ: `D:\GPM\data.xlsx`).
* Sheet index: Vị trí của trang tính (sheet) cần ghi dữ liệu, bắt đầu tính từ 0 _(Sheet đầu tiên là `0`, sheet thứ hai là `1`...)_.
* Column Name or Index: Vị trí cột cần ghi dữ liệu. Bạn có thể điền theo hai cách:
  * Theo tên ký tự chữ cái: `A`, `B`, `C`, `D`...
  * Theo số mục chỉ số, bắt đầu tính từ 1 _(Cột A là `1`, cột B là `2`...)_.
* Row Index: Vị trí hàng cần ghi dữ liệu, bắt đầu tính từ 1 _(Hàng 1 là `1`, hàng 2 là `2`...)_.
* Value: Nội dung văn bản (hoặc biến chứa dữ liệu) mà bạn muốn ghi vào ô Excel đó.

#### Ví dụ thực tế: Cập nhật trạng thái tài khoản khớp theo từng dòng của Profile đang chạy

Khi bạn vận hành kịch bản đa luồng (chạy nhiều profile cùng lúc), mỗi profile sẽ được hệ thống GPM Automate gán sẵn các biến hệ thống để nhận diện: biến đường dẫn file Excel cấu hình đầu vào (`$inputExcelFileLocation`) và số thứ tự hàng dữ liệu mà profile đó đang đảm nhiệm (`$inputExcelCurrentRow`).

Giả sử bạn muốn kịch bản sau khi chạy xong bước đăng nhập thành công thì sẽ tự động ghi chữ `"Thành công"` vào cột C (Trạng thái) tương ứng với đúng hàng của profile đó trong file Excel:

* Cách cấu hình:
  * File Path: Truyền vào biến hệ thống `$inputExcelFileLocation`.
  * Sheet index: `0` _(Ghi vào sheet đầu tiên)_.
  * Column Name or Index: `C` _(Cột trạng thái)_.
  * Row Index: Truyền vào biến hệ thống `$inputExcelCurrentRow` _(Hệ thống tự động hiểu hàng tương ứng của từng profile, ví dụ profile 1 chạy hàng 2 sẽ ghi vào hàng 2, profile 2 chạy hàng 3 sẽ ghi vào hàng 3)_.
  * Value: Điền nội dung chuỗi `"Thành công"` (hoặc biến chứa log của bạn).

Kết quả: Kịch bản chạy đến đâu sẽ tự động cập nhật kết quả đồng bộ và chính xác vào file Excel đến đó theo thời gian thực mà không sợ bị ghi đè hay lệch hàng dữ liệu giữa các luồng.

<figure><img src="../../.gitbook/assets/image (154).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (152).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (153).png" alt=""><figcaption></figcaption></figure>
