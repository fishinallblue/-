// class 继承
// 子类用super关键字来代指父类
class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `x: ${this.x}  y: ${this.y}`;
    }

}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y)
        this.color = color;
    }

    toString() {
        console.log(this.color + super.toString());
    }
}

let point = new ColorPoint(1, 2, 'red ');
point.toString();

// es5和es6的继承规则不同
// es5是先建立一个子类的实例对象，然后修改原型链
// es6其实是先