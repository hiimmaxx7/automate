---
description: >-
  Khi sử dụng các khối điều hướng như If, Else if, hoặc While, bạn cần thiết lập
  một biểu thức điều kiện để hệ thống kiểm tra lúc chạy. Biểu thức này sẽ trả về
  kết quả Đúng (true) hoặc Sai (false).
---

# Hướng dẫn viết Điều kiện

> ⚠️ Quy tắc cốt lõi về Chuỗi (String): Đối với kiểu dữ liệu là chữ/chuỗi, bạn bắt buộc phải bọc trong dấu ngoặc kép `""`  (Ví dụ: `$name = "admin"`). Đối với số thì điền trực tiếp.

#### 1. Các toán tử so sánh Số học (Chỉ áp dụng cho Số)

* `>` : Lớn hơn. (Ví dụ: `$count > 5`)
* `<` : Nhỏ hơn. (Ví dụ: `$loopIndex < 10`)
* `>=` : Lớn hơn hoặc bằng.
* `<=` : Nhỏ hơn hoặc bằng.

#### 2. Các toán tử so sánh Logic (Áp dụng cho cả Số và Chuỗi)

* `=` : Bằng nhau.
  * _Ví dụ_: `3 = 3` ➡️ `true`
  * _Ví dụ_: `"hello" = "hola"` ➡️ `false`
* `!=` : Khác nhau (Phủ định của phép bằng).
  * _Ví dụ_: `3 != 4` ➡️ `true`
  * _Ví dụ_: `"hello" != "hello"` ➡️ `false`

#### 3. Các toán tử xử lý Chuỗi (String)

* `contains` : Kiểm tra xem chuỗi phía trước có chứa chuỗi phía sau hay không.
  * _Ví dụ_: `"ABCD" contains "AB"` ➡️ `true`
  * _Ví dụ_: `"AB" contains "ABCD"` ➡️ `false`
* `!contains` : Kiểm tra xem chuỗi phía trước có KHÔNG chứa chuỗi phía sau hay không.
  * _Ví dụ_: `!"ABCD" contains "AB"` ➡️ `false`
  * _Ví dụ_: `!"AB" contains "ABCD"` ➡️ `true`
* `contains "B"` (Khi đứng một mình trước B): Kiểm tra xem biến hoặc chuỗi cần xét có phải là chuỗi rỗng hay không.
  * _Kết quả_: Trả về `true` nếu rỗng, và `false` nếu có chứa dữ liệu.

#### 4. Hàm kiểm tra phần tử trên giao diện (Element)

Hàm này giúp kịch bản nhận diện sự xuất hiện của các nút bấm, ô nhập liệu... trên trang web thông qua đường dẫn XPath:

* `hasElement(XPATH)` : Điều kiện đúng khi phần tử có tồn tại trên trang.
* `!hasElement(XPATH)` : Điều kiện đúng khi phần tử không tồn tại trên trang (Phủ định của `hasElement`).

#### 5. Cách kết hợp nhiều điều kiện phức tạp

Bạn có thể kết hợp nhiều điều kiện lại với nhau trong một hàng bằng cách sử dụng các ký hiệu logic và dấu ngoặc đơn `()` để gom nhóm:

* `&&` : Phép VÀ (Tất cả các điều kiện phải đồng thời đúng).
* `||` : Phép HOẶC (Chỉ cần một trong các điều kiện đúng là được).

Ví dụ thực tế khi viết điều kiện:

*   _Trường hợp 1_: Kiểm tra số lượt lặp lớn hơn 5 và tên tài khoản có chứa chữ "abc":

    ```
    $count > 5 && $name contains "abc"
    ```
*   _Trường hợp 2_: Kiểm tra nếu không xuất hiện nút Login (đã đăng nhập) HOẶC biến báo lỗi đang hiển thị chữ "true":

    ```
    !hasElement(//div[@id='x']) || $error = "true"
    ```
