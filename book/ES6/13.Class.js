// Class 初探
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
// 定义类方法的时候，前面不需要
    toString() {
        // this指向当前实例
        return `x: ${this.x} , y: ${this.y}`;
    }
}
// 构造函数只能通过new来构造，不能直接调用
let smallPoint = new Point(1, 2);
console.log(smallPoint.toString());

// 方法是默认添加到原型对象上面的
// 使用object.assign()向类中添加多个方法

Object.assign(Point.prototype ,{
    toValue(){},
    toString(){}
})

// 采用表达式来表达类的属性名

let methodName = 'getArea'
class Square {
    constructor(length) {

    }

    [methodName]() {
        // 函数名就是getArea
    }
}

// construct 方法是默认添加的，默认返回的是this，可以在内部改变他的指向
// 实例的__proto__属性指向了原型对象，所以可以使用下面这样的方法
// 通过实例给原型对象添加方法

smallPoint.__proto__.pointName = function() {}

// 类不存在变量提升

// name属性
Point.name

// class 的getter和setter来拦截该属性的存取行为
class MyClass {
    get prop() {
        return 'getter'
    }

    set prop(value) {
        console.log('set value:' + value)
    }
}

let init = new MyClass();
init.prop = '123'
console.log(init.prop);

// 静态方法：不会被实例继承，要用类来调用的方法
class Foo {
    static classMethod () {
        console.log('我是静态方法');
    }
}
var foo = new Foo();
Foo.classMethod();
// foo.classMethod();

// 如果静态方法里面有this关键字，那这个this指向的是类，而不是实例
class Foo1 {
    static bar() {
        this.baz();
    }

    static baz() {
        console.log('静态baz')
    }

    baz() {
        console.log('非静态baz')
    }
}
Foo1.bar();

// 父类的静态方法可以被子类继承


// 静态属性 && 实例属性
// 下面是静态属性的唯一定义方法
class Foo {

}
Foo.prop = 1;

// new.target属性，感觉暂时用不上，以后再说