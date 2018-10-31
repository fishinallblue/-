// 注意在写的时候，要清楚解决几种情况
// 1. 只有key 没有value
// 2. decodeURIComponent
// 3. 一个值多次传入
function parse(url) {
    var result = {};
    var params = url.split('?').length >=1 ? url.split('?')[1] : null;
    if (params) {
        var resultArr = params.split('&');
        for (var i = 0; i< resultArr.length; i++) {
            var temp = resultArr[i].split('=');
            var temp1 = temp[1] ? decodeURIComponent(temp[1]) : true;
            if (result[temp[0]] && result[temp[0]] != temp1) {
                var arr = result[temp[0]];
                if (arr instanceof Array) {
                    arr.push(temp1)
                } else {
                    arr = [arr, temp1];
                }
                temp1 = arr;
            }
            result[temp[0]] = temp1;
        }
    }
    return result;
}
var url = 'http://www.domain.com/?user=anonymous&id=123&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parse(url))

// 上面有个问题，就是没办法转换数字
function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
      if (/=/.test(param)) { // 处理有 value 的参数
        let [key, val] = param.split('='); // 分割 key 和 value
        val = decodeURIComponent(val); // 解码
        val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
  
        if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
          paramsObj[key] = [].concat(paramsObj[key], val);
        } else { // 如果对象没有这个 key，创建 key 并设置值
          paramsObj[key] = val;
        }
      } else { // 处理没有 value 的参数
        paramsObj[param] = true;
      }
    })
  
    return paramsObj;
  }
  
  console.log(parseParam(url))