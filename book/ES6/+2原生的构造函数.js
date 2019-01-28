// 原生的构造函数
// 以前认为类必须要大写
// 类也可以当做函数来调用，但是es6中，类只能new
function Animal (type) {
    this.type = type;
}
Animal.prototype.eat = function() {
    console.log('eat');
}
console.log(Animal.prototype.constructor === Animal)
// 1.继承私有的属性
function Cat(type) {
    // 在子类里面调用父类，并保证this指向子类
    Animal.call(this,type)
}
let cat = new Cat('lll')
console.log(cat.type)

// 2.继承父类的公共属性
// 下面三种写法相同  --------> 三种方法都十分的重要

Cat.prototype.__proto__ = Animal.prototype;
Object.setPrototypeOf(Cat.prototype, Animal.prototype)
Cat.prototype = Object.create(Animal.prototype, {constructor: {value: Cat}})

let cat1 = new Cat();
cat1.eat();