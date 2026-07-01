# Read json

Read json dùng để trích xuất giá trị từ một đoạn văn bản định dạng JSON dựa trên cấu trúc đường dẫn được chỉ định.

#### Tham số cấu hình:

* JSON Text: Chuỗi văn bản JSON đầu vào cần đọc (hoặc biến chứa chuỗi JSON).
* Nodes: Đường dẫn (JSON Path) dẫn đến key chứa dữ liệu cần lấy.

#### Ví dụ thực tế: Lấy số điện thoại từ danh sách dữ liệu

Giả sử bạn có một chuỗi JSON chứa danh sách thông tin khách hàng như sau:

JSON

```
{
  "status": "success",
  "data": [
    {
      "name": "Nguyen Van A",
      "phone": "0987654321"
    },
    {
      "name": "Le Minh C",
      "phone": "0123456789"
    }
  ]
}
```

Để trích xuất số điện thoại của người đầu tiên trong danh sách, bạn cấu hình hành động Read json:

* JSON Text: Điền chuỗi JSON trên (hoặc truyền biến chứa chuỗi).
* Nodes: Điền là `data.[0].phone` _(trong đó `data` đi vào mảng dữ liệu, `[0]` là vị trí người đầu tiên, và `phone` là thuộc tính cần lấy)_.
* Output variable: Điền tên biến cần lưu kết quả (Ví dụ: `$phoneNumber`).

Kết quả: Biến `$phoneNumber` sẽ nhận giá trị là `"0987654321"`.

<figure><img src="../../.gitbook/assets/image (142).png" alt=""><figcaption></figcaption></figure>
