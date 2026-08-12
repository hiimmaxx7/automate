---
description: Kiểm tra một phần tử có tồn tại trên màn hình hay không, trả kết quả về biến.
---

# Has element

Has element là hành động kiểm tra một phần tử (theo XPath) có tồn tại trên màn hình hiện tại hay không, rồi trả kết quả đúng/sai về biến để rẽ nhánh kịch bản.

#### Giải thích các tham số cấu hình:

* XPath: XPath của phần tử cần kiểm tra, ví dụ `//node[@resource-id="com.android.chrome:id/url_bar"]`. Xem cách lấy XPath tại [Hướng dẫn xác định XPath & toạ độ](../phone-action/huong-dan-xac-dinh-xpath-va-toa-do.md).
* Output Variable Name: Tên biến lưu kết quả `true`/`false` (true nếu phần tử tồn tại). Dùng biến này trong khối If để rẽ nhánh.

<figure><img src="../../.gitbook/assets/el-has.png" alt=""><figcaption></figcaption></figure>
