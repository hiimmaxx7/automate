# DeepSeek

DeepSeek là hành động tích hợp sẵn giúp kịch bản GPM Automate của bạn kết nối thẳng tới hệ thống API của DeepSeek. Với ưu thế vượt trội về chi phí siêu rẻ và khả năng tư duy logic, lập trình, ngôn ngữ vô cùng mạnh mẽ, hành động này là một sự thay thế hoặc bổ sung hoàn hảo bên cạnh Chat GPT để tự động hóa các tác vụ tạo nội dung, phân tích dữ liệu, hay xử lý văn bản thông minh.

#### Hướng dẫn đăng ký, mua API và cấu hình hành động DeepSeek

Cơ chế hoạt động và tính toán chi phí qua API của DeepSeek tương tự như OpenAI (Nạp tiền trước, dùng bao nhiêu trừ bấy nhiêu). Quy trình thiết lập cụ thể bao gồm các bước sau:

**Bước 1: Đăng ký tài khoản và Nạp tiền (API Credits)**

1. Bạn truy cập vào trang quản lý API chính thức của DeepSeek tại địa chỉ: [https://platform.deepseek.com](https://platform.google.com/url?q=https://platform.deepseek.com) và tiến hành tạo tài khoản.
2. Sau khi đăng nhập, truy cập vào mục Top up hoặc Billing để liên kết thẻ thanh toán quốc tế (Visa/Mastercard) và nạp số tiền mong muốn (thường tối thiểu từ $2 - $5) để kích hoạt hạn ngạch sử dụng API.

**Bước 2: Khởi tạo và lấy mã DeepSeek API Key**

1. Tại thanh menu bên trái, chọn mục API Keys.
2. Nhấn vào nút Create new secret key, đặt tên cho khóa (Ví dụ: `GPM_DeepSeek_Key`).
3. Hệ thống sẽ hiển thị một chuỗi ký tự bảo mật dài bắt đầu bằng `sk-...`. Bạn hãy Copy và lưu lại ngay lập tức vì chuỗi này sẽ ẩn đi và không hiển thị lại lần thứ hai.

**Bước 3: Lấy danh sách tên Model chính xác**

DeepSeek cung cấp hai mô hình cốt lõi cực kỳ tối ưu, bạn chỉ cần điền chính xác một trong hai mã định danh sau vào ô cấu hình của GPM. Bạn có thể xem danh sách model của DeepSeek tại đây: [https://api-docs.deepseek.com/quick\_start/pricing](https://api-docs.deepseek.com/quick_start/pricing).

#### Các tham số cấu hình trong GPM Automate:

Khi kéo hành động DeepSeek vào luồng Main workflow, bạn thiết lập như sau:

* API Key: Dán mã khóa bí mật `sk-...` lấy ở Bước 2 vào đây (hoặc truyền qua biến số để bảo mật).
* DeepSeek Model: Điền chính xác chuỗi `deepseek-chat` hoặc `deepseek-reasoning`.
* Prompt: Điền nội dung câu lệnh hoặc yêu cầu chi tiết của bạn (Ví dụ: `"Hãy phân tích đoạn hội thoại sau và trích xuất ra số điện thoại của khách hàng: $webContent"`).
* Output variable: Đặt tên biến đầu ra (Ví dụ: `deepseekResult`) để hệ thống tự động lưu chuỗi văn bản câu trả lời của AI, sẵn sàng cho các hành động điền dữ liệu tiếp theo.

#### Ví dụ thực tế: Tự động dịch và viết lại tiêu đề bài viết (Rewrite Title) tránh bản quyền

Khi bạn làm Marketing, POD hoặc làm nội dung trên thị trường quốc tế (chẳng hạn như thị trường Đức), bạn cần cào các tiêu đề sản phẩm từ các trang E-commerce bằng tiếng Anh về, sau đó dịch sang tiếng Đức và viết lại một chút để đăng lên cửa hàng của mình nhằm tối ưu SEO và tránh trùng lặp nội dung.

* Cách cấu hình:
  * Giả sử bạn đã cào được tiêu đề gốc tiếng Anh và lưu vào biến `$originTitle`.
  * Gọi hành động DeepSeek trong kịch bản.
  * API Key: `sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * DeepSeek Model: `deepseek-v4-flash`
  *   Prompt: Bạn điền nội dung chỉ thị cho AI:

      ```
      Hãy dịch tiêu đề sản phẩm sau sang tiếng Đức và viết lại nó sao cho thật tự nhiên, ngắn gọn, hấp dẫn để làm marketing. Tiêu đề gốc: "$originTitle". Chỉ trả về duy nhất chuỗi kết quả sau khi dịch và viết lại, không thêm bất kỳ lời dẫn hay giải thích nào khác.
      ```
  * Output variable: Đặt tên biến đầu ra là `aiContent`.

Kết quả: Hệ thống sẽ đẩy tiêu đề trong biến `$originTitle` lên DeepSeek xử lý. AI sẽ nhanh chóng biên dịch và tối ưu ngôn từ sang tiếng Đức, sau đó nạp thẳng kết quả văn bản tinh gọn nhất vào biến `$aiContent`. Ở các bước tiếp theo, bạn chỉ việc gọi biến `$aiContent` này ra để điền tự động vào ô nhập liệu trên website của mình, giúp tự động hóa quy trình làm content xuyên biên giới cực kỳ chuyên nghiệp.

<figure><img src="../../.gitbook/assets/image (176).png" alt=""><figcaption></figcaption></figure>
