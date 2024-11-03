// 寄生组合继承，是对组合继承进行了优化
// 组合继承的主要问题是调用了父类的构造函数，优化掉这一点就行了
var Animal = function(name) {
    this.name = name;
    this.sleep = function() {
        console.log('i am sleeping');
    }
}
Animal.prototype.eat = function(food) {
    console.log('i eat food' + food);
}
var Cat = function(tail) {
    Animal.call(this);
    this.tail = tail;
}
Cat.prototype = Object.create(Animal.prototype, {
    constructor : {
        value: Cat
    }
})
