var seckill = document.getElementById('seckill');

// 倒计时
countDown();
setInterval('countDown()',1000);
function countDown(){
    var now = new Date();
    var endTime = new Date("2200/6/14,23:59:00");
    var leftTime = parseInt((endTime.getTime() - now.getTime())/1000);

    var h = parseInt((leftTime/3600)%24);  // 先转换为时再取余
    var m = parseInt((leftTime/60)%60);  // 先转换为分再取余
    var s = parseInt(leftTime%60);  // 先转换为秒再取余
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    seckill.getElementsByClassName('cd_hour')[0].getElementsByClassName('cd_item_txt')[0].innerHTML = h;
    seckill.getElementsByClassName('cd_minute')[0].getElementsByClassName('cd_item_txt')[0].innerHTML = m;
    seckill.getElementsByClassName('cd_second')[0].getElementsByClassName('cd_item_txt')[0].innerHTML = s;
}

function checkTime(arg){
    if (arg < 10) {
        arg = "0" + arg;
    }
    return arg;
}
