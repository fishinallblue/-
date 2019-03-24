// 今日头条算法测试

// 手写bind
var bind = function(...args) {
    let fn = this;
    let context = args.splice(0, 1)[0];
    return function(...otherArgs) {
        fn.call(context, ...args, ...otherArgs);
    }
}

// 手写call

var call = function(context, ...args) {
    let fn = this;
    context = context || window;
    context.fn = fn;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

// 手写快排
function sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let temp = arr.splice(0,1)[0];
    let left = [];
    let right = [];
    for(var i=0; i<arr.length; i++) {
        if (arr[i] < temp) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sort(left).concat(sort(right));
}

// 手写new
function newFn (Fn, ...args) {
    var o = {};
    o.__proto__ = Fn.prototype;
    Fn.call(o, ...args);
    return o;
}

//  实现instanceOf

function instance(a, C) {
    if (a.__proto__ === C.prototype) {
        return true;
    }
    if (a.__proto__ == null) {
        return false;
    }
    return instance(a.__proto__, C);
}

// 实现防抖动：输入框的时候用到
function fangdou(callback, interval) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(callback, interval);
    }
}

// 实现节流：scroll的时候用到

function jieliu(callback, interval) {
    let now, prev = 0;
    return function(...args) {
        now = +new Date();
        if (now - prev > interval) {
            callback.call(this, ...args);
            prev = now;
        }
    }
}
// 手写promise
var Promise = function(fn) {
    this.state = 'pending';
    this.sucCallBacks = [];
    this.failCallBacks = [];
    this.value;
    var that = this;
    
    var resolve = function(value) {
        that.state = 'resolved';
        that.value = value;
        that.sucCallBacks.foreach(function(item) {
            item(value);
        })
    }

    var reject = function(value) {
        that.state = 'rejected';
        that.value = value;
        that.failCallBacks.foreach(function(item) {
            item(value);
        })
    }
    fn(resolve, reject);

}

Promise.prototype.then = function(success, fail) {
    var that = this;
    return new Promise(function(resolve, rejecte){

        if (that.state == 'pending') {
            that.sucCallBacks.push(success);
            that.failCallBacks.push(fail);
        }
        if (that.state == 'resolved') {
            success(that.value);
        }
        if (that.state == 'rejected') {
            fail(that.value);
        }
    });
}
