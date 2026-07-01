# ChatGPT

Chat GPT là hành động tích hợp sẵn giúp kịch bản của bạn có thể giao tiếp trực tiếp với các mô hình ngôn ngữ lớn của OpenAI thông qua giao thức API. Hành động này biến kịch bản Automation trở nên thông minh vượt trội nhờ khả năng tự động xử lý ngôn ngữ tự nhiên, dịch thuật, tóm tắt văn bản, trích xuất thông tin, hoặc tự động sáng tạo nội dung bài viết ngay trong luồng chạy.

#### Bước 1: Đăng ký tài khoản và Mua Credits (API) trên OpenAI

Khác với tài khoản ChatGPT Plus (gói trả phí $20/tháng dùng trên giao diện web), tài khoản sử dụng API hoạt động theo cơ chế Nạp tiền trước, dùng bao nhiêu trừ bấy nhiêu (Pay-as-you-go).

1. Đăng ký tài khoản: Bạn truy cập vào trang dành cho lập trình viên của OpenAI tại địa chỉ [https://platform.openai.com](https://platform.openai.com/) và tiến hành đăng ký tài khoản (bằng Email hoặc liên kết trực tiếp với tài khoản Google).
2. Nạp tiền mua API:
   * Tại giao diện quản lý, bạn tìm đến mục Settings ➔ Billing.
   * Nhấp chọn Add credits (hoặc Set up payment) để liên kết thẻ thanh toán quốc tế (Visa/Mastercard) của bạn.
   * Tiến hành nạp một số tiền nhỏ tối thiểu (thường là $5) vào tài khoản. Số tiền này sẽ được trừ dần dựa trên số lượng ký tự (Token) văn bản mà kịch bản của bạn gửi lên và nhận về từ AI.

#### Bước 2: Khởi tạo và Lấy mã API Key (GPT API)

Mã API Key đóng vai trò như một chiếc chìa khóa bảo mật giúp GPM Automate kết nối và sử dụng số tiền bạn vừa nạp để gọi AI xử lý công việc.

1. Tại thanh menu bên trái giao diện OpenAI Platform, bạn truy cập vào mục API Keys.
2. Nhấp vào nút Create new secret key (Tạo khóa bí mật mới).
3. Đặt một cái tên gợi nhớ cho chiếc chìa khóa này (Ví dụ: `GPM_Automate_Key`).
4.  Hệ thống sẽ hiển thị một chuỗi ký tự dài bắt đầu bằng chữ `sk-...`.

    > ⚠️ Lưu ý: Hãy Copy và lưu lại mã này ngay lập tức vào một file bảo mật, vì OpenAI sẽ chỉ hiển thị chuỗi này duy nhất một lần này. Nếu làm mất, bạn sẽ phải tạo một chiếc chìa khóa mới.

#### Bước 3: Lấy danh sách tên Model chính xác (GPT Model)

OpenAI cung cấp rất nhiều thế hệ AI với tốc độ, chi phí và độ thông minh khác nhau. Để điền chính xác tên Model vào GPM Automate:

Truy cập mục Models trên trang Platform của OpenAI để xem danh sách tại đây: [https://developers.openai.com/api/docs/models/all](https://developers.openai.com/api/docs/models/all). Hoặc xem nhanh danh sách các Model phổ biến nhất dưới đây:

| **Tên Model (Điền vào GPM)** | **Đặc điểm & Khuyên dùng**                                                                                                               |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| gpt-4o-mini                  | Model thế hệ mới, tốc độ phản hồi siêu nhanh, chi phí token cực kỳ rẻ, tối ưu nhất cho các tác vụ Automation thông thường.               |
| gpt-4o                       | Model thông minh nhất hiện tại, xử lý các logic toán học, lập trình hoặc viết content chuyên sâu vô cùng xuất sắc nhưng chi phí cao hơn. |
| gpt-3.5-turbo                | Model truyền thống, độ thông minh ở mức cơ bản, xử lý tốt các bài toán dịch thuật hoặc dọn dẹp văn bản đơn giản.                         |

#### Giải thích các tham số cấu hình:

* GPT API: Điền mã khóa bí mật (Secret Key API) được khởi tạo từ trang quản lý tài khoản OpenAI của bạn (Chuỗi thường có định dạng bắt đầu bằng `sk-...`).
* GPT Model: Điền tên mã định danh của mô hình trí tuệ nhân tạo mà bạn muốn sử dụng, ví dụ: `gpt-3.5-turbo`, `gpt-3.5-turbo-0125`, `gpt-4o`...
* Prompt: Điền câu hỏi, ngữ cảnh hoặc yêu cầu chi tiết mà bạn muốn ChatGPT xử lý và trả lời. Bạn hoàn toàn có thể lồng các biến dữ liệu cào được từ trình duyệt vào ô này để AI phân tích.
* Output variable: Tên biến lưu lại toàn bộ chuỗi văn bản câu trả lời phản hồi từ ChatGPT.

#### Ví dụ thực tế: Tự động dịch và viết lại tiêu đề bài viết (Rewrite Title) tránh bản quyền

Khi bạn làm Marketing, POD hoặc làm nội dung trên thị trường quốc tế (chẳng hạn như thị trường Đức), bạn cần cào các tiêu đề sản phẩm từ các trang E-commerce bằng tiếng Anh về, sau đó dịch sang tiếng Đức và viết lại một chút để đăng lên cửa hàng của mình nhằm tối ưu SEO và tránh trùng lặp nội dung.

* Cách cấu hình:
  * Giả sử bạn đã cào được tiêu đề gốc tiếng Anh và lưu vào biến `$originTitle`.
  * Gọi hành động Chat GPT trong kịch bản.
  * GPT API: `sk-proj-xxxxxxxxxxxxxxxxxxxx`
  * GPT Model: `gpt-3.5-turbo`
  *   Prompt: Bạn điền nội dung chỉ thị cho AI:

      ```
      Hãy dịch tiêu đề sản phẩm sau sang tiếng Đức và viết lại nó sao cho thật tự nhiên, ngắn gọn, hấp dẫn để làm marketing. Tiêu đề gốc: "$originTitle". Chỉ trả về duy nhất chuỗi kết quả sau khi dịch và viết lại, không thêm bất kỳ lời dẫn hay giải thích nào khác.
      ```
  * Output variable: Đặt tên biến đầu ra là `aiContent`.

Kết quả: Hệ thống sẽ đẩy tiêu đề trong biến `$originTitle` lên ChatGPT xử lý. AI sẽ nhanh chóng biên dịch và tối ưu ngôn từ sang tiếng Đức, sau đó nạp thẳng kết quả văn bản tinh gọn nhất vào biến `$aiContent`. Ở các bước tiếp theo, bạn chỉ việc gọi biến `$aiContent` này ra để điền tự động vào ô nhập liệu trên website của mình, giúp tự động hóa quy trình làm content xuyên biên giới cực kỳ chuyên nghiệp.

<figure><img src="../../.gitbook/assets/image (175).png" alt=""><figcaption></figcaption></figure>
