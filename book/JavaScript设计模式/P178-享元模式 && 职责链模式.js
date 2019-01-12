// 享元模式解决的主要问题是
// 当系统创建1000个同一个类型的元素的时候。比如创建1000张图片
// 可以只创建一个img的对象，然后不停地修改src属性
// 这样可以节省系统开销

// 职责链模式
// 首先是最原始的职责链，
var order500 = function(orderType, pay, stock) {
    if (orderType == 1 && pay) {
        console.log('500 pay')
    } else {
        order200(orderType, pay, stock)
    }
}
var order200 = function(orderType, pay, stock) {
    if (orderType == 2 && pay) {
        console.log('200 pay')
    } else {
        order100(orderType, pay, stock)
    }
}

var order100 = function(orderType, pay, stock) {
    if (orderType == 3 && pay) {
        console.log('正常订单')
    } else  {
        console.log('存货不足')
    }
}
// 上面就完成了一条职责链，但是有个问题。就是职责链是一环套一环
// 一旦中间某一环需要去掉或者改动，那么可能整体都要改，非常麻烦
// 所以我们需要，让上面各个步骤可以灵活重组
// 定义一个类型chain

var order500 = function(orderType, pay, stock) {
    if (orderType == 1 && pay) {
        console.log('500 pay')
    } else {
        return 'nextSuccessor'
    }
}
var order200 = function(orderType, pay, stock) {
    if (orderType == 2 && pay) {
        console.log('200 pay')
    } else {
        return 'nextSuccessor'
    }
}

var order = function(orderType, pay, stock) {
    if (orderType == 3 && pay) {
        console.log('正常订单')
    } else  {
        console.log('存货不足')
    }
}

var Chain = function(fn) {
    this.fn = fn;
    this.successor = null;
}
Chain.prototype.setNextSuccessor = function(fn) {
    this.successor = fn;
}
Chain.prototype.passRequest = function() {
    var ret = this.fn.apply(this, arguments);
    if (ret == 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments)
    }
    return ret;
}