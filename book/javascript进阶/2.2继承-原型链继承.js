
var Animal = function(name) {
    this.name = name;
    this.sleep = function() {
        console.log('i am sleeping');
    }
}
Animal.prototype.eat = function(food) {
    console.log('i eat food' + food);
}

// 原型链继承
// 注意：方法是让原型对象指向另一个类的实例：实现的本质是重写原型对象
var Cat = function(tail) {
    this.tail = tail;
}
Cat.prototype = new Animal('cat');

/*
优点： 简单
问题：
1. Animal 的原型name属性会被所有cat实例共享
2，在创建cat的实例的时候，不能够向animal传递参数
3.不能实现多继承

所以实际的运用很少使用原型链
 */