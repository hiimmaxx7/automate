---
description: >-
  Đây là nhóm khối lệnh dùng để rẽ nhánh kịch bản dựa trên các điều kiện thực tế
  lúc chạy. Thay vì chạy một mạch từ trên xuống dưới, hệ thống sẽ kiểm tra xem
  điều kiện bạn đặt ra là Đúng hay Sai để quyế
---

# If, Else if và Else

#### 1. Khối lệnh điều kiện (If)

If là khối lệnh kiểm tra một điều kiện xác định đầu tiên. Nếu điều kiện đó Đúng, hệ thống sẽ thực hiện toàn bộ các hành động được đặt bên trong khối If này. Nếu Sai, hệ thống sẽ bỏ qua và kiểm tra tiếp xuống dưới.

#### 2. Khối lệnh điều kiện bổ sung (Else if)

Else if luôn luôn đi sau khối If (hoặc đi sau một Else if khác). Khối này được kích hoạt khi các điều kiện phía trên nó đều bị Sai. Hệ thống sẽ tiến hành kiểm tra điều kiện của riêng nó, nếu Đúng thì chạy các hành động bên trong, nếu Sai thì lại bỏ qua.

> Bạn có thể thêm nhiều khối Else if liên tiếp nhau để kiểm tra nhiều trường hợp khác nhau của kịch bản.

#### 3. Khối lệnh phủ định (Else)

Else là khối lệnh bọc lót cuối cùng trong chuỗi điều kiện và không cần cấu hình bất kỳ điều kiện nào cả. Khi tất cả các khối If và Else if phía trên đều Sai (không có trường hợp nào thỏa mãn), hệ thống sẽ tự động nhảy vào và thực thi các hành động nằm bên trong khối Else.

<figure><img src="../../.gitbook/assets/image (106).png" alt=""><figcaption></figcaption></figure>

#### Ví dụ thực tế: Kiểm tra trạng thái đăng nhập của tài khoản

Khi bạn mở một trang web lên (ví dụ: Facebook, X...), trạng thái của tài khoản trên profile có thể khác nhau. Bạn có thể dùng chuỗi If - Else if - Else để xử lý mượt mà mọi tình huống:

* Nếu (If): Thấy nút "Tạo bài viết" (Chứng tỏ tài khoản đã đăng nhập sẵn).
  * _Hành động_: Tiến hành điền nội dung và đăng bài luôn.
* Ngược lại nếu (Else if): Thấy ô nhập "Tên đăng nhập / Mật khẩu" (Tài khoản đã bị đăng xuất).
  * _Hành động_: Gọi dữ liệu từ biến để điền tài khoản, mật khẩu và bấm Đăng nhập.
* Ngược lại tất cả (Else): Không thấy nút Đăng bài mà cũng không thấy ô Đăng nhập (Có thể tài khoản đã bị checkpoint hoặc lỗi mạng).
  * _Hành động_: Dùng lệnh Stop để dừng chương trình hoặc chụp ảnh màn hình (Screenshot) để kiểm tra sau.
