
/*
软件名称:番茄看看 微信扫描二维码打开
更新时间：2021-02-21 @肥皂
脚本说明：番茄看看自动阅读
脚本为自动完成番茄看看的阅读任务
每日收益一元左右，可多号撸。提现秒到
任务打开二维码地址 https://raw.githubusercontent.com/age174/-/main/3F545C70-389B-4155-ACB1-15B6FDA95501.jpeg
可以去boxjs修改自动提现金额和循环次数
最低提现额度为0.3元，默认提现1元
最多循环次数为100次，默认为100次
本脚本以学习为主！
首次运行脚本，会提示获取数据
去番茄看看，点击阅读A任务，开始阅读，
完成一次阅读即可获取数据。
TG电报群: https://t.me/hahaha8028
我的邀请码 : 3950781  感谢大佬们填写
注意:脚本每天运行一次就可以了，切记别多次运行，如不小心运行去把代理开关关闭一下就行，脚本默认运行次数为100次，运行时间大概15分钟,超过一百次容易被微信阅读限制，切记。。。。。。
别几天就把羊薅死了，账号多的大佬觉得运行一次太久的话也可以去boxjs自行修改循环次数，比如修改循环次数为20，则每天运行五次脚本，循环次数为50则每天要运行两次脚本。。默认为循环次数为100一天运行一次，反正不管怎么修改，尽量每天循环次数别超过100
boxjs地址 :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json
番茄看看
圈X配置如下，其他软件自行测试
[task_local]
#番茄看看
15 12 * * * https://raw.githubusercontent.com/age174/-/main/fqkk.js, tag=番茄看看, img-url=https://ftp.bmp.ovh/imgs/2021/02/f8306006536eb49c.jpeg, enabled=true
[rewrite_local]
#番茄看看
^http://m.*.top/reada/getTask url script-request-header https://raw.githubusercontent.com/age174/-/main/fqkk.js
#loon
^http://m.*.top/reada/getTask script-path=https://raw.githubusercontent.com/age174/-/main/fqkk.js, requires-header=true, timeout=10, tag=番茄看看
#surge
番茄看看 = type=http-request,pattern=^http://m.*.top/reada/getTask,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/fqkk.js,script-update-interval=0
[MITM]
hostname = m.*.top
*/


const $ = new Env('番茄看看自动阅读');
let status;
status = (status = ($.getval("fqkkstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let fqkkurlArr = [], fqkkhdArr = [],fqkkbodyArr = [],fqkkcount = ''
let fqkkurl = $.getdata('fqkkurl')
let fqkkhd = $.getdata('fqkkhd')
let fqkey = ''
let fqkkxh = ($.getval('fqkkxh') || '20');  // 此处修改循环次数，默认一百
let fqtx = ($.getval('fqtx') || '100');  // 此处修改提现金额，0.1元等于10，默认为提现一元，也就是100
let max = 180
let min = 37

if ($.isNode()) {
   if (process.env.FQKK_URL && process.env.FQKK_URL.indexOf('#') > -1) {
   fqkkurlArr = process.env.FQKK_URL.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.FQKK_URL && process.env.FQKK_URL.indexOf('\n') > -1) {
   fqkkurlArr = process.env.FQKK_URL.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   fqkkurlArr = process.env.FQKK_URL.split()
  };
  if (process.env.FQKK_HD && process.env.FQKK_HD.indexOf('#') > -1) {
   fqkkhdArr = process.env.FQKK_HD.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.FQKK_HD && process.env.FQKK_HD.indexOf('\n') > -1) {
   fqkkhdArr = process.env.FQKK_HD.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   fqkkhdArr = process.env.FQKK_HD.split()
  };
/*  if (process.env.RLBODY && process.env.RLBODY.indexOf('#') > -1) {
   rlbody = process.env.RLBODY.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.RLBODY && process.env.RLBODY.indexOf('\n') > -1) {
   rlbody = process.env.RLBODY.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   rlbody = process.env.RLBODY.split()
  };*/
	
 /*  Object.keys(rlurl).forEach((item) => {
        if (rlurl[item]) {
          rlurlArr.push(rlurl[item])
        }
    });
    Object.keys(rlheader).forEach((item) => {
        if (rlheader[item]) {
          rlheaderArr.push(rlheader[item])
        }
    });  	
    Object.keys(rlbody).forEach((item) => {
        if (rlbody[item]) {
          rlbodyArr.push(rlbody[item])
        }
    });  */
	
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
    fqkkurlArr.push($.getdata('fqkkurl'))
    fqkkhdArr.push($.getdata('fqkkhd'))
    let fqkkcount = ($.getval('fqkkcount') || '1');
  for (let i = 2; i <= fqkkcount; i++) {
    fqkkurlArr.push($.getdata(`fqkkurl${i}`))
    fqkkhdArr.push($.getdata(`fqkkhd${i}`))
  }
}

!(async () => {
if (!fqkkhdArr[0]) {
    $.msg($.name, '【提示】请先获取番茄看看一cookie')
    return;
  }
    console.log(`------------- 共${fqkkhdArr.length}个账号-------------\n`)
    console.log('\n番茄看看当前设置的提现金额为: '+fqtx / 100 + ' 元')
      for (let i = 0; i < fqkkhdArr.length; i++) {
        if (fqkkhdArr[i]) {
         
          fqkkurl = fqkkurlArr[i];
          fqkkhd = fqkkhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【番茄看看${$.index}】`)

    await fqkk1();

  }
    await fqkktx();
}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//番茄看看数据获取
function fqkkck() {
   if ($request.url.indexOf("getTask") > -1) {
 const fqkkurl = $request.url
  if(fqkkurl)     $.setdata(fqkkurl,`fqkkurl${status}`)
    $.log(fqkkurl)
  const fqkkhd = JSON.stringify($request.headers)
