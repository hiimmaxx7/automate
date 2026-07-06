# Close all tab

Close all tab là hành động ra lệnh cho trình duyệt tiến hành dọn dẹp và tắt hàng loạt các thẻ đang mở, chỉ giữ lại duy nhất thẻ đầu tiên (tab có index = `0`) trên thanh điều hướng. Hành động này không có tham số cấu hình nào kèm theo.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/a9qNt96X1SM).

#### Ví dụ thực tế: Reset trình duyệt trước khi chuyển tài khoản hoặc kết thúc luồng

Trong quá trình chạy automation, kịch bản của bạn có thể mở ra rất nhiều tab phụ do nhấn vào các đường link quảng cáo, popup hoặc các trang check mail, check ví. Việc để quá nhiều tab chạy ngầm sẽ làm ngốn tài nguyên RAM của máy tính và khiến các luồng chạy sau dễ bị nhầm lẫn giao diện.

* Cách áp dụng: Đặt hành động Close all tab ở cuối kịch bản (trước khối lệnh đóng trình duyệt hoàn toàn) hoặc ở đầu kịch bản để đảm bảo trình duyệt luôn ở trạng thái sạch sẽ nhất trước khi bắt đầu một chu trình làm việc mới.
