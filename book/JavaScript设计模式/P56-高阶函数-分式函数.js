// 分式函数:让函数操作分批进行，比如把1秒创建1000个节点
// 改成每隔200ms创建8个节点
var fenshi = function(arg, fn, count) {
    var tempCount = 0;
    return function() {
        var timer = null;
        var that = this;

        timer = setInterval(function() {
            if (tempCount < arg.length) {
                for(var i = tempCount; i< tempCount + count && i< arg.length; i++) {
                    fn.call(that, arg[i])
                }
                tempCount = tempCount + count;
                console.log('------')
            } else {
                clearInterval(timer);
            }
        }, 200);
    }
}
var num = fenshi([1,2,3,4,5,6,7,8,9,0], function(n) {
    console.log(n);
}, 2)
num();
