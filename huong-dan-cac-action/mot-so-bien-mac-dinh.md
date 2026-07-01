---
description: Một số biến mặc định được dùng trong Automate
---

# 📦Một số biến mặc định

### Các biến hệ thống mặc định (System Variables)

Trong quá trình xây dựng kịch bản, GPM Automate tự động cung cấp sẵn một số biến hệ thống. Bạn có thể gọi các biến này ở bất kỳ hành động nào để lấy thông tin của Profile hoặc dữ liệu Excel đang xử lý mà không cần phải tự khởi tạo.

#### 1. Nhóm biến thông tin Profile

Các biến này giúp kịch bản nhận diện và xử lý dữ liệu theo từng Profile Browser đang vận hành:

* 🆔 `$profileId`: Trả về ID định danh duy nhất của profile đang mở.
* 🏷️ `$profileName`: Trả về tên hiển thị của profile đang mở.
* 🌐 `$profileProxy`: Trả về thông tin Proxy (IP) mà profile đang mở đang sử dụng.

#### 2. Nhóm biến vòng lặp

* 🔄 `$loopIndex`: Trả về chỉ số (thứ tự đếm) hiện tại của vòng lặp For. Biến này tự động tăng lên sau mỗi lượt lặp.

#### 3. Nhóm biến quản lý dữ liệu Excel (`$inputExcel`)

Khi kịch bản của bạn cấu hình sử dụng một file Excel đầu vào để đọc/ghi dữ liệu, hệ thống sẽ tự động kích hoạt các biến sau:

* 📂 `$inputExcel`: Đại diện cho chính file Excel đầu vào đang được liên kết trong kịch bản.
* 📍 `$inputExcelFileLocation`: Trả về đường dẫn (File Path) chính xác của file Excel đầu vào trên máy tính.
* 📊 `$inputExcelTotalRows`: Trả về tổng số dòng đang có dữ liệu bên trong file Excel đầu vào.
* 🔢 `$inputExcelCurrentRow`: Trả về số thứ tự của dòng hiện tại đang được truy xuất và xử lý trong quá trình đọc file Excel.

> 💡 Quy tắc chung về Biến: Trong GPM Automate, tất cả các biến (bao gồm biến hệ thống có sẵn và biến do bạn tự đặt tên khi làm kịch bản) đều bắt đầu bằng ký tự `$`
