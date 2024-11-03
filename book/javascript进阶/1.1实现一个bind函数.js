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

Function.prototype.bind = function() {
    var args = Array.prototype.slice.call(argument);
    var context = args.splice(0, 1)[0];
    var that = this;
    return function() {
        var newargs = Array.prototype.slice.call(argument);
        that.apply(context, args.concat(newargs));
    }
}

// 不用call自己实现bind
Function.prototype.bind = function(context) {
    context = context ? context : window;
    let args = [...arguments].slice(1);
    var _this = this;
    return function() {
        let arg = arguments;

        _this.call(context, ...args, ...arg);
    }
}

// 2024.10.30
Function.prototype.bind = function(context = window, ...arggs) {
    let fn = this;
    return function(...args) {
        const res = fn.call(context, ...arggs, ...args);
        return res;
    };
}