// 编写add函数，然后add(1)(2)(3)(4) 输出10 在考虑拓展性

function add(num) {
    var count = num;
    var innerFunction = function(arg) {
        count = arg + count;
        return innerFunction;
    }
    innerFunction.valueOf = function() {
        return count;
    }
    innerFunction.toString = function() {
        return count;
    }
    return innerFunction;
}
var res = add(1)(2)(3)(4);
console.log(res)