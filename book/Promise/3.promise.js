// 产生了新的需求
// 先读name.txt， 然后根据name.txt的结果，去请求age.txt
let promise = new Promise(function(resolve, reject) {
    // 会立即执行，先输出1 再输入2
    // resolve 和rejecte 也都是函数
    console.log(1);
    resolve();
})
console.log(2)

// 每个promise对象上面，都有then 方法
promise.then(function (param) { // onfullfilled 成功后执行的回调
    console.log('success')
}, function() {// onrejected 失败后执行的回调
    console.log('fail')
})

// 自己写一波上面的一堆功能
function Promise(executer) {
    let that = this;
    // 状态修改
    that.status = 'pending';
    that.value = null;
    that.reason = null;
    function resolve(value) { 
        if (that.status != 'pending') {
            return;
        }
        that.status = 'fullfilled'
        that.value = value;
    }
    function reject(reason) {
        if (that.status != 'pending') {
            return;
        }
        that.status = 'rejected'
        that.reason = reason;
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
}