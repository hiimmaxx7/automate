# Set clipboard text

Set clipboard text là hành động dùng để gán (ghi) một chuỗi văn bản hoặc giá trị của một biến vào bộ nhớ tạm (Clipboard) của hệ điều hành. Hành động này tương đương với thao tác bôi đen chữ rồi nhấn phím tắt Copy (`Ctrl + C`) trên máy tính.

Hành động này thường được sử dụng làm bước đệm trước khi bạn dùng lệnh dán dữ liệu, giúp nhập các đoạn văn bản dài hoặc ký tự đặc biệt vào trình duyệt một cách nhanh chóng mà không sợ bị lỗi gõ phím.

#### Tham số cấu hình:

* Text: Nội dung văn bản thô (hoặc biến chứa dữ liệu) mà bạn muốn nạp vào bộ nhớ tạm.

> ⚠️ Lưu ý cực kỳ quan trọng đối với Đa luồng (Multi-threading): Tương tự như hành động lấy văn bản, Set clipboard text không phù hợp khi chạy đa luồng. Do hệ điều hành Windows chỉ sử dụng duy nhất một Clipboard chung cho toàn bộ hệ thống, việc nhiều profile cùng ghi dữ liệu vào Clipboard một lúc sẽ gây ra hiện tượng tranh chấp, luồng sau đè dữ liệu luồng trước và làm sai lệch kết quả. Hãy ưu tiên dùng hành động này cho các kịch bản chạy đơn luồng.

#### Ví dụ thực tế: Tự động copy và dán nội dung bài viết dài

Khi bạn cần điền một đoạn văn bản rất dài (chẳng hạn một bài viết bán hàng có định dạng xuống dòng phức tạp) vào ô nhập liệu trên website. Nếu sử dụng hành động gõ phím thông thường, hệ thống sẽ mất nhiều thời gian để gõ từng ký tự và đôi khi bị lỗi font chữ tiếng Việt. Phương pháp tối ưu nhất là sử dụng Clipboard:

* Bước 1: Bạn gọi hành động Set clipboard text, điền nội dung bài viết vào ô Text (hoặc truyền biến dữ liệu `$postContent`).
* Bước 2: Bạn click chuột vào ô nhập liệu trên website, sau đó gọi hành động Key press với tổ hợp phím `Control+V` để dán thẳng toàn bộ đoạn văn bản vào trang web ngay lập tức.

Kết quả: Toàn bộ nội dung bài viết dài sẽ được dán vào website chỉ trong một tích tắc, đảm bảo giữ nguyên định dạng, không bị lỗi gõ chữ và tăng tốc độ chạy kịch bản lên tối đa.

<figure><img src="../../.gitbook/assets/image (162).png" alt=""><figcaption></figcaption></figure>
