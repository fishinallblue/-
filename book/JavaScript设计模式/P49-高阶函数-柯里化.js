// 非柯里化实现
cost = function () {
    var result = [];
    return function() {
        if (arguments.length !== 0) {
            [].push.apply(result, arguments);
        } else {
            var info = 0;
            for(var i=0; i< result.length; i++) {
                info = info + result[i];
            }
            return info;
        }
    }
}()

cost( 100, 300 ); // 未真正求值
cost( 200 ); // 未真正求值
cost( 300 ); // 未真正求值
console.log( cost() ); // 求值并输出：600 

// 柯里化实现
