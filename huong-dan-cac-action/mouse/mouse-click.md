---
description: Click chuột vào một element.
---

# Mouse click

Mouse click là hành động điều khiển con trỏ chuột thực hiện lệnh bấm (click) vào một vị trí cụ thể trên màn hình. Để tối ưu cho từng tình huống tương tác giao diện khác nhau, GPM Automate cung cấp cho bạn 3 tùy chọn thiết lập linh hoạt:

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/kQZWs1I76Zo).

#### 3 kiểu lựa chọn click chuột tương thích mọi giao diện

**1. Click dựa theo XPath (Mặc định cho giao diện Web)**

* Cách hoạt động: Bạn điền đường dẫn mã định danh (XPath) của phần tử trên trang web (ví dụ: `//button[@id="submit"]`). Hệ thống sẽ tự động tìm kiếm thẻ HTML này, tính toán vị trí của nó trên trình duyệt và đưa chuột đến bấm chính xác.
* Ứng dụng: Dùng cho cấu trúc trang web thông thường, các nút bấm cố định có thẻ mã nguồn rõ ràng.

<figure><img src="../../.gitbook/assets/image (190).png" alt=""><figcaption></figcaption></figure>

**2. Click dựa theo vị trí hiện tại của con trỏ chuột**

* Cách hoạt động: Hệ thống không dịch chuyển chuột đi đâu cả, mà sẽ thực hiện lệnh bấm ngay tại đúng điểm mà con trỏ chuột đang đứng im từ hành động trước đó (như sau lệnh Mouse move hoặc Random scroll).
* Ứng dụng: Dùng khi bạn đã có một chuỗi hành động di chuyển chuột dò đường phức tạp trước đó và chỉ cần ra lệnh click để kích hoạt.

**3. Click dựa theo tọa độ (Kết hợp hoàn hảo với Image search)**

* Cách hoạt động: Bạn nhập trực tiếp vị trí điểm ảnh theo trục ngang `X` và trục dọc `Y` (Pixel) trên màn hình để chuột nhảy đến bấm.
* Tối ưu kết hợp: Kiểu click này thường được kết hợp chung với hành động Image search. Khi _Image search_ tìm thấy ảnh mục tiêu, nó sẽ trả về một biến tọa độ gộp (ví dụ tên biến mặc định là `pos`) dưới dạng chuỗi văn bản chứa cả trục X và Y ngăn cách bằng dấu phẩy: `900,800`.
* Cách cấu hình: Tại ô nhập tọa độ của hành động _Mouse click_, bạn chỉ cần truyền trực tiếp biến gộp `$pos` vào. Hệ thống thông minh của GPM Automate sẽ tự động bóc tách cú pháp `900,800` này ra để đưa chuột đến tọa độ x=900, y=800 để click thẳng vào mục tiêu.
* Ứng dụng: Dùng để click vào các phần tử nằm trong Canvas (game), các nút bấm nằm ẩn sâu trong Iframe bảo mật, hoặc tương tác với các thành phần không có thẻ XPath cố định.

<figure><img src="../../.gitbook/assets/image (191).png" alt=""><figcaption></figcaption></figure>
