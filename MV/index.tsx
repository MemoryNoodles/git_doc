export const b = 4

var str = "aaaaaaabbbbbbbb";
//时间戳转换为日期
function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}
