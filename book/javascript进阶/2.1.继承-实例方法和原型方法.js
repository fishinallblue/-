// 1.实例方法和原型方法
// 实例方法每次创建一个实例就会创建一个新的方法
// 但是原型方法则是：所有的实例共享一个原型方法
var Animal = function(name) {
    this.name = name;
    // 这就是实例方法
    this.sleep = function() {
        console.log('i am sleeping');
    }
}
// 下面这个就是原型方法
Animal.prototype.eat = function(food) {
    console.log('i eat food' + food);
}
