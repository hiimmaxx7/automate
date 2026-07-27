# Math execute

Math execute 是用于执行基本数学运算(如加 `+`、减 `-`、乘 `*`、除 `/`)或从现有变量进行复杂算术表达式运算的操作,然后将结果保存到输出变量中。

🎥 查看更多操作指南视频:[点击这里](https://youtu.be/nlEQsaxawt4)。

#### 配置参数:

* Expression(表达式):需要执行的数学运算内容。您可以将具体数字与现有变量结合使用(例如:`(5 + 3) * 2` 或 `$price * $quantity`)。
* Output variable:用于保存计算完成后结果的变量名称。

#### 实际示例 1:计算订单总金额(乘法和加法)

假设您正在制作自动购物或抓取订单数据的脚本。您有一个产品数量变量 `$quantity = 3`,单价变量 `$price = 150000`,以及固定运费 `30000`。

* 配置方式:
  * Expression:填写表达式 `($price * $quantity) + 30000`
  * Output variable:填写保存结果的变量名称 `$totalAmount`。
* 结果:系统将计算出数值 `480000` 并赋值给变量 `$totalAmount`。

<figure><img src="../../.gitbook/assets/image (145).png" alt=""><figcaption></figcaption></figure>