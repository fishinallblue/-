一 面向对象的javascript
* 静态类型语言是在编译的时候已经确定变量的类型，动态类型语言的便令类型到程序运行后，被赋给某一个值以后才会具有某种类型
* 多态:同一个操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果

* 原型思想：类不是必须的，对象未必需要从类中创建出来，一个对象是通过克隆另外一个对象而得到的
* Object.create():在JavaScript中，根对象是Object.prototype对象，他是一个空对象，我们在JavaScript中遇到的每个对象，都是从Object.prototype对象克隆来的
* __proto__ 指向的是构造器的原型
    var b = new B()
    b.__proto__ == B.prototype == b.constructor.prototype
* 如果对象无法响应某一个请求，那么他会把这个请求委托给它的构造器原型
* Object.prototype == null


三 闭包和高阶函数
