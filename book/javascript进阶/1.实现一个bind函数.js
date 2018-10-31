// 自己的代码
Function.prototype.bind = function(context) {
    var thearguments = [].slice.call(arguments, 1);
    var that = this;
    return function(newArg) {
        that.apply(context, thearguments);
    }
}
// 目标代码
Function.prototype.bind = function(context) {
    var thearguments = [].slice.call(arguments, 1);
    var that = this;
    return function(newArg) {
        var thearguments = thearguments.concat(Array.prototype.slice.call(newArg))
        that.apply(context, thearguments);
    }
}