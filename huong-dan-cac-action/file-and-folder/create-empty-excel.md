# Create empty excel

Create empty excel là hành động dùng để khởi tạo một file Excel hoàn toàn mới (định dạng `.xlsx`) và trống rỗng tại một đường dẫn được chỉ định trên máy tính của bạn.

Hành động này thường được đặt ở đầu kịch bản để chuẩn bị một file lưu trữ sạch sẽ trước khi các hành động cào dữ liệu (Data Crawler) hoặc ghi nhật ký bắt đầu đẩy thông tin vào.

#### Tham số cấu hình:

* File Path: Đường dẫn tuyệt đối bao gồm cả tên file và đuôi `.xlsx` nơi bạn muốn tạo file (Ví dụ: `D:\GPM\data_crawler.xlsx`).

#### Ví dụ thực tế: Khởi tạo file xuất dữ liệu trước khi cào bài viết

Giả sử bạn đang viết một kịch bản tự động lướt các hội nhóm và thu thập (cào) liên kết bài viết, lượt tương tác để phục vụ nghiên cứu thị trường. Trước khi vòng lặp cào dữ liệu bắt đầu chạy, bạn cần có sẵn một file Excel trống để lưu kết quả.

* Cách cấu hình: Ở bước đầu tiên của kịch bản, bạn gọi hành động Create empty excel.
  * File Path: Điền đường dẫn `D:\GPM\ketqua_facebook.xlsx`.
* Kết quả:
  * Nếu tại thư mục `D:\GPM\` chưa có file `ketqua_facebook.xlsx`, hệ thống sẽ lập tức tạo ra một file Excel trống.
  * Nếu file đã tồn tại từ trước, hệ thống sẽ xóa file cũ và tạo lại một file trống hoàn toàn mới để đảm bảo dữ liệu của đợt chạy trước không bị lẫn lộn vào đợt chạy này.

Sau bước này, bạn có thể yên tâm sử dụng các hành động như Write excel file hoặc Append excel file để ghi dữ liệu vừa cào được vào file.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>
