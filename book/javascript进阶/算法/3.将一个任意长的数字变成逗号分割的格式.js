// 完全忘记了还有正则这个东西。。。
var parseToMoney = function(num) {
    var str = num.toString();
    var index = str.indexOf('.') > -1 ? str.indexOf('.') : str.length;
    var count = parseInt(index / 3);
    var yu = index % 3;
    var tempCount = 0;
    if (yu > 0) {
        str = str.slice(0,yu) + ',' + str.slice(yu);
        tempCount ++;
    }

    for(var i=0; i< count - 1; i++) {
        str = str.slice(0,yu + 3 * (i+1) + tempCount) + ',' + str.slice(yu + 3 * (i+1) + tempCount);
        tempCount ++;
    }
    return str;
}

  
// 保留三位小数

// 2024.12.1
parseToMoney = (num) => {
    let [start, end] = num.toString().split('.');
    let newStart = start.split('').reverse().join('').replace(/(\d{3})/g, (match, $1) => {
        return `${$1},`
    }).split('').reverse().join('');
    if (newStart.charAt(0) === ',') {
        newStart = newStart.slice(1)
    }
    if (end) {
        newStart = newStart + '.' + end;
    } 
    return newStart;
}

parseToMoney = (num) => {
    num = parseFloat(num.toFixed(3));
    let [integer, decimal] = String.prototype.split.call(num, '.');
    // 不太懂这个正则怎么写出来的
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
    return integer + (decimal ? '.' + decimal : '');
}
console.log(parseToMoney(12434.56)); // return '1,234.56'
console.log(parseToMoney(123456789)); // return '123,456,789'
console.log(parseToMoney(1087654.321)); // return '1,087,654.321'

