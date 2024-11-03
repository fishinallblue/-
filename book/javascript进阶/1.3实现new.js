// new 的操作过程
// 传入的是一个构造函数
function create() {
    var obj = {};
    let Con = arguments[0];
    var arg = [...arguments].slice(1);
    obj.__proto__ = Con.prototype;
    let result = Con.apply(obj, arg);
    return result instanceof Object ? result : obj;    
}

// 2024.10.30
function new1(Fn, ...args) {
    let o = {};
    o.__proto__ = Fn.prototype // 这一步感觉理解还是不深入
    return Fn.call(o, ...args);
}