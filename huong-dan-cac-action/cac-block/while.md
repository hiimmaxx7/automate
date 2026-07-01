---
description: >-
  While là khối lệnh dùng để lặp đi lặp lại một nhóm hành động liên tục cho đến
  khi một điều kiện (Condition) được thỏa mãn thì mới dừng lại.
---

# While

Khác với vòng lặp For (lặp với số lần cố định), vòng lặp While thường được sử dụng khi bạn chưa biết trước kịch bản sẽ phải lặp lại bao nhiêu lần, mà phụ thuộc hoàn toàn vào trạng thái thực tế lúc chạy.

#### Cách thức hoạt động:

* Trước khi bắt đầu mỗi lượt lặp, hệ thống sẽ kiểm tra điều kiện (Condition) mà bạn cấu hình.
* Nếu điều kiện chưa thỏa mãn, các hành động bên trong khối While sẽ tiếp tục được thực thi.
* Ngay khi điều kiện thỏa mãn, hệ thống sẽ dừng vòng lặp lại và chuyển sang các hành động tiếp theo bên dưới khối While.

#### Ví dụ thực tế: Chờ lấy mã OTP Mail/Telegram

Giả sử bạn làm kịch bản đăng ký tài khoản và cần chờ hệ thống gửi mã OTP về Email. Vì thời gian Mail về có thể nhanh hoặc chậm, bạn không thể biết trước phải chờ bao lâu:

* Bạn đặt hành động Read mail code vào trong khối While.
* Điều kiện dừng của vòng lặp: Khi biến `$otpCode` nhận được giá trị (không còn rỗng).
* Hệ thống sẽ liên tục kiểm tra và đọc hòm thư. Ngay khi lấy được mã OTP thành công, điều kiện thỏa mãn, vòng lặp dừng lại để kịch bản chạy tiếp bước điền mã.

<figure><img src="../../.gitbook/assets/image (105).png" alt=""><figcaption></figcaption></figure>

> ⚠️ Lưu ý quan trọng: Khi sử dụng vòng lặp While, bạn cần đảm bảo các hành động bên trong khối lệnh sẽ làm thay đổi trạng thái của điều kiện dừng. Nếu điều kiện cấu hình sai hoặc Mail không bao giờ về, kịch bản sẽ rơi vào trạng thái lặp vô hạn (treo kịch bản).
>
> Để tối ưu, bạn nên kết hợp thêm một biến đếm số lần kiểm tra. Nếu quá 10 lần mà không có Mail, hãy dùng hành động Exit loop để thoát vòng lặp, hoặc hành động Stop để dừng hẳn chương trình và chuyển sang profile tiếp theo.
