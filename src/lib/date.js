/**
 * 返回年月日
 * @export
 * @param {Date} date
 * @param {string} [splitor='-']
 * @returns
 */
export function getDate(date, splitor = '-') {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}${splitor}${addZeroPrefix(month)}${splitor}${addZeroPrefix(day)}`
  }
  
  /**
   * 返回时分秒/时分
   * @export
   * @param {*} date
   * @param {boolean} [withSecond=false]
   * @returns
   */
  export function getTime(date, withSecond = false) {
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return withSecond ? `${addZeroPrefix(hour)}:${addZeroPrefix(minute)}:${addZeroPrefix(second)}` : `${hour}:${addZeroPrefix(minute)}`
  }
  
  export function getFullDate(date) {
    return `${getDate(date)} ${getTime(date)}`
  }
  
  export function isToday(date) {
    return date.toDateString() === new Date().toDateString()
  }
  
  /**
   * 日期格式化
   * @param {Date} date Date对象
   * @param {*} fmt 要返回的时间格式
   * @returns 
   */
  export function formatDate (date,fmt) {
    var o = {
      "M+": date.getMonth() + 1,                 //月份   
      "d+": date.getDate(),                    //日   
      "h+": date.getHours(),                   //小时   
      "m+": date.getMinutes(),                 //分   
      "s+": date.getSeconds(),                 //秒   
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  
  /**
   * 个位数，加0前缀
   * @param {*} number
   * @returns
   */
  function addZeroPrefix(number) {
    return number < 10 ? `0${number}`:number
  }
