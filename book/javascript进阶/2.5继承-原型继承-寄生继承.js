
var animal = {
    name: 'll',
    type: 'ddd'
}

// 原型继承
// 本质：本质还是原型链继承， 只不过给封了一层
// 目标是简化继承，让一个对象方便的和另一个对象保持相似
function object(o) {
    function F(){};
    F.prototype = o;
    return new F();
} 

// ES5 Object.create方法，两个参数，第一个是父类对象，第二个是为子类添加的新属性的对象

var cat = Object.create(animal, {
    age: {
        value: '445'
    }
})

// 所谓寄生继承，就是在原型继承的基础上面，再加点自己属性方法啥的，然后封成一个函数
function jisheng(o) {
    var result = object(o);
    o.haojiao = function() {
        alert('llll')
    }
    return result;
}

// 2024.10.30
function create1 (o) {
    let Fn = function(){};
    F.prototype = o; // 依然是这一步记不住
    return new Fn();
}