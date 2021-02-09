/*
本脚本修改Sunert中青看点.再次感谢大佬 大佬中青邀请码`46308484`

本脚本修改自用适用于node

食用方法请参考
请导出ck直接填写到对应地方

*/

let s = 500 //各数据接口延迟
const jsname = '中青看点';
const $ = Env(jsname);
const YOUTH_HOST = "https://kd.youth.cn/WebApi/";

const notifyttt = 0;// 0为关闭外部推送，1为12 23 点外部推送
const notify = $.isNode() ? require("./sendNotify") : "";
const withdrawcash = 30;//提现金额
let rotaryscore=0,doublerotary=0; 
let detail ='';
let nick, subTitle;

//此处填写你的 cookie body 请对应填写 请使用\n分割
let youthheader_zq='';
let red_zq='';
let read_zq='';
let readtime_zq='';
let withdrawUrl_zq='';
let withdrawBody_zq='';


let ZQ_READ_COOKIES = {  
    "cookieArr": youthheader_zq.split('\n'),
    "redpArr":red_zq.split('\n') ,
    "readArr": read_zq.split('\n'),
    "timeArr":readtime_zq.split('\n') ,
    "withDrawUrlArr":withdrawUrl_zq.split('\n') ,
    "withDrawbodyVal":withdrawBody_zq.split('\n') 
}

!(async () => {

  await all();
  
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })

async function all() { 
	console.log(`==========🔔共${ZQ_READ_COOKIES.cookieArr.length}个${jsname}账号🔔=========\n`);
	for (let i = 0; i < ZQ_READ_COOKIES.cookieArr.length; i++) {
		nowTimes = new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000);  
		daytime= new Date(new Date().toLocaleDateString()).getTime()- 8 * 60 * 60 * 1000; 
		cookie = ZQ_READ_COOKIES.cookieArr[i];
	    articlebodyVal = ZQ_READ_COOKIES.readArr[i];   
        redpbodyVal = ZQ_READ_COOKIES.readArr[i];    
		timebodyVal = ZQ_READ_COOKIES.timeArr[i];  
		withDrawUrlVal = ZQ_READ_COOKIES.withDrawUrlArr[i];    
		withDrawbodyVal = ZQ_READ_COOKIES.withDrawbodyVal[i]; 
	    myuid = cookie.match(/uid=\d+/);
		await userInfo();
		await kdHost();
		await friendsign();
		await TaskCenter() 
		await openbox();
		await getAdVideo();
        await gameVideo();
		await readArticle();
		await Articlered();
		await readTime();
		for (k=0;k<5;k++){
		  await $.wait(1000);
		  await rotary();
		  if (rotaryres.status == 0) {
			  rotarynum = ` 转盘${rotaryres.msg}🎉`;
			  break
		   } else if(rotaryres.status == 1){
			 rotaryscore += rotaryres.data.score
			 rotarytimes = rotaryres.data.remainTurn
		  }
		}

		if (rotaryres.status == 1) {
		  detail += `【转盘抽奖】+${rotaryscore}个青豆 剩余${rotaryres.data.remainTurn}次\n`

		}else{
			detail += `【转盘抽奖】已用完\n`
		}
		if (rotaryres.status !== 0&&rotaryres.data.doubleNum !== 0){
		  detail += `【转盘双倍】+${doublerotary}青豆 剩余${rotaryres.data.doubleNum}次\n`
		}else{
			detail += `【转盘双倍】已用完\n`
		}
		await earningsInfo();
		
		await showMsg(i);
		
	}


}
function showMsg(i) {
	 $.msg("第"+(i+1)+"个"+$.name + "" + nick, subTitle, detail) 
	 if (notifyttt == 1&&$.isNode()&&(nowTimes.getHours() === 12 ||nowTimes.getHours() === 23 )&& (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)){
				 notify.sendNotify("第"+(i+1)+"个"+$.name + "" + nick, subTitle, detail);
            }
}

function userInfo() {
    return new Promise((resolve, reject) => {
        $.post(kdHost('WebApi/NewTaskIos/getSign'), async(error, resp, data) => {
            signinfo = JSON.parse(data);
          //$.log(formatJson(data))
            if (signinfo.status == 1) {
                cash = signinfo.data.user.money;
                signday = signinfo.data.sign_day;
                subTitle = `【收益总计】${signinfo.data.user.score}青豆  现金约${cash}元`;
                nick = `账号昵称: ${signinfo.data.user.nickname}`;
                if(parseInt(cash) >= withdrawcash && !withDrawbodyVal == false&& !withDrawUrlVal == false){
                  await withDraw()
               };
               if(signinfo.data.is_sign == false){
                 await getsign();
              } else if(signinfo.data.is_sign == true){
                detail += `【签到结果】🔁 (今天+${signinfo.data.sign_score}青豆) 已连签${signday}天\n <本次收益>：\n`
              }; 
            if(signday==7){
               await SevCont();
             }
            } else {
                subTitle = `${signinfo.msg}`;
                detail += ``;
            }
            resolve()
        })
    })
}


function getsign() {
    return new Promise((resolve, reject) =>{
        $.post(kdHost('WebApi/NewTaskIos/sign'), async(error, resp, data) =>{
            signres = JSON.parse(data);
            //$.log(formatJson(data));
            if (signres.status == 2) {
                detail += `【签到结果】失败，Cookie已失效‼️`;
                return;
            } else if (signres.status == 1) {
                detail += `【签到结果】成功 🎉 青豆: +${signres.score}，明日青豆: +${signres.nextScore}\n`;
                await comApp();
            } 
            resolve()
        })
    })
}

function comApp() {
    return new Promise((resolve, reject) => {
        $.post(batHost('mission/msgRed.json',articlebodyVal), (error, response, data) => {
            redres = JSON.parse(data)
            if (redres.success == true) {
                detail += `【回访奖励】+${redres.items.score}个青豆\n`
            }else{
                if(redres.error_code == "100009"){
                    detail += `回访奖励: ${redres.message}\n`
                }
            }
            resolve()
        })
    })
}


function SevCont() {
    return new Promise((resolve, reject) =>{
        $.post(kdHost('PunchCard/luckdraw?'), async(error, resp, data) =>{
            let sevres = JSON.parse(data); 
            if (sevres.code == 1) {
                detail += `【七日签到】 + ${sevres.data.score}青豆\n`
            } else if (sevres.code == 0) {
                detail += `七日签到:${sevres.msg}\n`;
            }
            resolve()
        })
    })
}

function withDraw() {
    return new Promise((resolve, reject) => {
        const url = {
            url: withdrawUrl,
            headers: {
            'User-Agent': 'KDApp/2.0.0 (iPhone; iOS 14.5; Scale/3.00)'
            },
            body: withdrawBody,
        }
        $.post(url, (error, response, data) => {
            withDrawres = JSON.parse(data)
            if (withDrawres.error_code == 0) {
              detail += `【自动提现】提现${withdrawcash}元成功\n`
            }else if(withDrawres.error_code == "10002"){
              $.log( `自动提现失败，${withDrawres.homeTime.text}`)
            } else {
              $.log( `自动提现失败，${withDrawres.message}`)
            }
            resolve()
        })
    })
}


function friendsign() {
  return new Promise((resolve, reject) =>{
    $.get(kdHost('WebApi/ShareSignNew/getFriendActiveList'), async(error, resp, data) =>{
      let addsign = JSON.parse(data);
      if (addsign.error_code == "0" && addsign.data.active_list.length > 0) {
		scoreNum= 0;
        friendsitem = addsign.data.active_list;
        for (friends of friendsitem) {
          if (friends.button == 1|| friends.button==3) {
            await friendSign(friends.uid)
          }
        }
		detail +=`【好友签到】 共${friendsitem.length}个好友已签到，获得${scoreNum}个青豆\n`;
      }
      resolve()
    })
  })
}
function friendSign(uid) {
    return new Promise((resolve, reject) => {
        $.get(kdHost(`WebApi/ShareSignNew/sendScoreV2?friend_uid=${uid}`), (error, response, data) => {
            let friendres = JSON.parse(data);
            if (friendres.error_code == "0") {
               friendsDataitem = friendres.data;
					for(const friendsData of friendsDataitem){
						scoreNum += parseInt(friendsData.score);
					}
            }
            resolve()
        })
    })
}

function TaskCenter() {
  return new Promise((resolve, reject) =>{
    $.post(kdHost('WebApi/NewTaskIos/getTaskList?'), async(error, resp, data) =>{
      try {
        taskres = JSON.parse(data)
        //$.log(formatJson(data))
        if (taskres.status == 1) {
          for (dailys of taskres.list.daily) {
            if (dailys.status == "1" && dailys.action != "") {
			  detail +="【"+dailys.title+"】+ 已完成 ，去领取奖励青豆\n";
              await $.wait(600);
              await getAction(dailys.reward_action)
            } else if (dailys.status == "2" && dailys.action != "") {
              await $.wait(600);
			  detail +="【"+dailys.title+"】"+dailys.but+",已领取青豆" + dailys.score+"\n";
            };
           if (dailys.id == "10" && dailys.status == "0") {
			     detail +="【"+dailys.title+"】未完成，去做任务";
          for (x=0;x<5;x++){
              await $.wait(5000);
              await recordAdVideo(dailys.reward_action)
             }
              if (record.status == 0) {
               await getAction(dailys.reward_action);
            }
            }
          }
        }
      } catch(e) {
        $.log("获取任务失败，" + e)
      } finally {
        resolve()
      }
    })
  })
}
function getAction(acttype) {
   return new Promise((resolve, reject) =>{
        $.get(kdHost(`WebApi/NewTaskIos/sendTwentyScore?action=${acttype}`), (error, resp, data) =>{
            let actres = JSON.parse(data);
            //$.log(formatJson(data));
            if (actres.status == 1) {
               detail +="获得青豆" + actres.score+"\n";
            } else if (actres.status == 0) {
                $.log(actres.msg)
            }
            resolve()
        })
    })
}



//开启时段宝箱
function openbox() {
  return new Promise((resolve, reject) =>{
    $.post(kdHost('WebApi/invite/openHourRed'), async(error, resp, data) =>{
      let boxres = JSON.parse(data);
      if (boxres.code == 1) {
        boxretime = boxres.data.time;
        detail += `【时段宝箱】 +${boxres.data.score}青豆，${boxres.data.time / 60}分钟后再次奖励\n`;
        await boxshare();
      } else {
        detail += `【时段宝箱】${boxres.msg}\n`;
      }
      resolve()
    })
  })
}

//宝箱分享
function boxshare() {
    return new Promise((resolve, reject) => {
       $.post(kdHost('WebApi/invite/shareEnd'), (error, resp, data) => {
           let shareres = JSON.parse(data);
           if (shareres.code == 1) {
                    detail += `【宝箱分享】+${shareres.data.score}青豆\n`
           } else {
                    //detail += `【宝箱分享】${shareres.msg}\n`;
                  //$.log(`${shareres.msg}`)
                }
                resolve()
          })
    })
}

//看视频奖励
function getAdVideo() {
    return new Promise((resolve, reject) => {
        $.post(kdHost('taskCenter/getAdVideoReward',"",'type=taskCenter'), (error, resp, data) => {
           let adVideores = JSON.parse(data);
            if (adVideores.status == 1) {
                detail += `【观看视频】${adVideores.num}次,获得${adVideores.score}个青豆\n`
            }
            resolve()
        })
    })
}
function recordAdVideo(acttype) {
    return new Promise((resolve, reject) =>{
        $.get(kdHost(`WebApi/NewTaskIos/recordNum?action=${acttype}`), async(error, resp, data) =>{
            try {
                 record = JSON.parse(data);
            } catch(e) {
                $.log("获取任务失败，" + e)
            } finally {
                resolve()
            }
        })
    })
}


// 激励视频奖励
function gameVideo() {
    return new Promise((resolve, reject) => {
        $.post(batHost('Game/GameVideoReward.json', articlebodyVal), (error, resp, data) => {
            gameres = JSON.parse(data)
            if (gameres.success == true) {
                detail += `【激励视频】${gameres.items.score}\n`
            }else{
                if(gameres.error_code == "10003"){
                    detail += `【激励视频】${gameres.message}\n`
                }
            }
            resolve()
        })
    })
}



//阅读奖励
function readArticle() {
    return new Promise((resolve, reject) => {
        $.post(batHost('article/complete.json',articlebodyVal), (error, response, data) => {
        try{
           readres = JSON.parse(data);
     if (data.indexOf('read_score')>-1&&readres.items.read_score!=0)  {
              detail += `【阅读奖励】+${readres.items.read_score}个青豆\n`;
            } 
    else if (readres.items.max_notice == '看太久了，换1篇试试') {
              detail += `【阅读奖励】看太久了，换1篇试试\n`;
           }
         } catch(e) {
          $.logErr(e+response);
        } finally {
          resolve()
        }
      })
    })
}
//惊喜红包
function Articlered() {
    return new Promise((resolve, reject) => {
        $.post(batHost('article/red_packet.json',redpbodyVal), (error, response, data) => {
            redres = JSON.parse(data)
            if (redres.success == true) {
              detail += `【惊喜红包】+${redres.items.score}个青豆\n`
            }else if(redres.error_code == "100001"){
               detail += `【惊喜红包】${redres.message}\n`
            }
            resolve()
        })
    })
}

function readTime() {
    return new Promise((resolve, reject) => {
        $.post(batHost('user/stay.json',timebodyVal), (error, resp, data) => {
            let timeres = JSON.parse(data)
            if (timeres.error_code == 0) {
                readtimes = timeres.time / 60
                detail += `【阅读时长】共计` + Math.floor(readtimes) + `分钟\n`
          
            } else {
                if (timeres.error_code == 200001) {
                    detail += `【阅读时长】❎ 未获取阅读时长请求\n`
                }else{
                    detail += `【阅读时长】❎ ${timeres.msg}\n`
                }
            }
            resolve()
        })
    })
}

//转盘任务
function rotary() {
  return new Promise((resolve, reject) =>{
      const time = new Date().getTime();
      const url = {
        url: `https://kd.youth.cn/WebApi/RotaryTable/turnRotary?_=${time}`,
        headers: {
          'Referer': 'https://kd.youth.cn/html/rotaryTable/index.html?' + cookie
        },
        body: cookie,
      }
      $.post(url, async(error, resp, data) =>{
        try {
          rotaryres = JSON.parse(data);      
        if (rotaryres.status==1){
         if(rotaryres.data.score != 0&&rotaryres.data.doubleNum!=0){
           await $.wait(5000);
           await TurnDouble();
          }
          await rotaryCheck();
         }
        } catch(e) {
          $.logErr(e+resp);
        } finally {
          resolve()
        }
      })
  })
}

//转盘宝箱判断
function rotaryCheck() {
    return new Promise(async(resolve) => {
        let i = 0;
        while (i <= 3) {
            if (100 - rotaryres.data.remainTurn >= rotaryres.data.chestOpen[i].times&&rotaryres.data.chestOpen[i].received==0) {
                await runRotary(i + 1)
            }
            i++;
        }
      resolve();
    })
}

//开启宝箱
function runRotary(index) {
    return new Promise((resolve, reject) => {
        const rotarbody = cookie + '&num=' + index;
        const time = new Date().getTime();
        const url = {
            url: `${YOUTH_HOST}RotaryTable/chestReward?_=${time}`,
              headers:{
                 'Referer':'https://kd.youth.cn/html/rotaryTable/index.html?'+cookie
               },
            body: rotarbody
        }
        $.post(url, (error, resp, data) => {
        let rotaryresp = JSON.parse(data);
          //$.log(formatJson(data));
            if (rotaryresp.status == 1) {
                detail += `【转盘宝箱${index}】+${rotaryresp.data.score}个青豆\n`;
            }else{
                if(rotaryresp.code == "10010"){
                    detail += `【转盘宝箱${index}】+今日抽奖完成\n`;
                }
            }
            resolve();
        })
    })
}

//转盘双倍奖励
function TurnDouble() {
  return new Promise((resolve, reject) =>{
    let time = new Date().getTime();
    const url = {
      url: `https://kd.youth.cn/WebApi/RotaryTable/toTurnDouble?_=${time}`,
      headers: {
        'Referer': 'https://kd.youth.cn/html/rotaryTable/index.html?' + cookie
      },
      body: cookie
    }
    $.post(url, (error, resp, data) =>{
      try {
        let Doubleres = JSON.parse(data);
        if (Doubleres.data.is_double == 1) {
          doublerotary += Doubleres.data.score
        }
      } catch(e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    })
  })
}
function earningsInfo() {
  return new Promise((resolve, reject) =>{
    $.get(kdHost(`wap/user/balance?`+cookie), (error, response, data) =>{
      infores = JSON.parse(data);
      if (infores.status == 0) {
        detail += ` <收益统计> ：\n`
        for (i = 0; i < infores.history[0].group.length; i++) {
          detail += '【' + infores.history[0].group[i].name + '】' + infores.history[0].group[i].money + '个青豆\n'
        }
        detail += '<今日合计>： ' + infores.history[0].score + " 青豆"
      }
      resolve()
    })
  })
}



function batHost(api, body) {
    return {
        url: 'https://ios.baertt.com/v5/'+api,
        headers: {
            'User-Agent': 'KDApp/2.0.0 (iPhone; iOS 14.5; Scale/3.00)',
            'Host': 'ios.baertt.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    }
}

function kdHost(api, header, body) {
  return {
    url: 'https://kd.youth.cn/'+api+`&${myuid}`,
    headers:{
     'Accept': '*/*',
     'Accept-Encoding': 'gzip, deflate, br',
     'Referer': 'https://kd.youth.cn/h5/20190301taskcenter/ios/index.html?'+cookie,
     'Host': 'kd.youth.cn',
     'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
     'X-Requested-With': 'XMLHttpRequest'
    },
    body: body,
    //timeout: 1000,
  }
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
