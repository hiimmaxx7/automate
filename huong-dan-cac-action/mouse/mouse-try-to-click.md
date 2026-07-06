# Mouse try to click

Mouse try to click là hành động nâng cao của nhóm lệnh chuột, cho phép kịch bản thực hiện thao tác nhấp chuột lặp đi lặp lại nhiều lần vào một mục tiêu cho đến khi thỏa mãn một điều kiện mong muốn thì mới dừng lại.

Hành động này là giải pháp hoàn hảo để xử lý các nút bấm "cứng đầu" trên website (loại nút bấm đôi khi bị lag, cần phải click mồi vài lần mới ăn lệnh), hoặc dùng để săn (spam) các nút nhận thưởng, nút mở hộp quà xuất hiện trong thời gian ngắn.

🎥 Xem thêm video hướng dẫn: [Tại đây](https://youtu.be/kQZWs1I76Zo).

#### Các tham số cấu hình cốt lõi:

* Click type: Tương tự như hành động Mouse click, bạn cũng có 3 kiểu lựa chọn để chỉ định vị trí bấm chuột:
  1. _Click dựa theo XPath_: Hệ thống tìm thẻ HTML của phần tử để nhấp vào.
  2. _Click dựa theo vị trí hiện tại của con trỏ chuột_: Nhấp liên tục tại điểm con trỏ chuột đang đứng im.
  3. _Click dựa theo tọa độ_: Nhấp vào điểm ảnh cố định hoặc truyền biến gộp tọa độ dạng `900,800` (kết hợp từ kết quả của hành động _Image search_).
* Number of tries: Số lần click thử tối đa mà kịch bản được phép thực hiện (Ví dụ điền `10`, hệ thống sẽ click tối đa 10 lần rồi tự động dừng luồng để chuyển sang hành động tiếp theo, tránh việc bị treo kịch bản vô hạn).
* Delay each clicks (s): Thời gian giãn cách giữa 2 lần click liên tiếp, tính bằng giây (Ví dụ điền `0.5` hoặc `1` giây để chuột không bị bấm quá nhanh khiến hệ thống hiểu nhầm là spam/DDoS).
* Stop condition: Điều kiện để hệ thống ra lệnh dừng click lập tức. Chuột sẽ nhấp liên tục cho đến khi điều kiện này được thỏa mãn HOẶC khi đã bấm đủ số lần quy định ở mục _Number of tries_.

#### Ví dụ thực tế: Click liên tục vào nút "Nhận mã OTP" cho đến khi bảng nhập mã xuất hiện

Khi bạn thực hiện đăng ký tài khoản trên các website có hệ thống tải chậm, khi bấm vào nút "Gửi mã" (Send Code), hệ thống có thể bị nghẽn và không phản hồi ngay. Bạn cần chuột phải click liên tục cho đến khi một ô nhập mã OTP xuất hiện trên màn hình thì mới dừng lại.

* Cách cấu hình:
  * Click type: Chọn _Click dựa theo XPath_ ➔ Nhập XPath của nút gửi mã: `//button[@id="send-code"]`.
  * Number of tries: Điền `5` (thử tối đa 5 lần).
  * Delay each clicks: Điền `2` (mỗi lần click cách nhau 2 giây để chờ trang web xử lý).
  * Stop condition: Sử dụng hàm kiểm tra phần tử xuất hiện: `hasElement(//input[@id="otp-input"])`.

Logic vận hành: Hệ thống đưa chuột đến nút gửi mã và click lần 1. Sau 2 giây, hệ thống kiểm tra xem ô nhập mã OTP (`//input[@id="otp-input"]`) đã xuất hiện chưa. Nếu chưa có, hệ thống tiếp tục click lần 2, lần 3... Ngay khi click đến lần thứ 3, hệ thống phản hồi và ô nhập mã OTP hiện ra trên màn hình (Hàm `hasElement` trả về giá trị đúng), kịch bản sẽ lập tức dừng hành động click này lại và chuyển sang bước tiếp theo mà không cần phải bấm nốt 2 lần còn lại.

> 💡 Mẹo mở rộng: Bạn cũng có thể dùng điều kiện phủ định `!hasElement(XPATH)` để ra lệnh cho chuột click liên tục cho đến khi một banner quảng cáo hoặc một biểu tượng vòng tròn tải trang (loading) biến mất khỏi màn hình.

<figure><img src="../../.gitbook/assets/image (192).png" alt=""><figcaption></figcaption></figure>
