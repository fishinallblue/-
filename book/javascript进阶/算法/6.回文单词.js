// 回文单词
var huiwen = function(str) {
    if (str == '' || str.length == 1) {
        return true;
    }
    var i = 0;
    var j = str.length - 1;
    while(i <= j) {
        if (str.charAt(i) == str.charAt(j)) {
            i++;
            j--;
        }else {
            return false;
        }
    }
    return true;
}
console.log(huiwen('aaa'));
console.log(huiwen('a1aa1'));
console.log(huiwen('1a1a1a1'));

// 更加简单的写法
function hui (str) {
    return str == str.split('').reverse().join('');
}
console.log(hui('aaa'));
console.log(hui('a1aa1'));
console.log(hui('1a1a1a1'));