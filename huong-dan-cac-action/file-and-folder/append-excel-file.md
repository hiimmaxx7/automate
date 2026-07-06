---
description: >-
  Thêm dữ liệu mới vào cuối một file excel hiện có mà không ghi đè nội dung hiện
  tại.
---

# Append excel file

Append excel file là hành động thông minh dùng để tự động tìm kiếm hàng trống đầu tiên ở cuối bảng dữ liệu và ghi nối tiếp nội dung vào đó, giúp bạn không cần phải tính toán hay quản lý số thứ tự hàng (`Row Index`) thủ công.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/EH7olDLAb9c).

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối dẫn đến file Excel cần chèn thêm dữ liệu (Ví dụ: `D:\GPM\data.xlsx`).
* Sheet index: Vị trí của trang tính (sheet) cần ghi dữ liệu, bắt đầu tính từ 0 _(Sheet đầu tiên là `0`)_.
* Column Name or Index: Vị trí cột cần ghi dữ liệu. Bạn có thể điền theo hai cách:
  * Theo tên ký tự chữ cái: `A`, `B`, `C`, `D`...
  * Theo số mục chỉ số, bắt đầu tính từ 1 _(Cột A là `1`, cột B là `2`...)_.
* Value: Nội dung văn bản (hoặc biến chứa dữ liệu) mà bạn muốn ghi vào ô trống cuối cùng của cột đó.

#### Ví dụ thực tế: Ghi nối tiếp nội dung vào cột B từ dòng thứ 6 trở đi

Giả sử bạn đang có một file Excel chứa danh sách dữ liệu hiện tại đã có chữ từ hàng 1 đến hàng 5. Bạn muốn cấu hình kịch bản tự động điền thêm một dữ liệu mới (ví dụ một mã coupon vừa cào được) vào ô trống tiếp theo của cột B (chính là ô `B6`).

Thay vì phải dùng hành động đọc file để đếm xem dòng nào trống rồi mới dùng lệnh _Write excel file_, bạn chỉ cần cấu hình hành động Append excel file như sau:

* Cách cấu hình:
  * File Path: `D:\GPM\data.xlsx`
  * Sheet index: `0`
  * Column Name or Index: `B` _(Chọn cột B cần nối tiếp dữ liệu)_.
  * Value: Điền nội dung chuỗi (hoặc truyền biến chứa dữ liệu, ví dụ biến mã coupon `$couponCode`).

Kết quả: Hệ thống sẽ tự động quét cột B từ trên xuống dưới, nhận diện được từ hàng 1 đến hàng 5 đã có dữ liệu, và lập tức ghi giá trị của biến vào ngay hàng trống đầu tiên (hàng 6 - ô `B6`). Ở lượt chạy tiếp theo của kịch bản, dữ liệu mới sẽ lại tự động được đẩy xuống hàng 7 (`B7`), hàng 8 (`B8`)... một cách tuần tự và chính xác.

<figure><img src="../../.gitbook/assets/image (156).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (155).png" alt=""><figcaption></figcaption></figure>
