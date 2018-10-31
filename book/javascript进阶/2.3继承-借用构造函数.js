
var Animal = function(name) {
    this.name = name;
    this.sleep = function() {
        console.log('i am sleeping');
    }
}
Animal.prototype.eat = function(food) {
    console.log('i eat food' + food);
}

// 借用构造函数
// 本质：在子类的构造函数内部调用父类的构造函数
var Cat = function(tail) {
    Animal.call(this);
    this.tail = tail;
}


/*
优点： 
1.解决了原型链继承中：多个子类实例共享父类属性的问题
2.创建子类的时候可以像父类传参
3.可以实现多继承
问题：
1. 实例并不是父类的实例，而是子类的实例
2. 只能继承父类实例属性和方法，不能继承父类的原型属性和方法
3. 无法实现函数复用，每个子类都拥有一份单独的父类实例副本
 */