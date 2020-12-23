let s = 200 //各数据接口延迟
const name = "中青看点";
const $ = new Env("中青看点");
let notifyInterval = $.getdata("notifytimes")||50; //通知间隔，默认抽奖每50次通知一次，如需关闭全部通知请设为0
let logs = $.getdata('zqlogs')||false, rotaryscore=0,doublerotary=0,signresult; 
$.idx = ($.idx = ($.getval('qeSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
let COOKIES_SPLIT = "\n"; // 自定义多cookie之间连接的分隔符，默认为\n换行分割，不熟悉的不要改动和配置，为了兼容本地node执行


const YOUTH_HOST = "https://kd.youth.cn/WebApi/";
const notify = $.isNode() ? require('./sendNotify') : '';

const cookiesArr = [];
let signheaderVal = '';
const readArr = [];
let articlebodyVal ='';
const timeArr = [];
let timebodyVal = '';
const redpArr = [];
let redpbodyVal = '';
let detail = ``; 
let subTitle = ``;
let K = 0;	
let CookieYouth = [];
let ARTBODYs = []; 
let REDBODYs  = [];
let READTIME = [];
if ($.isNode()) {
	if (process.env.COOKIES_SPLIT) {
		COOKIES_SPLIT = process.env.COOKIES_SPLIT;
	}
	
	
	if (process.env.YOUTH_HEADER &&process.env.YOUTH_HEADER.indexOf(COOKIES_SPLIT) > -1) {
	    CookieYouth = process.env.YOUTH_HEADER.split(COOKIES_SPLIT);
	} else {
	    CookieYouth = process.env.YOUTH_HEADER.split();
	}
	
	if (process.env.YOUTH_ARTBODY &&process.env.YOUTH_ARTBODY.indexOf(COOKIES_SPLIT) > -1) {
	    ARTBODYs = process.env.YOUTH_ARTBODY.split(COOKIES_SPLIT);
	} else {
	    ARTBODYs = process.env.YOUTH_ARTBODY.split();
	}
	
	if (process.env.YOUTH_REDBODY &&process.env.YOUTH_REDBODY.indexOf(COOKIES_SPLIT) > -1) {
	    REDBODYs = process.env.YOUTH_REDBODY.split(COOKIES_SPLIT);
	} else {
	    REDBODYs = process.env.YOUTH_REDBODY.split();
	}

	if (process.env.YOUTH_TIME &&process.env.YOUTH_TIME.indexOf(COOKIES_SPLIT) > -1) {
	  READTIME = process.env.YOUTH_TIME.split(COOKIES_SPLIT);
	} else {
	  READTIME = process.env.YOUTH_TIME.split();
	}
}

if ($.isNode()) {
    Object.keys(CookieYouth).forEach((item) => {
        if (CookieYouth[item]) {
          cookiesArr.push(CookieYouth[item])
        }
      })
    Object.keys(ARTBODYs).forEach((item) => {
        if (ARTBODYs[item]) {
          readArr.push(ARTBODYs[item])
        }
      })
    Object.keys(REDBODYs).forEach((item) => {
        if (REDBODYs[item]) {
          redpArr.push(REDBODYs[item])
        }
      })
    Object.keys(READTIME).forEach((item) => {
        if (READTIME[item]) {
          timeArr.push(READTIME[item])
        }
      })
      console.log(`============ 共${cookiesArr.length}个中青账号  =============\n`)
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
	} else {
		cookiesArr.push($.getdata('youthheader_zq'));
		redpArr.push($.getdata('red_zq'));
		readArr.push($.getdata('read_zq'));
		timeArr.push($.getdata('readtime_zq'));
		// 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
		let qeCount = ($.getval('qeCount') || '1') - 0;
		for (let i = 2; i <= qeCount; i++) {
		  if ($.getdata(`youthheader_zq{i}`)) {
			  cookiesArr.push($.getdata(`youthheader_zq{i}`));
			  redpArr.push($.getdata(`red_zq{i}`));
			  readArr.push($.getdata(`read_zq{i}`));
			  timeArr.push($.getdata(`readtime_zq{i}`));
		  }
		}
}

const firstcheck = $.getdata('signt');
const runtimes = $.getdata('times');
const opboxtime = $.getdata('opbox');

if (isGetCookie = typeof $request !== 'undefined') {
   GetCookie();
   $.done()
} 
function GetCookie() {
   if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/TaskCenter\/(sign|getSign)/)) {
   const signheaderVal = JSON.stringify($request.headers)
    if (signheaderVal)        $.setdata(signheaderVal,'youthheader_zq'+ $.idx)
    $.log(`[${name + $.idx}] 获取Cookie: 成功,signheaderVal: ${signheaderVal}`)
    $.msg(name + $.idx, `获取Cookie: 成功🎉`, ``)
  }
else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/article\/complete/)) {
   const articlebodyVal = $request.body
    if (articlebodyVal)        $.setdata(articlebodyVal,'read_zq'+ $.idx)
    $.log(`[${name + $.idx}] 获取阅读: 成功,articlebodyVal: ${articlebodyVal}`)
    $.msg(name + $.idx, `获取阅读请求: 成功🎉`, ``)
  }
else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/v5\/user\/app_stay/)) {
   const timebodyVal = $request.body
    if (timebodyVal)        $.setdata(timebodyVal,'readtime_zq'+ $.idx)
    $.log(`[${name + $.idx}] 获取阅读: 成功,timebodyVal: ${timebodyVal}`)
    $.msg(name + $.idx, `获取阅读时长: 成功🎉`, ``)
  }
else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/article\/red_packet/)) {
   const redpbodyVal = $request.body
    if (redpbodyVal)        $.setdata(redpbodyVal, 'red_zq'+ $.idx)
    $.log(`[${name + $.idx}] 获取惊喜红包: 成功,redpbodyVal: ${redpbodyVal}`)
    $.msg(name + $.idx, `获取惊喜红包请求: 成功🎉`, ``)
  }
 }

all();
function all() {
	if (!cookiesArr[0]) {
	    $.msg(name + $.idx, '【提示】请先获取'+name + $.idx+'cookie');
	    return;
	}else{
	  signheaderVal = cookiesArr[K];
	  articlebodyVal = readArr[K];
	  timebodyVal = timeArr[K];
	  redpbodyVal = redpArr[K];
	}
	 
	 
}
