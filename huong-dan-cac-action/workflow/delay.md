---
description: Dừng chờ trong 1 khoảng thời gian.
---

# Delay

Delay là hành động dùng để tạm dừng kịch bản trong một khoảng thời gian trước khi thực hiện hành động tiếp theo. Trong cấu hình GPM Automate, thời gian được tính bằng mili giây (ms), trong đó 1s = 1000 ms.

Hành động này hỗ trợ cơ chế dừng ngẫu nhiên (Random Delay) giúp mô phỏng chính xác thao tác như người dùng thật, giảm thiểu tối đa tần suất bị hệ thống/nền tảng quét hành vi tự động (Anti-bot).

#### Tham số cấu hình:

* Min (ms): Thời gian dừng chờ tối thiểu.
* Max (ms): Thời gian dừng chờ tối đa.

#### Ví dụ thực tế:

Nếu bạn cấu hình Min là `2000` và Max là `4000`. Khi kịch bản chạy đến hành động này, hệ thống sẽ tự động tính toán và tạm dừng luồng trong một khoảng thời gian ngẫu nhiên nằm giữa từ 2000ms đến 4000ms (ví dụ: lượt này dừng `2843 ms`, lượt sau có thể dừng `3120 ms`).

