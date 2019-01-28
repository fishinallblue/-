// 装饰器
// @符号表示装饰器，可以修饰类和类中的属性、方法
// 不能装饰函数
@flag
class Circle {
    @readonly PI = 3.14;
    @log
    say () {

    }
}

function readonly(CircleProperty, key, descriptoer) {
    descriptoer.writable = false;
}
function log (CircleProperty, key, descriptoer) {
    let old = descriptoer.value;
    descriptoer.value = function() {
        console.log('---log---')
        old();
    }
}
function flag(target) {

}