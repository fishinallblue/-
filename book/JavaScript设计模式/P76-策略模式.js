// 一个比较低效的单例工厂
var strategies= {
    'A': function(salary) {
        return salary * 3;
    },
    'B' : function(salary) {
        return salary * 4;
    }
}

var createFactory = function(type ,salary) {
    return strategies[type](salary);
}
console.log(createFactory('A', 1000))