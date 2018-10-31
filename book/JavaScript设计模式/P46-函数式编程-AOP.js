// 函数作为返回值
// AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来
Function.prototype.before = function(fn) {
    var self = this;
    return function() {
        fn.apply(this, arguments);
        return self.apply(this, arguments);
    }
}

Function.prototype.after = function(fn) {
    var self = this;
    return function() {
        var result = self.apply(this, arguments);
        fn.apply(this, arguments);
        return result;
    }
}

var testFun = function(n) {
    console.log(n);
}
testFun = testFun.before(function(m) {
    console.log(m)
}).after(function() {
    console.log('3');
})

testFun(2);