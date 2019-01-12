// 闭包解决异步参数的问题
for(var i=0; i< 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0)
}
// 上面输出了一堆5，已经很明确了
// 解决办法就是产生一个闭包，函数作用域
for(var i=0; i< 5; i++) {
    (function(value){
        setTimeout(function() {
            console.log(value)
        }, 0)
    })(i)
}
// 这个是一个存储乘法结果的函数
// 为了将cache放到函数的 内部而不是暴露在外面
// 所以才使用了这样的方法
// 写一个函数，里头放一堆参数
// 然后return一个新的函数
var mult = function() {
    var chache = [];
    return function() {
        var key = [].join.call(arguments);
        if (chache[key]) {
            console.log('我从缓存里面取得')
            return chache[key];
        }

        var a = 1;
        for(var i=0; i< arguments.length; i++) {
            a = a * arguments[i];
        }

        chache[key] = a;
        console.log('不是缓存')
        return a;
    }
}()
mult(1, 2, 3)
mult(1, 2, 3)

// 闭包和内存管理
// 如果闭包的作用域链中保存着一些DOM节点的话，那么忧郁DOM和BOM中对象是使用C++以COM对象的方式完成的，而COMUI想的垃圾收集机制是引用计数
// 所以如果两个对象循环引用的话，会使得这两个对象都没办法被回收
// 解决的办法是将其中的变量设置为null
