---
description: Lấy nội dung văn bản hiện có trong clipboard.
---

# Get clipboard text

Get clipboard text là hành động dùng để đọc (lấy) toàn bộ nội dung văn bản đang được lưu trữ trong bộ nhớ tạm (Clipboard) của máy tính – chính là phần văn bản bạn vừa thực hiện lệnh Copy (`Ctrl + C`) từ một nguồn bất kỳ – rồi lưu giá trị đó vào một biến đầu ra.

Hành động này cực kỳ linh hoạt khi bạn cần phối hợp xử lý dữ liệu giữa các phần mềm bên ngoài (như Excel, Notepad, công cụ quét dữ liệu khác) với trình duyệt Automation của GPM.

#### Tham số cấu hình:

* Output variable: Tên biến lưu chuỗi văn bản lấy ra từ bộ nhớ tạm.

> ⚠️ Lưu ý cực kỳ quan trọng đối với Đa luồng (Multi-threading): Hành động này không phù hợp khi chạy đa luồng. Hệ điều hành Windows chỉ có duy nhất một bộ nhớ tạm (Clipboard) chung cho toàn bộ máy tính. Nếu bạn mở nhiều profile chạy cùng một lúc, các luồng sẽ tranh chấp và ghi đè dữ liệu lên nhau, dẫn đến việc luồng này lấy nhầm dữ liệu của luồng kia. Do đó, chỉ nên sử dụng hành động này khi chạy đơn luồng (1 profile tại một thời điểm).

#### Ví dụ thực tế: Lấy mã giảm giá được copy thủ công bên ngoài để điền vào trình duyệt

Giả sử bạn đang chạy một kịch bản đặt hàng tự động ở chế độ đơn luồng. Trước khi bấm chạy luồng, bạn lướt mạng và thấy một mã giảm giá hời, bạn dùng chuột bôi đen và nhấn `Ctrl + C` chuỗi chữ `GIAMGA50K` để lưu vào bộ nhớ máy tính.

Trong kịch bản GPM Automate, khi trình duyệt điều hướng đến trang thanh toán và cần nhập mã, bạn cấu hình như sau:

* Bước 1: Gọi hành động Get clipboard text, đặt tên biến đầu ra là `$copiedText`.
* Bước 2: Gọi hành động nhập liệu (ví dụ Key press), truyền biến `$copiedText` vào ô nhập mã giảm giá trên trang web.

Kết quả: Hệ thống sẽ tự động bốc chuỗi `GIAMGA50K` từ bộ nhớ tạm của Windows và điền thẳng vào website để áp dụng mã giảm giá, giúp bạn kết hợp mượt mà giữa thao tác tay và luồng chạy tự động.

<figure><img src="../../.gitbook/assets/image (161).png" alt=""><figcaption></figcaption></figure>
