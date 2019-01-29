// 前面就完成了同步的Promise
// 下面需要完成 ① 异步的Promise  
// 比如下面这个方法
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log(1);
        resolve();
    })
})

// 所以必须要对之前的内容进行改写和扩展

function Promise(executer) {
    let that = this;
    // 状态修改
    that.status = 'pending';
    that.value = null;
    that.reason = null;
    // 依赖的是发布订阅模式，将成功的和失败的，以此存放到数组中，等待用户改变状态，以此调用绑定的事件
    onResolvedCallbacks = [];
    onRejectedCallbacks = [];

    function resolve(value) { 
        if (that.status != 'pending') {
            return;
        }
        that.status = 'fullfilled'
        that.value = value;
        that.onResolvedCallbacks.forEach(function(fn) {
            fn();
        });
    }
    function reject(reason) {
        if (that.status != 'pending') {
            return;
        }
        that.status = 'rejected'
        that.reason = reason;
        that.onRejectedCallbacks.forEach(function(fn) {
            fn();
        });
    }
    executer(resolve, reject);
}
Promise.prototype.then = function(onfullfilled, onrejected){
    var that = this;
    if (that.status == 'fullfilled') {
        onfullfilled(that.value)
    }
    if (that.status == 'rejected') {
        onrejected(that.reason)
    }
    if (that.status == 'pending') {
        // 表示的是这里面有异步逻辑，还没有调用成功和失败
        that.onResolvedCallbacks.push(function() {
            // 为了放入参数
            onfullfilled(that.value);
        })
        that.onRejectedCallbacks.push(function() {
            // 为了放入参数
            onrejected(that.value);
        })
    }
}

// 下面继续改造，完成② 一个Promise可以then 多次 这样的需求
// Promise 中 then 的特点
// 如果promise then方法的成功回调，或者失败回调执行后，返回的是一个promise，会让这个promise执行
function read(url) {
    return new Promise(function(resolve, reject){
        false.readFile(url, 'utf8', function(err,data){
            if(err) return reject(err)
            resolve(data);
        })
    })
}
read('./name.txt').then(function(data) {
    return read(data + '1');
}).then(function(val) {

}, function() {

})
// promise 每次返回的都必须是一个新的promise
// 为了实现 链式的调用。需要继续改上面的代码
Promise.prototype.then = function(onfullfilled, onrejected){
    var that = this;
    // 当前调用then方法后，会返回一个全新的promise
    let promise2 = new Promise(function(resolve, reject) {

        if (that.status == 'fullfilled') {
            try {
                // 应该多一个判断，x是不是Promise，如果是的话，那就采用当前Promise的状态
                let x = onfullfilled(that.value)
                resolve(x);
            } catch(e) {
                reject(e)
            }
        }
        if (that.status == 'rejected') {
            onrejected(that.reason)
        }
        if (that.status == 'pending') {
            // 表示的是这里面有异步逻辑，还没有调用成功和失败
            that.onResolvedCallbacks.push(function() {
                // 为了放入参数
                onfullfilled(that.value);
            })
            that.onRejectedCallbacks.push(function() {
                // 为了放入参数
                onrejected(that.value);
            })
        }
    });
}