// class 继承
// 子类用super关键字来代指父类
class Point{
    static z() {
        return 0
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `x: ${this.x}  y: ${this.y}`;
    }

}
// extends 里面内置了call ，也实现了继承公有属性
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y) // Point.call(this, x, y)
        this.color = color;
    }

    toString() {
        console.log(this.color + super.toString());
    }
}

let point = new ColorPoint(1, 2, 'red ');
point.toString();
console.log(point.z())
// es5和es6的继承规则不同
// es5是先建立一个子类的实例对象，然后修改原型链
// es6其实是先