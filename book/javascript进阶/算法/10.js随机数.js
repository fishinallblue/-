//随机返回一个范围的数字。参数是两个的时候，返回传入的两个参数的区间的随机函数；
// 参数是一个的时候，返回0到这个数的随机函数；参数是零个的时候，返回0到255区间的整数，大家可以根据自己的需要进行扩展

var random = function() {
    var min = 0;
    var max = 255;
    if (arguments.length == 1) {
        max = arguments[0];
    } else if (arguments.length == 2) {
        min = arguments[0];
        max = arguments[1];
    }

    return Math.round(parseInt(Math.random() * (max - min))) + min;
}

console.log(random())
console.log(random(1, 244))
console.log(random(356))

// 这个注意的是，math.random 随机数返回的是[0,1)区间的数，所以使用round四舍五入刚刚好，