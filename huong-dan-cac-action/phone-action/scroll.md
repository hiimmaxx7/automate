---
description: Cuộn/vuốt màn hình thiết bị theo hướng hoặc theo toạ độ điểm đầu - điểm cuối.
---

# Scroll

Scroll là hành động cuộn/vuốt màn hình thiết bị điện thoại. Hỗ trợ hai kiểu: cuộn theo hướng cố định, hoặc vuốt từ một điểm đến một điểm khác theo toạ độ.

#### Giải thích các tham số cấu hình:

* Scroll type: Kiểu cuộn:
  * `By direction`: cuộn theo hướng cố định.
  * `By points`: vuốt từ điểm đầu đến điểm cuối theo toạ độ.
* Direction: (khi chọn By direction) Hướng cuộn — `Up`, `Down`, `Left`, `Right`.
* Start position (x,y): (khi chọn By points) Toạ độ điểm bắt đầu vuốt, ví dụ `500,1500`.
* End position (x,y): (khi chọn By points) Toạ độ điểm kết thúc vuốt, ví dụ `500,500`.
* Duration (ms): (khi chọn By points) Thời gian thực hiện cú vuốt tính bằng mili-giây; số càng lớn thì vuốt càng chậm.

<figure><img src="../../.gitbook/assets/px-02.png" alt=""><figcaption><p>Scroll by direction</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/px-02b.png" alt=""><figcaption><p>Scroll by points</p></figcaption></figure>
