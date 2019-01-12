// 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象
// 的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即
// 使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

// 实现each 函数
var each = function(arg, fn) {
    if (typeof fn !== 'function') {
        return;
    }
    for(var i=0; i< arg.length; i++) {
        fn(arg[i])
    }
}

// 内部迭代器和外部迭代器
// 内部迭代器： 我们刚刚编写的 each 函数属于内部迭代器，each 函数的内部已经定义好了迭代规则，它完全接手整个迭代过程，外部只需要一次初始调用。
// 但是他有一个缺点，就是扩展性不强，难以适应各种迭代的需求

// 外部迭代器：其实本质就是Generator 函数
// 一个类generator函数实现

var hejunGen = function (obj) {
    var current = 0;
    var next = function() {
        current ++;
    };
    var isEnd = function() {
        return obj.length === current + 1;
    }
    var getCurrent = function() {
        return obj[current];
    }
    return {
        next: next,
        isEnd: isEnd,
        getCurrent: getCurrent
    }
}