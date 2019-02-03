// 将Fn挂到context对象上面
Function.prototype.call = function(context) {
    context = context ? Object(context) : window;
    context.fn = this;
    let args = [];
    for(var i=1; i< arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    // 这样做事为了将数组的参数，一个一个传到函数里面
    let r = eval('context.fn(' + args + ')');
    delete context.fn;
    return r;
}
// 

// 自我实现
Function.prototype.call1 = function() {
    var context = arguments[0];
    var arg = [];
    for(var i=1; i< arguments.length; i++) {
        arg.push(arguments[i])
    }
    context.fn = this;
    var result = context.fn(...arg);
    delete context.fn;
    return result;
}
a = 0;
var test = {
    a: 1
}
var fn = function(m) {
    console.log(this.a + m)
}
fn(2);
fn.call(test, 2)
// 自己实现的函数还是有一些问题，比如参数的问题

fn.call1(test, 2)