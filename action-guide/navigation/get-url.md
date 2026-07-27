# Get URL

Get URL 是用于提取当前浏览器打开的网页完整地址(URL),并保存到一个变量中的操作。

🎥 观看更多教程视频:[点击这里](https://youtu.be/a9qNt96X1SM)。

#### 配置参数:

* Output variable:您自行设置的变量名称,用于保存成功提取后的网站地址字符串。

#### 实际案例:检查登录成功后的跳转状态

当您制作自动登录(Login)某个平台(例如 Pinterest 或 Facebook)的脚本时。在填写信息并点击登录按钮后,您想要检查账号是否成功进入主页,还是被跳转到错误提示页面/要求身份验证(Checkpoint)页面:

* 配置方法:
  * 点击登录按钮后等待几秒,调用 Get URL 操作。
  * Output variable:将变量命名为 `currentLink`。
  * 结合在后面插入 If 条件块,以检查 `$currentLink` 变量的数据:
    * _情况 1_:如果 `$currentLink` 变量中包含 `checkpoint` 或 `login_error` 字词 ➔ 脚本识别为账号出错并停止流程。
    * _情况 2_:如果 `$currentLink` 变量中包含 `home` 字词或数据已跳转到个人主页 ➔ 脚本识别为登录成功并继续运行养号相关任务。