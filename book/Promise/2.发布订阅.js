// 发布-订阅：有一个中介，发布者和订阅者都去找中介
// 观察者模式: 不存在中介，观察者和被观察者是直接联系的
// 这两个是有区别的

// 发布订阅的实现方式
function Event() {
    // 中介：核心
    this.events = [];
}
Event.prototype.on = function(fn) {
    this.events.push(fn);
    // 订阅者
}
Event.prototype.emit = function(data) {
    // 发布者
    this.events.forEach(function(fn) {
        fn(data);
    })
}
let fs = require('fs');
let e = new Event();
let arr = [];
e.on(function(data) {
    arr.push(data);
    if (arr.length == 2) {
        console.log(arr)
    }
})
// 异步函数都没办法try catch
fs.readFile('age.txt', 'utf8', function(err, data) {
    e.emit(data);
})
fs.readFile('name.txt', 'utf8', function(err, data) {
    e.emit(data);
})

// 观察者模式
function Subject() {
    // 被观察者
    this.obsers = [];
    this.status = '开心';
}
Subject.prototype.attach = function(obser) {
    this.obsers.push(obser);
}
Subject.prototype.setState = function(status) {
    this.status = status;
    // 核心的通知方法
    this.notifyAll();
}
Subject.prototype.notifyAll = function(status) {
    this.obsers.forEach(element => element.update());
}
function Observer(name, target) {
    // 观察者一般会有一个方法，更新方法update
    this.name = name;
    this.target = target;
}
Observer.prototype.update = function() {
    // 更新方法
    console.log('更新了')
}
let sub = new Subject();
// 给观察者添加目标
let obser1 = new Observer('我', sub);
let obser2 = new Observer('妻子', sub);
// 给目标添加观察者
sub.attach(obser1);
sub.attach(obser2);
sub.setState('不开心');