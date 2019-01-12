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
// 柯里化的意思是：部分求职，一个柯里化的函数首先接受一些参数，接受了这些参数以后，
// 函数不会立即求值，而是继续返回另外一个函数，刚才传入的参数再函数形成的闭包中被保存起来
// 待到函数真正需要求值的时候，之前传入的参数会被一次性用于求值
