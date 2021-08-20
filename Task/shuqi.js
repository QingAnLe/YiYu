/* ziye 
github地址 https://github.com/ziye888
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
转载请备注个名字，谢谢

⚠️书旗小说     手机号账号数据共通， 部分任务可叠加，此脚本包含2个app的所有任务（无阅读挑战赛）共0.8-1元
书旗普通版 支持多平台账号以及手机号登录     
点击  https://apps.apple.com/cn/app/id733689509 下载APP 或者Appstore 搜索书旗小说 

书旗极速版 支持手机号登录     
点击  https://apps.apple.com/cn/app/id1540723488 下载APP 或者Appstore 搜索书旗小说极速版

3.8  制作
3.12 完成
3.12-2 增加循环获取ck开关，默认关闭，调整阅读次数为20次
3.12-3 修复ck获取问题，修复ck方式一，可boxjs复制数据黏贴
3.12 - 4 修复ck获取问题
3.12-5 去除无用任务，精简ck至26条
3.14 修复极速版书城报错
3.15 修复收益获取ck显示
3.18 独立COOKIE增加boxjs复制会话模式
3.193.19 修复ac报错
4.6.11 单刷时长请设置SC为1，增加通知以及推送控制
4.6.19 精确时长ck判定，10秒以上才获取
5.5.21 修复循环获取ck，优化重写
5.6.21 优化循环获取ck，增加账号数显示且自动修改
5.7.16 适配新版本收益ck获取，新版本收益只需要body即可
5.8.22 增加提现提醒，默认关闭，自行打开
5.9.15 增加适配新版本时长

⚠️ 时间设置    7 0-23 * * *    每小时 1次就行 
⚠️一共2个软件  普通版15条 极速版11条  共      26个ck  👉 26条 Secrets 
有多少ck就运行多少任务   shuqiuserurlVal 用户名url 👉 这个ck必须获取
多账号换行

⚠️极速版视频 极速版阅读 极速版签到视频 极速版书城  大概率出现网络错误或者奖励下发失败，无解

第一步 添加 对应主机名

第二步 ⚠️添加header重写 获取header 

    shuqiuserurlVal👉 用户名url    点击福利
    shuqisprwurlVal👉  视频任务url  点击福利
    shuqicjyurlVal👉  获取抽奖页url  点击福利转转转
   
   
    shuqijsqdspyurlVal👉极速版签到视频页url  极速版点击福利 赚金币 每日签到  
    shuqijssprwurlVal👉  极速版视频任务url   极速版点击福利 赚金币
    shuqijsbookurlVal👉 极速版书城url        极速版点击福利 赚金币 浏览书城
    shuqijsbookbodyVal👉 极速版书城bodyy     极速版点击福利 赚金币 浏览书城
       
       
第三步 ⚠️注释header重写   添加body重写  获取body
  
    shuqisyurlVal👉  收益url       点击我的
    shuqisybodyVal👉 收益body      点击我的
    shuqispbodyVal👉 视频body      点击福利 看视频
    shuqiscbodyVal👉 时长body      点进一本书， 看个30秒，时长有效期一天，提现再获取
    shuqiydbodyVal👉 阅读body      点进一本书，右上角转一圈，如没有圈圈，建议放弃，或者用4.31版本
    shuqiqdbodyVal👉 签到body      点击福利 每日签到并成功签到
    shuqirwbodyVal👉 任务body      点击福利 
    shuqifxbodyVal👉  分享body     点击福利 邀请书友，分享或者假分享
    shuqijlbodyVal👉  获取奖励body   点击福利
    shuqisqjlbodyVal👉 收取奖励body  点击福利 收取奖励
    shuqicjcsbodyVal👉抽奖次数body   点击福利转转转 点击看视频抽奖
    shuqicjbodyVal👉  获取抽奖body   点击福利转转转 点击看视频抽奖
    
   
    shuqijsspbodyVal👉 极速版视频body   极速版点击福利 赚金币 看视频
    shuqijsydurlVal👉  极速版阅读url    极速版点进一本书 右上角转一圈，如没有圈圈，建议放弃，
    shuqijsydbodyVal👉 极速版阅读body   极速版点进一本书 右上角转一圈，如没有圈圈，建议放弃，
    shuqijsqdbodyVal👉 极速版签到body    极速版点击福利 赚金币 每日签到  成功签到
    shuqijsqdspbodyVal👉极速版签到视频body    极速版点击福利 赚金币 每日签到 成功第二次签到 
    shuqijsrwbodyVal👉 极速版任务body        极速版点击福利 赚金币
    shuqijsfxbodyVal👉  极速版分享body       极速版点击福利 赚金币 邀请书友，分享或者假分享
    
   
	
⚠️主机名以及header重写👇     header重写 和 body重写不可同时启用

############## 圈x 
hostname =ocean.shuqireader.com,activity-center-web.shuqireader.com,
#书旗小说获取header
#用户名  视频任务 抽奖页面 极速版签到视频页   极速版视频任务 极速版书城
https:\/\/.+\.shuqireader\.com\/* url script-request-header https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

hostname =*.shuqireader.com,
#书旗小说获取body
#阅读 签到  分享 奖励 收取奖励  抽奖次数 抽奖 视频 收益 任务 时长 极速版任务 极速版视频 极速版签到视频 极速版阅读 极速版签到 极速版分享 极速版书城
https:\/\/.+\.shuqireader\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

############## loon
hostname =ocean.shuqireader.com,activity-center-web.shuqireader.com,
#书旗小说获取header
#用户名  视频任务 抽奖页面 极速版签到视频页   极速版视频任务 极速版书城
http-request https:\/\/.+\.shuqireader\.com\/* url script-request-header script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js, requires-header=true, tag=书旗小说获取header

hostname =*.shuqireader.com,
#书旗小说获取body
#阅读 签到  分享 奖励 收取奖励  抽奖次数 抽奖 视频 收益 任务 时长 极速版任务 极速版视频 极速版签到视频 极速版阅读 极速版签到 极速版分享 极速版书城
http-request https:\/\/.+\.shuqireader\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js,requires-body=1,max-size=0, tag=书旗小说获取body

############## surge
hostname =ocean.shuqireader.com,activity-center-web.shuqireader.com,
#书旗小说获取header
#用户名  视频任务 抽奖页面 极速版签到视频页   极速版视频任务 极速版书城
书旗小说获取header = type=https:\/\/.+\.shuqireader\.com\/*,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

hostname =*.shuqireader.com,
#书旗小说获取body
#阅读 签到  分享 奖励 收取奖励  抽奖次数 抽奖 视频 收益 任务 时长 极速版任务 极速版视频 极速版签到视频 极速版阅读 极速版签到 极速版分享 极速版书城
书旗小说获取header = type=https:\/\/.+\.shuqireader\.com\/*,requires-body=1,max-size=0,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

*/
GXRZ = '5.9.15 增加适配新版本时长'
const $ = Env("书旗小说");
$.idx = ($.idx = ($.getval('shuqiSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE ={"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"5","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"5","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"15","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2036707005&sqSv=1.0&timestamp=1629122866&sign=ef005ee5d1ef017678bfd2f09f367397&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YRpliNYmfhkDAE%2FUh4dE%2BTWw&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=2036707005&sn=60D378A460D3674D3825E609C9F6F5EA044F2C29&umidtoken=YRpliNYmfhkDAE%2FUh4dE%2BTWw&msv=8.0.0&brand=Apple&imei=672937C65DC0064FB0AB41D74DAE105712DA80E4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTYzODQ0MiwidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMDA0Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.RvWWdGOMQFBdDph48tocvu1GJoWuLDFOCZSg4O2xhm4xGGqqbYOUlj9zLQaOPT54VpTqaYcHbGghVvx-whnc1A&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11Pro&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=672937C65DC0064FB0AB41D74DAE105712DA80E4&isNewUser=-1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=951dc8f8d7fcf08fd2da297739493f5f&sn=60D378A460D3674D3825E609C9F6F5EA044F2C29&soft_id=21&timestamp=1629120775&user_id=2036707005&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYRpliNYmfhkDAE/Uh4dE%2BTWw%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTYzOTE3NywidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMDc3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AH8MxpCCxT0wXP0lhKGQPhI9PxCDsrSwyEn4V_w-p3gE_ByqcA5r7zF4UZLcymtsUXblrop9q2fY12apXuQ-kg%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpliNYmfhkDAE/Uh4dE%2BTWw%26utype%3Dvip%26sdk%3D13.2.2&deliveryId=807&key=sq_app_ad&miniWua=HHnB_ASnXsRy%2Bv70JGCl3cmchQEWF5FoXBH08QtbIRJhxUOU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=366CC3013EC029A2C8B1010F294A6767&timestamp=1629121136&userId=2036707005&user_id=2036707005&wua=HIVW_y8eilwrv1tvGj%2BeH0XoSCS9LKD8WKeRTCJdTscRSnrQnT56gmsyr9F%2Be3mZt6JkfgpU0Q1D5D/ZRmx2qkjYB6/qjmoFcVFWNWRLmNaQbLBuZ%2B3W52RelMd6bYJoOQ4%2BVHFB08euAqnRht8KeXIGsKTorqO0udptZuVs95iqmFl3XFMdhU7p5Kj9VsvpBqSYGLieEk5ymu9ruwekagdizqQ%3D%3D"},{"key":"shuqiscbody","val":"_public=idfa%253D31392375-22F8-487D-B4F9-512A6EE60927%2526ustatus%253D1%2526net_env%253D3g%2526umidtoken%253Dsh9L8QlLOredKDV7TwrE7oNmH0fqnXgP%2526placeid%253D111111%2526user_id%253D2036707005%2526sn%253DB64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5%2526msv%253D10.0.0%2526brand%253DApple%2526imei%253DAEBD80395A95AFB37EE677B45E281971AA220CD4%2526appVer%253D1.0.5.0%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw%2526statusBarHeight%253D44.000000%2526platform%253D116%2526ver%253D210331%2526mod%253DiPhone11Pro%2526wh%253D1242x2688%2526utype%253Dvip%2526utdid%253DYRpmNchTn9kDAFN9ebqWrDvk%2526sdk%253D13.2.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1629122755%2C%22readObjType%22%3A1%2C%22attr%22%3A3%2C%22readObjId%22%3A%228373733%22%2C%22readChapterId%22%3A1437836%2C%22readingLen%22%3A59%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9676A62DE9CED1A1F8C9D8821A87F79C&timestamp=1629122814&user_id=2036707005"},{"key":"shuqiydbody","val":"_public=skinId%3D999%26idfa%3D1E21B36C-611A-4396-A244-445FE66353E9%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYRpliNYmfhkDAE/Uh4dE%2BTWw%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTY0MDM3MSwidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMTk3MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Gw7ZfAdyoK2x1AalSjD1fx3U35L8WU48wLfOMVNtxkaNanZNm_2pjibkGf2HUfbLl3P-7o1jIIL1Rq8v4p8zlg%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpliNYmfhkDAE/Uh4dE%2BTWw%26utype%3Dvip%26sdk%3D14.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_vai%2BmYBvr41eMhioifWNAGFwDb36dl6MgirGfrtvD84%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=A9A3858BE813F0A8167540FB6CF41DA3&timestamp=1629122673&userId=2036707005&wua=HIVW_zsweVwWMfvTm38hDcZxB8IGxiQ80cU9mMKq6Cx4%2BiTn6wvbGZKX9uCP/mzF4GgjmfKWbEF/9Yhz10dHhhYCvEnzXlrITb5ieOKWIu0J8QtjN1ISZQr%2B6JGI2GYa2CnSU2fw4tNzmCAozsG%2BcsLxlQ5PxGwc8qUhxd/6kyl5RURTTcmglMDnZD4/OU/HhRhEHv8BkjVFHiCua6HHTHbGNvX7Dk8HiC1K%2Bgnk87Vi88H8%3D"},{"key":"shuqiqdbody","val":"clientTimestamp=1629120796&position=501&signInType=1&wua=HIVW_EKICEcqLgL1EMK%2FznVSkRW2L8m9ZmvX%2BF5sFnsXqZ%2FLHvf8WZC9pbrcOF62CqzJUs%2BHq4csFzXcdcTZfIUaNtgzZxUzzb0XFV5XczoM0KmgZr%2FP8M%2BQdZdnzYi1tDye5wCDRH9RBtcxFu%2FbT8ldWd08lb9dwPOUaHa0ZzY9NwR3hd6HcYpDnV3%2BxRpxnZn%2FaEriRZ0TPdlg7OXdiv4VYzMwYthke6v2n15OBbE9LTGI%3D&ua=&miniWua=HHnB_GbzB6XFj%2Bp0FgvlvBmFReIXVVitec0UZKe8dYDae1rY%3D&userId=2036707005&umidtoken=YRpliNYmfhkDAE%252FUh4dE%252BTWw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629120796&sqSv=1.0&sign=e1196f1a7d905179203c3a6e273c68ac&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.2.2%26utdid%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26umidtoken%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTYzOTE3NywidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMDc3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AH8MxpCCxT0wXP0lhKGQPhI9PxCDsrSwyEn4V_w-p3gE_ByqcA5r7zF4UZLcymtsUXblrop9q2fY12apXuQ-kg%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqirwbody","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619076223&sign=7e43399036edb749623a85f5c2331041&serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YIEPc%2F99z64DAIlpsFFVGebB&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2050988098&sn=7639A3E314CF06FCA6D98CC79D6B555157293A1F&umidtoken=YIEPc%2F99z64DAIlpsFFVGebB&msv=8.0.0&brand=Apple&imei=E6095B9B70A382D39929338988B0CB6738C667DE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiRTYwOTVCOUI3MEEzODJEMzk5MjkzMzg5ODhCMENCNjczOEM2NjdERSIsInNuIjoiNzYzOUEzRTMxNENGMDZGQ0E2RDk4Q0M3OUQ2QjU1NTE1NzI5M0ExRiIsImV4cCI6MTYxOTU5NDYyMSwidXNlcklkIjoiMjA1MDk4ODA5OCIsImlhdCI6MTYxOTA3NjIyMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.aFrNlQ78_dTR8ouDxlD7VckRUyd828aNpVky69ekW7JYj9Wf09k8qtFpOcwU4MhcX2-MCJd807BdH1IzX1FLCA&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=626&user_id=2036707005&requestSrc=h5&userId=2036707005&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629122628&sqSv=1.0&sign=692663206c49caa90df3acf08339d6dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26umidtoken%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTY0MDM3MSwidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMTk3MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Gw7ZfAdyoK2x1AalSjD1fx3U35L8WU48wLfOMVNtxkaNanZNm_2pjibkGf2HUfbLl3P-7o1jIIL1Rq8v4p8zlg%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D1E21B36C-611A-4396-A244-445FE66353E9"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2036707005&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629122946&sqSv=1.0&sign=357d13917eed04a272bb0ff4dd1f1a59&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26umidtoken%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTY0MDM3MSwidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMTk3MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Gw7ZfAdyoK2x1AalSjD1fx3U35L8WU48wLfOMVNtxkaNanZNm_2pjibkGf2HUfbLl3P-7o1jIIL1Rq8v4p8zlg%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D1E21B36C-611A-4396-A244-445FE66353E9"},{"key":"shuqisqjlbody","val":"src=&userId=2036707005&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629120937&sqSv=1.0&sign=903e8f89e2b25b63d70390d029d2b353&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.2.2%26utdid%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26umidtoken%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTYzOTE3NywidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMDc3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AH8MxpCCxT0wXP0lhKGQPhI9PxCDsrSwyEn4V_w-p3gE_ByqcA5r7zF4UZLcymtsUXblrop9q2fY12apXuQ-kg%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1629122631&userId=2036707005&activityId=311&sqSv=1.0&sign=bf2f7bf45e207ba847a732975bb53ed9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D14.3%26utdid%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26umidtoken%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTY0MDM3MSwidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMTk3MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Gw7ZfAdyoK2x1AalSjD1fx3U35L8WU48wLfOMVNtxkaNanZNm_2pjibkGf2HUfbLl3P-7o1jIIL1Rq8v4p8zlg%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D1E21B36C-611A-4396-A244-445FE66353E9"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYRpliNYmfhkDAE/Uh4dE%2BTWw%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTYzOTE3NywidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMDc3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AH8MxpCCxT0wXP0lhKGQPhI9PxCDsrSwyEn4V_w-p3gE_ByqcA5r7zF4UZLcymtsUXblrop9q2fY12apXuQ-kg%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpliNYmfhkDAE/Uh4dE%2BTWw%26utype%3Dvip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_c98W757F7VxlaEg0zFXnexlfhWPwrRCdkYmF1Sv/gQw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FEDC89EA56C18121952882E3B813A580&timestamp=1629121149&userId=2036707005&user_id=2036707005&wua=HIVW_7qCTDdrUQnVdP4fhjUoalE2urvEx2mkvfmtqFHrITdyNVKMdTyA69C9R98mDRzqV/kM90%2Bbw5ZVLzvwbTbnl8JI%2BJ7UMw39rL%2BzdzeRw6qqzZB5pz5zJAvG4xC6GI7/5Fu6CTPql/2DCJAtr053w6eiHq/%2BbC9MG5aOU/VHN3h37Gec55ZIj9vnJMfyLbgQBujhA0aPOp6PM2mZQcRnCc8yJjmg2q1jz8mLuwNAI7b8%3D"},{"key":"shuqicjbody","val":"wua=HIVW_3f82TW9VtqkRUnLFR38IydY2dt1qygAjqMj4g%2Bbe4Bi1G6zi2VzWZHnvj12m88miJayy2p2I%2BigYM%2BqiKr6%2BI4T3zHgW7yS8k2s%2B7ioHeZ7S%2Fkv87Up%2FxkXDYf2FrOhBvTa6%2FOi4oFDhH%2BeM7bE88SdlpJ0%2BsKjr4X0VOkVfIsWiXkNrblYDpLp%2FncuXRypJn5kc7%2FhHWzlztHGhTlkZ0LhUl4r0cZje34dwWk4YRVs%3D&ua=&userId=2036707005&umidtoken=YRpliNYmfhkDAE%252FUh4dE%252BTWw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629121153&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=499054b5add0996b3f713856c294bcc2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2036707005%26sn%3D60D378A460D3674D3825E609C9F6F5EA044F2C29%26umidtoken%3DYRpliNYmfhkDAE%25252FUh4dE%25252BTWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D672937C65DC0064FB0AB41D74DAE105712DA80E4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiNjcyOTM3QzY1REMwMDY0RkIwQUI0MUQ3NERBRTEwNTcxMkRBODBFNCIsInNuIjoiNjBEMzc4QTQ2MEQzNjc0RDM4MjVFNjA5QzlGNkY1RUEwNDRGMkMyOSIsImV4cCI6MTYyOTYzOTE3NywidXNlcklkIjoiMjAzNjcwNzAwNSIsImlhdCI6MTYyOTEyMDc3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AH8MxpCCxT0wXP0lhKGQPhI9PxCDsrSwyEn4V_w-p3gE_ByqcA5r7zF4UZLcymtsUXblrop9q2fY12apXuQ-kg%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqijsspbody","val":"_public=idfa%3D31392375-22F8-487D-B4F9-512A6EE60927%26ustatus%3D1%26net_env%3D3g%26umidtoken%3Dsh9L8QlLOredKDV7TwrE7oNmH0fqnXgP%26placeid%3D111111%26user_id%3D2036707005%26sn%3DB64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5%26msv%3D10.0.0%26brand%3DApple%26imei%3DAEBD80395A95AFB37EE677B45E281971AA220CD4%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11Pro%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmNchTn9kDAFN9ebqWrDvk%26sdk%3D13.2.2&deliveryId=897&key=sq_app_ad&miniWua=HHnB_0hYmpfVc4K2xnxIuEnitLwXe/dmr%2Bx/tgM4XBSe/vFpYAqjMlDacuRSAYHCnXKmZ6HLc0xtxz%2BVcJCIAiEzTDzyjwRXr0RVbV9taaNtOinvMTZrS5wXDwZF/BKsk/iYM&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=0AED0AFA526DC551CA5DF6C6EC1E7CC3&timestamp=1629122716&userId=2036707005&user_id=2036707005&wua=ktgi_nDna7v%2BuKMLfPMaoAmDlnyUaWd1m1w83qpYLnaMEVaqfKp4b%2B38iTkyUpJtU1jL6RABz%2BoAqtg8xl4JDtDZoRDrAqat5AJzLlz15FVu/mCdq2gTqi6M0uLMVCLCe/csgK5SPJINZKk03E0qVHVlu5Ni7J0cQ2FSC6NwBtDkDDk/2V0g2oK4k6bQJy9MHyRwgKIz2bjaO4SRAMjCvYJF0MpkTeMCjUHbl5YeMN7ngguVdMZPlAKsQ21ijWLFDz1eJX7rxTfBClwtfOx/GnRAIHM4Kp7Z9iWE%2BDbOvSfrVoNLGHmulKQP79RC3c/TqIlrSaH6KYta7CambWrnKp42IM1Mg%2BMWndY6L7%2BiXZ%2BRPOeSSaG%2Bovkb%2BogHaNEsVuwDH"},{"key":"shuqijsydurl","val":"https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=13.2.2&ustatus=1&umidtoken=sh9L8QlLOredKDV7TwrE7oNmH0fqnXgP&net_env=3g&placeid=111111&user_id=2036707005&sn=B64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5&msv=10.0.0&brand=Apple&imei=AEBD80395A95AFB37EE677B45E281971AA220CD4&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone11Pro&wh=1242x2688&utype=vip&utdid=YRpmNchTn9kDAFN9ebqWrDvk&idfa=31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqijsydbody","val":"actId=355&miniWua=HHnB_unIbIJtBUhCpd7D07lvIr/R61Ogi2DfBw/1nhTDx9tMyhwbvhQS8clEafHtwj%2BjWzcuUBjX/bgfRyz59%2BfuVGIhRjZO%2BkW93mR9zTDE2MwB2Ze/ri0SLwkD5OJpcW63S&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629122785&userId=2036707005&wua=ktgi_QmYti59m7j%2BouJOon0cqh/IwF9kSc3m3BXxTfLRRK99OqiWitvnY5eOX/sFA2xPrpaIy4oCaWdHTAw%2B51l1S5xtDJUgV%2BVkdla%2BwFOiVxlJd8R6q2M3LKNXtNgqbq9VxjsLxr9fyVjb2MYL9S7D5R5FTNvbYxg35Mhukqutb1hku%2BgowvgPVVaKVWzSM4t4vPntobZ1dOWR2lqC3zCNjJmTScma664M8b%2Bwh5dZSdod7GmiRpaJPqaB2D4unqI1QFJIy4nRcg5Y0GwP%2BmtEAZelc6NAlF3a833uuV0ffvpD%2Brd/3Q9wcurVC81EiT5xm7JsY1hxVJUlA4srlOm%2BZFqFSIZzBU%2BGc3EUW%2BSHiKnnW9ij%2BoARNcrXGC94C3YCG"},{"key":"shuqijsqdbody","val":"clientTimestamp=1629122702&position=601&signInType=1&wua=ktgi_HOlE8xg%2BwdOanwFzEAqMH5c5HMm45sO1LzMky18pY1pzUvPrGRZR%2FJnm2Wj1rWaLDIMEz56L%2FeOeyXEvwkkKza0sxBTGWYl2cZzGiLU8qKPQeBZnQN9kyjyC9gJxZjtU3gizmeIbDn%2F8DygYtY60vKgIoTYbJSaw7mAVNHEy3t4MWbIagTBpCbMFhb%2F%2FcrabsJHGMxk0UkzHdDvSJmN2k6uMOj8%2FhvEDBy7IGHUx3ZH4%2FYWckRdb8flFfwNCUJgvCHvAvkf28StnOU67gkT%2BU5CvhnsoRd2AeyJf6J151J8QFri3alMH6BjfVEcdwMOZhq26oYNF0qe19xZUJeKlTdNDEgz4zjprZKJ9xjqW3HY%3D&ua=&miniWua=HHnB_FLnigdsMqAX%2Foh8L3%2FJHhOGDGHevNhC8kV1ElxTToxpO29J4%2BYivL4Vb2fli31nYxKNutaL%2FFYNttrajiwEbn%2BvNOQMdZNl2ehYwcJsqNgTNA3Txo8tlePJaUXWxqQ3c&userId=2036707005&umidtoken=sh9L8QlLOredKDV7TwrE7oNmH0fqnXgP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629122702&sqSv=1.0&sign=66f18a9e9a3f966f4f81b86ccdfc9b2b&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2.2%26ustatus%3D1%26umidtoken%3Dsh9L8QlLOredKDV7TwrE7oNmH0fqnXgP%26net_env%3D3g%26placeid%3D111111%26user_id%3D2036707005%26sn%3DB64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5%26msv%3D10.0.0%26brand%3DApple%26imei%3DAEBD80395A95AFB37EE677B45E281971AA220CD4%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11Pro%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmNchTn9kDAFN9ebqWrDvk%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqijsqdspyurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=717&user_id=2036707005&requestSrc=h5&userId=2036707005&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629122878&sqSv=1.0&sign=53b5baac3e01a314c76b637342b576bc&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2.2%26ustatus%3D1%26umidtoken%3Dsh9L8QlLOredKDV7TwrE7oNmH0fqnXgP%26net_env%3D3g%26placeid%3D111111%26user_id%3D2036707005%26sn%3DB64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5%26msv%3D10.0.0%26brand%3DApple%26imei%3DAEBD80395A95AFB37EE677B45E281971AA220CD4%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11Pro%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmNchTn9kDAFN9ebqWrDvk%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqijsqdspbody","val":"_public=idfa%3D31392375-22F8-487D-B4F9-512A6EE60927%26ustatus%3D1%26net_env%3D3g%26umidtoken%3Dsh9L8QlLOredKDV7TwrE7oNmH0fqnXgP%26placeid%3D111111%26user_id%3D2036707005%26sn%3DB64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5%26msv%3D10.0.0%26brand%3DApple%26imei%3DAEBD80395A95AFB37EE677B45E281971AA220CD4%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11Pro%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmNchTn9kDAFN9ebqWrDvk%26sdk%3D13.2.2&deliveryId=980&key=sq_app_ad&miniWua=HHnB_a60YwtO3YEwnM78RA3EXALQ2rOnjxTcEhrN4HIZs429UflypMIyGYs58oHSN9e1N2JMV%2BsHm7SVnQnsQrfDVklwQ8DdFmvsE8%2BaG93vzaX45cPLB1aWH0bL/LPrk5CPM&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=79DCDD7B5EDF1FE3C6D2155AC6E33294&timestamp=1629123599&userId=2036707005&user_id=2036707005&wua=ktgi_oGzY%2B0XKmMv%2BdOO52RFovTCOs8sHxh%2ByIRlGhetMvh/rJrCeIn0WV%2BQOfTeitVxFsX%2BeDXY3zGtm2FOur9pnEY22q/F2sTvzWJQl/SFzU/DJDqf3n6zpaKheyqCOzWD%2BZ786JAkJS8WaVBCMv07hwEeJTF9oEHDOr4CiZPZQsivrwo/OATgAZA2AUeQ9havj209H9Krubu4DlkEiFjrKjzYCj/hfpe/184VLfFk3nIIH4B2SlaorefxupWMVzGx8hdVumVGypxoScnaRvafh%2Bt56A%2BP7gC84RlMlAEcwWfMVbU6BwdA/tJP7Av6K%2Bq%2Bjv0S4vkJS4Ov1QsTH31/g2dqu0CRywEn2ZTXX9oaX13Agz4JBs8Lnc4eF/Y8boY6D"},{"key":"shuqijsrwbody","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619114308&sign=782d95885713b3ff20b109fcba82af92&from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=13.2.2&ustatus=1&umidtoken=%2BBZLeYpLOqIT4zV4%2Bhn%2FiJXqilQxlVPQ&net_env=wifi&placeid=111111&user_id=2050988098&sn=5046D99BE860239DF7A630BB10ED31512C69610C&msv=10.0.0&brand=Apple&imei=B72D92743E7D5DAD3F6934B749B0A9DD78C05484&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9CNzJEOTI3NDNFN0Q1REFEM0Y2OTM0Qjc0OUIwQTlERDc4QzA1NDg0Iiwic24iOiJmYXN0XzUwNDZEOTlCRTg2MDIzOURGN0E2MzBCQjEwRUQzMTUxMkM2OTYxMEMiLCJleHAiOjE2MTk2Mjk1MDMsInVzZXJJZCI6IjIwNTA5ODgwOTgiLCJpYXQiOjE2MTkxMTExMDMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.1AJky1zuDISic7KXWdrAM88o-6eAfJXimvhIVa93GO4RY5LR6uTmhMxZSdsCn2nSF4QrHO_iqz2GRxMi1rBWng&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhone6splus&wh=1242x2688&utype=vip&utdid=YIGsoJqQgOsDAPHj6tXER9jk&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqijsfxbody","val":"actTaskId=327&wua=ktgi_7%2Fl8P4BtrPzjZP6miLXtCSm%2FtaWrBfJ3Z5YRpV%2Bx1JPxVfRWMF5fKbzl7rVw3EjYW9z3sigyxXjSaflqfmKl6JcU6KvUVGLuQzt28NlRgZXaH844HG0DAzm5vylwS3IoZMFEa1YFktTE7fLeMH88iGBIw901eCdMnpt%2Fx0GDUwqd3DgfZWVXEg2zcZLetYxoMbMSYKHOF6gEAZe%2BRibw10zrZdQjemghxjSPc6tvISU7J4vzMDGlb2SZxGekOGYTvR5PfSqJtLkug1E4Ofi1SqHF4jyO64j56qxSsFZEsUMrjJ9BPktcKgGQv7dqFJNsYhY4OeSFb4I%2BjsLjStI35PVaoIeHDR%2FW%2FEkkNIsSqyuwZPkAoDTF%2BxJ%2FbixZqEOy&ua=&miniWua=HHnB_ei5oWxMAph8plSxOt2W689LM8jEUUQr3TA5%2Bka23rGqi629Yh%2FysK8gOvwSSoz2691LFY1emuQG%2FfPz3XD8XYsBnTYyQlJbU%2B8yzo1O0GWl7qN2hEfDvKc%2FhquKGikdK&userId=2036707005&umidtoken=sh9L8QlLOredKDV7TwrE7oNmH0fqnXgP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629122831&sqSv=1.0&sign=68085ef3f7dba60802d4f1174dc6986e&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2.2%26ustatus%3D1%26umidtoken%3Dsh9L8QlLOredKDV7TwrE7oNmH0fqnXgP%26net_env%3D3g%26placeid%3D111111%26user_id%3D2036707005%26sn%3DB64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5%26msv%3D10.0.0%26brand%3DApple%26imei%3DAEBD80395A95AFB37EE677B45E281971AA220CD4%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11Pro%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmNchTn9kDAFN9ebqWrDvk%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=719&user_id=2036707005&requestSrc=h5&userId=2036707005&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629122871&sqSv=1.0&sign=85023577d29ed471a4b8b58e470c00d4&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2.2%26ustatus%3D1%26umidtoken%3Dsh9L8QlLOredKDV7TwrE7oNmH0fqnXgP%26net_env%3D3g%26placeid%3D111111%26user_id%3D2036707005%26sn%3DB64AC1A01EB31AF670DDB06841CBE0FEA4FEC9D5%26msv%3D10.0.0%26brand%3DApple%26imei%3DAEBD80395A95AFB37EE677B45E281971AA220CD4%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM2NzA3MDA1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BRUJEODAzOTVBOTVBRkIzN0VFNjc3QjQ1RTI4MTk3MUFBMjIwQ0Q0Iiwic24iOiJmYXN0X0I2NEFDMUEwMUVCMzFBRjY3MEREQjA2ODQxQ0JFMEZFQTRGRUM5RDUiLCJleHAiOjE2Mjk2Mzg0NzYsInVzZXJJZCI6IjIwMzY3MDcwMDUiLCJpYXQiOjE2MjkxMjAwNzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.jyWfyjbK7beGsBrJ4s7NmxDqKI5AX4kgF8TKImCG5STGTZhlDH_FKTBK4o-VEohsbZ8cit-Ue0qmm9yU4RWzJw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11Pro%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmNchTn9kDAFN9ebqWrDvk%26idfa%3D31392375-22F8-487D-B4F9-512A6EE60927"},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=694635076&sqSv=1.0&timestamp=1629123927&sign=182bbb3ccf166c0446c38ad9ec60d832&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YRpmawEoW6IDADGl%2Fzfttuqi&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=694635076&sn=7B098F17C80496878B212EB3EFD137EDD08DDB03&umidtoken=YRpmawEoW6IDADGl%2Fzfttuqi&msv=8.0.0&brand=Apple&imei=38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDQ0LCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2NDQsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.axf1uMUHrEdowxZp0zKg-OKm0PmoHueKPHiwcYfCrpfejq7uSwpLpWIRZmo-5LJOVvLwKHLdvI-XZzP0pcaPxQ&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656&isNewUser=-1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=3f3dcd5dff33d04c84000906130fdf14&sn=7B098F17C80496878B212EB3EFD137EDD08DDB03&soft_id=21&timestamp=1629123680&user_id=694635076&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYRpmawEoW6IDADGl/zfttuqi%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDgyLCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.XMTUvrvi5LyyzPkukZfBtdFn7aluSb6FgBc1fXsZNi2EHmd2x007I-PqCq31YQ7RWF4ySxidhhgPveGp9ZBNlQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpmawEoW6IDADGl/zfttuqi%26utype%3Dvip%26sdk%3D13.1&deliveryId=807&key=sq_app_ad&miniWua=HHnB_PdNlD/1yHC0l9DvLpPS89vZYF5/CWBv0tJxFlRUn6Qk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=4D201B1D6727E84B26FFCAA57D5BE8BB&timestamp=1629123689&userId=694635076&user_id=694635076&wua=HIVW_2vcIBA0fnjSX6ouVBm97N9NCqTmHDWFrN66Oa/zM2kAJD/Fmm5o%2BeIZaPpgimtoJmniCWDjjQlHHx0vScwsPnbUW6y1YAc0j%2BjnxMeutta3wPGOOvJEPfda/dCkjkEq36FwW2sV9LC4T6B0py3/xbAQZb/eV9bXr2eYKoLWZ6TCBcdFVvTkO7GzOWX5yel%2BJMnk/PiMlu/nlJ8hp880pnWBzRhD3sdlhk/sCf9w3bA0%3D"},{"key":"shuqiscbody2","val":"_public=idfa%253D097A2D46-3583-49EA-92CC-2DBEACDBDF04%2526ustatus%253D1%2526net_env%253Dwifi%2526umidtoken%253D7hZL9WZLOiP6BzV7TxhkAVn1INBorhno%2526placeid%253D111111%2526user_id%253D694635076%2526sn%253D7427A6828F12CDB5A99072CF5E9767A5A3583180%2526msv%253D10.0.0%2526brand%253DApple%2526imei%253D02D6AD6455C25139A16746F623407200FE17BD2E%2526appVer%253D1.0.5.0%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg%2526statusBarHeight%253D44.000000%2526platform%253D116%2526ver%253D210331%2526mod%253DiPhone8%2526wh%253D1242x2688%2526utype%253Dvip%2526utdid%253DYRpmmk85oMUDAOlDliYApCCx%2526sdk%253D13.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1629123866%2C%22readObjType%22%3A1%2C%22attr%22%3A3%2C%22readObjId%22%3A%228328441%22%2C%22readChapterId%22%3A1392600%2C%22readingLen%22%3A39%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=B2259F7A2BD2A95EE63B554F24C38A27&timestamp=1629123905&user_id=694635076"},{"key":"shuqiydbody2","val":"_public=skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYRpmawEoW6IDADGl/zfttuqi%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDgyLCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.XMTUvrvi5LyyzPkukZfBtdFn7aluSb6FgBc1fXsZNi2EHmd2x007I-PqCq31YQ7RWF4ySxidhhgPveGp9ZBNlQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpmawEoW6IDADGl/zfttuqi%26utype%3Dvip%26sdk%3D13.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_v8Dyr42tCtZvdjzQCOfc0UKsseQBfR2kQcZJ724V908%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=00D47F9D39BD8A71F1BBBCFE308AA1BE&timestamp=1629123769&userId=694635076&wua=HIVW_URpHSetHlNWT03uCcl0YtPiZuXzSL/j1XHiJ54JU3KokiIs2N4P5njM4Fmc54bRORHtK2b%2BA1R8eF8PS6JUhY%2BMU5/vRwnOrcAdFACdU4ASEL7LPOIo9XV/LQzmHkAtpoZ8oHdYi2H6pPi3lluTcMMJIHaZ1H5GRN70Tz08fqx0xj4YB3jPKtmEbQhGTZVsXsZ9ysOF0WbWKJMyE6KAvyCrnU/ZuG/r2vdxM9ZBWDFg%3D"},{"key":"shuqiqdbody2","val":"clientTimestamp=1629123695&position=501&signInType=1&wua=HIVW_wZfRX9A0Eco9Ard%2BccStAdopJjjWmx%2BcItF12grN6BvzBm%2FL6wpYX32M2OT6RokJZRdaVzG0BDBKEBRGHwxVSDEeRPA6zpWRokhC6LiZ0ERMY5adtPR961pnBfA9eVHs2F30DSV60bbSrGuFICw0D5EidmIbpct1E9UL%2FzxlZoNPmSI4Kdl5SBaGYjhW0V66EQVR4iA%2F0tlR8ull5AkfcNEMwCl%2Fv0M%2Bkv5b9%2Fg%2F4iA%3D&ua=&miniWua=HHnB_eyKRkuG%2BoFjHiFiRoJCknIjGDcIEyyons%2FUUP5N6Oso%3D&userId=694635076&umidtoken=YRpmawEoW6IDADGl%252Fzfttuqi&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629123695&sqSv=1.0&sign=2ce830fd26c59396ed170461ad34f98a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26umidtoken%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDgyLCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.XMTUvrvi5LyyzPkukZfBtdFn7aluSb6FgBc1fXsZNi2EHmd2x007I-PqCq31YQ7RWF4ySxidhhgPveGp9ZBNlQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqirwbody2","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619076223&sign=7e43399036edb749623a85f5c2331041&serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YIEPc%2F99z64DAIlpsFFVGebB&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2050988098&sn=7639A3E314CF06FCA6D98CC79D6B555157293A1F&umidtoken=YIEPc%2F99z64DAIlpsFFVGebB&msv=8.0.0&brand=Apple&imei=E6095B9B70A382D39929338988B0CB6738C667DE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiRTYwOTVCOUI3MEEzODJEMzk5MjkzMzg5ODhCMENCNjczOEM2NjdERSIsInNuIjoiNzYzOUEzRTMxNENGMDZGQ0E2RDk4Q0M3OUQ2QjU1NTE1NzI5M0ExRiIsImV4cCI6MTYxOTU5NDYyMSwidXNlcklkIjoiMjA1MDk4ODA5OCIsImlhdCI6MTYxOTA3NjIyMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.aFrNlQ78_dTR8ouDxlD7VckRUyd828aNpVky69ekW7JYj9Wf09k8qtFpOcwU4MhcX2-MCJd807BdH1IzX1FLCA&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=626&user_id=694635076&requestSrc=h5&userId=694635076&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629123918&sqSv=1.0&sign=c1a0326edd1fa8208244d3317be15903&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26umidtoken%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMTk5LCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM3OTksIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.7DacX3MwyzPiGN_o0np8deSvILQ4sR9fJqV1_pW8YUTFF_NH9piRmMZiEZilA7DoNFCHkcT2KxssJpwKORYAug%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=694635076&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629123732&sqSv=1.0&sign=79400d6d5df13cd797979b5c2fd24523&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26umidtoken%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDgyLCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.XMTUvrvi5LyyzPkukZfBtdFn7aluSb6FgBc1fXsZNi2EHmd2x007I-PqCq31YQ7RWF4ySxidhhgPveGp9ZBNlQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqisqjlbody2","val":"src=&userId=694635076&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629123715&sqSv=1.0&sign=63d2cf93b8ee5d91caf91cc79c30afed&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26umidtoken%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDgyLCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.XMTUvrvi5LyyzPkukZfBtdFn7aluSb6FgBc1fXsZNi2EHmd2x007I-PqCq31YQ7RWF4ySxidhhgPveGp9ZBNlQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1629123804&userId=694635076&activityId=311&sqSv=1.0&sign=4a3de99ff9c3bdf0118dc9d1bf2eaa42&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26umidtoken%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMTk5LCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM3OTksIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.7DacX3MwyzPiGN_o0np8deSvILQ4sR9fJqV1_pW8YUTFF_NH9piRmMZiEZilA7DoNFCHkcT2KxssJpwKORYAug%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYRpmawEoW6IDADGl/zfttuqi%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDgyLCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.XMTUvrvi5LyyzPkukZfBtdFn7aluSb6FgBc1fXsZNi2EHmd2x007I-PqCq31YQ7RWF4ySxidhhgPveGp9ZBNlQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpmawEoW6IDADGl/zfttuqi%26utype%3Dvip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_muYAWq%2B6MlFDqidqNxrFcNugzExfOgTgmi1DnUWbxIM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BA0F166505C5324C453DEC8E2C274B2C&timestamp=1629123721&userId=694635076&user_id=694635076&wua=HIVW_0TJqX7J%2B7xZkUlpEiL4pqhpP3QGoAClZxn/5mxZ5k6NA4/35HeOe83UvYoVhep6XeXvLslsoOzNc%2B00w/VIWFYArMc6Vrlz85NKORXmYWXzXw4huxSf7WKlglVQPwmYUxl%2BgWAgD8e4C/q7eg2mKT4wA%2BS8afT3AAVDjo/oxujA2rppZfjZi/FwENg9%2B4BWki49/O3Rw%2BJCPQc9iA3HbK3fzLYMe2fzxd9RfMI2dUZ4%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_3RUStw1CG1ghWS4b%2BaVF%2BCz5uYPS9EcjdKFArUEtNe8WrtzddRdb%2FOGtvwqhrZ%2FPkiLMj%2F2VPDS0JxT%2BbmTHd2iCzvJaw55vhHt4nIxdqbJxxXuUV9BFptApvSs3d3gAYTtJs0ORlFVNewj2mgtmvA0knqlK9G4GAUQW1mV7Yix%2FqxkhX2CW6l3rSN0hR5NHx%2Bk7et79yNc5ig4Dy6i2QAQ1BiqIPs4LqW0KRp3qP70%3D&ua=&userId=694635076&umidtoken=YRpmawEoW6IDADGl%252Fzfttuqi&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629123727&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=01bfe580dde05647fd6527f06ee9a4d3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7B098F17C80496878B212EB3EFD137EDD08DDB03%26umidtoken%3DYRpmawEoW6IDADGl%25252Fzfttuqi%26msv%3D8.0.0%26brand%3DApple%26imei%3D38E6E88930C66E56A1DBFCBE5C2A38D21ACA6656%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiIzOEU2RTg4OTMwQzY2RTU2QTFEQkZDQkU1QzJBMzhEMjFBQ0E2NjU2Iiwic24iOiI3QjA5OEYxN0M4MDQ5Njg3OEIyMTJFQjNFRkQxMzdFREQwOEREQjAzIiwiZXhwIjoxNjI5NjQyMDgyLCJ1c2VySWQiOiI2OTQ2MzUwNzYiLCJpYXQiOjE2MjkxMjM2ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.XMTUvrvi5LyyzPkukZfBtdFn7aluSb6FgBc1fXsZNi2EHmd2x007I-PqCq31YQ7RWF4ySxidhhgPveGp9ZBNlQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqijsspbody2","val":"_public=idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3D7hZL9WZLOiP6BzV7TxhkAVn1INBorhno%26placeid%3D111111%26user_id%3D694635076%26sn%3D7427A6828F12CDB5A99072CF5E9767A5A3583180%26msv%3D10.0.0%26brand%3DApple%26imei%3D02D6AD6455C25139A16746F623407200FE17BD2E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmmk85oMUDAOlDliYApCCx%26sdk%3D13.1&deliveryId=897&key=sq_app_ad&miniWua=HHnB_/hzz/9u9SYwheOoAB9M2sjqyHtXY00yy00isqMJiiM4bp6OZ/XQPsSw2hy8/JEkxxRtzbDpRp%2B2VpK5hqaxxjUSp3OBQXzyRq5FTNK2A6YWPIpIPvUAWPovBbkzbtlf5&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A095298D45C3C3AE732AFFB5305BCA02&timestamp=1629123855&userId=694635076&user_id=694635076&wua=ktgi_yqxJu0PAi3C2OR3eQZFEU%2BZCzIbYh2UsbvYkjjBm9epiWh01ZHe/9XVwCMczTMmzAHxyQZ2wkgtkrc4zRTYF3kgIkphG/3iaqHp5vud0bTwmwE20mB4e2gv9t5xwRX4Dfc8tXhVGo8M3iXr0FFnpuwcLzEkaQ61kpDCg60JZIIhMrdEt6x6kD0v%2B3sNlajZ8ndyQhKAY8o/TVTJl287sP3LIEUtny5xTcIiYk8yQ2UtGMBW1UWfZyFzU6hku/9L8rX%2BuYNVk1GilmlEeznY6jJvKnfRPiDpMs8mIQNaHneGr4jB3p2GmbfvKHpC9wN58Vy1szAndlatcR3B%2BHxF3QavuFJvXPN24njgTNHvWNW3%2BF2HSQTFGLAOIm4GHmvNT"},{"key":"shuqijsydurl2","val":"https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=13.1&ustatus=1&umidtoken=7hZL9WZLOiP6BzV7TxhkAVn1INBorhno&net_env=wifi&placeid=111111&user_id=694635076&sn=7427A6828F12CDB5A99072CF5E9767A5A3583180&msv=10.0.0&brand=Apple&imei=02D6AD6455C25139A16746F623407200FE17BD2E&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone8&wh=1242x2688&utype=vip&utdid=YRpmmk85oMUDAOlDliYApCCx&idfa=097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqijsydbody2","val":"actId=355&miniWua=HHnB_aU9W3%2BBRC2yFeYI80zn2NwzYXriVhEZfB7II0ueQ/Gg5InLLlKXU0cZ5chEWBhZHYy0sPCHdLaUVNlkf59j6xb3Z%2B6lnHQsCRiryTyRYX7lli/2HU46/BJeUowwC0zoY&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629123895&userId=694635076&wua=ktgi_dOiKJv1HRsKzlYYp8bMorBKcjZvMB%2BiFeMYei/QipI1tqw0rq2blxN89veC49DzfdM5mp2CpRyTReZwQ2PLv/Dm5iQRRO3jz9VOF9Ns9puBFiZBBns1ILkDDFxicaG8YFI4IvjLM1hFQoNVlTJIpyvzb05COrhxq44AjRru33IrqUnsjQzISKeyS17jJktbzE68kRjRPigNh7VC5dtF0gwnpWwcimXz/M6ttplaxLYPZWV%2BkyvKmE/YNCGN1Rzf6Ux9eICPZxz6JAWGT8Z6UJElZ8tZlTizuiLdWLPYZCTenBiIiKa%2BsCOaufeTBIosNK28K8IIa6MSZcmKQj7yqSBxOkME6zLhT6ZBjvaMQOgI%3D"},{"key":"shuqijsqdbody2","val":"clientTimestamp=1629123823&position=601&signInType=1&wua=ktgi_ys4%2FJHFr65D%2FRr54H%2FbhxEA2iST388lrjtWMmjfGnPXp9TbtWQ%2FQCIp%2B1uNzJr4nRXg2lp3wv1YhXWninK4mYLWnKgeeieX60AMDkLsDB8MCcNrGzzVs1NurYKgCFzJs5pKZJv%2BDTSyVJTTUfmqlXHAGeliPxp6hGzmZTG1EcHX2oHP71cGXGW6QhMfHjGofPWxbA1QrIZmdJmsdmjXVzX1FZfSj3gDK3BGtfSxa8qWJH%2F8J3XX6CKvvrF8aOGJW%2Flc%2Fe1mJ0cVwYqmdO10%2FTMEx4QXFYqoCqaTtFWgNDcKZCjttA8tj1E5wDA8JQAYlVn1Hc%2BNAmXP%2BHlrcZOOmp3GDozei5A2%2FhCRR9SNPYLdbaHcLFlp3XoitQ74HNCoh&ua=&miniWua=HHnB_I6CDGJPhZ02Cr7baFgCQkHgVBpbzLsYrO8ZXEl7mAmNCKbGmWuo%2BatNE819f5nLGqTUz9eyPoO8P5HyK4Pv4CG5z9hYu82mpbs2woebjlT427dzbLtrXry0praZNvEUS&userId=694635076&umidtoken=7hZL9WZLOiP6BzV7TxhkAVn1INBorhno&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629123823&sqSv=1.0&sign=408c68aac548e207836587a4f2595ce3&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3D7hZL9WZLOiP6BzV7TxhkAVn1INBorhno%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7427A6828F12CDB5A99072CF5E9767A5A3583180%26msv%3D10.0.0%26brand%3DApple%26imei%3D02D6AD6455C25139A16746F623407200FE17BD2E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmmk85oMUDAOlDliYApCCx%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqijsqdspyurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=717&user_id=694635076&requestSrc=h5&userId=694635076&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629123928&sqSv=1.0&sign=0a07ce93e632ef9d23a348626e1a456b&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3D7hZL9WZLOiP6BzV7TxhkAVn1INBorhno%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7427A6828F12CDB5A99072CF5E9767A5A3583180%26msv%3D10.0.0%26brand%3DApple%26imei%3D02D6AD6455C25139A16746F623407200FE17BD2E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmmk85oMUDAOlDliYApCCx%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqijsqdspbody2","val":"_public=idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3D7hZL9WZLOiP6BzV7TxhkAVn1INBorhno%26placeid%3D111111%26user_id%3D694635076%26sn%3D7427A6828F12CDB5A99072CF5E9767A5A3583180%26msv%3D10.0.0%26brand%3DApple%26imei%3D02D6AD6455C25139A16746F623407200FE17BD2E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmmk85oMUDAOlDliYApCCx%26sdk%3D13.1&deliveryId=980&key=sq_app_ad&miniWua=HHnB_8u0Z5hWEAKGim5yCSu0NIhKpuCk9IkyVhgNaoYtbNWbfbfoB4sHAH84Bxcm/Zv0KC%2B6uPXsEGTmaykY2Hgr0uibSGWJp04sAJlWkzR4yRgZB7GHPti3TM%2BSEuL4/OSuE&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=F35C868FE5010E9FE9699A7605A2A834&timestamp=1629123831&userId=694635076&user_id=694635076&wua=ktgi_jA3Ea6GnNMgtkIP5deMXQxWqjgvG3YHEOQiswT/sUJY7GUlleqI0P9VOCOHMgefANd7HlqVcbvGYbPPIbT2VCS1e5DJlWil8rvdQZ%2BnBB%2BLupxvqDBaQzPqEimb5yPnJTkjJlTePJclIs1NXoMXg1afjJvQUP0/43bv7XkEuEN4EMdOFgKnt8iYGyGeKCB%2B6S4npGydt/sYqKscTMrhs056RyA00cCpwIMVr9l6G%2Bq0rhW6/wzXNQHEjGTYlfY0XVOVXF/zX8bH4PQbjsS0VijUWXiT9Z7yJyRkE7WjDV9RurTD0XN%2Bk%2Bm5GXmsEE84B47cls3ffDfcl2UFJP0m/25E5aGAsk2wh72BiBN/dA7r0NgDLBFKTXVMTpH4YNAUg"},{"key":"shuqijsrwbody2","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619114308&sign=782d95885713b3ff20b109fcba82af92&from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=13.2.2&ustatus=1&umidtoken=%2BBZLeYpLOqIT4zV4%2Bhn%2FiJXqilQxlVPQ&net_env=wifi&placeid=111111&user_id=2050988098&sn=5046D99BE860239DF7A630BB10ED31512C69610C&msv=10.0.0&brand=Apple&imei=B72D92743E7D5DAD3F6934B749B0A9DD78C05484&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9CNzJEOTI3NDNFN0Q1REFEM0Y2OTM0Qjc0OUIwQTlERDc4QzA1NDg0Iiwic24iOiJmYXN0XzUwNDZEOTlCRTg2MDIzOURGN0E2MzBCQjEwRUQzMTUxMkM2OTYxMEMiLCJleHAiOjE2MTk2Mjk1MDMsInVzZXJJZCI6IjIwNTA5ODgwOTgiLCJpYXQiOjE2MTkxMTExMDMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.1AJky1zuDISic7KXWdrAM88o-6eAfJXimvhIVa93GO4RY5LR6uTmhMxZSdsCn2nSF4QrHO_iqz2GRxMi1rBWng&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhone6splus&wh=1242x2688&utype=vip&utdid=YIGsoJqQgOsDAPHj6tXER9jk&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqijsfxbody2","val":"actTaskId=327&wua=ktgi_wf4Wem9rojjpfxr9CxoPXK6b8aCU4kd8pP8gGWOA8CIL8CGLHkBRvH3W1RiCn1JnzKNYHksmRkhXquDxin4QFw%2Fl13XSTttMtAvuUhhSskUwCj9ERM4vKlR0BQlviQX5l2ct1JMCTpPs46TltPWKcn%2BHFdZpWeuOHujZsQkeOXXbPcxj%2BXgazSD51zxfll4Oq4%2FshNvBNry7tZet9aLCTCSw5FiB2Y2tpzrko0jRyazBOXC4EryGbPGZW89Lv%2FmvSUqdbWNcAHMCbulMCKenhS4ChYn0ajpTijdlc9c%2BGGfBZAkFsr0n7LWcKf3Ujwsv%2B3MO7tzQMG%2FRrXUQpyijamu8PrmHFWnv0eQD%2F8JCfD7fIFqOVni6ISVEOqU7Fz%2F7&ua=&miniWua=HHnB_kAJBlFjsmMOcc%2FFdv7e8yQfZ1kPacK%2FWArAu5ldX1yMn9tTIvNtdEh%2F3%2B7haKe3JLVpqQi%2FEE8r67nq%2BKjAzXYcHksPnvov0r99hxFGz2IW%2BaAH8DAq1V0d8aNPs31yM&userId=694635076&umidtoken=7hZL9WZLOiP6BzV7TxhkAVn1INBorhno&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629123844&sqSv=1.0&sign=ca6520b5b88f05095c16783812758c8e&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3D7hZL9WZLOiP6BzV7TxhkAVn1INBorhno%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7427A6828F12CDB5A99072CF5E9767A5A3583180%26msv%3D10.0.0%26brand%3DApple%26imei%3D02D6AD6455C25139A16746F623407200FE17BD2E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmmk85oMUDAOlDliYApCCx%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=719&user_id=694635076&requestSrc=h5&userId=694635076&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629123927&sqSv=1.0&sign=b1f5f7bb21e4d373261295da017c6d58&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3D7hZL9WZLOiP6BzV7TxhkAVn1INBorhno%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D694635076%26sn%3D7427A6828F12CDB5A99072CF5E9767A5A3583180%26msv%3D10.0.0%26brand%3DApple%26imei%3D02D6AD6455C25139A16746F623407200FE17BD2E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTQ2MzUwNzYiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzAyRDZBRDY0NTVDMjUxMzlBMTY3NDZGNjIzNDA3MjAwRkUxN0JEMkUiLCJzbiI6ImZhc3RfNzQyN0E2ODI4RjEyQ0RCNUE5OTA3MkNGNUU5NzY3QTVBMzU4MzE4MCIsImV4cCI6MTYyOTYzODU3NSwidXNlcklkIjoiNjk0NjM1MDc2IiwiaWF0IjoxNjI5MTIwMTc1LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.ref2oFUrBlZw0xWYrUjuGiGO2HW_fjeXdnsQ3eroyyOC_tSwOFA7f5bsGaiIsyLCJ8h6j6mjl0kH-VP0dGD6Cg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpmmk85oMUDAOlDliYApCCx%26idfa%3D097A2D46-3583-49EA-92CC-2DBEACDBDF04"},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2070616792&sqSv=1.0&timestamp=1629124349&sign=9ab0f24fe9901c9be06380b71b700d48&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YRpmxqt8Ra0DALS%2Bjh8TOkk9&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=2070616792&sn=CA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5&umidtoken=YRpmxqt8Ra0DALS%2Bjh8TOkk9&msv=8.0.0&brand=Apple&imei=0CF671F6CD41E6729BD8BB98134A7245E4D11929&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTYzODY2MCwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyMDI2MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.vKpiXVSVkwRVPzG2fy-58SknKbcVpPDJHORhi-cUzds1XcXTF47SVt4lR6YIKw7RamXmqpPFv-pnEl5B_R4Ayg&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6s&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=0CF671F6CD41E6729BD8BB98134A7245E4D11929&isNewUser=-1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ca6f34568c7d3fda1aa3e41892981236&sn=CA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5&soft_id=21&timestamp=1629124102&user_id=2070616792&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYRpmxqt8Ra0DALS%2Bjh8TOkk9%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpmxqt8Ra0DALS%2Bjh8TOkk9%26utype%3Dvip%26sdk%3D13.5.1&deliveryId=807&key=sq_app_ad&miniWua=HHnB_/bnwE2c2XyNzIBHIGY8F%2BXloU4vC4zD1KbEZmRk6BNc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=119D77653E710ED896A76A4E63720F46&timestamp=1629124127&userId=2070616792&user_id=2070616792&wua=HIVW_uB9E5bdOQKSJj878k113bXw1VHG117WviPnXlRHXXnvTX67xMF2HaPHzJR8V%2BrvC68/8M5PvHNKTUYcAgVHfLjK%2BT8GyO5c7Ik%2BvVp1hn8Mph10ew3buigk5Wah%2Bi9eFbxUHGN1DD%2BNPBi7V7Z29XUB7BPArryRRG3LFuGM3qEwnTHML4celBGidHQ4bZl0uCeXCslliUY7fxZ3pJweRmTg2YQz4SnvadkJVO4K3O2Y%3D"},{"key":"shuqiscbody3","val":"_public=idfa%253D6AE8F187-8874-4A74-8AA8-DE6706283291%2526ustatus%253D1%2526net_env%253D3g%2526umidtoken%253D76BLO2RLOiZ%252BjzV7Tw%252FWvXi6Inw%252FYQw%252B%2526placeid%253D111111%2526user_id%253D2070616792%2526sn%253DA937037D12846D535A2B4ED3C73E427352E468A9%2526msv%253D10.0.0%2526brand%253DApple%2526imei%253D64DC06C74762FC0CBEF8CD3D08D6B294735E6586%2526appVer%253D1.0.5.0%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw%2526statusBarHeight%253D44.000000%2526platform%253D116%2526ver%253D210331%2526mod%253DiPhone6s%2526wh%253D1242x2688%2526utype%253Dvip%2526utdid%253DYRpnCGs0U8UDAF%252Bl7SIWy0qP%2526sdk%253D13.5.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1629124204%2C%22readObjType%22%3A1%2C%22attr%22%3A3%2C%22readObjId%22%3A%227151431%22%2C%22readChapterId%22%3A904768%2C%22readingLen%22%3A33%7D%2C%7B%22startTime%22%3A1629124201%2C%22readObjType%22%3A1%2C%22attr%22%3A3%2C%22readObjId%22%3A%227151431%22%2C%22readChapterId%22%3A904767%2C%22readingLen%22%3A2%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=F72340F67D28E1D40D43D3C53F2ADC06&timestamp=1629124238&user_id=2070616792"},{"key":"shuqiydbody3","val":"_public=skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYRpmxqt8Ra0DALS%2Bjh8TOkk9%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTYzODY2MCwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyMDI2MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.vKpiXVSVkwRVPzG2fy-58SknKbcVpPDJHORhi-cUzds1XcXTF47SVt4lR6YIKw7RamXmqpPFv-pnEl5B_R4Ayg%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpmxqt8Ra0DALS%2Bjh8TOkk9%26utype%3Dvip%26sdk%3D13.5.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_UbXnFCH1AhpO36duGuiC5c1hUn%2BNkJH2YdHVPA%2BrVOE%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=9F03DCBEF7A7B7F2E1BB1FD4A20C12C7&timestamp=1629124085&userId=2070616792&wua=HIVW_v07VSlzXvJIZwedjcjceD6HitNhx6xoWaC8EilRTVFWFDoS6s8elM6hQ%2B%2BczIxMdWPg/x5G8Ts/TKU2T75Ow9zb%2BPj5XHDS8f3xYCpYoY9ikSLZqGxPP8bhH/a4afYtg5kgsBjWIQz8BCUvjxQBMGaVADmspcf9Wa9J7dlziK5i5u/je2jlc7e7yZSPgKA6MNlFXVDyRgXBkZA4z5W2t1Tt9zd8WN5wmIvXGE2xhYdg%3D"},{"key":"shuqiqdbody3","val":"clientTimestamp=1629124132&position=501&signInType=1&wua=HIVW_ejoZ%2BeI0E1I8eN8BDDL0if9gyAcHOIAE5z5FbOLrBfX2MQZYmTMkTEzjvb6e0RtY6t%2Fmwt2PV5Noz3%2FfxL6NuBui%2BAFf2fDTCwdQkCZ9VgexgHbI2G5d7kfNKjVx6qUx3nZI24AJnRKLFmZtO%2BCMmxl06DE24KV5UomBoc%2BvL6ml1LYQuVAE2O5iXsDJx3TGqU3PeKOt1AWRmqNPC5BUU8cB9xkjMDeinq3PrJbOEUM%3D&ua=&miniWua=HHnB_bheQZ20e%2B%2Fu2qd8RCW0jVtj5yXmAQyWTp3o1ng7S1sw%3D&userId=2070616792&umidtoken=YRpmxqt8Ra0DALS%252Bjh8TOkk9&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124132&sqSv=1.0&sign=9419376ef69db1f87933988fce8345c2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.5.1%26utdid%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26umidtoken%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqirwbody3","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619076223&sign=7e43399036edb749623a85f5c2331041&serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YIEPc%2F99z64DAIlpsFFVGebB&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2050988098&sn=7639A3E314CF06FCA6D98CC79D6B555157293A1F&umidtoken=YIEPc%2F99z64DAIlpsFFVGebB&msv=8.0.0&brand=Apple&imei=E6095B9B70A382D39929338988B0CB6738C667DE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiRTYwOTVCOUI3MEEzODJEMzk5MjkzMzg5ODhCMENCNjczOEM2NjdERSIsInNuIjoiNzYzOUEzRTMxNENGMDZGQ0E2RDk4Q0M3OUQ2QjU1NTE1NzI5M0ExRiIsImV4cCI6MTYxOTU5NDYyMSwidXNlcklkIjoiMjA1MDk4ODA5OCIsImlhdCI6MTYxOTA3NjIyMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.aFrNlQ78_dTR8ouDxlD7VckRUyd828aNpVky69ekW7JYj9Wf09k8qtFpOcwU4MhcX2-MCJd807BdH1IzX1FLCA&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=626&user_id=2070616792&requestSrc=h5&userId=2070616792&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124170&sqSv=1.0&sign=80f52a0a55dd63a4d1c5ceab4ab299a3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.5.1%26utdid%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26umidtoken%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2070616792&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124152&sqSv=1.0&sign=8030bb7bc26dccc30f728b3fb6120d0d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.5.1%26utdid%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26umidtoken%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqisqjlbody3","val":"src=&userId=2070616792&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124137&sqSv=1.0&sign=55b032d7b8611eba5faac12e3704894c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.5.1%26utdid%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26umidtoken%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1629124172&userId=2070616792&activityId=311&sqSv=1.0&sign=2608aea2db07f4e32c6a9d0f38b899dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26umidtoken%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYRpmxqt8Ra0DALS%2Bjh8TOkk9%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpmxqt8Ra0DALS%2Bjh8TOkk9%26utype%3Dvip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_EX80PIYu17FQHfCWGjYg1ZwjrlVA9xcSNJMlK0sVvNU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=24E4342D4DC4677580A13157D904B262&timestamp=1629124144&userId=2070616792&user_id=2070616792&wua=HIVW_ynyX55O%2BSsi59qL9H02bx%2BaclXzzvlWGEQX%2BTWFZ4spnDD0zco1tGpkOZ1StzHqAbRkg5aKC8veI/BXXALhC14LV5aJU8HQCm17CTN0UDm79eHtbjokPr%2B/muJDrdFl9qpQKrj5k0gZQaF2nuXKj9qGmHvxRKvOHNTwkSZbgTIG2ucNswW7kDCYf96qq6DqASLTVFGcZ1k2A92DQfLJmS9s6lo81KDdDYfGQMgC08yg%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_eRRQIq26NIRrDKtnF71UlzlOXhrA2kx2IQCb%2B5Am6VtrolCk%2B%2BUuGvr5lAWJwEuqpKWS6E8Qpfgmf8xxmeP1%2B4cmg2LYln8d5iC6Oj3zisc79FxA6p4NCsL5ADZ280Q2jvCNmU6eAbmslTLCVkIubqYn9atyua26iE2PAL2BRf%2B4GSQhegbupigapDDn7oM2NyVk5zb7EylAJA0%2BABvfXB8%2BN5HxZQ%2FyCmK%2BFEpSsHA%3D&ua=&userId=2070616792&umidtoken=YRpmxqt8Ra0DALS%252Bjh8TOkk9&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629124150&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=74edcff22e1de045aa57e3a3cc86a832&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DCA36AC96F0A01584FB8D0E4B14E877CAE73F3EE5%26umidtoken%3DYRpmxqt8Ra0DALS%25252Bjh8TOkk9%26msv%3D8.0.0%26brand%3DApple%26imei%3D0CF671F6CD41E6729BD8BB98134A7245E4D11929%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiMENGNjcxRjZDRDQxRTY3MjlCRDhCQjk4MTM0QTcyNDVFNEQxMTkyOSIsInNuIjoiQ0EzNkFDOTZGMEEwMTU4NEZCOEQwRTRCMTRFODc3Q0FFNzNGM0VFNSIsImV4cCI6MTYyOTY0MjUxOSwidXNlcklkIjoiMjA3MDYxNjc5MiIsImlhdCI6MTYyOTEyNDExOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Trtr0be4LU9vOm-pU4mZKUi2VjJ7owAdAohQA2DgW8UKDZRzHL5Aq97CCAOgWnPvTeTBF5VtsunKa3KFB4O-8A%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqijsspbody3","val":"_public=idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291%26ustatus%3D1%26net_env%3D3g%26umidtoken%3D76BLO2RLOiZ%2BjzV7Tw/WvXi6Inw/YQw%2B%26placeid%3D111111%26user_id%3D2070616792%26sn%3DA937037D12846D535A2B4ED3C73E427352E468A9%26msv%3D10.0.0%26brand%3DApple%26imei%3D64DC06C74762FC0CBEF8CD3D08D6B294735E6586%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6s%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpnCGs0U8UDAF%2Bl7SIWy0qP%26sdk%3D13.5.1&deliveryId=897&key=sq_app_ad&miniWua=HHnB_jd3hYvIohX2mMoiMRwAobdJd8Cjq1wtswowv6u6eCsUsQOwVWMCUIuppGAoE4kFnxbUnaiMSyaaW2EBXIjHxHJoxe0DJdr8EyUWvrWPsHY6xjogYUy7zVTodUYa0e5A8&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=48F2077C4F1CC033442AEFC4EDA26A04&timestamp=1629124333&userId=2070616792&user_id=2070616792&wua=ktgi_8/4Qb6bE1awmmaTo%2Btefq18/38cob0dXLUyoTPbsgpQHTMkIKw1LBCyl1jmfw8EmJAigbXG8LtQr5KtCNJqyBM//4C1rAwlTQVcdEp5XWnxfQD5ZsUm48shWHiA01030fb7l2v21RkxKYxv3mkpxB3pCpeaL4Uu%2BzYRPo4g4/LVL1FR2NVHL97KzZdge8NyM6pveB4pusdDWs3wpIBeOy8fxLdQEDwpjrBQt7ChUGD7n8TemYYcjArX75GhMdz0yxIN9VDZuwvCX9ddsz95DTbj4kTOPPsB0kTFBcBkyrucftzApS8vGOv1GU9QJp9SUCOmK73zcHTlc9lugMYHYHNuN9BASzbOL2dx3%2BtiXgKk%3D"},{"key":"shuqijsydurl3","val":"https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=13.5.1&ustatus=1&umidtoken=76BLO2RLOiZ%2BjzV7Tw%2FWvXi6Inw%2FYQw%2B&net_env=3g&placeid=111111&user_id=2070616792&sn=A937037D12846D535A2B4ED3C73E427352E468A9&msv=10.0.0&brand=Apple&imei=64DC06C74762FC0CBEF8CD3D08D6B294735E6586&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone6s&wh=1242x2688&utype=vip&utdid=YRpnCGs0U8UDAF%2Bl7SIWy0qP&idfa=6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqijsydbody3","val":"actId=355&miniWua=HHnB_k/FnWyjaAWthJL5qQpgxDSrPTz8ZCfg6Cpje4ZUDzjla/rR0m6rzK6eJZghIXduM3FSBHrcjutyQweDxupzQnYAeT4r4vSXsZM689lwjs7ec10X8nND2c5dCS56%2BOyIs&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629124231&userId=2070616792&wua=ktgi_9jwjJLRfi5ml2R8G9A3MPgwC2MjtSkhK1q8scF1hP3JMYBAmTuzTpQMWTb3J/ZiFuq%2BxQTNdj0dvd2uMCGHeflYdxFLaG5drOsP/DcqZ65porJyrW3mbbr63qUNmPIKpl7qUabtHJJ72hwsdx/pZg8Lb59dHo3kgVAXXQvViGOHxucOzj7T6T3vO0IjP0UVfZN8MEFXf/KpyG9J4uUDeMyQ46vhSCkxsE8jJ712t33OwNhxdWU%2B3XQkCPbForSYhi8G5R1BdJAogLJT05aO%2BOCdUjUWLM4SZisTEgomQgG0FjmG5QHpGhwEG3iHlNA54cxo4uWwayYkXIWHNueEgi5zyq2%2BPvk4oli2jS4wdYjt/apzR3zGV5rl8c0N/huT%2B"},{"key":"shuqijsqdbody3","val":"clientTimestamp=1629124264&position=601&signInType=1&wua=ktgi_SkEmU5TKfXWfO8yrNt%2BpdVO8QIUqNRsKEVoXKfMQ%2B1NZ93M9OREBSEEE95dz2aFmQ4nYnPyQuj2eZEzGfUMza7ZZ5tgnyVpaK7%2F1SFXSwR%2Fn34RG%2FKonfo2Xn5OHdEYtfpJ3ajd3DKJZtUSYPexRgppNjdJYK4ryz9wp6nNkOBzvaJBIT1xn%2B1sPnnjY21sLZKE6bbFz8aIkHFp5MIlnBuJyjPKbT%2B6P9GOj1ci0ULbAGkhklqs4D%2Bh4wdtEkWmP0fjRUDPx8XPeGKIYhhACTCvYxlg0br86qZpjz1THEewdYLQw85bzGToUO6omHCS0kwdZoltG4QW9zwXMg6m43qrq1KTW5p%2FLBJz%2BaG8ueTKsGUP3bonUv4vNjkeCO%2FiS&ua=&miniWua=HHnB_3%2FMMCB4LI4scWtu6x%2FRQBKgy4ZfbxyMfTfeHJY3EDhtOYh25N%2FI6BRJe%2FeKyehLK9MF7OjG1KX6%2Bc7KoejTr8P6%2FgNG%2FLScQZq6r4Tm8O6sp1qHH%2FTMPsjbwZKQ14cVA&userId=2070616792&umidtoken=76BLO2RLOiZ%252BjzV7Tw%252FWvXi6Inw%252FYQw%252B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124264&sqSv=1.0&sign=6ad383f0532f2e9eef8ccf235faa82d1&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.5.1%26ustatus%3D1%26umidtoken%3D76BLO2RLOiZ%25252BjzV7Tw%25252FWvXi6Inw%25252FYQw%25252B%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DA937037D12846D535A2B4ED3C73E427352E468A9%26msv%3D10.0.0%26brand%3DApple%26imei%3D64DC06C74762FC0CBEF8CD3D08D6B294735E6586%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6s%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpnCGs0U8UDAF%25252Bl7SIWy0qP%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqijsqdspyurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=717&user_id=2070616792&requestSrc=h5&userId=2070616792&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124350&sqSv=1.0&sign=8c9d69bd187876dc7632bfde1d857f08&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.5.1%26ustatus%3D1%26umidtoken%3D76BLO2RLOiZ%25252BjzV7Tw%25252FWvXi6Inw%25252FYQw%25252B%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DA937037D12846D535A2B4ED3C73E427352E468A9%26msv%3D10.0.0%26brand%3DApple%26imei%3D64DC06C74762FC0CBEF8CD3D08D6B294735E6586%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6s%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpnCGs0U8UDAF%25252Bl7SIWy0qP%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqijsqdspbody3","val":"_public=idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291%26ustatus%3D1%26net_env%3D3g%26umidtoken%3D76BLO2RLOiZ%2BjzV7Tw/WvXi6Inw/YQw%2B%26placeid%3D111111%26user_id%3D2070616792%26sn%3DA937037D12846D535A2B4ED3C73E427352E468A9%26msv%3D10.0.0%26brand%3DApple%26imei%3D64DC06C74762FC0CBEF8CD3D08D6B294735E6586%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6s%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpnCGs0U8UDAF%2Bl7SIWy0qP%26sdk%3D13.5.1&deliveryId=980&key=sq_app_ad&miniWua=HHnB_3iVF3aaAHDlzChCuRhHoadO6VpiSTU1ZXB6wa/EMuocEQKl0jnJCV9bn3Zrdf%2BHso84sc4Twfk/7%2BftVj4Y7PbMd8ncyhT8uffd1d48n358fKxUzxRb/HvEIRl/B2wi7&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=0D8636E2AEB63BD292A34AFC9C706DBD&timestamp=1629124275&userId=2070616792&user_id=2070616792&wua=ktgi_kTaYfvtaoR6orRcHx7v%2B6NI4sZR3NQ8VUYW0s/IlzbI2cjSY%2BbYa6ZOdo8fsjEZODn8Si59GSI8LLbMr3bpktrOs0IsjG8zWd/nMatXV91Be/b3wWQqL%2BGnTlVJo4XfwK6tXLvO3BUEgWBR%2B/BStzfnwXh3/UOsCW6MU7X5blW8BPOJB8FxZOXN2Bw7JPpF4SEE7L7VbZHwd31T59cs8pB1gBLc3jP41eZv7RuZs7A2q8t7d2vFuV4mKE4Wq4lJ1gwcPGrg%2BlH15Gt%2BYNeb/xm6eozpO3kchXy03uHhDnRYmbitp6ZpGKpBbI9%2BjSxuGeWxOFfGDhX66rZPf6Vxs%2Btr2PFneJWMElgTQKUdJeYLg58wG3bOWlolccKEOtT1c"},{"key":"shuqijsrwbody3","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619114308&sign=782d95885713b3ff20b109fcba82af92&from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=13.2.2&ustatus=1&umidtoken=%2BBZLeYpLOqIT4zV4%2Bhn%2FiJXqilQxlVPQ&net_env=wifi&placeid=111111&user_id=2050988098&sn=5046D99BE860239DF7A630BB10ED31512C69610C&msv=10.0.0&brand=Apple&imei=B72D92743E7D5DAD3F6934B749B0A9DD78C05484&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9CNzJEOTI3NDNFN0Q1REFEM0Y2OTM0Qjc0OUIwQTlERDc4QzA1NDg0Iiwic24iOiJmYXN0XzUwNDZEOTlCRTg2MDIzOURGN0E2MzBCQjEwRUQzMTUxMkM2OTYxMEMiLCJleHAiOjE2MTk2Mjk1MDMsInVzZXJJZCI6IjIwNTA5ODgwOTgiLCJpYXQiOjE2MTkxMTExMDMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.1AJky1zuDISic7KXWdrAM88o-6eAfJXimvhIVa93GO4RY5LR6uTmhMxZSdsCn2nSF4QrHO_iqz2GRxMi1rBWng&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhone6splus&wh=1242x2688&utype=vip&utdid=YIGsoJqQgOsDAPHj6tXER9jk&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqijsfxbody3","val":"actTaskId=327&wua=ktgi_ttLjl%2BCVEvsNHi0Jsrms30Gvtvk15%2FWBcA9semq7wFrNHbbD5HNCreYauqQidoMRS0D0vW9keZbpAJvZQGnmPyqAT2Sp%2Bobvn2ELktYFrBnD6fSo1DllBM8U1a7v%2Fn%2FuFl70Gp5f2OfBldK3TlEZInjmXJk%2FP0RQx8Hrw94nvn0hRfILIPwSW3C4rw3qRfEGfG4s2wMy8BFgRlQEh0Bqb2YJVfWj5ABuH7nlZXBC%2BtPh3OgFRt%2F8ClcNmmTH3D%2FYoi7T3zAx4p3WmOjodsEMBMCv0jYVfi1e%2BQxQZyULF%2B8CdtcM1VnNa40mhAvZlX%2BF8YvxD6BvC7VUqKUTd3rqV0vCPM5%2FKX6z0lHweaYbBNlUnH%2F0qYJNb9R%2FatlgBfAz&ua=&miniWua=HHnB_xgzkE6k13Etle2CNXhz7I3Q0JyjFAF3ygnN4QsQHIzScyHbnP8%2BsFY83ZpKUcA2ylnsP8carV89RaaFKVEFZP%2FZEy1QgnsX8f1vr6cnWe9lP0ZHfKHmXxhWJmVzFvZZF&userId=2070616792&umidtoken=76BLO2RLOiZ%252BjzV7Tw%252FWvXi6Inw%252FYQw%252B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124300&sqSv=1.0&sign=516ab43fceb75008f42794506c185239&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.5.1%26ustatus%3D1%26umidtoken%3D76BLO2RLOiZ%25252BjzV7Tw%25252FWvXi6Inw%25252FYQw%25252B%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DA937037D12846D535A2B4ED3C73E427352E468A9%26msv%3D10.0.0%26brand%3DApple%26imei%3D64DC06C74762FC0CBEF8CD3D08D6B294735E6586%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6s%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpnCGs0U8UDAF%25252Bl7SIWy0qP%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=719&user_id=2070616792&requestSrc=h5&userId=2070616792&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124349&sqSv=1.0&sign=a194f02b77e470e73a316829f68e19d5&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.5.1%26ustatus%3D1%26umidtoken%3D76BLO2RLOiZ%25252BjzV7Tw%25252FWvXi6Inw%25252FYQw%25252B%26net_env%3D3g%26placeid%3D111111%26user_id%3D2070616792%26sn%3DA937037D12846D535A2B4ED3C73E427352E468A9%26msv%3D10.0.0%26brand%3DApple%26imei%3D64DC06C74762FC0CBEF8CD3D08D6B294735E6586%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDcwNjE2NzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF82NERDMDZDNzQ3NjJGQzBDQkVGOENEM0QwOEQ2QjI5NDczNUU2NTg2Iiwic24iOiJmYXN0X0E5MzcwMzdEMTI4NDZENTM1QTJCNEVEM0M3M0U0MjczNTJFNDY4QTkiLCJleHAiOjE2Mjk2Mzg2ODUsInVzZXJJZCI6IjIwNzA2MTY3OTIiLCJpYXQiOjE2MjkxMjAyODUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._D844Lmms-ZdYGnGhoax0Y1VShaZPDzXgxE3toxR1j0AMZQ26R8yRfDndSfFXe7oa0r6ClQr6M59vLH0m4DBbw%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6s%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpnCGs0U8UDAF%25252Bl7SIWy0qP%26idfa%3D6AE8F187-8874-4A74-8AA8-DE6706283291"},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2051347392&sqSv=1.0&timestamp=1629124622&sign=8886cb01e89ea4a264a477f735fff71a&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YRpnMBjTUH4DAH2MpRb29mjq&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2051347392&sn=B954E47A445744BCE6FE7ADDD2C32B07F89B21C8&umidtoken=YRpnMBjTUH4DAH2MpRb29mjq&msv=8.0.0&brand=Apple&imei=65301CB7BA170F6D3AD6E142BAFF2963D359E856&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTYzODc3MiwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyMDM3Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.yzk0L0vy-AUJsvOSJxCNsG6NIjac3zU8nke41LltF7-pHDwod47k3ju7FUA1OfhtZ8JRi4FneliVxC97cTdgnA&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=65301CB7BA170F6D3AD6E142BAFF2963D359E856&isNewUser=-1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f3f434767f102429b900b8d6e354f6c2&sn=B954E47A445744BCE6FE7ADDD2C32B07F89B21C8&soft_id=21&timestamp=1629124393&user_id=2051347392&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26utype%3Dvip%26sdk%3D13.1&deliveryId=807&key=sq_app_ad&miniWua=HHnB_JOIoLaMYQGxjSVucCjDHhu9faJcDDlbLXLp1saGR1Bs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C28D35E1C3A5A6E595FCE72DA25969C5&timestamp=1629124405&userId=2051347392&user_id=2051347392&wua=HIVW_xec9SC9cXZHz1w5egpgzB/NvubLLgE/nQVowEbNmCjk3BX6IDq/1c5dMxbQX4qbCsWV998hGxVlsf1zGvVsmX3JWHcNsqA2eqdPzUYaFlo1oqda1Btp0pQ1iBHxY3I%2BTzQpgngUanEjD%2BKVUWRaIpXHSjwXmNAcKB8xfADcz2vp6R6%2Brkd6w7p%2BijhTtWZKhlaY5ug2o6%2BccHQwsB1zXoHxvCylMkNnehhCT65N5ro4%3D"},{"key":"shuqiscbody4","val":"_public=idfa%253D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6%2526ustatus%253D1%2526net_env%253D2g%2526umidtoken%253DcCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq%2526placeid%253D111111%2526user_id%253D2051347392%2526sn%253D54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6%2526msv%253D10.0.0%2526brand%253DApple%2526imei%253D7FA6A0239C2DAD734E963080190F1353DA44CCC5%2526appVer%253D1.0.5.0%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ%2526statusBarHeight%253D44.000000%2526platform%253D116%2526ver%253D210331%2526mod%253DiPhone6%2526wh%253D1242x2688%2526utype%253Dvip%2526utdid%253DYRpngbK1LW0DAB5A64dsqac2%2526sdk%253D13.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1629124863%2C%22readObjType%22%3A1%2C%22attr%22%3A3%2C%22readObjId%22%3A%227969150%22%2C%22readChapterId%22%3A1249158%2C%22readingLen%22%3A54%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8747F6C23BF1F84D5EB235629C5E1B91&timestamp=1629124918&user_id=2051347392"},{"key":"shuqiydbody4","val":"_public=skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26utype%3Dvip%26sdk%3D13.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_l9Ryc%2BQ3uhPlUvWGhq/Pw0malH79Id2SAwzjk1tPC2E%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=2274635C8595FFBDA3936CC9C2411190&timestamp=1629124457&userId=2051347392&wua=HIVW_GCpkapZomw/vky6Z8%2BqAPqqw%2BrATEljgFfCUmqDuNBRBwGj2ywcnXCVEF2gxqPQ6GLkfZq0TMNr/muUgkW6W%2BwccnfD8Jr4pMtaos%2Bbe82QL%2BZcHy8TE3rR6ordQ9O6wekJaOudTQT%2B839CHeu9uIowHrlKbW9rDwUzQuFI4ZJrSNyFtMrmCmN30HfV8L9Hy4iBtec44cFxoUP7I7fJNB8Sf7zjg/AOx073aQF44KGY%3D"},{"key":"shuqiqdbody4","val":"clientTimestamp=1629124400&position=501&signInType=1&wua=HIVW_9nIlDlq2Ha4JbL9xE5bai9KeyX1xRbyNZOIfMMSpLNaMpss7VO11s8RAEqPv885WD9u%2F6OxBXxiaKMolLWI1aBv%2BWcMC7Tvs%2FTtHhD409%2FfUnFOmdFLh7itV6cRRQTTQ%2FhKxsSsCgJszAVWwBtJ1V%2FrvP%2FTJjdENZ3HbMJCzHlmhY00tSQgDwk5wh%2B%2FMMWuiQjpVGC5xCD%2BzassT5kHpx4xERZzdNt%2FEB6z9m7bix2s%3D&ua=&miniWua=HHnB_J7Ct2Rl3hXeTcB8pK6NxyYGORHLPB8ezt%2B5BQs8C1EI%3D&userId=2051347392&umidtoken=YRpnMBjTUH4DAH2MpRb29mjq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124400&sqSv=1.0&sign=fdb553c7ae623442ab2925ddc5333acf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqirwbody4","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619076223&sign=7e43399036edb749623a85f5c2331041&serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YIEPc%2F99z64DAIlpsFFVGebB&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2050988098&sn=7639A3E314CF06FCA6D98CC79D6B555157293A1F&umidtoken=YIEPc%2F99z64DAIlpsFFVGebB&msv=8.0.0&brand=Apple&imei=E6095B9B70A382D39929338988B0CB6738C667DE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiRTYwOTVCOUI3MEEzODJEMzk5MjkzMzg5ODhCMENCNjczOEM2NjdERSIsInNuIjoiNzYzOUEzRTMxNENGMDZGQ0E2RDk4Q0M3OUQ2QjU1NTE1NzI5M0ExRiIsImV4cCI6MTYxOTU5NDYyMSwidXNlcklkIjoiMjA1MDk4ODA5OCIsImlhdCI6MTYxOTA3NjIyMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.aFrNlQ78_dTR8ouDxlD7VckRUyd828aNpVky69ekW7JYj9Wf09k8qtFpOcwU4MhcX2-MCJd807BdH1IzX1FLCA&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=626&user_id=2051347392&requestSrc=h5&userId=2051347392&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124510&sqSv=1.0&sign=d7597e623c7535ef37d141b93ce7fff3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2051347392&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124497&sqSv=1.0&sign=c1c34dddd768c2e0f56cba10be2c5638&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqisqjlbody4","val":"src=&userId=2051347392&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124496&sqSv=1.0&sign=b3d765e695cb92ee662d6bb7fe813950&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.1%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1629124514&userId=2051347392&activityId=311&sqSv=1.0&sign=0de9d31af29732f09d3f7cd48876bc4d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26utype%3Dvip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_vE6/jhr98SUIN9zbHLqHY%2BiYhktZbu6WGw4xcr9vQ1E%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=89869A9B404A402CF4F09EFB345970D7&timestamp=1629124420&userId=2051347392&user_id=2051347392&wua=HIVW_vAl/ZohZEHPDcdxhJpwFJgFIx6tDw%2BLJRSUHnRuKsOROGQmXZzZMbD3f8xwracuunaVEH3je2UkZU6%2BNGx2AtaRu1%2BDiZL%2BTnrFdF76pa4EjsYmEHVxM68q/p7CxedywrpZwDApjfTL6lTD7bDWeG936yaLA%2BydptJRWL1WmjsqV5soJAuiVoRnpySu5MamC2pXkszURnd7dbJa8rzOOjI0%2BMzpbBLQCvqYUxzPAXrk%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_%2FbuhQeVtT4hYFJRymMwmBr2SEIY8stbXlRszhnzn6VGh0wp8FnG7d6%2BfFE3ZXXefPr5ocJ86JnWhOhBGRusDR5yjlMmGkV3lakevoFl%2B08eOYXY244XWxIsbeAuOF5pRFdW7M9ILvNn9bwHNeQQHhk1z2I8yXkkL1CeHfTyN5VGcwKnIrrxZJzSPd%2BsihvQE5I1AyJvdyzuAqZKhUkQ56cIk71TQ9NIBP8KoPrUnNwA%3D&ua=&userId=2051347392&umidtoken=YRpnMBjTUH4DAH2MpRb29mjq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629124422&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=779fd98c38dc9d633908e4d9aae90edb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYRpnMBjTUH4DAH2MpRb29mjq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3DB954E47A445744BCE6FE7ADDD2C32B07F89B21C8%26umidtoken%3DYRpnMBjTUH4DAH2MpRb29mjq%26msv%3D8.0.0%26brand%3DApple%26imei%3D65301CB7BA170F6D3AD6E142BAFF2963D359E856%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiNjUzMDFDQjdCQTE3MEY2RDNBRDZFMTQyQkFGRjI5NjNEMzU5RTg1NiIsInNuIjoiQjk1NEU0N0E0NDU3NDRCQ0U2RkU3QURERDJDMzJCMDdGODlCMjFDOCIsImV4cCI6MTYyOTY0Mjc5NCwidXNlcklkIjoiMjA1MTM0NzM5MiIsImlhdCI6MTYyOTEyNDM5NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.WN2HbrDgKPX0C_-TCSzDpGc5xf-1DGAWMqA-X5JT7TWDx85mixPSzL_LIuBQCOFTYjGFYrvCgw04c3KYUJDWZQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqijsspbody4","val":"_public=idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6%26ustatus%3D1%26net_env%3D2g%26umidtoken%3DcCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq%26placeid%3D111111%26user_id%3D2051347392%26sn%3D54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6%26msv%3D10.0.0%26brand%3DApple%26imei%3D7FA6A0239C2DAD734E963080190F1353DA44CCC5%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpngbK1LW0DAB5A64dsqac2%26sdk%3D13.1&deliveryId=897&key=sq_app_ad&miniWua=HHnB_UHR6Fh2ULT/7X%2B9YGLMiG7Le5SjrXO5U8lmcnA95mPS7dH1KbKL/4RT/BKCuPYcoSbiBn5%2B3kGnngnIlYgumTjpXc7inwX8lGvBgf6iFDIFeBgXUMslFu5pPaqycvf2Y&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=4F8EE8B25D7E5E759451DDD3C634DB3B&timestamp=1629124826&userId=2051347392&user_id=2051347392&wua=ktgi_nn2lm8meEoPxlF8uJSrA5A%2BQRVV3P1SQt60nFaefRHasK4GQBw5zfFvAOr%2BWBS%2Bi2FzFygda5PJ2haKZC9MbcfF7ZCnhcG3zC6TWkMi377F%2BQr/a2P6FQar4gz9VWkvynaTrDxCa2VvJZZabLbAwDRufH2nxvT6WfhQABc0jA6fTXRf1Kd1ZbYBQGaLbmPYcq0KIkMwtr81lhMwYXZT4ATfg54BPJS40BbVbiNSHa8rtVQsLGsD5elVmeGZ0B//R%2BwzKVWHGYM/Tbz0r9jDRT6neWeuylszmg6mi1neOHNbnQ10pbmeV7vx4U7byAbt8/7HAiHZws6IznwrTpwX/1hhNDDtOYOkivBLqklzt5zvSPG7zLvlfgxnxE4NU6Fgd"},{"key":"shuqijsydurl4","val":"https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=13.1&ustatus=1&umidtoken=cCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq&net_env=2g&placeid=111111&user_id=2051347392&sn=54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6&msv=10.0.0&brand=Apple&imei=7FA6A0239C2DAD734E963080190F1353DA44CCC5&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone6&wh=1242x2688&utype=vip&utdid=YRpngbK1LW0DAB5A64dsqac2&idfa=5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqijsydbody4","val":"actId=355&miniWua=HHnB_jYiDwo6TvkNN8%2B%2BW4gw62s%2BHgSUmkF8OS34t0GaRmgSiXqK/LPyFPIxqnFsvKn2LXprKZGLefSyu%2B5jvhP2XDXIg73aA6hxIbGvA3HCwdmXXLvWG6R8h1ozbP%2Bu1vdG3&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629124892&userId=2051347392&wua=ktgi_vA0BqQ4U2/MCEF1D08yCnP0rttb04gxP9FqlzQH3PUQz9rkmqZEms7P9YwE20BmlLIyFbhs2zKIrTpC/Yc%2BQoVtc1R2L5lACvZsCG6Zs0t%2BEjPa5GS3rEk%2Bhh/ENjWfgRWKTSug63NClSBhSWN4Z1uhWlULTPVuL%2BV5jDz/xVXvkLLwkFSos7Y8M7fIObkuczHhRX%2BSoz9avdbKmKqwYmi%2BFdBx4lajdOJzQejAZM0oUSMs4WWfiVs7fzhHyraKPPTnMXBVJb4FlbWIFcV3aGD2rJDDkTn1r2r0x2Z3PBvhMBlgW4PNbVuKCruPlmw6TvSZGQ0NSprocVPktswQ2dBhlZvXG%2BtJZjbiCyhDN/%2BuntAUj9ieXcnlc0oganvmO"},{"key":"shuqijsqdbody4","val":"clientTimestamp=1629124573&position=601&signInType=1&wua=ktgi_g97djx3UikpKGnEErdqW%2BocV2B0nrmpbxhK3Epr5KQxxpREqdq%2F%2B1TLcb9R2GHsY0N8z4eIr5shM1n3eHx%2FHkj9x91DJ4ESwTjfZZZLEARlGseMJs9ztbrnJzUCDu9RMqchb%2F9sIIv7V55cOB7TGWkLdOukPqHIDnGq94MBf1GdWZ%2FHz11xy8L51NwYx3sYNMUxFaJBbltyngpmFeDtGm9iNU4rTgQXtgMuYWWj9h%2FO6%2F%2Fe2m7KxeVLnD3oEDpJoLoacmyxL1VfSyAs42Xy0YNxR%2FYLnh%2BO5TpJGeilgyIJRaEjjgxpLq%2B7NsODer3ss3TcYjpcG6DrctFq0pZuHKNvokJJqyHdNHH3g5FM31Y4k9%2F0HyTKacoAyCPZNxv4j&ua=&miniWua=HHnB_%2BZbyMafiGKT13QBCPp9A%2FqMaGuoByw4MkjP8UbxrLM1FoRlCfsAfUpPVHpcYzPrHazKAVS4OhAsMiyceSS9E5Q9isa22WkyfyxiPIkTKS9qs0lnm%2FiCErZflswe9%2FZzX&userId=2051347392&umidtoken=cCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124573&sqSv=1.0&sign=2613adaa9edec6160037cce726f07eb3&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3DcCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3D54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6%26msv%3D10.0.0%26brand%3DApple%26imei%3D7FA6A0239C2DAD734E963080190F1353DA44CCC5%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpngbK1LW0DAB5A64dsqac2%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqijsqdspyurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=717&user_id=2051347392&requestSrc=h5&userId=2051347392&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124623&sqSv=1.0&sign=06eced5a8c11fe05dffc4235859c75f5&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3DcCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3D54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6%26msv%3D10.0.0%26brand%3DApple%26imei%3D7FA6A0239C2DAD734E963080190F1353DA44CCC5%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpngbK1LW0DAB5A64dsqac2%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqijsqdspbody4","val":"_public=idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6%26ustatus%3D1%26net_env%3D2g%26umidtoken%3DcCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq%26placeid%3D111111%26user_id%3D2051347392%26sn%3D54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6%26msv%3D10.0.0%26brand%3DApple%26imei%3D7FA6A0239C2DAD734E963080190F1353DA44CCC5%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpngbK1LW0DAB5A64dsqac2%26sdk%3D13.1&deliveryId=980&key=sq_app_ad&miniWua=HHnB_zZ6B%2BkYu1Arhg4eRIU7gMmV7AJlG4D3hK/ZKdYLuOxEoNiDtnZRzgHxdNy6fkAlPyB1S%2BCDY3HrR2Z%2BLbKRyxxXU7i3sNs1BeapQ513QQUecOi4BmiGg40EhdmYmbJyj&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=FA2A0E549B6F46038D380A50BB1A4860&timestamp=1629124818&userId=2051347392&user_id=2051347392&wua=ktgi_hBtud8ICfMzzTvYvgeCbB5t7AWcJsnKEgJNLM9MSu7hW3LIJIa8n6ADmNg/Z275VwYY1AhvYOnUf79vTp9%2B98VKZu2DMyEMED1OHtx1QFXvXwcxoqXkJc9f5fUf0tj%2B6BOrQi2F3WGGj/HC4RMHKlUBa1/FyVgQ9n/QogE9tRnXyrULX4lxlaHuTLfaJgbwJJ/T75g1uezuLduweMDx9guamd0SyYWYs3Ch/1cY6o4isWFBkLP1rnJdY92w%2BrssUfV6Zbes0SZxC7D9LsrxASbrlUrsAH2K5e6d3A1d43ch2OpM8vQCpl1lwjdDikce5LjlU%2BS65zSjaVIbruAFXq7SOxK4dzdr52y%2BeouP8CfbMRxSpakvgGIrP7Dqg9nVA"},{"key":"shuqijsrwbody4","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619114308&sign=782d95885713b3ff20b109fcba82af92&from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=13.2.2&ustatus=1&umidtoken=%2BBZLeYpLOqIT4zV4%2Bhn%2FiJXqilQxlVPQ&net_env=wifi&placeid=111111&user_id=2050988098&sn=5046D99BE860239DF7A630BB10ED31512C69610C&msv=10.0.0&brand=Apple&imei=B72D92743E7D5DAD3F6934B749B0A9DD78C05484&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9CNzJEOTI3NDNFN0Q1REFEM0Y2OTM0Qjc0OUIwQTlERDc4QzA1NDg0Iiwic24iOiJmYXN0XzUwNDZEOTlCRTg2MDIzOURGN0E2MzBCQjEwRUQzMTUxMkM2OTYxMEMiLCJleHAiOjE2MTk2Mjk1MDMsInVzZXJJZCI6IjIwNTA5ODgwOTgiLCJpYXQiOjE2MTkxMTExMDMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.1AJky1zuDISic7KXWdrAM88o-6eAfJXimvhIVa93GO4RY5LR6uTmhMxZSdsCn2nSF4QrHO_iqz2GRxMi1rBWng&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhone6splus&wh=1242x2688&utype=vip&utdid=YIGsoJqQgOsDAPHj6tXER9jk&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqijsfxbody4","val":"actTaskId=327&wua=ktgi_5kHt8QoZv9j3dAOG4hjmUymPmnb1MJ%2F2sExmx6GYnl8hJnRUDuiKzKIvNoezK%2FEO%2FzcePguovmBm0qi4S%2Bf6JhASsIqf9VplUr8XL41a4es42Mpp1IQhU4jh%2F2V1JFoyU9LDq1qW53XdPv5rOzpwYPz2%2BUsIyABGp9JKA0HRPAVZce0ddwXKOO%2FYAWBW9MteA%2Bz3V6Tc%2Feu8BQaW7LQmcnzwcL3x9Ge2iniNKNgTfG9ap5NPq35wLeLZBlNN4ipU00x8VJ3rIHluNza40G0x1qMCW0GcJkRM3dSHye0QNdygDesqZ88Tt01dboej%2B2q5sbnz0S5uVl5hNiXBFffwYvFU2t%2BYxZrIuom6peEvAbapcoajdBdpEtzdbO4fL2HP&ua=&miniWua=HHnB_K8Z7ezpXuWWVVcanyXlt42hB2AGOJI1yCf1dkJp%2BnHIySMe7qOQt0yLstl2rMMD8BPkFuGzHJOa1EnC3fAvn9M%2Fu2GrPiyvu4HjlSejt6uufIKYX3sfc5sEQxohiCHXn&userId=2051347392&umidtoken=cCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124596&sqSv=1.0&sign=5b3a65f635e94a1d725371a9efef8ea3&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3DcCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3D54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6%26msv%3D10.0.0%26brand%3DApple%26imei%3D7FA6A0239C2DAD734E963080190F1353DA44CCC5%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpngbK1LW0DAB5A64dsqac2%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=719&user_id=2051347392&requestSrc=h5&userId=2051347392&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629124622&sqSv=1.0&sign=f438fb4aadf191a989f0806dd6e137d4&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.1%26ustatus%3D1%26umidtoken%3DcCJLhjZLOgK0tjV7TwZPcSzyJFNrVYIq%26net_env%3D2g%26placeid%3D111111%26user_id%3D2051347392%26sn%3D54E1A63AB7F04718FD1C1B4BF87B43A856FB59F6%26msv%3D10.0.0%26brand%3DApple%26imei%3D7FA6A0239C2DAD734E963080190F1353DA44CCC5%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUxMzQ3MzkyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83RkE2QTAyMzlDMkRBRDczNEU5NjMwODAxOTBGMTM1M0RBNDRDQ0M1Iiwic24iOiJmYXN0XzU0RTFBNjNBQjdGMDQ3MThGRDFDMUI0QkY4N0I0M0E4NTZGQjU5RjYiLCJleHAiOjE2Mjk2Mzg4MzYsInVzZXJJZCI6IjIwNTEzNDczOTIiLCJpYXQiOjE2MjkxMjA0MzYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.AvZB9exW7bbLqKxatPoXUt7T6XOAldj5-TK4MOjH6dsy1wHK-EhrvvU-HLv9L44kdvSZGWTU3wQmDfON1vz0yQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpngbK1LW0DAB5A64dsqac2%26idfa%3D5E1B9CB0-9916-4099-9F17-DB3223E3CAE6"},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=1970593254&sqSv=1.0&timestamp=1629125170&sign=b9ae331fc68592001610c02e09675060&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YRpnyfZWB%2FgDANbEC51opP0j&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=1970593254&sn=181098E304F5A7132329D57B75C2E86C3ECD8576&umidtoken=YRpnyfZWB%2FgDANbEC51opP0j&msv=8.0.0&brand=Apple&imei=56B481EA20D83FB337136254D4AFA7213E67F45D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTYzODk2NiwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyMDU2Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.qQGsOcpeEp9z60VTns-0gLZREQ0l9Sh4wCm9RNrEHobNJoYH29cdWWrzTmfYKtQvlyTYI308OekzdZXt3Qgi2A&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=56B481EA20D83FB337136254D4AFA7213E67F45D&isNewUser=-1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=007daed5e961e71e5b22557fcb73d768&sn=181098E304F5A7132329D57B75C2E86C3ECD8576&soft_id=21&timestamp=1629124958&user_id=1970593254&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26umidtoken%3DYRpnyfZWB/gDANbEC51opP0j%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpnyfZWB/gDANbEC51opP0j%26utype%3Dvip%26sdk%3D13.2&deliveryId=807&key=sq_app_ad&miniWua=HHnB_5z99LRnLyZamFrhR0Py1cd8y2W00stXpxZmIxjTVhIU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=CCA7676549A9334CEB271EB0364FA0D0&timestamp=1629124978&userId=1970593254&user_id=1970593254&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgmpmF6MSL0qJgQHKXtKqngrplxMeazRNGJhCu/WeVaoG9GrXxsXBgVa184mhhIHIT6e6z2GKyRn9JFMtOj5zGF7GvnO57t41xoxrX9psC1zyh/4joUfzHN3UZ17zAwiPs%2By19zMqUi0nJJpxEHaSFfkiZ4l8ONRtERo4AO8ycvgnx9MCP5qpjhmupxwhxgRMQ/54G7o7A0lOTojSW17IH30%3D"},{"key":"shuqiscbody5","val":"_public=idfa%253D0FFC2947-685E-492F-82F6-971A27C80C20%2526ustatus%253D1%2526net_env%253D2g%2526umidtoken%253DhGNL52ZLOkNAujV7T0km8q%252FpJzIOBJrI%2526placeid%253D111111%2526user_id%253D1970593254%2526sn%253DA36DE4D03BCC30E70D05E115CDDEC318982E5FB3%2526msv%253D10.0.0%2526brand%253DApple%2526imei%253D8C64FD24926DA7ACFFE585C31475AA450CF44E7E%2526appVer%253D1.0.5.0%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ%2526statusBarHeight%253D44.000000%2526platform%253D116%2526ver%253D210331%2526mod%253DiPhone11%2526wh%253D1242x2688%2526utype%253Dvip%2526utdid%253DYRpoPQrfWH4DAISfr4c0rvrt%2526sdk%253D13.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1629125121%2C%22readObjType%22%3A1%2C%22attr%22%3A3%2C%22readObjId%22%3A%227978589%22%2C%22readChapterId%22%3A1268761%2C%22readingLen%22%3A36%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2BA3A0E6ADF34983357803827801F71B&timestamp=1629125158&user_id=1970593254"},{"key":"shuqiydbody5","val":"_public=skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26umidtoken%3DYRpnyfZWB/gDANbEC51opP0j%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpnyfZWB/gDANbEC51opP0j%26utype%3Dvip%26sdk%3D13.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_CkrCSFE%2BpVt9H4uwMFNN%2BoZtTC0xzSnPsYpqjzRw5tQ%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=CBC775F9388BA581A320FB8E5C868334&timestamp=1629125035&userId=1970593254&wua=HIVW_8rNi8jHulRpxX/V8y7tqPUqMTUqWD5kgKh7fj4X3syCW51jCKVH0a/C8%2BRoUKAJhPqFEWsd49fVobeMsn2O9TsOIaizA3ia8HEssZtfnYxLNK%2BhsciB/VI6jyIJITj4CuV8eyLOakAn/%2BOC58fE03ZWPKtHpFXgh1/lmDMaIxLR3p%2BswSwo0cBOx90Zm/YUhPtE11UC%2B2vJJ0jJi7sjut0juUfgABnhTRaMp%2B%2BQy1tQ%3D"},{"key":"shuqiqdbody5","val":"clientTimestamp=1629124971&position=501&signInType=1&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgmZgT97%2FIv5GLDVowswOAQ2BJRMLqgdy0Cc7mAsSgrb4n1E%2B9rlVgzerQ5v6Wz7GLA%2BnnITBNIe3cBfNOwkTQu5GsxYX8jJmeWAw7xWedhr4GyNTb80dd0IExdSQeEXCXAUNbBkbrE8pA83VxF5A5ZyJ3F59U5b8wce53QVvEz%2F4XVBE2nTep0o0JZb5yIlJ%2BUpw5erDtXiMZiysSkR1xJQ%3D&ua=&miniWua=HHnB_6nu0zHayGzph3FH5RDDkRqDEOfN4latabbV53mHqNAE%3D&userId=1970593254&umidtoken=YRpnyfZWB%252FgDANbEC51opP0j&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124971&sqSv=1.0&sign=6849654de8f6e28103b9f2abd041ea66&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.2%26utdid%3DYRpnyfZWB%25252FgDANbEC51opP0j%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26umidtoken%3DYRpnyfZWB%25252FgDANbEC51opP0j%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqirwbody5","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619076223&sign=7e43399036edb749623a85f5c2331041&serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YIEPc%2F99z64DAIlpsFFVGebB&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2050988098&sn=7639A3E314CF06FCA6D98CC79D6B555157293A1F&umidtoken=YIEPc%2F99z64DAIlpsFFVGebB&msv=8.0.0&brand=Apple&imei=E6095B9B70A382D39929338988B0CB6738C667DE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiRTYwOTVCOUI3MEEzODJEMzk5MjkzMzg5ODhCMENCNjczOEM2NjdERSIsInNuIjoiNzYzOUEzRTMxNENGMDZGQ0E2RDk4Q0M3OUQ2QjU1NTE1NzI5M0ExRiIsImV4cCI6MTYxOTU5NDYyMSwidXNlcklkIjoiMjA1MDk4ODA5OCIsImlhdCI6MTYxOTA3NjIyMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.aFrNlQ78_dTR8ouDxlD7VckRUyd828aNpVky69ekW7JYj9Wf09k8qtFpOcwU4MhcX2-MCJd807BdH1IzX1FLCA&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=626&user_id=1970593254&requestSrc=h5&userId=1970593254&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629125051&sqSv=1.0&sign=e83c3466c7164912730e646d19601449&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.2%26utdid%3DYRpnyfZWB%25252FgDANbEC51opP0j%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26umidtoken%3DYRpnyfZWB%25252FgDANbEC51opP0j%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=1970593254&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124999&sqSv=1.0&sign=4995fba2520f464baa4f4e865db58472&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.2%26utdid%3DYRpnyfZWB%25252FgDANbEC51opP0j%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26umidtoken%3DYRpnyfZWB%25252FgDANbEC51opP0j%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqisqjlbody5","val":"src=&userId=1970593254&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1629124987&sqSv=1.0&sign=29c4caec95eb37736a225b8520dfb6e9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D13.2%26utdid%3DYRpnyfZWB%25252FgDANbEC51opP0j%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26umidtoken%3DYRpnyfZWB%25252FgDANbEC51opP0j%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1629125053&userId=1970593254&activityId=311&sqSv=1.0&sign=6b14cb9e2fbbdd17a768afe149f9ff0c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYRpnyfZWB%25252FgDANbEC51opP0j%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26umidtoken%3DYRpnyfZWB%25252FgDANbEC51opP0j%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26umidtoken%3DYRpnyfZWB/gDANbEC51opP0j%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYRpnyfZWB/gDANbEC51opP0j%26utype%3Dvip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_HVRJW1bm74jlXzI/ddb1%2BzTrxcdb6KzDmE/Hn380t4o%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=DC5BEE73CE6485A67B55D13C2E793CA1&timestamp=1629124990&userId=1970593254&user_id=1970593254&wua=HIVW_lwZ2FiT/tqwQgTV5Wbxv/lCV9xTF2yt7Tm4HaCjHO2W%2B1PrnL2ncBqD1TbN9eguxj/l%2Bztjla72Qx9zMYjcOlB/e1S1p1kwzBlFf6yCQGkAaZEITJspCdWT10ycfIiXZEGuzw%2BIhk9x9VHi3fhoRAc6SWCGU9Ool%2BYB8pK/IHGfqRE0H5XYFUxXAsEjbFo6gkja9pTbLajb/mQ8quteZayx7mHXq3kO0PYgua6OLkkg%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_YifnMGEGY4iWRRKTzIzK8i5expuGl4nnyDv%2BlCtxuyGChBKKDin2A44COS%2F6XDNTPqXRAZ64is0hCLkB0AbIsqoA73PFgnt3dtSiJT4KBWaC2Qye28YU9ljTSlQ3lEImdht2ATDD1PmPKJuET%2FomsmiBlEh0CztVWtWm664maIuP19ypwuOVqvppp0%2BTqsAKH2xMLCb2s2jiZd4kmiff0zX3hRQ1JWj6nylJFVOU7Yg%3D&ua=&userId=1970593254&umidtoken=YRpnyfZWB%252FgDANbEC51opP0j&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629124994&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c708195ec105cf9f1e57d0bdf5646cc1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYRpnyfZWB%25252FgDANbEC51opP0j%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3D181098E304F5A7132329D57B75C2E86C3ECD8576%26umidtoken%3DYRpnyfZWB%25252FgDANbEC51opP0j%26msv%3D8.0.0%26brand%3DApple%26imei%3D56B481EA20D83FB337136254D4AFA7213E67F45D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTZCNDgxRUEyMEQ4M0ZCMzM3MTM2MjU0RDRBRkE3MjEzRTY3RjQ1RCIsInNuIjoiMTgxMDk4RTMwNEY1QTcxMzIzMjlENTdCNzVDMkU4NkMzRUNEODU3NiIsImV4cCI6MTYyOTY0MzM1OSwidXNlcklkIjoiMTk3MDU5MzI1NCIsImlhdCI6MTYyOTEyNDk1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YRK_dNqNES9vITAgZjpagtWbFNKaCsQo3b7Ps2wwbc5tdhlW8GeVLlqw5HMggrokOLZeRXQFPLf10T7qxCzbhw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqijsspbody5","val":"_public=idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20%26ustatus%3D1%26net_env%3D2g%26umidtoken%3DhGNL52ZLOkNAujV7T0km8q/pJzIOBJrI%26placeid%3D111111%26user_id%3D1970593254%26sn%3DA36DE4D03BCC30E70D05E115CDDEC318982E5FB3%26msv%3D10.0.0%26brand%3DApple%26imei%3D8C64FD24926DA7ACFFE585C31475AA450CF44E7E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpoPQrfWH4DAISfr4c0rvrt%26sdk%3D13.2&deliveryId=897&key=sq_app_ad&miniWua=HHnB_SqAfK3L/iyaGIgJ2CjXdhn%2BiPrIrZ%2Bx9mLuxNA2BmcN30WtaeDsWJ0AoENdwpTxDnYo1cP/3h5lGVWeS1ht7Ql5vgcLnXqqh2QdYWsLLnkT8UlI3iwgoIt5iFFGLGpCn&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=ABB9DEB276E033CCF1F99BF2F4CA5197&timestamp=1629125089&userId=1970593254&user_id=1970593254&wua=ktgi_/3UOs6Pq96BAyzjn%2BAE30f9Hm0VniAMB1/9T%2BmpdCOXAN9QM0Y9JUXDJ0DKxuLDOyioYpOeHYH8/%2B2JusVaYqRpX9CBXCIcXm010W96b96AAwwQpBJr1ng6UAz%2BIhIhZU8Co7FgtJp1UMLJ8aMqCaYtmOUfLqmCkUBFSiPStfDMEZ4iMmhHuDtlkjuHd0n/bwIyrpj7JJQyBtbKUPlnMSmRId30LGYTyqhJlFkWpqhMA5FIj8G/tLpuxh4yBeQe/f9iUE2xewY1WvYf/qEoBjHc32TEI1GRROcINP/6gYJiIad4pzTK9JqdwSuAr6MJAKJ4lEiyugvVSeRznvWNWcIh4I0jmUVzBbwOn/udH5tOB%2BDYFLbCwo/06081Y2BJ2"},{"key":"shuqijsydurl5","val":"https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=13.2&ustatus=1&umidtoken=hGNL52ZLOkNAujV7T0km8q%2FpJzIOBJrI&net_env=2g&placeid=111111&user_id=1970593254&sn=A36DE4D03BCC30E70D05E115CDDEC318982E5FB3&msv=10.0.0&brand=Apple&imei=8C64FD24926DA7ACFFE585C31475AA450CF44E7E&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone11&wh=1242x2688&utype=vip&utdid=YRpoPQrfWH4DAISfr4c0rvrt&idfa=0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqijsydbody5","val":"actId=355&miniWua=HHnB_teikiDuQOkUXxLdmWVQa2TGS3ymuif3iEO6Cr8m22FqsEvGblPZpR92R6c%2BY/KXoV7GQZDzux%2B3h/8DG2bddNJpcDqDhi7Rtpx3EBPvVr5ZkO%2B8tjCEq4sgN8d71cmux&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629125150&userId=1970593254&wua=ktgi_txGRkje63dYdZF4vP9/sJ6DOLe7JGBB76T4JaAsaeWRX9J%2BKQN0sa0QhUbCizApK27uo11ccqnC%2BEJNag7ve5bACLC/KuFjxWpJHArKaXsaLNQvevO76rztQIvpqOkrAWVcvc2noxlF7x/SM6Eq1K3sUjciSkheT7lue89bFeT6Shqg1qYRcC69OnFBrxjs/8tH4/vjozKe9LNy2yw9paCsJL1dL6SAtZjAmoGpg3pCvdsKN7GZfbSpoyY/gi%2BwcFDhSEy91c%2B0I9A48pAF9%2BQwid4326WWo/6jyMJnrOcuNI%2BuR10cc2j1x9i%2BFnAQ3vQZz5cY3TWHN3WrtMel4BB88nCEjWirViP9WJgE5YRNjy2QZZqOvrvdiCU3OztzS"},{"key":"shuqijsqdbody5","val":"clientTimestamp=1629125072&position=601&signInType=1&wua=ktgi_0Ev5GbU7g9l7fs0xSzlVgzsvgyL%2BdJFQYVGjzYi0AOvo%2F5%2F8yULSMDCe09HwGMlTVPPND%2BfiGE63YsGI3Ru3RzC7u0r6h9FuEug1mIF4Q0l2rF%2BSDQMDQI3waisTYk9VJyN7TkpEqPDMolgi24WjO7PHMT4uMJ%2BJaSo7r42mMCeAHw3pRcN3J0Hvl9w%2ByxgBekMfMihjvLOGf110o7dcp%2B89l7CL83uDy57vpV4HLaM7xh2NxiPp5new5yhzBuhfYoVihm3Hgzmb5qW7NZTZl8sr6DqOAqxjSfMd4W2sZmGerK4aXXNjU4GtYLu28T8v8XvjMSY%2BLtiVJBjtatGG7gbHoYt7P7kwweEI9R%2FXV7%2FEuaBk%2FRrSOxCyd6ul6Muq&ua=&miniWua=HHnB_%2F%2BTsOXNsyy4YhBi9ctjVju7G92XKpiiwjcf5Dps7x2PK4lz1h%2FZVA%2Fcv09P%2BOWuibBeK2YvV7UiVZpaAygCaxdB8g9f9f8n1smLGR2xlDUd7lcQhIg3bS5Ldljc%2FhKHS&userId=1970593254&umidtoken=hGNL52ZLOkNAujV7T0km8q%252FpJzIOBJrI&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629125072&sqSv=1.0&sign=35fc4ef78dab4f99a5eab032951f2564&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2%26ustatus%3D1%26umidtoken%3DhGNL52ZLOkNAujV7T0km8q%25252FpJzIOBJrI%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3DA36DE4D03BCC30E70D05E115CDDEC318982E5FB3%26msv%3D10.0.0%26brand%3DApple%26imei%3D8C64FD24926DA7ACFFE585C31475AA450CF44E7E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpoPQrfWH4DAISfr4c0rvrt%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqijsqdspyurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=717&user_id=1970593254&requestSrc=h5&userId=1970593254&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629125172&sqSv=1.0&sign=8e333234e6b1b6661b6cf7b0af3c3978&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2%26ustatus%3D1%26umidtoken%3DhGNL52ZLOkNAujV7T0km8q%25252FpJzIOBJrI%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3DA36DE4D03BCC30E70D05E115CDDEC318982E5FB3%26msv%3D10.0.0%26brand%3DApple%26imei%3D8C64FD24926DA7ACFFE585C31475AA450CF44E7E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpoPQrfWH4DAISfr4c0rvrt%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqijsqdspbody5","val":"_public=idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20%26ustatus%3D1%26net_env%3D2g%26umidtoken%3DhGNL52ZLOkNAujV7T0km8q/pJzIOBJrI%26placeid%3D111111%26user_id%3D1970593254%26sn%3DA36DE4D03BCC30E70D05E115CDDEC318982E5FB3%26msv%3D10.0.0%26brand%3DApple%26imei%3D8C64FD24926DA7ACFFE585C31475AA450CF44E7E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpoPQrfWH4DAISfr4c0rvrt%26sdk%3D13.2&deliveryId=980&key=sq_app_ad&miniWua=HHnB_buBKy9c5Vyly6o65jJU6DStUgINNZq/7Hbm4vuS3PnBanrITpn/xn1pSJl2w%2BDtPvs28LVI4uZp8H0IatB6T6zMC3%2BwExv5GXnDiA0AWmdepJO8PAkKQ0Qr4UwhJc2nS&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=AFA1B74C02ABDD4FB957446CB29C8197&timestamp=1629125076&userId=1970593254&user_id=1970593254&wua=ktgi_%2BmO52g1uI7XwzSehzutCeJh65O1Br2xylZ5sHfmVSMJDi3TN2ceoydXDCUaOirKTs3EFYiKY/NdH/WkvS/sa74THgINZLRCwluUELVPchhcn3NlH3rtViTiCG9t0tH/vqZLC7xMri5DolQ4oXs3bibKLO37xwo5NcuFpBTgkYeKOToo4Rzv/9qRc4vkPK3tykO90bELC1PpPy400XSDnJtk7GDFYrbbLvX2qEIXdGQU1Ppx340u0u762PXGdZ/8rtyRqwpQjKXnGcCmvmySwhvsOuzZSthAueq6kJjm0IBBAzVCHlod54kscHAJlcxT/MkZSEJJP6y0Z5Pm9PH0GXE3YS0%2Bhrre1mbogrZeD6AQT9Ul3yU79pA3TbPZzSBcG"},{"key":"shuqijsrwbody5","val":"params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2050988098&timeStamp=1619114308&sign=782d95885713b3ff20b109fcba82af92&from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=13.2.2&ustatus=1&umidtoken=%2BBZLeYpLOqIT4zV4%2Bhn%2FiJXqilQxlVPQ&net_env=wifi&placeid=111111&user_id=2050988098&sn=5046D99BE860239DF7A630BB10ED31512C69610C&msv=10.0.0&brand=Apple&imei=B72D92743E7D5DAD3F6934B749B0A9DD78C05484&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwOTg4MDk4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9CNzJEOTI3NDNFN0Q1REFEM0Y2OTM0Qjc0OUIwQTlERDc4QzA1NDg0Iiwic24iOiJmYXN0XzUwNDZEOTlCRTg2MDIzOURGN0E2MzBCQjEwRUQzMTUxMkM2OTYxMEMiLCJleHAiOjE2MTk2Mjk1MDMsInVzZXJJZCI6IjIwNTA5ODgwOTgiLCJpYXQiOjE2MTkxMTExMDMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.1AJky1zuDISic7KXWdrAM88o-6eAfJXimvhIVa93GO4RY5LR6uTmhMxZSdsCn2nSF4QrHO_iqz2GRxMi1rBWng&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhone6splus&wh=1242x2688&utype=vip&utdid=YIGsoJqQgOsDAPHj6tXER9jk&idfa=373AB960-5548-48C3-9087-929ABAB0B4B9"},{"key":"shuqijsfxbody5","val":"actTaskId=327&wua=ktgi_1nDOb%2B2LOm0xtJPqpgpDi6VTgmD%2B%2BY4tCJ19tueXAyA5Rs67doSV9X0sB6hZKnIQ3cp%2Fu%2FQ4Y9jKqwWspS3tsjUkT4xVjz%2FqvIzh1Fh%2B%2FseHJl%2B8bwdiEkQlqYCI6MKUVsnuLRlccAPtIHGvY1yYbzTUGDVsiZqW3oHUW946Syr96aG8oJ5B6dwgAK4i2mL%2BHyMDYDH9Oil8vuBvUYzCIrZ1YgBb78jLyUTo%2BVaMWX%2BqOzD2eNe95IP1LV4nWoF5KIdXEH%2FPL4C55hc85m0Bbz%2F8MmpBBZtBKNzJdO7efnaLraHK5jGc%2BF%2BN5DIp6yuvewk%2FQPoh9jgoh8JrmXxSTY8w7ejh8IhHqXZrj3qf19qVjsj8Hg4dx1H1lZm%2BaDFO&ua=&miniWua=HHnB_%2BEqLYv9qBW4nw9UftdMPy0CHIAimNsVW8j%2Fc1wzw1CAJy080qcMTHjpjqt9G6P%2FuQmk5cinn3vhpSgzMQ0WErW8nMCZ6jz2fKuxBPK99FwRYE%2FBuDUXJpAjpT7j6aRmX&userId=1970593254&umidtoken=hGNL52ZLOkNAujV7T0km8q%252FpJzIOBJrI&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629125103&sqSv=1.0&sign=ac7a628e00a61f41b345d97d52c90ac3&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2%26ustatus%3D1%26umidtoken%3DhGNL52ZLOkNAujV7T0km8q%25252FpJzIOBJrI%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3DA36DE4D03BCC30E70D05E115CDDEC318982E5FB3%26msv%3D10.0.0%26brand%3DApple%26imei%3D8C64FD24926DA7ACFFE585C31475AA450CF44E7E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpoPQrfWH4DAISfr4c0rvrt%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=719&user_id=1970593254&requestSrc=h5&userId=1970593254&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629125171&sqSv=1.0&sign=4a6114bc729483e348dd645e23628b03&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.2%26ustatus%3D1%26umidtoken%3DhGNL52ZLOkNAujV7T0km8q%25252FpJzIOBJrI%26net_env%3D2g%26placeid%3D111111%26user_id%3D1970593254%26sn%3DA36DE4D03BCC30E70D05E115CDDEC318982E5FB3%26msv%3D10.0.0%26brand%3DApple%26imei%3D8C64FD24926DA7ACFFE585C31475AA450CF44E7E%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTcwNTkzMjU0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF84QzY0RkQyNDkyNkRBN0FDRkZFNTg1QzMxNDc1QUE0NTBDRjQ0RTdFIiwic24iOiJmYXN0X0EzNkRFNEQwM0JDQzMwRTcwRDA1RTExNUNEREVDMzE4OTgyRTVGQjMiLCJleHAiOjE2Mjk2MzkwNTUsInVzZXJJZCI6IjE5NzA1OTMyNTQiLCJpYXQiOjE2MjkxMjA2NTUsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.H96HzkExva1ze2f7GQNrQBOzg7vU2HTRlRcDDgmkEPplgv2FI1n8fZ5y1Hmm1pw6TEfUieazgMz1cPRm05TzzQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYRpoPQrfWH4DAISfr4c0rvrt%26idfa%3D0FFC2947-685E-492F-82F6-971A27C80C20"},{"key":"shuqiuserurl6","val":""},{"key":"shuqisyurl6","val":""},{"key":"shuqisybody6","val":""},{"key":"shuqispbody6","val":""},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":""},{"key":"shuqirwbody6","val":""},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":""},{"key":"shuqijlbody6","val":""},{"key":"shuqisqjlbody6","val":""},{"key":"shuqicjyurl6","val":""},{"key":"shuqicjcsbody6","val":""},{"key":"shuqicjbody6","val":""},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":""},{"key":"shuqisyurl7","val":""},{"key":"shuqisybody7","val":""},{"key":"shuqispbody7","val":""},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":""},{"key":"shuqirwbody7","val":""},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":""},{"key":"shuqijlbody7","val":""},{"key":"shuqisqjlbody7","val":""},{"key":"shuqicjyurl7","val":""},{"key":"shuqicjcsbody7","val":""},{"key":"shuqicjbody7","val":""},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":""},{"key":"shuqisyurl8","val":""},{"key":"shuqisybody8","val":""},{"key":"shuqispbody8","val":""},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":""},{"key":"shuqirwbody8","val":""},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":""},{"key":"shuqijlbody8","val":""},{"key":"shuqisqjlbody8","val":""},{"key":"shuqicjyurl8","val":""},{"key":"shuqicjcsbody8","val":""},{"key":"shuqicjbody8","val":""},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":""},{"key":"shuqisyurl9","val":""},{"key":"shuqisybody9","val":""},{"key":"shuqispbody9","val":""},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":""},{"key":"shuqirwbody9","val":""},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":""},{"key":"shuqijlbody9","val":""},{"key":"shuqisqjlbody9","val":""},{"key":"shuqicjyurl9","val":""},{"key":"shuqicjcsbody9","val":""},{"key":"shuqicjbody9","val":""},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":""},{"key":"shuqisyurl10","val":""},{"key":"shuqisybody10","val":""},{"key":"shuqispbody10","val":""},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":""},{"key":"shuqirwbody10","val":""},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":""},{"key":"shuqijlbody10","val":""},{"key":"shuqisqjlbody10","val":""},{"key":"shuqicjyurl10","val":""},{"key":"shuqicjcsbody10","val":""},{"key":"shuqicjbody10","val":""},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":""},{"key":"shuqisyurl11","val":""},{"key":"shuqisybody11","val":""},{"key":"shuqispbody11","val":""},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":""},{"key":"shuqirwbody11","val":""},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":""},{"key":"shuqijlbody11","val":""},{"key":"shuqisqjlbody11","val":""},{"key":"shuqicjyurl11","val":""},{"key":"shuqicjcsbody11","val":""},{"key":"shuqicjbody11","val":""},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":""},{"key":"shuqisyurl12","val":""},{"key":"shuqisybody12","val":""},{"key":"shuqispbody12","val":""},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":""},{"key":"shuqirwbody12","val":""},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":""},{"key":"shuqijlbody12","val":""},{"key":"shuqisqjlbody12","val":""},{"key":"shuqicjyurl12","val":""},{"key":"shuqicjcsbody12","val":""},{"key":"shuqicjbody12","val":""},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":""},{"key":"shuqisyurl13","val":""},{"key":"shuqisybody13","val":""},{"key":"shuqispbody13","val":""},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":""},{"key":"shuqirwbody13","val":""},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":""},{"key":"shuqijlbody13","val":""},{"key":"shuqisqjlbody13","val":""},{"key":"shuqicjyurl13","val":""},{"key":"shuqicjcsbody13","val":""},{"key":"shuqicjbody13","val":""},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":""},{"key":"shuqisyurl14","val":""},{"key":"shuqisybody14","val":""},{"key":"shuqispbody14","val":""},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":""},{"key":"shuqirwbody14","val":""},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":""},{"key":"shuqijlbody14","val":""},{"key":"shuqisqjlbody14","val":""},{"key":"shuqicjyurl14","val":""},{"key":"shuqicjcsbody14","val":""},{"key":"shuqicjbody14","val":""},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":""},{"key":"shuqisyurl15","val":""},{"key":"shuqisybody15","val":""},{"key":"shuqispbody15","val":""},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":""},{"key":"shuqirwbody15","val":""},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":""},{"key":"shuqijlbody15","val":""},{"key":"shuqisqjlbody15","val":""},{"key":"shuqicjyurl15","val":""},{"key":"shuqicjcsbody15","val":""},{"key":"shuqicjbody15","val":""},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
const logs = 0; // 0为关闭日志，1为开启
notifyttt = 1; // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
Minutes = 10; // 通知 默认控制在0-10分内
$.message = '', COOKIES_SPLIT = '', CASH = '', XH = 0, TXTX = 0, SC = 0, ddtime = '';
CZ = 10
Length = 0
let shuqiuserurlArr = [];
let shuqisyurlArr = [];
let shuqisybodyArr = [];
let shuqispbodyArr = [];
let shuqiscbodyArr = [];
let shuqiydbodyArr = [];
let shuqiqdbodyArr = [];
let shuqirwbodyArr = [];
let shuqifxbodyArr = [];
let shuqisprwurlArr = [];
let shuqijlbodyArr = [];
let shuqisqjlbodyArr = [];
let shuqicjyurlArr = [];
let shuqicjcsbodyArr = [];
let shuqicjbodyArr = [];
let shuqijsspbodyArr = [];
let shuqijsydurlArr = [];
let shuqijsydbodyArr = [];
let shuqijsqdbodyArr = [];
let shuqijsqdspyurlArr = [];
let shuqijsqdspbodyArr = [];
let shuqijsrwbodyArr = [];
let shuqijsfxbodyArr = [];
let shuqijsbookurlArr = [];
let shuqijsbookbodyArr = [];
let shuqijssprwurlArr = [];
let shuqiuserurlVal = ``;
let shuqisyurlVal = ``;
let shuqisybodyVal = ``;
let shuqispbodyVal = ``;
let shuqiscbodyVal = ``;
let shuqiydbodyVal = ``;
let shuqiqdbodyVal = ``;
let shuqirwbodyVal = ``;
let shuqifxbodyVal = ``;
let shuqisprwurlVal = ``;
let shuqijlbodyVal = ``;
let shuqisqjlbodyVal = ``;
let shuqicjyurlVal = ``;
let shuqicjcsbodyVal = ``;
let shuqicjbodyVal = ``;
let shuqijsspbodyVal = ``;
let shuqijsydurlVal = ``;
let shuqijsydbodyVal = ``;
let shuqijsqdbodyVal = ``;
let shuqijsqdspyurlVal = ``;
let shuqijsqdspbodyVal = ``;
let shuqijsrwbodyVal = ``;
let shuqijsfxbodyVal = ``;
let shuqijsbookurlVal = ``;
let shuqijsbookbodyVal = ``;
let shuqijssprwurlVal = ``;
let middleshuqiuserURL = [];
let middleshuqisyURL = [];
let middleshuqisyBODY = [];
let middleshuqispBODY = [];
let middleshuqiscBODY = [];
let middleshuqiydBODY = [];
let middleshuqiqdBODY = [];
let middleshuqirwBODY = [];
let middleshuqifxBODY = [];
let middleshuqisprwURL = [];
let middleshuqijlBODY = [];
let middleshuqisqjlBODY = [];
let middleshuqicjyURL = [];
let middleshuqicjcsBODY = [];
let middleshuqicjBODY = [];
let middleshuqijsspBODY = [];
let middleshuqijsydURL = [];
let middleshuqijsydBODY = [];
let middleshuqijsqdBODY = [];
let middleshuqijsqdspyURL = [];
let middleshuqijsqdspBODY = [];
let middleshuqijsrwBODY = [];
let middleshuqijsfxBODY = [];
let middleshuqijsbookURL = [];
let middleshuqijsbookBODY = [];
let middleshuqijssprwURL = [];
if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：方式一 boxjs复制会话 =============\n`
    );
}
if ($.isNode() && COOKIE.shuqiuserurl && COOKIE.shuqiuserurl != '') {
    console.log(
        `============ cookie方式为：方式二 boxjs复制数据 =============\n`
    );
}
if ($.isNode() && COOKIE.shuqiuserurlVal && COOKIE.shuqiuserurlVal != '') {
    console.log(
        `============ cookie方式为：方式三 直接填写 =============\n`
    );
}

if ($.isNode() && process.env.SQ_shuqiuserURL) {
    TXTX = process.env.SQ_TXTX || "0";
    SC = process.env.SQ_SC || "0";
    notifyttt = process.env.SQ_notifyttt || "1";
    notifyInterval = process.env.SQ_notifyInterval || "2";
    Minutes = process.env.SQ_Minutes || "10";

    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );;
    if (
        process.env.SQ_shuqiuserURL &&
        process.env.SQ_shuqiuserURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiuserURL = process.env.SQ_shuqiuserURL.split(COOKIES_SPLIT);
    } else {
        middleshuqiuserURL = process.env.SQ_shuqiuserURL.split();
    }
    if (
        process.env.SQ_shuqisyURL &&
        process.env.SQ_shuqisyURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisyURL = process.env.SQ_shuqisyURL.split(COOKIES_SPLIT);
    } else {
        middleshuqisyURL = process.env.SQ_shuqisyURL.split();
    }
    if (
        process.env.SQ_shuqisyBODY &&
        process.env.SQ_shuqisyBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisyBODY = process.env.SQ_shuqisyBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqisyBODY = process.env.SQ_shuqisyBODY.split();
    }
    if (
        process.env.SQ_shuqispBODY &&
        process.env.SQ_shuqispBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqispBODY = process.env.SQ_shuqispBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqispBODY = process.env.SQ_shuqispBODY.split();
    }
    if (
        process.env.SQ_shuqiscBODY &&
        process.env.SQ_shuqiscBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiscBODY = process.env.SQ_shuqiscBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqiscBODY = process.env.SQ_shuqiscBODY.split();
    }
    if (
        process.env.SQ_shuqiydBODY &&
        process.env.SQ_shuqiydBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiydBODY = process.env.SQ_shuqiydBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqiydBODY = process.env.SQ_shuqiydBODY.split();
    }
    if (
        process.env.SQ_shuqiqdBODY &&
        process.env.SQ_shuqiqdBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiqdBODY = process.env.SQ_shuqiqdBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqiqdBODY = process.env.SQ_shuqiqdBODY.split();
    }
    if (
        process.env.SQ_shuqirwBODY &&
        process.env.SQ_shuqirwBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqirwBODY = process.env.SQ_shuqirwBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqirwBODY = process.env.SQ_shuqirwBODY.split();
    }
    if (
        process.env.SQ_shuqifxBODY &&
        process.env.SQ_shuqifxBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqifxBODY = process.env.SQ_shuqifxBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqifxBODY = process.env.SQ_shuqifxBODY.split();
    }
    if (
        process.env.SQ_shuqisprwURL &&
        process.env.SQ_shuqisprwURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisprwURL = process.env.SQ_shuqisprwURL.split(COOKIES_SPLIT);
    } else {
        middleshuqisprwURL = process.env.SQ_shuqisprwURL.split();
    }
    if (
        process.env.SQ_shuqijlBODY &&
        process.env.SQ_shuqijlBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqijlBODY = process.env.SQ_shuqijlBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqijlBODY = process.env.SQ_shuqijlBODY.split();
    }
    if (
        process.env.SQ_shuqisqjlBODY &&
        process.env.SQ_shuqisqjlBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisqjlBODY = process.env.SQ_shuqisqjlBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqisqjlBODY = process.env.SQ_shuqisqjlBODY.split();
    }
    if (
        process.env.SQ_shuqicjyURL &&
        process.env.SQ_shuqicjyURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqicjyURL = process.env.SQ_shuqicjyURL.split(COOKIES_SPLIT);
    } else {
        middleshuqicjyURL = process.env.SQ_shuqicjyURL.split();
    }
    if (
        process.env.SQ_shuqicjcsBODY &&
        process.env.SQ_shuqicjcsBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqicjcsBODY = process.env.SQ_shuqicjcsBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqicjcsBODY = process.env.SQ_shuqicjcsBODY.split();
    }
    if (
        process.env.SQ_shuqicjBODY &&
        process.env.SQ_shuqicjBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqicjBODY = process.env.SQ_shuqicjBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqicjBODY = process.env.SQ_shuqicjBODY.split();
    }

    if (process.env.SQ_shuqijsspBODY) {


        if (
            process.env.SQ_shuqijsspBODY &&
            process.env.SQ_shuqijsspBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsspBODY = process.env.SQ_shuqijsspBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsspBODY = process.env.SQ_shuqijsspBODY.split();
        }
        if (
            process.env.SQ_shuqijsydURL &&
            process.env.SQ_shuqijsydURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsydURL = process.env.SQ_shuqijsydURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijsydURL = process.env.SQ_shuqijsydURL.split();
        }
        if (
            process.env.SQ_shuqijsydBODY &&
            process.env.SQ_shuqijsydBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsydBODY = process.env.SQ_shuqijsydBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsydBODY = process.env.SQ_shuqijsydBODY.split();
        }
        if (
            process.env.SQ_shuqijsqdBODY &&
            process.env.SQ_shuqijsqdBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsqdBODY = process.env.SQ_shuqijsqdBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsqdBODY = process.env.SQ_shuqijsqdBODY.split();
        }
        if (
            process.env.SQ_shuqijsqdspyURL &&
            process.env.SQ_shuqijsqdspyURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsqdspyURL = process.env.SQ_shuqijsqdspyURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijsqdspyURL = process.env.SQ_shuqijsqdspyURL.split();
        }
        if (
            process.env.SQ_shuqijsqdspBODY &&
            process.env.SQ_shuqijsqdspBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsqdspBODY = process.env.SQ_shuqijsqdspBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsqdspBODY = process.env.SQ_shuqijsqdspBODY.split();
        }
        if (
            process.env.SQ_shuqijsrwBODY &&
            process.env.SQ_shuqijsrwBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsrwBODY = process.env.SQ_shuqijsrwBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsrwBODY = process.env.SQ_shuqijsrwBODY.split();
        }
        if (
            process.env.SQ_shuqijsfxBODY &&
            process.env.SQ_shuqijsfxBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsfxBODY = process.env.SQ_shuqijsfxBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsfxBODY = process.env.SQ_shuqijsfxBODY.split();
        }
        if (
            process.env.SQ_shuqijsbookURL &&
            process.env.SQ_shuqijsbookURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsbookURL = process.env.SQ_shuqijsbookURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijsbookURL = process.env.SQ_shuqijsbookURL.split();
        }
        if (
            process.env.SQ_shuqijsbookBODY &&
            process.env.SQ_shuqijsbookBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsbookBODY = process.env.SQ_shuqijsbookBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsbookBODY = process.env.SQ_shuqijsbookBODY.split();
        }
        if (
            process.env.SQ_shuqijssprwURL &&
            process.env.SQ_shuqijssprwURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijssprwURL = process.env.SQ_shuqijssprwURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijssprwURL = process.env.SQ_shuqijssprwURL.split();
        }

    }
}
if (COOKIE && COOKIE.shuqiuserurlVal) {
    if (!COOKIE.shuqijsspbodyVal || COOKIE.shuqijsspbodyVal == '') {
        SQ_COOKIES = {
            "shuqiuserurlVal": COOKIE.shuqiuserurlVal.split('\n'),
            "shuqisyurlVal": COOKIE.shuqisyurlVal.split('\n'),
            "shuqisybodyVal": COOKIE.shuqisybodyVal.split('\n'),
            "shuqispbodyVal": COOKIE.shuqispbodyVal.split('\n'),
            "shuqiscbodyVal": COOKIE.shuqiscbodyVal.split('\n'),
            "shuqiydbodyVal": COOKIE.shuqiydbodyVal.split('\n'),
            "shuqiqdbodyVal": COOKIE.shuqiqdbodyVal.split('\n'),
            "shuqirwbodyVal": COOKIE.shuqirwbodyVal.split('\n'),
            "shuqifxbodyVal": COOKIE.shuqifxbodyVal.split('\n'),
            "shuqisprwurlVal": COOKIE.shuqisprwurlVal.split('\n'),
            "shuqijlbodyVal": COOKIE.shuqijlbodyVal.split('\n'),
            "shuqisqjlbodyVal": COOKIE.shuqisqjlbodyVal.split('\n'),
            "shuqicjyurlVal": COOKIE.shuqicjyurlVal.split('\n'),
            "shuqicjcsbodyVal": COOKIE.shuqicjcsbodyVal.split('\n'),
            "shuqicjbodyVal": COOKIE.shuqicjbodyVal.split('\n'),
        }
    } else {
        SQ_COOKIES = {
            "shuqiuserurlVal": COOKIE.shuqiuserurlVal.split('\n'),
            "shuqisyurlVal": COOKIE.shuqisyurlVal.split('\n'),
            "shuqisybodyVal": COOKIE.shuqisybodyVal.split('\n'),
            "shuqispbodyVal": COOKIE.shuqispbodyVal.split('\n'),
            "shuqiscbodyVal": COOKIE.shuqiscbodyVal.split('\n'),
            "shuqiydbodyVal": COOKIE.shuqiydbodyVal.split('\n'),
            "shuqiqdbodyVal": COOKIE.shuqiqdbodyVal.split('\n'),
            "shuqirwbodyVal": COOKIE.shuqirwbodyVal.split('\n'),
            "shuqifxbodyVal": COOKIE.shuqifxbodyVal.split('\n'),
            "shuqisprwurlVal": COOKIE.shuqisprwurlVal.split('\n'),
            "shuqijlbodyVal": COOKIE.shuqijlbodyVal.split('\n'),
            "shuqisqjlbodyVal": COOKIE.shuqisqjlbodyVal.split('\n'),
            "shuqicjyurlVal": COOKIE.shuqicjyurlVal.split('\n'),
            "shuqicjcsbodyVal": COOKIE.shuqicjcsbodyVal.split('\n'),
            "shuqicjbodyVal": COOKIE.shuqicjbodyVal.split('\n'),
            "shuqijsspbodyVal": COOKIE.shuqijsspbodyVal.split('\n'),
            "shuqijsydurlVal": COOKIE.shuqijsydurlVal.split('\n'),
            "shuqijsydbodyVal": COOKIE.shuqijsydbodyVal.split('\n'),
            "shuqijsqdbodyVal": COOKIE.shuqijsqdbodyVal.split('\n'),
            "shuqijsqdspyurlVal": COOKIE.shuqijsqdspyurlVal.split('\n'),
            "shuqijsqdspbodyVal": COOKIE.shuqijsqdspbodyVal.split('\n'),
            "shuqijsrwbodyVal": COOKIE.shuqijsrwbodyVal.split('\n'),
            "shuqijsfxbodyVal": COOKIE.shuqijsfxbodyVal.split('\n'),
            "shuqijsbookurlVal": COOKIE.shuqijsbookurlVal.split('\n'),
            "shuqijsbookbodyVal": COOKIE.shuqijsbookbodyVal.split('\n'),
            "shuqijssprwurlVal": COOKIE.shuqijssprwurlVal.split('\n'),
        }
    }
    Length = SQ_COOKIES.shuqiuserurlVal.length;
}
if (COOKIE.datas && COOKIE.datas[0].val != '') {

    TXTX = (COOKIE.settings.find(item => item.id === `shuqiTXTX`)).val || '0';
    notifyttt = (COOKIE.settings.find(item => item.id === `shuqinotifyttt`)).val || '1';
    notifyInterval = (COOKIE.settings.find(item => item.id === `shuqinotifyInterval`)).val || '2';
    Minutes = (COOKIE.settings.find(item => item.id === `shuqiMinutes`)).val || '10';
    SC = (COOKIE.settings.find(item => item.id === `shuqiSC`)).val || '0';

    shuqiCount = COOKIE.settings.find(item => item.id === `shuqiCount`);
    Length = shuqiCount.val
}
if (COOKIE.shuqiuserurl) {
    cks = 26 //ck数量
    COOKIEstringify = JSON.stringify(COOKIE);
    Length = COOKIEstringify.match(/getBindinfo/g).length
}
if (!COOKIE.datas && !COOKIE.shuqiuserurlVal && !COOKIE.shuqiuserurl) {
    if ($.isNode()) {
        Object.keys(middleshuqiuserURL).forEach((item) => {
            if (middleshuqiuserURL[item]) {
                shuqiuserurlArr.push(middleshuqiuserURL[item]);
            }
        });
        Object.keys(middleshuqisyURL).forEach((item) => {
            if (middleshuqisyURL[item]) {
                shuqisyurlArr.push(middleshuqisyURL[item]);
            }
        });
        Object.keys(middleshuqisyBODY).forEach((item) => {
            if (middleshuqisyBODY[item]) {
                shuqisybodyArr.push(middleshuqisyBODY[item]);
            }
        });
        Object.keys(middleshuqispBODY).forEach((item) => {
            if (middleshuqispBODY[item]) {
                shuqispbodyArr.push(middleshuqispBODY[item]);
            }
        });
        Object.keys(middleshuqiscBODY).forEach((item) => {
            if (middleshuqiscBODY[item]) {
                shuqiscbodyArr.push(middleshuqiscBODY[item]);
            }
        });
        Object.keys(middleshuqiydBODY).forEach((item) => {
            if (middleshuqiydBODY[item]) {
                shuqiydbodyArr.push(middleshuqiydBODY[item]);
            }
        });
        Object.keys(middleshuqiqdBODY).forEach((item) => {
            if (middleshuqiqdBODY[item]) {
                shuqiqdbodyArr.push(middleshuqiqdBODY[item]);
            }
        });
        Object.keys(middleshuqirwBODY).forEach((item) => {
            if (middleshuqirwBODY[item]) {
                shuqirwbodyArr.push(middleshuqirwBODY[item]);
            }
        });
        Object.keys(middleshuqifxBODY).forEach((item) => {
            if (middleshuqifxBODY[item]) {
                shuqifxbodyArr.push(middleshuqifxBODY[item]);
            }
        });
        Object.keys(middleshuqisprwURL).forEach((item) => {
            if (middleshuqisprwURL[item]) {
                shuqisprwurlArr.push(middleshuqisprwURL[item]);
            }
        });
        Object.keys(middleshuqijlBODY).forEach((item) => {
            if (middleshuqijlBODY[item]) {
                shuqijlbodyArr.push(middleshuqijlBODY[item]);
            }
        });
        Object.keys(middleshuqisqjlBODY).forEach((item) => {
            if (middleshuqisqjlBODY[item]) {
                shuqisqjlbodyArr.push(middleshuqisqjlBODY[item]);
            }
        });
        Object.keys(middleshuqicjyURL).forEach((item) => {
            if (middleshuqicjyURL[item]) {
                shuqicjyurlArr.push(middleshuqicjyURL[item]);
            }
        });
        Object.keys(middleshuqicjcsBODY).forEach((item) => {
            if (middleshuqicjcsBODY[item]) {
                shuqicjcsbodyArr.push(middleshuqicjcsBODY[item]);
            }
        });
        Object.keys(middleshuqicjBODY).forEach((item) => {
            if (middleshuqicjBODY[item]) {
                shuqicjbodyArr.push(middleshuqicjBODY[item]);
            }
        });
        Object.keys(middleshuqijsspBODY).forEach((item) => {
            if (middleshuqijsspBODY[item]) {
                shuqijsspbodyArr.push(middleshuqijsspBODY[item]);
            }
        });
        Object.keys(middleshuqijsydURL).forEach((item) => {
            if (middleshuqijsydURL[item]) {
                shuqijsydurlArr.push(middleshuqijsydURL[item]);
            }
        });
        Object.keys(middleshuqijsydBODY).forEach((item) => {
            if (middleshuqijsydBODY[item]) {
                shuqijsydbodyArr.push(middleshuqijsydBODY[item]);
            }
        });
        Object.keys(middleshuqijsqdBODY).forEach((item) => {
            if (middleshuqijsqdBODY[item]) {
                shuqijsqdbodyArr.push(middleshuqijsqdBODY[item]);
            }
        });
        Object.keys(middleshuqijsqdspyURL).forEach((item) => {
            if (middleshuqijsqdspyURL[item]) {
                shuqijsqdspyurlArr.push(middleshuqijsqdspyURL[item]);
            }
        });
        Object.keys(middleshuqijsqdspBODY).forEach((item) => {
            if (middleshuqijsqdspBODY[item]) {
                shuqijsqdspbodyArr.push(middleshuqijsqdspBODY[item]);
            }
        });
        Object.keys(middleshuqijsrwBODY).forEach((item) => {
            if (middleshuqijsrwBODY[item]) {
                shuqijsrwbodyArr.push(middleshuqijsrwBODY[item]);
            }
        });
        Object.keys(middleshuqijsfxBODY).forEach((item) => {
            if (middleshuqijsfxBODY[item]) {
                shuqijsfxbodyArr.push(middleshuqijsfxBODY[item]);
            }
        });
        Object.keys(middleshuqijsbookURL).forEach((item) => {
            if (middleshuqijsbookURL[item]) {
                shuqijsbookurlArr.push(middleshuqijsbookURL[item]);
            }
        });
        Object.keys(middleshuqijsbookBODY).forEach((item) => {
            if (middleshuqijsbookBODY[item]) {
                shuqijsbookbodyArr.push(middleshuqijsbookBODY[item]);
            }
        });
        Object.keys(middleshuqijssprwURL).forEach((item) => {
            if (middleshuqijssprwURL[item]) {
                shuqijssprwurlArr.push(middleshuqijssprwURL[item]);
            }
        });
    } else {
        shuqiuserurlArr.push($.getdata("shuqiuserurl"));
        shuqisyurlArr.push($.getdata("shuqisyurl"));
        shuqisybodyArr.push($.getdata("shuqisybody"));
        shuqispbodyArr.push($.getdata("shuqispbody"));
        shuqiscbodyArr.push($.getdata("shuqiscbody"));
        shuqiydbodyArr.push($.getdata("shuqiydbody"));
        shuqiqdbodyArr.push($.getdata("shuqiqdbody"));
        shuqirwbodyArr.push($.getdata("shuqirwbody"));
        shuqifxbodyArr.push($.getdata("shuqifxbody"));
        shuqisprwurlArr.push($.getdata("shuqisprwurl"));
        shuqijlbodyArr.push($.getdata("shuqijlbody"));
        shuqisqjlbodyArr.push($.getdata("shuqisqjlbody"));
        shuqicjyurlArr.push($.getdata("shuqicjyurl"));
        shuqicjcsbodyArr.push($.getdata("shuqicjcsbody"));
        shuqicjbodyArr.push($.getdata("shuqicjbody"));
        shuqijsspbodyArr.push($.getdata("shuqijsspbody"));
        shuqijsydurlArr.push($.getdata("shuqijsydurl"));
        shuqijsydbodyArr.push($.getdata("shuqijsydbody"));
        shuqijsqdbodyArr.push($.getdata("shuqijsqdbody"));
        shuqijsqdspyurlArr.push($.getdata("shuqijsqdspyurl"));
        shuqijsqdspbodyArr.push($.getdata("shuqijsqdspbody"));
        shuqijsrwbodyArr.push($.getdata("shuqijsrwbody"));
        shuqijsfxbodyArr.push($.getdata("shuqijsfxbody"));
        shuqijsbookurlArr.push($.getdata("shuqijsbookurl"));
        shuqijsbookbodyArr.push($.getdata("shuqijsbookbody"));
        shuqijssprwurlArr.push($.getdata("shuqijssprwurl"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("shuqiXH") {
            XH = $.getval("shuqiXH") || '0';
        }
        if ("shuqinotifyttt") {
            notifyttt = $.getval("shuqinotifyttt") || '1';
        }
        if ("shuqinotifyInterval") {
            notifyInterval = $.getval("shuqinotifyInterval") || '2';
        }
        if ("shuqiMinutes") {
            Minutes = $.getval("shuqiMinutes") || '10';
        }
        if ("shuqiSC") {
            SC = $.getval("shuqiSC") || '0';
        }
        if ("shuqiTXTX") {
            TXTX = $.getval("shuqiTXTX") || '0';
        }
        let shuqiCount = ($.getval('shuqiCount') || '1') - 0;
        for (let i = 2; i <= shuqiCount; i++) {
            if ($.getdata(`shuqiuserurl${i}`)) {
                shuqiuserurlArr.push($.getdata(`shuqiuserurl${i}`));
                shuqisyurlArr.push($.getdata(`shuqisyurl${i}`));
                shuqisybodyArr.push($.getdata(`shuqisybody${i}`));
                shuqispbodyArr.push($.getdata(`shuqispbody${i}`));
                shuqiscbodyArr.push($.getdata(`shuqiscbody${i}`));
                shuqiydbodyArr.push($.getdata(`shuqiydbody${i}`));
                shuqiqdbodyArr.push($.getdata(`shuqiqdbody${i}`));
                shuqirwbodyArr.push($.getdata(`shuqirwbody${i}`));
                shuqifxbodyArr.push($.getdata(`shuqifxbody${i}`));
                shuqisprwurlArr.push($.getdata(`shuqisprwurl${i}`));
                shuqijlbodyArr.push($.getdata(`shuqijlbody${i}`));
                shuqisqjlbodyArr.push($.getdata(`shuqisqjlbody${i}`));
                shuqicjyurlArr.push($.getdata(`shuqicjyurl${i}`));
                shuqicjcsbodyArr.push($.getdata(`shuqicjcsbody${i}`));
                shuqicjbodyArr.push($.getdata(`shuqicjbody${i}`));
                shuqijsspbodyArr.push($.getdata(`shuqijsspbody${i}`));
                shuqijsydurlArr.push($.getdata(`shuqijsydurl${i}`));
                shuqijsydbodyArr.push($.getdata(`shuqijsydbody${i}`));
                shuqijsqdbodyArr.push($.getdata(`shuqijsqdbody${i}`));
                shuqijsqdspyurlArr.push($.getdata(`shuqijsqdspyurl${i}`));
                shuqijsqdspbodyArr.push($.getdata(`shuqijsqdspbody${i}`));
                shuqijsrwbodyArr.push($.getdata(`shuqijsrwbody${i}`));
                shuqijsfxbodyArr.push($.getdata(`shuqijsfxbody${i}`));
                shuqijsbookurlArr.push($.getdata(`shuqijsbookurl${i}`));
                shuqijsbookbodyArr.push($.getdata(`shuqijsbookbody${i}`));
                shuqijssprwurlArr.push($.getdata(`shuqijssprwurl${i}`));
            }
        }
    }
    if (!shuqiuserurlArr || shuqiuserurlArr == '') {
        Length = 0
    } else Length = shuqiuserurlArr.length
}


function RedCookie() {

    if (XH == 1 && $request && $request.url.indexOf("config") >= 0) {
        op = 1
        while (true) {
            op++;
            if ($.getdata(`shuqiuserurl${op}`) == '') {
                $.setdata(`${op-1}`, `shuqiSuffix`);

                $.idx = ($.idx = ($.getval('shuqiSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : '';

                $.log(
                    `[${$.name + $.idx}] 当前书旗账号数量为${op-1}✅: 成功🎉`
                );
                $.msg($.name + $.idx, `当前书旗账号数量为${op-1}: 成功🎉`, ``);
                break;
            }
        }
    }
}

function GetCookie() {



    //获取极速版书城
    if ($request && $request.url.indexOf("activity-center-web") >= 0 && $request.url.indexOf("reward") >= 0) {
        const shuqijsbookurlVal = $request.url;
        userid = shuqijsbookurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijsbookurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsbookurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsbookurlVal, "shuqijsbookurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版书城shuqijsbookurlVal✅: 成功,shuqijsbookurlVal: ${shuqijsbookurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版书城shuqijsbookurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsbookurlVal, "shuqijsbookurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版书城shuqijsbookurlVal✅: 成功,shuqijsbookurlVal: ${shuqijsbookurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版书城shuqijsbookurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsbookurlVal, "shuqijsbookurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版书城shuqijsbookurlVal✅: 成功,shuqijsbookurlVal: ${shuqijsbookurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版书城shuqijsbookurlVal: 成功🎉`, ``);
                $.done();
            }
        }
    }
    //获取极速版视频任务
    if ($request && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=719") >= 0 && $request.url.indexOf("appVer=1") >= 0) {
        const shuqijssprwurlVal = $request.url;
        userid = shuqijssprwurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijssprwurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijssprwurl' + $.idx);
                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {

                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijssprwurlVal, "shuqijssprwurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版视频任务shuqijssprwurlVal✅: 成功,shuqijssprwurlVal: ${shuqijssprwurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版视频任务shuqijssprwurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijssprwurlVal, "shuqijssprwurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版视频任务shuqijssprwurlVal✅: 成功,shuqijssprwurlVal: ${shuqijssprwurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版视频任务shuqijssprwurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijssprwurlVal, "shuqijssprwurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版视频任务shuqijssprwurlVal✅: 成功,shuqijssprwurlVal: ${shuqijssprwurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版视频任务shuqijssprwurlVal: 成功🎉`, ``);
                $.done();
            }
        }
    }
    //获取抽奖页面
    if ($request && $request.url.indexOf("lottery") >= 0 && $request.url.indexOf("info") >= 0) {
        const shuqicjyurlVal = $request.url;
        userid = shuqicjyurlVal.split('userId=')[1].split('&')[0]
        if (shuqicjyurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqicjyurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqicjyurlVal, "shuqicjyurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取抽奖页面shuqicjyurlVal✅: 成功,shuqicjyurlVal: ${shuqicjyurlVal}`
                            );
                            $.msg($.name + $.idx, `获取抽奖页面shuqicjyurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqicjyurlVal, "shuqicjyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖页面shuqicjyurlVal✅: 成功,shuqicjyurlVal: ${shuqicjyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖页面shuqicjyurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqicjyurlVal, "shuqicjyurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖页面shuqicjyurlVal✅: 成功,shuqicjyurlVal: ${shuqicjyurlVal}`
                );
                $.msg($.name + $.idx, `获取抽奖页面shuqicjyurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版签到视频页
    if ($request && $request.url.indexOf("adserver") >= 0 && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=717") >= 0) {
        const shuqijsqdspyurlVal = $request.url;
        userid = shuqijsqdspyurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijsqdspyurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsqdspyurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsqdspyurlVal, "shuqijsqdspyurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版签到视频页shuqijsqdspyurlVal✅: 成功,shuqijsqdspyurlVal: ${shuqijsqdspyurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版签到视频页shuqijsqdspyurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsqdspyurlVal, "shuqijsqdspyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到视频页shuqijsqdspyurlVal✅: 成功,shuqijsqdspyurlVal: ${shuqijsqdspyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到视频页shuqijsqdspyurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsqdspyurlVal, "shuqijsqdspyurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版签到视频页shuqijsqdspyurlVal✅: 成功,shuqijsqdspyurlVal: ${shuqijsqdspyurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版签到视频页shuqijsqdspyurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取视频任务
    if ($request && $request.url.indexOf("adserver") >= 0 && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=626") >= 0) {
        const shuqisprwurlVal = $request.url;
        userid = shuqisprwurlVal.split('user_id=')[1].split('&')[0]
        if (shuqisprwurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisprwurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisprwurlVal, "shuqisprwurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取视频任务shuqisprwurlVal✅: 成功,shuqisprwurlVal: ${shuqisprwurlVal}`
                            );
                            $.msg($.name + $.idx, `获取视频任务shuqisprwurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisprwurlVal, "shuqisprwurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频任务shuqisprwurlVal✅: 成功,shuqisprwurlVal: ${shuqisprwurlVal}`
                        );
                        $.msg($.name + $.idx, `获取视频任务shuqisprwurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisprwurlVal, "shuqisprwurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取视频任务shuqisprwurlVal✅: 成功,shuqisprwurlVal: ${shuqisprwurlVal}`
                );
                $.msg($.name + $.idx, `获取视频任务shuqisprwurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取用户名
    if ($request && $request.url.indexOf("getBindinfo") >= 0) {
        const shuqiuserurlVal = $request.url;
        userid = shuqiuserurlVal.split('userId=')[1].split('&')[0]
        if (shuqiuserurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiuserurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiuserurlVal, "shuqiuserurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取用户名shuqiuserurlVal✅: 成功,shuqiuserurlVal: ${shuqiuserurlVal}`
                            );
                            $.msg($.name + $.idx, `获取用户名shuqiuserurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiuserurlVal, "shuqiuserurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取用户名shuqiuserurlVal✅: 成功,shuqiuserurlVal: ${shuqiuserurlVal}`
                        );
                        $.msg($.name + $.idx, `获取用户名shuqiuserurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiuserurlVal, "shuqiuserurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取用户名shuqiuserurlVal✅: 成功,shuqiuserurlVal: ${shuqiuserurlVal}`
                );
                $.msg($.name + $.idx, `获取用户名shuqiuserurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取收益
    if ($request && $request.url.indexOf("load") >= 0 && $request.url.indexOf("resource") >= 0 && $request.url.indexOf("skinColor=") >= 0 && $request.url.indexOf("appVer=4") >= 0 && $request.body.indexOf("isNewUser") >= 0 && $request.body.indexOf("ShuqiVipEntry") >= 0 && $request.body.indexOf("ShuqiTab") < 0 && $request.body.indexOf("caid=") < 0 && $request.body.indexOf("ShuqiShelfCard") < 0 && $request.body.indexOf("ShuqiIOSUpdateInfo") < 0) {
        const shuqisyurlVal = $request.url
        const shuqisybodyVal = $request.body
        userid = shuqisyurlVal.split('user_id=')[1].split('&')[0]
        if (shuqisyurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisyurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisyurlVal, "shuqisyurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收益shuqisyurlVal✅: 成功,shuqisyurlVal: ${shuqisyurlVal}`
                            );
                            $.msg($.name + $.idx, `获取收益shuqisyurlVal: 成功🎉`, ``);
                            $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                            );
                            $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisyurlVal, "shuqisyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收益shuqisyurlVal✅: 成功,shuqisyurlVal: ${shuqisyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取收益shuqisyurlVal: 成功🎉`, ``);
                        $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisyurlVal, "shuqisyurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收益shuqisyurlVal✅: 成功,shuqisyurlVal: ${shuqisyurlVal}`
                );
                $.msg($.name + $.idx, `获取收益shuqisyurlVal: 成功🎉`, ``);
                $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                );
                $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }

    //获取收益
    if ($request && $request.url.indexOf("load") >= 0 && $request.url.indexOf("resource") >= 0 && $request.body.indexOf("skinColor=") >= 0 && $request.body.indexOf("appVer=4") >= 0 && $request.body.indexOf("isNewUser") >= 0 && $request.body.indexOf("ShuqiVipEntry") >= 0 && $request.body.indexOf("ShuqiTab") < 0 && $request.body.indexOf("caid=") < 0 && $request.body.indexOf("ShuqiShelfCard") < 0 && $request.body.indexOf("ShuqiIOSUpdateInfo") < 0) {
        const shuqisybodyVal = $request.body
        userid = shuqisybodyVal.split('user_id=')[1].split('&')[0]
        if (shuqisybodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisybody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                            );
                            $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                );
                $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }

    //获取极速版书城
    if ($request && $request.url.indexOf("convert") >= 0 && $request.body.indexOf("actTaskId=344") >= 0 && $request.body.indexOf("appVer=1") >= 0) {
        const shuqijsbookbodyVal = $request.body;
        userid = shuqijsbookbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsbookbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsbookbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsbookbodyVal, "shuqijsbookbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版书城shuqijsbookbodyVal✅: 成功,shuqijsbookbodyVal: ${shuqijsbookbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版书城shuqijsbookbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsbookbodyVal, "shuqijsbookbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版书城shuqijsbookbodyVal✅: 成功,shuqijsbookbodyVal: ${shuqijsbookbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版书城shuqijsbookbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsbookbodyVal, "shuqijsbookbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版书城shuqijsbookbodyVal✅: 成功,shuqijsbookbodyVal: ${shuqijsbookbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版书城shuqijsbookbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=525") >= 0) {
        const shuqispbodyVal = $request.body;
        userid = shuqispbodyVal.split('userId=')[1].split('&')[0]
        if (shuqispbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqispbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqispbodyVal, "shuqispbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取视频shuqispbodyVal✅: 成功,shuqispbodyVal: ${shuqispbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取视频shuqispbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqispbodyVal, "shuqispbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频shuqispbodyVal✅: 成功,shuqispbodyVal: ${shuqispbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取视频shuqispbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqispbodyVal, "shuqispbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取视频shuqispbodyVal✅: 成功,shuqispbodyVal: ${shuqispbodyVal}`
                );
                $.msg($.name + $.idx, `获取视频shuqispbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取时长
    if ($request && $request.url.indexOf("jcollection") >= 0 && $request.url.indexOf("reading") >= 0 && $request.url.indexOf("upload") >= 0) {
        const shuqiscbodyVal = $request.body;
        sqsc = shuqiscbodyVal.split('readingLen%22%3A')[1].split('%7D')[0]
        userid = shuqiscbodyVal.split('user_id=')[1]

        if (shuqiscbodyVal && sqsc >= 10) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiscbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiscbodyVal, "shuqiscbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取${sqsc}秒时长shuqiscbodyVal✅: 成功,shuqiscbodyVal: ${shuqiscbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取${sqsc}秒时长shuqiscbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiscbodyVal, "shuqiscbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取${sqsc}秒时长shuqiscbodyVal✅: 成功,shuqiscbodyVal: ${shuqiscbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取${sqsc}秒时长shuqiscbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiscbodyVal, "shuqiscbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取${sqsc}秒时长shuqiscbodyVal✅: 成功,shuqiscbodyVal: ${shuqiscbodyVal}`
                );
                $.msg($.name + $.idx, `获取${sqsc}秒时长shuqiscbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取阅读
    if ($request && $request.url.indexOf("pendant") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=707") >= 0) {
        const shuqiydbodyVal = $request.body;
        userid = shuqiydbodyVal.split('userId=')[1].split('&')[0]
        if (shuqiydbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiydbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiydbodyVal, "shuqiydbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取阅读shuqiydbodyVal✅: 成功,shuqiydbodyVal: ${shuqiydbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取阅读shuqiydbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiydbodyVal, "shuqiydbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取阅读shuqiydbodyVal✅: 成功,shuqiydbodyVal: ${shuqiydbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取阅读shuqiydbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiydbodyVal, "shuqiydbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取阅读shuqiydbodyVal✅: 成功,shuqiydbodyVal: ${shuqiydbodyVal}`
                );
                $.msg($.name + $.idx, `获取阅读shuqiydbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取签到
    if ($request && $request.url.indexOf("signInAction") >= 0 && $request.body.indexOf("position=501") >= 0 && $request.body.indexOf("signInType=1") >= 0) {
        const shuqiqdbodyVal = $request.body;
        userid = shuqiqdbodyVal.split('userId=')[1].split('&')[0]
        if (shuqiqdbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiqdbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiqdbodyVal, "shuqiqdbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取签到shuqiqdbodyVal✅: 成功,shuqiqdbodyVal: ${shuqiqdbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取签到shuqiqdbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiqdbodyVal, "shuqiqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取签到shuqiqdbodyVal✅: 成功,shuqiqdbodyVal: ${shuqiqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取签到shuqiqdbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiqdbodyVal, "shuqiqdbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取签到shuqiqdbodyVal✅: 成功,shuqiqdbodyVal: ${shuqiqdbodyVal}`
                );
                $.msg($.name + $.idx, `获取签到shuqiqdbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取任务
    if ($request && $request.url.indexOf("resource") >= 0 && $request.body.indexOf("resources") >= 0 && $request.body.indexOf("params=") >= 0 && $request.body.indexOf("appVer=4") >= 0 && $request.body.indexOf("skinVersionPrefix=") >= 0 && $request.body.indexOf("isNewUser=") < 0 && $request.body.indexOf("reqEncryptType=") < 0) {
        const shuqirwbodyVal = $request.body;
        userid = shuqirwbodyVal.split('userId=')[1].split('&')[0]
        if (shuqirwbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqirwbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqirwbodyVal, "shuqirwbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取任务shuqirwbodyVal✅: 成功,shuqirwbodyVal: ${shuqirwbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取任务shuqirwbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqirwbodyVal, "shuqirwbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取任务shuqirwbodyVal✅: 成功,shuqirwbodyVal: ${shuqirwbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取任务shuqirwbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqirwbodyVal, "shuqirwbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取任务shuqirwbodyVal✅: 成功,shuqirwbodyVal: ${shuqirwbodyVal}`
                );
                $.msg($.name + $.idx, `获取任务shuqirwbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取分享
    if ($request && $request.url.indexOf("activity") >= 0 && $request.body.indexOf("appVer=4") >= 0 && $request.body.indexOf("actTaskId=357") >= 0) {
        const shuqifxbodyVal = $request.body;
        userid = shuqifxbodyVal.split('userId=')[1].split('&')[0]
        if (shuqifxbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqifxbody' + $.idx);

                    if (bodysd) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqifxbodyVal, "shuqifxbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取分享shuqifxbodyVal✅: 成功,shuqifxbodyVal: ${shuqifxbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取分享shuqifxbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqifxbodyVal, "shuqifxbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取分享shuqifxbodyVal✅: 成功,shuqifxbodyVal: ${shuqifxbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取分享shuqifxbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqifxbodyVal, "shuqifxbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取分享shuqifxbodyVal✅: 成功,shuqifxbodyVal: ${shuqifxbodyVal}`
                );
                $.msg($.name + $.idx, `获取分享shuqifxbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取奖励
    if ($request && $request.url.indexOf("bubble") >= 0 && $request.url.indexOf("info") >= 0 && $request.body.indexOf("requestSrc=h5") >= 0) {
        const shuqijlbodyVal = $request.body;
        userid = shuqijlbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijlbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijlbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijlbodyVal, "shuqijlbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取奖励shuqijlbodyVal✅: 成功,shuqijlbodyVal: ${shuqijlbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取奖励shuqijlbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijlbodyVal, "shuqijlbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取奖励shuqijlbodyVal✅: 成功,shuqijlbodyVal: ${shuqijlbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取奖励shuqijlbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijlbodyVal, "shuqijlbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取奖励shuqijlbodyVal✅: 成功,shuqijlbodyVal: ${shuqijlbodyVal}`
                );
                $.msg($.name + $.idx, `获取奖励shuqijlbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取收取奖励
    if ($request && $request.url.indexOf("manual") >= 0 && $request.url.indexOf("receive") >= 0 && $request.body.indexOf("appVer=4") >= 0) {
        const shuqisqjlbodyVal = $request.body;
        userid = shuqisqjlbodyVal.split('userId=')[1].split('&')[0]
        if (shuqisqjlbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisqjlbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisqjlbodyVal, "shuqisqjlbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收取奖励shuqisqjlbodyVal✅: 成功,shuqisqjlbodyVal: ${shuqisqjlbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取收取奖励shuqisqjlbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisqjlbodyVal, "shuqisqjlbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收取奖励shuqisqjlbodyVal✅: 成功,shuqisqjlbodyVal: ${shuqisqjlbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取收取奖励shuqisqjlbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisqjlbodyVal, "shuqisqjlbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收取奖励shuqisqjlbodyVal✅: 成功,shuqisqjlbodyVal: ${shuqisqjlbodyVal}`
                );
                $.msg($.name + $.idx, `获取收取奖励shuqisqjlbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取抽奖次数
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("resourceId=703") >= 0) {
        const shuqicjcsbodyVal = $request.body;
        userid = shuqicjcsbodyVal.split('userId=')[1].split('&')[0]
        if (shuqicjcsbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqicjcsbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqicjcsbodyVal, "shuqicjcsbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取抽奖次数shuqicjcsbodyVal✅: 成功,shuqicjcsbodyVal: ${shuqicjcsbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取抽奖次数shuqicjcsbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqicjcsbodyVal, "shuqicjcsbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖次数shuqicjcsbodyVal✅: 成功,shuqicjcsbodyVal: ${shuqicjcsbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖次数shuqicjcsbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqicjcsbodyVal, "shuqicjcsbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖次数shuqicjcsbodyVal✅: 成功,shuqicjcsbodyVal: ${shuqicjcsbodyVal}`
                );
                $.msg($.name + $.idx, `获取抽奖次数shuqicjcsbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取抽奖
    if ($request && $request.url.indexOf("lottery") >= 0 && $request.url.indexOf("draw") >= 0 && $request.body.indexOf("activityId=311") >= 0) {
        const shuqicjbodyVal = $request.body;
        userid = shuqicjbodyVal.split('userId=')[1].split('&')[0]
        if (shuqicjbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqicjbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqicjbodyVal, "shuqicjbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取抽奖shuqicjbodyVal✅: 成功,shuqicjbodyVal: ${shuqicjbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取抽奖shuqicjbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqicjbodyVal, "shuqicjbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖shuqicjbodyVal✅: 成功,shuqicjbodyVal: ${shuqicjbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖shuqicjbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqicjbodyVal, "shuqicjbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖shuqicjbodyVal✅: 成功,shuqicjbodyVal: ${shuqicjbodyVal}`
                );
                $.msg($.name + $.idx, `获取抽奖shuqicjbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("resourceId=719") >= 0) {
        const shuqijsspbodyVal = $request.body;
        userid = shuqijsspbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsspbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsspbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsspbodyVal, "shuqijsspbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版视频shuqijsspbodyVal✅: 成功,shuqijsspbodyVal: ${shuqijsspbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版视频shuqijsspbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsspbodyVal, "shuqijsspbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版视频shuqijsspbodyVal✅: 成功,shuqijsspbodyVal: ${shuqijsspbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版视频shuqijsspbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsspbodyVal, "shuqijsspbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版视频shuqijsspbodyVal✅: 成功,shuqijsspbodyVal: ${shuqijsspbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版视频shuqijsspbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版签到视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=894") >= 0) {
        const shuqijsqdspbodyVal = $request.body;
        userid = shuqijsqdspbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsqdspbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsqdspbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsqdspbodyVal, "shuqijsqdspbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版签到视频shuqijsqdspbodyVal✅: 成功,shuqijsqdspbodyVal: ${shuqijsqdspbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版签到视频shuqijsqdspbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsqdspbodyVal, "shuqijsqdspbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到视频shuqijsqdspbodyVal✅: 成功,shuqijsqdspbodyVal: ${shuqijsqdspbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到视频shuqijsqdspbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsqdspbodyVal, "shuqijsqdspbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版签到视频shuqijsqdspbodyVal✅: 成功,shuqijsqdspbodyVal: ${shuqijsqdspbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版签到视频shuqijsqdspbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }
    //获取极速版阅读
    if ($request && $request.url.indexOf("activity") >= 0 && $request.url.indexOf("pendant") >= 0 && $request.url.indexOf("lottery") >= 0) {
        const shuqijsydurlVal = $request.url;
        const shuqijsydbodyVal = $request.body;
        userid = shuqijsydurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijsydurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsydurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsydurlVal, "shuqijsydurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版阅读shuqijsydurlVal✅: 成功,shuqijsydurlVal: ${shuqijsydurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版阅读shuqijsydurlVal: 成功🎉`, ``);
                            $.setdata(shuqijsydbodyVal, "shuqijsydbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版阅读shuqijsydbodyVal✅: 成功,shuqijsydbodyVal: ${shuqijsydbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版阅读shuqijsydbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsydurlVal, "shuqijsydurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版阅读shuqijsydurlVal✅: 成功,shuqijsydurlVal: ${shuqijsydurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版阅读shuqijsydurlVal: 成功🎉`, ``);
                        $.setdata(shuqijsydbodyVal, "shuqijsydbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版阅读shuqijsydbodyVal✅: 成功,shuqijsydbodyVal: ${shuqijsydbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版阅读shuqijsydbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsydurlVal, "shuqijsydurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版阅读shuqijsydurlVal✅: 成功,shuqijsydurlVal: ${shuqijsydurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版阅读shuqijsydurlVal: 成功🎉`, ``);
                $.setdata(shuqijsydbodyVal, "shuqijsydbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版阅读shuqijsydbodyVal✅: 成功,shuqijsydbodyVal: ${shuqijsydbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版阅读shuqijsydbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版签到
    if ($request && $request.url.indexOf("signInAction") >= 0 && $request.body.indexOf("position=601") >= 0 && $request.body.indexOf("signInType=1") >= 0) {
        const shuqijsqdbodyVal = $request.body;
        userid = shuqijsqdbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsqdbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsqdbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsqdbodyVal, "shuqijsqdbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版签到shuqijsqdbodyVal✅: 成功,shuqijsqdbodyVal: ${shuqijsqdbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版签到shuqijsqdbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsqdbodyVal, "shuqijsqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到shuqijsqdbodyVal✅: 成功,shuqijsqdbodyVal: ${shuqijsqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到shuqijsqdbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsqdbodyVal, "shuqijsqdbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版签到shuqijsqdbodyVal✅: 成功,shuqijsqdbodyVal: ${shuqijsqdbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版签到shuqijsqdbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版任务
    if ($request && $request.url.indexOf("resource") >= 0 && $request.body.indexOf("resources") >= 0 && $request.body.indexOf("params=") >= 0 && $request.body.indexOf("appVer=1") >= 0 && $request.body.indexOf("skinVersionPrefix=") < 0 && $request.body.indexOf("isNewUser=") < 0 && $request.body.indexOf("reqEncryptType=") < 0) {
        const shuqijsrwbodyVal = $request.body;
        userid = shuqijsrwbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsrwbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsrwbody' + $.idx);
                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {

                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsrwbodyVal, "shuqijsrwbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版任务shuqijsrwbodyVal✅: 成功,shuqijsrwbodyVal: ${shuqijsrwbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版任务shuqijsrwbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsrwbodyVal, "shuqijsrwbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版任务shuqijsrwbodyVal✅: 成功,shuqijsrwbodyVal: ${shuqijsrwbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版任务shuqijsrwbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsrwbodyVal, "shuqijsrwbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版任务shuqijsrwbodyVal✅: 成功,shuqijsrwbodyVal: ${shuqijsrwbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版任务shuqijsrwbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版分享
    if ($request && $request.body.indexOf("actTaskId=327") >= 0 && $request.body.indexOf("appVer=1") >= 0) {
        const shuqijsfxbodyVal = $request.body;
        userid = shuqijsfxbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsfxbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsfxbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsfxbodyVal, "shuqijsfxbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版分享shuqijsfxbodyVal✅: 成功,shuqijsfxbodyVal: ${shuqijsfxbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版分享shuqijsfxbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsfxbodyVal, "shuqijsfxbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版分享shuqijsfxbodyVal✅: 成功,shuqijsfxbodyVal: ${shuqijsfxbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版分享shuqijsfxbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsfxbodyVal, "shuqijsfxbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版分享shuqijsfxbodyVal✅: 成功,shuqijsfxbodyVal: ${shuqijsfxbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版分享shuqijsfxbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }

}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${Length} 个${$.name}账号=============\n`
);
//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)
//当前时间戳
function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else TTS = Math.round(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//日期格式化时间戳
function timecs() {
    if ($.isNode()) {
        var date = new Date(newtime).getTime() - 8 * 60 * 60 * 1000
    } else var date = new Date(newtime).getTime()
    return date;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
//随机延迟
function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    RedCookie()
    GetCookie()
    $.done();
} else {
    !(async () => {
        await all();
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length || Length == 0) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取 https://apps.apple.com/cn/app/id733689509\n',
            ' https://apps.apple.com/cn/app/id733689509', {
                "open-url": "https://apps.apple.com/cn/app/id733689509"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {

        if (COOKIE.datas && COOKIE.datas[0].val != '') {


            if (i == 0) {
                op = ``
            } else {
                op = i + 1
            }

            shuqiuserurl = COOKIE.datas.find(item => item.key === `shuqiuserurl${op}`);
            shuqisyurl = COOKIE.datas.find(item => item.key === `shuqisyurl${op}`);
            shuqisybody = COOKIE.datas.find(item => item.key === `shuqisybody${op}`);
            shuqispbody = COOKIE.datas.find(item => item.key === `shuqispbody${op}`);
            shuqiscbody = COOKIE.datas.find(item => item.key === `shuqiscbody${op}`);
            shuqiydbody = COOKIE.datas.find(item => item.key === `shuqiydbody${op}`);
            shuqiqdbody = COOKIE.datas.find(item => item.key === `shuqiqdbody${op}`);
            shuqirwbody = COOKIE.datas.find(item => item.key === `shuqirwbody${op}`);
            shuqifxbody = COOKIE.datas.find(item => item.key === `shuqifxbody${op}`);
            shuqisprwurl = COOKIE.datas.find(item => item.key === `shuqisprwurl${op}`);
            shuqijlbody = COOKIE.datas.find(item => item.key === `shuqijlbody${op}`);
            shuqisqjlbody = COOKIE.datas.find(item => item.key === `shuqisqjlbody${op}`);
            shuqicjyurl = COOKIE.datas.find(item => item.key === `shuqicjyurl${op}`);
            shuqicjcsbody = COOKIE.datas.find(item => item.key === `shuqicjcsbody${op}`);
            shuqicjbody = COOKIE.datas.find(item => item.key === `shuqicjbody${op}`);
            shuqijsspbody = COOKIE.datas.find(item => item.key === `shuqijsspbody${op}`);
            shuqijsydurl = COOKIE.datas.find(item => item.key === `shuqijsydurl${op}`);
            shuqijsydbody = COOKIE.datas.find(item => item.key === `shuqijsydbody${op}`);
            shuqijsqdbody = COOKIE.datas.find(item => item.key === `shuqijsqdbody${op}`);
            shuqijsqdspyurl = COOKIE.datas.find(item => item.key === `shuqijsqdspyurl${op}`);
            shuqijsqdspbody = COOKIE.datas.find(item => item.key === `shuqijsqdspbody${op}`);
            shuqijsrwbody = COOKIE.datas.find(item => item.key === `shuqijsrwbody${op}`);
            shuqijsfxbody = COOKIE.datas.find(item => item.key === `shuqijsfxbody${op}`);
            shuqijsbookurl = COOKIE.datas.find(item => item.key === `shuqijsbookurl${op}`);
            shuqijsbookbody = COOKIE.datas.find(item => item.key === `shuqijsbookbody${op}`);
            shuqijssprwurl = COOKIE.datas.find(item => item.key === `shuqijssprwurl${op}`);


            shuqiuserurlVal = shuqiuserurl.val;
            shuqisyurlVal = shuqisyurl.val;
            shuqisybodyVal = shuqisybody.val;
            shuqispbodyVal = shuqispbody.val;
            shuqiscbodyVal = shuqiscbody.val;
            shuqiydbodyVal = shuqiydbody.val;
            shuqiqdbodyVal = shuqiqdbody.val;
            shuqirwbodyVal = shuqirwbody.val;
            shuqifxbodyVal = shuqifxbody.val;
            shuqisprwurlVal = shuqisprwurl.val;
            shuqijlbodyVal = shuqijlbody.val;
            shuqisqjlbodyVal = shuqisqjlbody.val;
            shuqicjyurlVal = shuqicjyurl.val;
            shuqicjcsbodyVal = shuqicjcsbody.val;
            shuqicjbodyVal = shuqicjbody.val;
            shuqijsspbodyVal = shuqijsspbody.val;
            shuqijsydurlVal = shuqijsydurl.val;
            shuqijsydbodyVal = shuqijsydbody.val;
            shuqijsqdbodyVal = shuqijsqdbody.val;
            shuqijsqdspyurlVal = shuqijsqdspyurl.val;
            shuqijsqdspbodyVal = shuqijsqdspbody.val;
            shuqijsrwbodyVal = shuqijsrwbody.val;
            shuqijsfxbodyVal = shuqijsfxbody.val;
            shuqijsbookurlVal = shuqijsbookurl.val;
            shuqijsbookbodyVal = shuqijsbookbody.val;
            shuqijssprwurlVal = shuqijssprwurl.val;

        }
        if (COOKIE && COOKIE.shuqiuserurlVal) {
            shuqiuserurlVal = SQ_COOKIES.shuqiuserurlVal[i];
            shuqisyurlVal = SQ_COOKIES.shuqisyurlVal[i];
            shuqisybodyVal = SQ_COOKIES.shuqisybodyVal[i];
            shuqispbodyVal = SQ_COOKIES.shuqispbodyVal[i];
            shuqiscbodyVal = SQ_COOKIES.shuqiscbodyVal[i];
            shuqiydbodyVal = SQ_COOKIES.shuqiydbodyVal[i];
            shuqiqdbodyVal = SQ_COOKIES.shuqiqdbodyVal[i];
            shuqirwbodyVal = SQ_COOKIES.shuqirwbodyVal[i];
            shuqifxbodyVal = SQ_COOKIES.shuqifxbodyVal[i];
            shuqisprwurlVal = SQ_COOKIES.shuqisprwurlVal[i];
            shuqijlbodyVal = SQ_COOKIES.shuqijlbodyVal[i];
            shuqisqjlbodyVal = SQ_COOKIES.shuqisqjlbodyVal[i];
            shuqicjyurlVal = SQ_COOKIES.shuqicjyurlVal[i];
            shuqicjcsbodyVal = SQ_COOKIES.shuqicjcsbodyVal[i];
            shuqicjbodyVal = SQ_COOKIES.shuqicjbodyVal[i];
        }
        if (COOKIE && COOKIE.shuqijsspbodyVal) {
            shuqijsspbodyVal = SQ_COOKIES.shuqijsspbodyVal[i];
            shuqijsydurlVal = SQ_COOKIES.shuqijsydurlVal[i];
            shuqijsydbodyVal = SQ_COOKIES.shuqijsydbodyVal[i];
            shuqijsqdbodyVal = SQ_COOKIES.shuqijsqdbodyVal[i];
            shuqijsqdspyurlVal = SQ_COOKIES.shuqijsqdspyurlVal[i];
            shuqijsqdspbodyVal = SQ_COOKIES.shuqijsqdspbodyVal[i];
            shuqijsrwbodyVal = SQ_COOKIES.shuqijsrwbodyVal[i];
            shuqijsfxbodyVal = SQ_COOKIES.shuqijsfxbodyVal[i];
            shuqijsbookurlVal = SQ_COOKIES.shuqijsbookurlVal[i];
            shuqijsbookbodyVal = SQ_COOKIES.shuqijsbookbodyVal[i];
            shuqijssprwurlVal = SQ_COOKIES.shuqijssprwurlVal[i];
        }
        if (COOKIE && COOKIE.shuqiuserurl) {
            iv = cks * i - 1 //定位
            shuqiuserurlVal = COOKIE[Object.keys(COOKIE)[iv + 1]];
            shuqisyurlVal = COOKIE[Object.keys(COOKIE)[iv + 2]];
            shuqisybodyVal = COOKIE[Object.keys(COOKIE)[iv + 3]];
            shuqispbodyVal = COOKIE[Object.keys(COOKIE)[iv + 4]];
            shuqiscbodyVal = COOKIE[Object.keys(COOKIE)[iv + 5]];
            shuqiydbodyVal = COOKIE[Object.keys(COOKIE)[iv + 6]];
            shuqiqdbodyVal = COOKIE[Object.keys(COOKIE)[iv + 7]];
            shuqirwbodyVal = COOKIE[Object.keys(COOKIE)[iv + 8]];
            shuqifxbodyVal = COOKIE[Object.keys(COOKIE)[iv + 9]];
            shuqisprwurlVal = COOKIE[Object.keys(COOKIE)[iv + 10]];
            shuqijlbodyVal = COOKIE[Object.keys(COOKIE)[iv + 11]];
            shuqisqjlbodyVal = COOKIE[Object.keys(COOKIE)[iv + 12]];
            shuqicjyurlVal = COOKIE[Object.keys(COOKIE)[iv + 13]];
            shuqicjcsbodyVal = COOKIE[Object.keys(COOKIE)[iv + 14]];
            shuqicjbodyVal = COOKIE[Object.keys(COOKIE)[iv + 15]];
        }
        if (COOKIE && COOKIE.shuqijsspbody) {
            iv = cks * i - 1 //定位
            shuqijsspbodyVal = COOKIE[Object.keys(COOKIE)[iv + 16]];
            shuqijsydurlVal = COOKIE[Object.keys(COOKIE)[iv + 17]];
            shuqijsydbodyVal = COOKIE[Object.keys(COOKIE)[iv + 18]];
            shuqijsqdbodyVal = COOKIE[Object.keys(COOKIE)[iv + 19]];
            shuqijsqdspyurlVal = COOKIE[Object.keys(COOKIE)[iv + 20]];
            shuqijsqdspbodyVal = COOKIE[Object.keys(COOKIE)[iv + 21]];
            shuqijsrwbodyVal = COOKIE[Object.keys(COOKIE)[iv + 22]];
            shuqijsfxbodyVal = COOKIE[Object.keys(COOKIE)[iv + 23]];
            shuqijsbookurlVal = COOKIE[Object.keys(COOKIE)[iv + 24]];
            shuqijsbookbodyVal = COOKIE[Object.keys(COOKIE)[iv + 25]];
            shuqijssprwurlVal = COOKIE[Object.keys(COOKIE)[iv + 26]];
        }
        if (!COOKIE.datas && !COOKIE.shuqiuserurlVal && !COOKIE.shuqiuserurl) {
            shuqiuserurlVal = shuqiuserurlArr[i];
            shuqisyurlVal = shuqisyurlArr[i];
            shuqisybodyVal = shuqisybodyArr[i];
            shuqispbodyVal = shuqispbodyArr[i];
            shuqiscbodyVal = shuqiscbodyArr[i];
            shuqiydbodyVal = shuqiydbodyArr[i];
            shuqiqdbodyVal = shuqiqdbodyArr[i];
            shuqirwbodyVal = shuqirwbodyArr[i];
            shuqifxbodyVal = shuqifxbodyArr[i];
            shuqisprwurlVal = shuqisprwurlArr[i];
            shuqijlbodyVal = shuqijlbodyArr[i];
            shuqisqjlbodyVal = shuqisqjlbodyArr[i];
            shuqicjyurlVal = shuqicjyurlArr[i];
            shuqicjcsbodyVal = shuqicjcsbodyArr[i];
            shuqicjbodyVal = shuqicjbodyArr[i];
            shuqijsspbodyVal = shuqijsspbodyArr[i];
            shuqijsydurlVal = shuqijsydurlArr[i];
            shuqijsydbodyVal = shuqijsydbodyArr[i];
            shuqijsqdbodyVal = shuqijsqdbodyArr[i];
            shuqijsqdspyurlVal = shuqijsqdspyurlArr[i];
            shuqijsqdspbodyVal = shuqijsqdspbodyArr[i];
            shuqijsrwbodyVal = shuqijsrwbodyArr[i];
            shuqijsfxbodyVal = shuqijsfxbodyArr[i];
            shuqijsbookurlVal = shuqijsbookurlArr[i];
            shuqijsbookbodyVal = shuqijsbookbodyArr[i];
            shuqijssprwurlVal = shuqijssprwurlArr[i];
        }
        O = (`${$.name + (i + 1)}🔔`);


        if (shuqiuserurlVal && shuqiuserurlVal != '') {
            await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)
            let cookie_is_live = await user(); //用户名
            if (!cookie_is_live) {
                continue;
            }
        }
        //await $.wait(1000)



        if (shuqisybodyVal && shuqisybodyVal != '') {

            if (shuqisybodyVal.indexOf("appVer=4.4") >= 0) {
                shuqisyurlVal=`https://ocean.shuqireader.com/api/render/load/resource`
                shuqisyhost=`ocean.shuqireader.com`
            } else {
               
                shuqisyhost = `render.shuqireader.com`
            }
            await coin() //用户收益

        }

        if (TXTX > 0 && nowTimes.getHours() >= 8 && $.coin && DQYE >= TXTX) {

            console.log(O, `\n========== ${$.user.data.nickname} ==========\n当前余额为${DQYE}元，速度提现，否则清0`)
            $.msg(O, `========== 【${$.user.data.nickname}】 ==========\n当前余额为${DQYE}元，速度提现，否则清0`);


            if ($.isNode()) {
                notify.sendNotify(O, `========== 【${$.user.data.nickname}】 ==========\n当前余额为${DQYE}元，速度提现，否则清0`);

            }

        }


        await readlist(); //阅读时长

        if (SC == 0) {
            if (shuqirwbodyVal && shuqirwbodyVal != '') {
                await resource() //任务列表
            }
            if (shuqisprwurlVal && shuqisprwurlVal != '') {
                await videolist(); //视频任务
            }
            if (shuqicjyurlVal && shuqicjyurlVal != '') {
                await lotteryinfo(); //抽奖页面
            }
            if (shuqijsrwbodyVal && shuqijsrwbodyVal != '') {
                await jsresource() //极速版任务列表
            }
            if (shuqijssprwurlVal && shuqijssprwurlVal != '') {
                await jsvideolist() //极速版视频任务
            }
            if (shuqijsqdspyurlVal && shuqijsqdspyurlVal != '') {
                await jsqdvideolist(); //极速版签到视频任务
            }
            if (shuqijlbodyVal && shuqijlbodyVal != '') {
                await bubble(); //奖励页面
            }

        }
        console.log(`${GXRZ}\n`);
        $.message += `${GXRZ}\n`
    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {


        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}
//用户名
function user(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqiuserurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户名🚩: ${decodeUnicode(data)}`);
                    $.user = JSON.parse(data);
                    if ($.user.data.userid) {
                        userid = $.user.data.userid
                        console.log(`\n${O}\n========== ${$.user.data.nickname} ==========\n注册时间：${$.user.data.registerTime}\n`)
                        $.message += `\n${O}\n========== 【${$.user.data.nickname}】 ==========\n【注册时间】：${$.user.data.registerTime}\n`;
                        resolve(true);
                    }
                    if (!$.user.data.userid) {
                        $.msg(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        if ($.isNode()) {
                            notify.sendNotify(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        }
                        resolve(false);
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//视频奖励
function video(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqispbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频奖励🚩: ${decodeUnicode(data)}`);
                    $.video = JSON.parse(data);
                    if ($.video.status == 200) {
                        console.log(`视频奖励：获得${$.video.data.prizeName}\n`);
                        $.message += `【视频奖励】：获得${$.video.data.prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//用户收益
function coin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqisyurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': shuqisyhost,
                },
                body: shuqisybodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户收益🚩: ${decodeUnicode(data)}`);
                    $.coin = JSON.parse(data);
                    if ($.coin.status == 200) {
                        DQYE = $.coin.data.ShuqiVipEntry.userinfo.coinInfo.balanceWorthMoney
                        console.log(`用户收益：今日${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.todayWorthMoney}元，余额${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.balanceWorthMoney}元\n`);
                        $.message += `【用户收益】：今日${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.todayWorthMoney}元，余额${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.balanceWorthMoney}元\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//上传时长
function upload(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqiscurl,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': shuqischost,
                },
                body: shuqiscbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 上传时长🚩: ${decodeUnicode(data)}`);
                    $.upload = JSON.parse(data);
                    if ($.upload.state == 200) {
                        console.log(`上传时长：成功上传${sqsc}秒\n`);
                        $.message += `【上传时长】：成功上传${sqsc}秒\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}




//阅读奖励
function reads(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    let url = {
                        url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery`,
                        headers: {
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `ocean.shuqireader.com`,
                        },
                        body: shuqiydbodyVal,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 阅读奖励🚩: ${decodeUnicode(data)}`);
                            $.reads = JSON.parse(data);
                            if ($.reads.status == 200) {
                                console.log(`阅读奖励${i+1}：获得${$.reads.data.prizeResult.prizeDesc}\n`);
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })
                }, i * 5000);
            }
            setTimeout(() => {
                if ($.reads.status == 200) {
                    console.log(`阅读奖励：获得20次奖励,今日已得${$.reads.data.todayBizCoinAmount}金币\n`);
                    $.message += `【阅读奖励】：获得20次奖励,今日已得${$.reads.data.todayBizCoinAmount}金币\n`;
                }
            }, 96000)
        }, timeout)
    })
}
//每日签到
function sign(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqiqdbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 每日签到🚩: ${decodeUnicode(data)}`);
                    $.sign = JSON.parse(data);
                    if ($.sign.status == 200) {
                        console.log(`每日签到：获得${$.sign.data.todayPrizeInfo.prizeName},${$.sign.data.copyWriting}\n`);
                        $.message += `【每日签到】：获得${$.sign.data.todayPrizeInfo.prizeName},${$.sign.data.copyWriting}\n`;
                    } else {
                        console.log(`每日签到：${$.sign.message}\n`);
                        $.message += `【每日签到】：${$.sign.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//任务列表
function resource(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://render.shuqireader.com/load/resource`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `render.shuqireader.com`,
                },
                body: shuqirwbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 任务列表🚩: ${decodeUnicode(data)}`);
                    $.resource = JSON.parse(data);
                    if ($.resource.status == 200) {
                        readss = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 101);
                        signss = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 102);
                        sharess = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 18);
                    }
                    if (shuqiydbodyVal && shuqiydbodyVal != '') {
                        if (readss.status == 0) {
                            await reads(); //阅读奖励
                            await $.wait(96000)
                        } else {
                            console.log(`${readss.taskTitle}：${readss.rewards[0].desc},已完成\n`);
                            $.message += `【${readss.taskTitle}】：${readss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqiqdbodyVal && shuqiqdbodyVal != '') {
                        if (signss.status == 0) {
                            await sign(); //每日签到
                        } else {
                            console.log(`${signss.taskTitle}：${signss.rewards[0].desc},已完成\n`);
                            $.message += `【${signss.taskTitle}】：${signss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqifxbodyVal && shuqifxbodyVal != '') {
                        if (sharess.status == 0) {
                            taskfx = `reward`
                            await share(); //每日分享
                        }
                    }
                    if (shuqifxbodyVal && shuqifxbodyVal != '') {
                        if (sharess.status == 2 && sharess.prizeStatus == 4) {
                            taskfx = `convert`
                            await share(); //分享领奖
                        } else if (sharess.status == 2 && sharess.prizeStatus == 2) {
                            console.log(`${sharess.taskTitle}：${sharess.rewards[0].desc},已完成\n`);
                            $.message += `【${sharess.taskTitle}】：${sharess.rewards[0].desc},已完成\n`;
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//每日分享
function share(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/task/${taskfx}`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqifxbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 每日分享🚩: ${decodeUnicode(data)}`);
                    $.share = JSON.parse(data);
                    if ($.share.status == 200) {
                        console.log(`每日分享：成功\n`);
                        $.message += `【每日分享】：成功\n`;
                    } else {
                        console.log(`每日分享：${$.share.message}\n`);
                        $.message += `【每日分享】：${$.share.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//视频任务
function videolist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqisprwurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频任务🚩: ${decodeUnicode(data)}`);
                    $.videolist = JSON.parse(data);
                    if ($.videolist.status == 200) {
                        console.log(`视频任务：${$.videolist.data.extInfo.chanceCurrentCnt}/${$.videolist.data.extInfo.chanceMaxCnt}\n`);
                        $.message += `【视频任务】：${$.videolist.data.extInfo.chanceCurrentCnt}/${$.videolist.data.extInfo.chanceMaxCnt}\n`;
                        if (shuqispbodyVal && shuqispbodyVal != '' && $.videolist.data.extInfo.chanceCurrentCnt < $.videolist.data.extInfo.chanceMaxCnt) {
                            await video(); //视频奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//奖励页面
function bubble(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/bubble/info`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijlbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 奖励页面🚩: ${decodeUnicode(data)}`);
                    $.bubble = JSON.parse(data);
                    if ($.bubble.status == 200) {
                        console.log(`奖励页面：当前${$.bubble.data.totalGold}金币\n`);
                        $.message += `【奖励页面】：当前${$.bubble.data.totalGold}金币\n`;
                        if (shuqisqjlbodyVal && shuqisqjlbodyVal != '' && $.bubble.data.totalGold > 0) {
                            await manual() //收取奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//收取奖励
function manual(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqisqjlbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 收取奖励🚩: ${decodeUnicode(data)}`);
                    $.manual = JSON.parse(data);
                    if ($.manual.status == 200) {
                        console.log(`收取奖励：${$.manual.message}\n`);
                        $.message += `【收取奖励】：${$.manual.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//阅读时长
function readlist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/activity/boxTask?activityId=309&appVer=4.3.6.0&placeId=111111&ver=210301&platform=1&userId=${userid}`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 阅读时长🚩: ${decodeUnicode(data)}`);
                    $.readlist = JSON.parse(data);
                    if ($.readlist.status == 200) {
                        is_ok = $.readlist.data.tasks.find(item => item.prizeStatus === 4);
                        console.log(`阅读时长：今日阅读${$.readlist.data.readTime}分钟\n`);
                        $.message += `【阅读时长】：今日阅读${$.readlist.data.readTime}分钟\n`;
                        if (shuqiscbodyVal && shuqiscbodyVal != '') {
                            timestamp = shuqiscbodyVal.split('timestamp=')[1].split('&user_id')[0] * 1000
                            sqsc = shuqiscbodyVal.split('readingLen%22%3A')[1].split('%7D')[0]
                            if (timestamp >= daytime() && $.readlist.data.readTime < 10) {
                                if (shuqiscbodyVal.indexOf("appVer%253D4.3") >= 0) {
                                    shuqiscurl = `https://jcollection.shuqireader.com/collection/iosapi/reading/upload`
                                    shuqischost = `jcollection.shuqireader.com`

                                } else {
                                    shuqiscurl = `https://ocean.shuqireader.com/api/jcollection/collection/iosapi/reading/upload`
                                    shuqischost = `ocean.shuqireader.com`

                                }

                                DD = RT(1000, 10000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await upload() //上传时长
                                DD = RT(1000, 10000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await upload() //上传时长
                                DD = RT(1000, 10000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await upload() //上传时长
                            } else if (timestamp >= daytime()) {
                                console.log(`上传时长：今日时长已达到10分钟\n`);
                                $.message += `【上传时长】：今日时长已达到10分钟\n`;
                            } else {
                                console.log(`上传时长：请获取今日时长CK\n`);
                                $.message += `【上传时长】：请获取今日时长CK\n`;
                            }
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//抽奖页面
function lotteryinfo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqicjyurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 抽奖页面🚩: ${decodeUnicode(data)}`);
                    $.lotteryinfo = JSON.parse(data);
                    if ($.lotteryinfo.status == 200) {
                        console.log(`抽奖页面：${$.lotteryinfo.data.actInfo.totalNum}/${$.lotteryinfo.data.actInfo.dailyLotteryLimit}\n`);
                        $.message += `【抽奖页面】：${$.lotteryinfo.data.actInfo.totalNum}/${$.lotteryinfo.data.actInfo.dailyLotteryLimit}\n`;
                        if (shuqicjcsbodyVal && shuqicjcsbodyVal != '' && $.lotteryinfo.data.actInfo.totalNum < $.lotteryinfo.data.actInfo.dailyLotteryLimit) {
                            await prizelottery(); //抽奖次数
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//抽奖次数
function prizelottery(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqicjcsbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 抽奖次数🚩: ${decodeUnicode(data)}`);
                    $.prizelottery = JSON.parse(data);
                    if ($.prizelottery.status == 200) {
                        console.log(`抽奖次数：${$.prizelottery.data.awardMessage}\n`);
                        $.message += `【抽奖次数】：${$.prizelottery.data.awardMessage}\n`;
                        if (shuqicjbodyVal && shuqicjbodyVal != '') {
                            await lotterydraw(); //转盘抽奖
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//转盘抽奖
function lotterydraw(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqicjbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 转盘抽奖🚩: ${decodeUnicode(data)}`);
                    $.lotterydraw = JSON.parse(data);
                    if ($.lotterydraw.status == 200) {
                        console.log(`转盘抽奖：抽中${$.lotterydraw.data.prizeList[0].prizeName}\n`);
                        $.message += `【转盘抽奖】：抽中${$.lotterydraw.data.prizeList[0].prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版视频奖励
function jsvideo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsspbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版视频奖励🚩: ${decodeUnicode(data)}`);
                    $.jsvideo = JSON.parse(data);
                    if ($.jsvideo.status == 200) {
                        console.log(`极速版视频奖励：获得${$.jsvideo.data.prizeName}\n`);
                        $.message += `【极速版视频奖励】：获得${$.jsvideo.data.prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版阅读奖励
function jsreads(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    let url = {
                        url: shuqijsydurlVal,
                        headers: {
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `ocean.shuqireader.com`,
                        },
                        body: shuqijsydbodyVal,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 极速版阅读奖励🚩: ${decodeUnicode(data)}`);
                            $.jsreads = JSON.parse(data);
                            if ($.jsreads.status == 200) {
                                console.log(`极速版阅读奖励${i+1}：获得${$.jsreads.data.prizeInfo.prizeDesc}\n`);
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })
                }, i * 5000);
            }
            setTimeout(() => {
                if ($.jsreads.status == 200) {
                    console.log(`极速版阅读奖励：获得20次奖励,今日已得${$.jsreads.data.todayBizCoinAmount}\n`);
                    $.message += `【极速版阅读奖励】：获得20次奖励,今日已得${$.jsreads.data.todayBizCoinAmount}金币\n`;
                } else {
                    console.log(`极速版阅读奖励：${$.jsreads.message}\n`);
                    $.message += `【极速版阅读奖励】：${$.jsreads.message}\n`;
                }
            }, 96000)
        }, timeout)
    })
}
//极速版每日签到
function jssign(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsqdbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日签到🚩: ${decodeUnicode(data)}`);
                    $.jssign = JSON.parse(data);
                    if ($.jssign.status == 200) {
                        console.log(`极速版每日签到：获得${$.jssign.data.todayPrizeInfo.prizeName},${$.jssign.data.copyWriting}\n`);
                        $.message += `【极速版每日签到】：获得${$.jssign.data.todayPrizeInfo.prizeName},${$.jssign.data.copyWriting}\n`;
                    } else {
                        console.log(`极速版每日签到：${$.jssign.message}\n`);
                        $.message += `【极速版每日签到】：${$.jssign.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版签到视频任务
function jsqdvideolist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqijsqdspyurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版签到视频任务🚩: ${decodeUnicode(data)}`);
                    $.jsqdvideolist = JSON.parse(data);
                    if ($.jsqdvideolist.status == 200) {
                        console.log(`极速版签到视频任务：${$.jsqdvideolist.data.extInfo.chanceCurrentCnt}/${$.jsqdvideolist.data.extInfo.chanceMaxCnt}\n`);
                        $.message += `【极速版签到视频任务】：${$.jsqdvideolist.data.extInfo.chanceCurrentCnt}/${$.jsqdvideolist.data.extInfo.chanceMaxCnt}\n`;
                        if (shuqijsqdspbodyVal && shuqijsqdspbodyVal != '' && $.jsqdvideolist.data.extInfo.chanceCurrentCnt < $.jsqdvideolist.data.extInfo.chanceMaxCnt) {
                            await jsqdvideo(); //签到视频奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版签到视频奖励
function jsqdvideo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsqdspbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版签到视频奖励🚩: ${decodeUnicode(data)}`);
                    $.jsqdvideo = JSON.parse(data);
                    if ($.jsqdvideo.status == 200) {
                        console.log(`极速版签到视频奖励：获得${$.jsqdvideo.data.prizeName}\n`);
                        $.message += `【极速版签到视频奖励】：获得${$.jsqdvideo.data.prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版任务列表
function jsresource(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://render.shuqireader.com/load/resource`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `render.shuqireader.com`,
                },
                body: shuqijsrwbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版任务列表🚩: ${decodeUnicode(data)}`);
                    $.jsresource = JSON.parse(data);
                    if ($.jsresource.status == 200) {
                        jsreadss = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 101);
                        jssignss = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 102);
                        jsbookss = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 23);
                        jssharess = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 18);
                    }
                    if (shuqijsydbodyVal && shuqijsydbodyVal != '') {
                        if (jsreadss.status == 0) {
                            await jsreads(); //阅读奖励
                            await $.wait(96000)
                        } else {
                            console.log(`${jsreadss.taskTitle}：${jsreadss.rewards[0].desc},已完成\n`);
                            $.message += `【${jsreadss.taskTitle}】：${jsreadss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqijsqdbodyVal && shuqijsqdbodyVal != '') {
                        if (jssignss.status == 0) {
                            await jssign(); //每日签到
                        } else {
                            console.log(`${jssignss.taskTitle}：${jssignss.rewards[0].desc},已完成\n`);
                            $.message += `【${jssignss.taskTitle}】：${jssignss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqijsfxbodyVal && shuqijsfxbodyVal != '') {
                        if (jssharess.status == 0) {
                            taskfx = `reward`
                            await jsshare(); //每日分享
                        }
                    }
                    if (shuqijsfxbodyVal && shuqijsfxbodyVal != '') {
                        if (jssharess.status == 2 && jssharess.prizeStatus == 4) {
                            taskfx = `convert`
                            await jsshare(); //分享领奖
                        } else if (jssharess.status == 2 && jssharess.prizeStatus == 2) {
                            console.log(`${jssharess.taskTitle}：${jssharess.rewards[0].desc},已完成\n`);
                            $.message += `【${jssharess.taskTitle}】：${jssharess.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqijsbookurlVal && shuqijsbookurlVal != '') {
                        if (jsbookss.status == 0) {
                            taskbook = `reward`
                            await jsbooklist(); //每日书城
                        }
                    }
                    if (shuqijsbookbodyVal && shuqijsbookbodyVal != '') {
                        if (jsbookss.status == 2 && jsbookss.prizeStatus == 4) {
                            taskbook = `convert`
                            await jsbooklj; //书城领奖
                        } else if (jsbookss.status == 2 && jsbookss.prizeStatus == 2) {
                            console.log(`${jsbookss.taskTitle}：${jsbookss.rewards[0].desc},已完成\n`);
                            $.message += `【${jsbookss.taskTitle}】：${jsbookss.rewards[0].desc},已完成\n`;
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版每日分享
function jsshare(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/task/${taskfx}`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsfxbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日分享🚩: ${decodeUnicode(data)}`);
                    $.jsshare = JSON.parse(data);
                    if ($.jsshare.status == 200) {
                        console.log(`极速版每日分享：成功\n`);
                        $.message += `【极速版每日分享】：成功\n`;
                    } else {
                        console.log(`极速版每日分享：${$.jsshare.message}\n`);
                        $.message += `【极速版每日分享】：${$.jsshare.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版每日书城
function jsbooklist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqijsbookurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: `actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=${userid}`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日书城🚩: ${decodeUnicode(data)}`);
                    $.jsbooklist = JSON.parse(data);
                    if ($.jsbooklist.status == 200) {
                        console.log(`极速版每日书城：执行成功\n`);
                        $.message += `【极速版每日书城】：执行成功\n`;
                    } else {
                        console.log(`极速版每日书城：${$.jsbooklist.message}\n`);
                        $.message += `【极速版每日书城】：${$.jsbooklist.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版每日书城领奖
function jsbooklj(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/task/convert`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqiuserurlVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日书城领奖🚩: ${decodeUnicode(data)}`);
                    $.jsbooklj = JSON.parse(data);
                    if ($.jsbooklj.status == 200) {
                        console.log(`极速版每日书城领奖：成功获得${$.jsbooklj.data.rewards[0].desc}\n`);
                        $.message += `【极速版每日书城领奖】：成功获得${$.jsbooklj.data.rewards[0].desc}\n`;
                    } else {
                        console.log(`极速版每日书城领奖：${$.jsbooklj.message}\n`);
                        $.message += `【极速版每日书城领奖】：${$.jsbooklj.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版视频任务
function jsvideolist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqijssprwurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版视频任务🚩: ${decodeUnicode(data)}`);
                    $.jsvideolist = JSON.parse(data);
                    if ($.jsvideolist.status == 200) {
                        console.log(`极速版视频任务：${$.jsvideolist.data.extInfo.chanceCurrentCnt}/${$.jsvideolist.data.extInfo.chanceMaxCnt}\n`);
                        $.message += `【极速版视频任务】：${$.jsvideolist.data.extInfo.chanceCurrentCnt}/${$.jsvideolist.data.extInfo.chanceMaxCnt}\n`;
                        if (shuqijsspbodyVal && shuqijsspbodyVal != '' && $.jsvideolist.data.extInfo.chanceCurrentCnt < $.jsvideolist.data.extInfo.chanceMaxCnt) {
                            await jsvideo(); //视频奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
