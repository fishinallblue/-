// 高阶函数：①函数的参数是函数 ②函数返回值是函数
// AOP :面向切片编程
// 典型的高阶函数：参数是函数，返回值也是函数
Function.prototype.before = function(fn) {
    let that = this;
    return function() {
        // 123参数传到这里头
        fn.apply(that, arguments);
        that.apply(that, arguments);
    }
}
let fn = function() {
    console.log('old')
}
let newFn = fn.before(function() {
    console.log('new')
})
newFn('123');

// loadash: _after方法，在本函数(fn)被执行几次以后，再执行另一个函数
let fn = after(2, function() {
    console.log('after')
})
function after(times, callback) {
    // 把times保存在当前作用域上面
    return function() {
        if (--times == 0) {
            callback();
        }
    }
}
fn();
fn();

// 异步请求
// 请求两个文件，age 和 name。两个并行的文件没有先后关系，但是请求结束想要将两个结果合并成一个对象
_after = function(times, fn) {
    let arr = [];
    return function(data) {
        arr.push(data);
        if (--times == 0) {
            fn();
        }
    }
    
}
let fn1 = _after(2, function(data) {
    console.log(data)
})
let fs = require('fs');
// 异步函数都没办法try catch
fs.readFile('age.txt', 'utf8', function(err, data) {
    fn1(err)
})
fs.readFile('name.txt', 'utf8', function(err, data) {
    fn1(data)
})