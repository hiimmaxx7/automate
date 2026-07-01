# Copy file

Copy file là hành động dùng để sao chép một tệp tin từ vị trí này sang một vị trí khác trên ổ cứng máy tính. Hành động này sẽ tạo ra một bản sao hoàn toàn mới tại nơi đến và vẫn giữ nguyên tệp tin gốc ở vị trí ban đầu.

#### Tham số cấu hình:

* Source File: Đường dẫn tuyệt đối của file nguồn cần copy (Ví dụ: `D:\data\template.xlsx`).
* Destination File: Đường dẫn tuyệt đối của file đích nơi sao chép đến (Ví dụ: `D:\backup\report_2026.xlsx`).

#### Ví dụ thực tế: Tự động nhân bản file Excel mẫu trước khi ghi dữ liệu

Khi làm kịch bản cào dữ liệu (Data Crawler) hoặc điền báo cáo, bạn thường có một file Excel mẫu (`template.xlsx`) đã được định dạng sẵn các cột tiêu đề. Bạn không muốn kịch bản ghi đè trực tiếp dữ liệu mới làm hỏng mất file mẫu này. Giải pháp là mỗi lần chạy kịch bản, hệ thống sẽ tự động nhân bản ra một file mới để sử dụng:

* Cách cấu hình:
  * Source File: Điền đường dẫn file mẫu: `D:\GPM\template.xlsx`
  * Destination File: Điền đường dẫn file mới sẽ dùng để ghi dữ liệu: `D:\GPM\data_output.xlsx`
* Kết quả: Hệ thống sẽ lấy file `template.xlsx`, tạo ra một bản sao chính xác và đặt tên là `data_output.xlsx` tại thư mục chỉ định. Các hành động phía sau của kịch bản (như _Write excel file_) sẽ chỉ tương tác và ghi dữ liệu vào file `data_output.xlsx` này, giúp file mẫu của bạn luôn được an toàn và sạch sẽ cho các lần chạy tiếp theo.

<figure><img src="../../.gitbook/assets/image (148).png" alt=""><figcaption></figcaption></figure>
