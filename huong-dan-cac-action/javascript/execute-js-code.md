# Execute JS code

Execute JS code là một hành động cực kỳ mạnh mẽ, cho phép bạn can thiệp sâu vào trình duyệt bằng cách chạy trực tiếp các đoạn mã JavaScript (JS) trên trang web hiện tại. Hành động này giúp bạn xử lý các thuật toán logic phức tạp, tính toán toán học, bóc tách dữ liệu nâng cao hoặc thực hiện các thao tác tương tác mà các khối lệnh No-code thông thường chưa hỗ trợ.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/I4-kZ7repv8).

#### Tham số cấu hình:

* Path to js file or code: Bạn có thể viết/dán trực tiếp đoạn mã JavaScript vào ô này, hoặc nhập đường dẫn tuyệt đối tới một tệp tin `.js` đang lưu trên máy tính của bạn.
* Output variable: Tên biến số của GPM Automate để hứng giá trị trả về sau khi đoạn code JS chạy xong.

#### ⚠️ Các lưu ý cốt lõi khi viết mã JS trong GPM Automate:

1. Bắt buộc phải có lệnh `return`: Để hệ thống GPM Automate có thể nhận được kết quả xử lý từ đoạn mã và lưu vào biến đầu ra, bạn bắt buộc phải thêm lệnh `return` ở cuối đoạn code JS. Nếu không có `return`, biến đầu ra sẽ nhận giá trị rỗng (`undefined`). Trong trường hợp code JS của bạn không cần trả về giá trị gì thì không cần lệnh `return` nhé.
2. Hành động này **bắt buộc** phải đặt trong khối Main logic, nó tương tự như việc bạn chạy js code trong Dev tools của trình duyệt. Bạn có thể test trước đoạn js code của mình ở trong Dev tools trước khi dùng nó trong Automate.
3. Quy tắc nhúng biến Automate vào JS: Bạn hoàn toàn có thể gọi các biến đã lưu trước đó của GPM Automate vào trong khối mã JS bằng cú pháp `$tên_biến`.
   * Đối với biến dạng số (Number): Bạn có thể viết trực tiếp (Ví dụ: `const index = $index;`).
   * Đối với biến dạng chuỗi (String): Bạn bắt buộc phải bao bọc biến đó bằng dấu nháy đơn `'...'`, nháy kép `"..."`, hoặc chuẩn nhất là dấu backtick `` `...` `` để tránh bị vỡ định dạng code khi chuỗi có khoảng trắng hoặc ký tự đặc biệt, ví dụ: ``const str = `$postContent`;``.

#### Ví dụ thực tế: Trích xuất ký tự dựa trên vị trí (Index) chỉ định

Giả sử trong kịch bản GPM Automate, bạn đã có sẵn 2 biến:

* Biến `$str` đang lưu chuỗi: `Hello, world!`
* Biến `$index` đang lưu số: `7`

Bạn muốn dùng mã JavaScript để lấy ra ký tự nằm ở vị trí thứ 7 trong chuỗi trên (kết quả mong muốn là chữ `w`) và lưu lại vào biến `$charResult` của Automate. Bạn sẽ cấu hình hành động Execute JS code như sau:

* Output variable: `charResult`
* Nội dung đoạn code JS:

```
const str = `$str`;
const index = $index;
const char = index >= 0 && index < str.length ? str[index] : "Invalid index";

return char;
```

Logic vận hành: Hệ thống sẽ nạp chuỗi `Hello, world!` và số `7` vào đoạn mã, chạy thuật toán kiểm tra tính hợp lệ của vị trí và trích xuất ký tự. Lệnh `return char;` ở cuối sẽ đẩy chữ `w` ra ngoài và nạp thẳng vào biến `$charResult` để bạn sử dụng cho các hành động tiếp theo.

<figure><img src="../../.gitbook/assets/image (221).png" alt=""><figcaption></figcaption></figure>
