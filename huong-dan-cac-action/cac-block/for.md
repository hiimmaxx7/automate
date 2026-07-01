---
description: >-
  For là khối lệnh dùng để lặp đi lặp lại một nhóm hành động với số lần được xác
  định trước. Vòng lặp này sử dụng một biến đếm mặc định là $loopIndex để theo
  dõi tiến trình lặp.
---

# For

#### Các tham số cấu hình trong vòng lặp For:

* 🟢 Start: Giá trị bắt đầu của biến lặp `$loopIndex`.
* 🔴 End: Giá trị kết thúc. Vòng lặp sẽ dừng lại khi `$loopIndex` đạt đến giá trị `End - 1`.
* ⚡ Increase by: Bước nhảy (giá trị tăng thêm) của `$loopIndex` sau mỗi lượt lặp hoàn thành.

#### Ví dụ thực tế: Kết hợp vòng lặp For để đọc toàn bộ dữ liệu file Excel

Giả sử bạn có một file Excel tên là `test.xlsx` và bạn cần cấu hình kịch bản để đọc toàn bộ dữ liệu tại cột B của file này. Bạn có thể kết hợp vòng lặp For với biến hệ thống `$inputExcelTotalRows` như sau:

<figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (103).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (104).png" alt=""><figcaption></figcaption></figure>
