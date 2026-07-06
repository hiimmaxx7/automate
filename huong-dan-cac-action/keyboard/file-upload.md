# File upload

File upload là hành động ra lệnh cho trình duyệt tự động đẩy một hoặc nhiều tệp tin (hình ảnh, video, tài liệu Excel, txt...) từ máy tính của bạn lên máy chủ của trang web mục tiêu.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/cCTEtuMtz-s).

#### Tham số cấu hình:

*   XPath: Đường dẫn mã định danh (XPath) dẫn thẳng tới khung nạp tệp tin của trang web.

    > ⚠️ Chú ý quan trọng: Khi thực hiện tự động hóa bằng mã lệnh, bạn không click trực tiếp vào các nút có chữ "Chọn ảnh" hay "Tải ảnh lên" (vì nó sẽ mở ra cửa sổ chọn file của hệ điều hành Windows/macOS làm đơ kịch bản). Thay vào đó, bạn phải tìm đúng thẻ ẩn có cấu trúc dạng: `//input[@type='file']` trên trang web để điền XPath vào ô này.
* File path: Đường dẫn tuyệt đối dẫn tới tệp tin đang lưu trên máy tính của bạn (Ví dụ: `C:\Users\Admin\Desktop\avatar.png`). Bạn có thể truyền biến chứa đường dẫn động vào đây (Ví dụ: `$filePath`).

#### Ví dụ thực tế: Tải ảnh sản phẩm lên hệ thống

Khi bạn làm kịch bản đăng bài bán hàng (Listing sản phẩm) tự động lên các sàn thương mại điện tử hoặc mạng xã hội, luồng xử lý chuẩn sẽ như sau:

* Cách cấu hình:
  * Element XPath: `//input[@type='file' and @name='product_image']` (Quét mã nguồn trang web để tìm thẻ input ẩn này).
  * File path: `D:\DataPOD\Design01.png`
* Logic vận hành: GPM Automate sẽ truyền trực tiếp đường dẫn file `D:\DataPOD\Design01.png` vào thẳng phần tử `input` của trang web. Hệ thống của website sẽ ngay lập tức nhận diện và bắt đầu quá trình tải ảnh lên một cách mượt mà mà không hề làm xuất hiện hộp thoại Open File của hệ điều hành.

<figure><img src="../../.gitbook/assets/image (199).png" alt=""><figcaption></figcaption></figure>
