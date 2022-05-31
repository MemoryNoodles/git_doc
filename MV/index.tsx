 
var str = "aaa23444bbbbbb";
//时间戳转换为日期
function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}

var a = str;
var b = a.substring(0, 2);
var  c ="3" 
