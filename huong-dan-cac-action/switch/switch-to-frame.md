# Switch to frame



Trong cấu trúc thiết kế trang web, Iframe (Inline Frame) được hiểu là một cửa sổ trình duyệt độc lập nằm nhúng bên trong một trang web khác.

Khi một phần tử (như nút bấm, ô nhập liệu) nằm bên trong thẻ `<iframe>`, hệ thống GPM Automate sẽ không thể tìm thấy XPath của nó nếu bạn vẫn đang ở không gian trang web chính. Bạn bắt buộc phải dùng hành động Switch to frame để "chui vào" trong Iframe đó thì mới tương tác được. Sau khi tương tác xong, bạn phải dùng Switch to default để "thoát ra ngoài" giao diện chính.

#### 1. Hành động chuyển vào Iframe (Switch to frame)

* Mục đích: Chuyển quyền điều khiển của kịch bản vào bên trong một cửa sổ Iframe chỉ định.
* Tham số cấu hình:
  * XPath: Đường dẫn XPath dẫn thẳng tới thẻ `<iframe>` mục tiêu trên trang web.

#### 2. Hành động quay về giao diện chính (Switch to default)

* Mục đích: Đưa quyền điều khiển thoát khỏi Iframe hiện tại để quay trở lại cấu trúc trang web gốc ban đầu. Hành động này không có tham số cấu hình.

#### Ví dụ thực tế: Click nút "Continue with Google" trên Pinterest (Hình ảnh đính kèm)

Dựa trên hình ảnh bên dưới, nút bấm Continue with Google thực chất không nằm trực tiếp trên trang Pinterest, mà nó được chứa trong một cửa sổ Iframe bảo mật do Google nhúng vào (Mũi tên đỏ phía trên bên phải mã nguồn chỉ thẳng vào thẻ `<iframe src="https://accounts.google.com...">`).

Nếu bạn chỉ dùng lệnh _Mouse click_ trực tiếp vào nút _Continue with Google_ (`//span[text()="Continue with Google"]`), kịch bản sẽ báo lỗi hụt phần tử ngay lập tức. Quy trình xử lý chuẩn phải cấu hình như sau:

* Bước 1 (Chui vào Iframe): Kéo hành động Switch to frame vào kịch bản.
  * _XPath_: Nhập XPath của thẻ iframe như bạn đã tìm thấy: `//iframe[contains(@src,'accounts.google.com')]`
* Bước 2 (Click nút bấm): Kéo hành động Mouse click vào luồng.
  * _Kiểu click_: Click dựa theo XPath.
  * _XPath_: Nhập XPath của nút bấm nằm bên trong iframe: `//span[contains(text(),"Continue with Google")]`
* Bước 3 (Thoát ra ngoài): Kéo hành động Switch to default ngay phía sau để đưa trình duyệt trở về không gian chính của trang Pinterest, sẵn sàng cho các bước điền Form đăng ký (Email, Password) bên ngoài nếu cần.

<figure><img src="../../.gitbook/assets/image (203).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (204).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (205).png" alt=""><figcaption></figcaption></figure>

Để hiểu Iframe (Frame) trong lập trình web một cách nôm na và dễ tưởng tượng nhất, bạn hãy nghĩ ngay đến một bức tường và những khung tranh treo trên đó.

#### 1. Hình ảnh ẩn dụ về Khung Tranh

* Bức tường chính: Chính là toàn bộ trang web mà bạn đang truy cập (ví dụ: trang `pinterest.com`). Trên bức tường này có màu sơn riêng, có cửa ra vào, có bàn ghế xung quanh.
* Khung tranh treo tường (Iframe): Là một cái khung được đục lỗ hoặc treo lên bức tường đó. Điều đặc biệt là bên trong khung tranh này không phải là một bức ảnh tĩnh, mà là một mảnh đất thuộc sở hữu của một người khác hoàn toàn (ví dụ: một góc văn phòng của `accounts.google.com`).

#### 2. Bản chất hoạt động của Iframe trên website

Khi một website chèn Iframe, họ đang mở một "cửa sổ nhỏ" để cho phép một trang web khác hiển thị nội dung của họ ngay trên trang của mình:

* Nội dung độc lập: Người chủ bức tường (Pinterest) chỉ cho thuê chỗ treo khung tranh, chứ không có quyền can thiệp vào bên trong khung tranh đó có những gì, hoạt động ra sao. Mọi thứ bên trong khung là do chủ khung tranh (Google) toàn quyền quản lý và bảo mật.
* Người xem (Kịch bản Automation): Khi bạn đứng ở ngoài phòng, bạn có thể nhìn thấy cả bức tường và khung tranh. Nhưng nếu bạn muốn lấy cây bút vẽ lên bức tranh, bạn không thể đứng từ xa quẹt đại lên tường được. Bạn phải bước hẳn chân vào bên trong phạm vi của khung tranh (`Switch to frame`), lúc đó bạn mới chạm được vào các chi tiết bên trong nó (như nút _Continue with Google_).

#### 3. Tại sao khi làm Automation bắt buộc phải "Chui vào" và "Thoát ra"?

Do tính chất bảo mật của trình duyệt, thế giới bên ngoài tường và thế giới bên trong khung tranh bị ngăn cách bởi một tấm kính vô hình:

* Nếu không "Chui vào" (`Switch to frame`): Công cụ tự động hóa sẽ đứng ở ngoài tường và ngơ ngác hỏi: _"Ơ, tôi nhìn thấy nút Đăng nhập bằng Google rõ ràng trên màn hình mà sao tìm mã XPath không thấy đâu cả?"_ -> Vì robot đang quét mã của bức tường, chứ chưa nhìn xuyên qua kính của khung tranh được.
* Nếu không "Thoát ra" (`Switch to default`): Sau khi bạn click xong nút trong khung tranh, bạn muốn quay ra bấm nút "Đăng ký" ở góc dưới của trang Pinterest. Nếu bạn không thoát ra, robot vẫn sẽ luẩn quẩn tìm kiếm cái nút đó ở... bên trong mảnh đất của Google, dẫn đến lỗi hụt lệnh.

Nói tóm lại, Iframe giống như một trang web thu nhỏ được nhúng lồng bên trong một trang web lớn, tạo ra một ranh giới không gian riêng biệt mà kịch bản tự động muốn làm việc thì phải đi ra/đi vào rõ ràng.
