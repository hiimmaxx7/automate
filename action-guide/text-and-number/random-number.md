# Random number

Random number 是一个用于生成一个位于设定的最小值到最大值范围内的随机整数的操作,然后将结果保存到一个输出变量中。

该操作通常用于生成模拟数据(年龄、想要添加的好友数量)、随机选择一行数据,或根据您自己的逻辑灵活创建随机等待时间。

🎥 观看更多指南视频:[点击这里](https://youtu.be/nlEQsaxawt4)。

#### 配置参数:

* Min:可获得的最小数值。
* Max:可获得的最大数值。
* Output variable:用于保存刚生成的随机数的变量名。

#### 实际示例:随机选择要互动的帖子数量

在养号社交媒体账号时,为避免每个账号都浏览完全相同数量的帖子而引起系统怀疑,您应该让每个账号与随机数量的帖子进行互动。

* 配置方式:调用 Random number 操作,将 Min 设置为 `3`,Max 设置为 `7`,并将 _Output variable_ 字段设置为 `$randomPosts`。
* 结果:当流程运行到此步骤时,系统会在 3 到 7 之间随机抽取一个数字(例如:Profile 1 抽到数字 `4`,Profile 2 抽到数字 `6`)。您只需将此 `$randomPosts` 变量传入后面 For 循环的 End 字段中,每个账号就会根据自己抽到的次数自动浏览和互动相应的数量。

<figure><img src="../../.gitbook/assets/tn-03.png" alt=""><figcaption></figcaption></figure>