# Scroll to element

Hành động này ra lệnh cho trình duyệt tự tính toán và cuộn trang một cách thông minh cho đến khi phần tử (element) bạn chọn xuất hiện ngay trong tầm nhìn của màn hình.

* Tác dụng: Đảm bảo phần tử mục tiêu luôn nằm trong vùng quan sát trước khi tool thực hiện click hoặc lấy dữ liệu. Việc cuộn chính xác giúp giảm lỗi "phần tử không nằm trong viewport" thường gặp ở các trang web dài hoặc có tải lười (lazy loading).

#### Tham số cấu hình:

* XPath: Đường dẫn mã định danh (XPath) của phần tử mục tiêu mà bạn muốn đưa vào tầm nhìn (Ví dụ: `//button[@id="btn-load-more"]` hoặc `//div[@class="footer-section"]`).

#### Ví dụ thực tế: Đưa nút bấm bị khuất vào màn hình trước khi click

Nhiều trang web hiện đại áp dụng công nghệ chặn tương tác ngầm (bảo mật bẫy bot). Nếu một nút bấm (ví dụ: nút "Xem thêm" hoặc nút "Xác nhận thanh toán") đang nằm ẩn sâu phía dưới giao diện và chưa được cuộn tới, việc bạn ra lệnh `Mouse click` trực tiếp vào XPath của nút đó có thể bị hệ thống báo lỗi hụt, hoặc trang web từ chối ghi nhận lệnh bấm do chưa có hành vi cuộn chuột của người dùng.

* Cách cấu hình:
  1. Kéo hành động Scroll to element vào luồng ➔ Điền XPath của nút bấm mục tiêu.
  2. Kéo tiếp hành động Mouse click (hoặc Wait element) ngay phía sau để thực hiện tương tác.
* Kết quả: Trình duyệt sẽ tự động cuộn màn hình mượt mà xuống đúng vị trí có chứa phần tử đó, đưa nó hiển thị rõ ràng trên giao diện, giúp lệnh click tiếp theo diễn ra thành công 100% như người dùng thật.
