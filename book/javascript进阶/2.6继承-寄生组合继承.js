
var Animal = function(name) {
    this.name = name;
    this.sleep = function() {
        console.log('i am sleeping');
    }
}
Animal.prototype.eat = function(food) {
    console.log('i eat food' + food);
}