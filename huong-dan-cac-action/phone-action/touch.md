---
description: Chạm (tap) vào một phần tử theo XPath hoặc theo toạ độ trên màn hình.
---

# Touch

Touch là hành động chạm (tap) lên màn hình thiết bị điện thoại. Có thể xác định điểm chạm theo XPath của phần tử hoặc theo toạ độ (x,y).

#### Giải thích các tham số cấu hình:

* Touch type: Cách xác định điểm chạm:
  * `Touch by Xpath`: chạm vào phần tử theo XPath.
  * `Touch by coordinates`: chạm vào một điểm theo toạ độ.
* XPath: (khi chọn Touch by Xpath) XPath của phần tử cần chạm, ví dụ `//node[@resource-id="com.android.chrome:id/url_bar"]`. Xem cách lấy XPath tại [Hướng dẫn xác định XPath & toạ độ](huong-dan-xac-dinh-xpath-va-toa-do.md).
* Coordinates (x,y): (khi chọn Touch by coordinates) Toạ độ điểm chạm dạng `x,y`, ví dụ `500,700`.
* Touch mode: Kiểu chạm:
  * `Normal`: chạm thường một lần.
  * `Double`: chạm hai lần liên tiếp (double tap).
  * `Hold`: nhấn giữ.

<figure><img src="../../.gitbook/assets/touch-xp.png" alt=""><figcaption><p>Touch by Xpath</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/touch-xy.png" alt=""><figcaption><p>Touch by coordinates</p></figcaption></figure>
