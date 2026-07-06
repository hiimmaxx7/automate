# Has popup

Has popup là hành động dùng để kiểm tra xem tại thời điểm hiện tại, trên màn hình có đang xuất hiện một cửa sổ bật lên (Popup Window) nào khớp với tiêu đề chỉ định hay không. Kết quả kiểm tra sẽ trả về giá trị logic (`True` nếu có popup, hoặc `False` nếu không có) và lưu vào một biến số.

Khác với Wait popup (bắt buộc phải đứng chờ), Has popup chỉ quét qua một lần duy nhất rồi chạy tiếp ngay, giúp bạn lập luận các nhánh điều kiện rẽ hướng cho kịch bản.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/oroexOGjZfw).

#### Tham số cấu hình:

* Popup Title: Tiêu đề của cửa sổ popup bạn muốn kiểm tra (hỗ trợ tìm kiếm tương đối, chỉ cần chứa cụm từ đặc trưng).
* Output variable: Tên biến số để lưu kết quả kiểm tra (nhận giá trị `true` hoặc `false`).
* Xem thêm cách dùng ở phần [Switch to Popup](../switch/switch-to-popup.md) nhé.
