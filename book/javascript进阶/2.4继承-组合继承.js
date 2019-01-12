
var Animal = function(name) {
    this.name = name;
    this.sleep = function() {
        console.log('i am sleeping');
    }
}
Animal.prototype.eat = function(food) {
    console.log('i eat food' + food);
}

// 组合继承
// 本质：将上面两种方法混合，用原型链继承父类原型方法，用构造函数继承父类的实例属性和方法
var Cat = function(tail) {
    Animal.call(this);
    this.tail = tail;
}
Cat.prototype = new Animal();
// 这话啥意思
// ca=t.prototype = new Animal 这一步其实相当于将cat的原型指向给破坏了

Cat.prototype.constructor = Cat;


/*
优点： 兼备上面两种方法的优点
问题：
1.调用了两次父类构造函数，生成了两份实例
 */