// 模板方法和继承息息相关
// 基本上就是将共有方法抽象成为父类
// 子类通过继承和改写方法来实现自己的需求
// 但是JavaScript中其实继承不是那么必要使用
// 很多时候高阶函数也可以达到一样的目的
// 比如下面
var Father = function(params) {
    var func1 = params.func1 || function() {
        console.log('i am func1 in father');
    }
    var F = function() {};
    F.prototype.init = function () {
        func1();
    }
    return F;
}
var Child = Father({
    func1: function() {
        console.log('i am func1 in child');
    }
});
var child = new Child();
child.init();