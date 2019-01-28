// 解决的问题是1.回调地狱  2.多个异步请求在同一个时间合并结果
// promise是自带的，使用的时候要new
// promise承诺，需要传递一个executor执行器，他是同步执行的

const promise = new Promise(function(resolve, reject) {
    // 这个方法是同步执行的
    if (/*异步操作成功*/) {
        resolve(value)
    } else {
        reject(error)
    }
})
// 使用then来指定resolved状态和rejected状态的回调函数。
promise.then(function(value) {
    // resolve  成功的函数
}, function(error) {
    // failure  失败的函数
})

//  prmoise 中有三个状态
// 默认是pedding状态 resolved 成功态  

// 用promise加载异步的图片
function loadImageAsyc(url) {
    return new Peomise(function(resolve, reject) {
        var img = new img();
        img.onload = function() {
            resolve(img);
        }

        img.onerror = function() {
            reject('error in')
        }

        img.src = url;
    })
}
loadImageAsyc('www.dd.dd').then(function(img) {
    // 成功
}, function() {
    // 失败
})

// 用promise实现Ajax操作
const getJson = function(url) {
    return new Promise(function(resolve, reject) {
        var temp = new XMLHttpRequest();
        var handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
        temp.open('get', url);
        temp.onreadystatechange = handler;
        temp.responseType = 'json';
        temp.setRequestHeader('Accept', 'application/json');
        temp.send;
    })
}

getJson('www.baidu.com').then(function(json) {
    console.log('i am the response', json)
}, function(error) {
    console.log(error);
})
// promise 骚操作
// 正常情况下promise里面的resolve 函数里面的参数，会传递给回调函数
// 但是如果resolve函数的参数是另一个promise实例的话，情况会有所不同
// 下面这种情况的话 P2的状态由P1决定，
// 如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；
// 如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。
var p1 = new Promise(function(resolve, reject) {

})

var p2 = new Promise(function(resolve, reject){
    resolve(p1);
})

// then 返回的是一个新的Promise实例，所以可以采用链式调用
// 下面的两个then，前一个return的结果会传入下一个then

getJson('url').then(function(json) {
    return json.post
}).then(function(post) {
    return 'lll'
})

// 采用链式的then，可以指定一组按照次序调用的回调函数
// 这时候只需要前面的回调函数，返回的是一个Promise对象
// 这时后面的函数会等待前面的Promise对象状态发生变化，才被调用


// promise 会吃掉错误

// finally 
server.listen(post).then(function() {

}).finally(function(){
    // finally不接受参数，不管状态如何，一定会执行
})

// Promise.all : 用于包装多个promise实例，成为一个新的promise实例
// p1, p2, p3必须是promise实例才行
const p = new Promise.all([p1, p2, p3])
p.then(function() {
    // p1,p2,p2的状态都是resolved才会执行这个
}).catch(function() {
    // p1,p2,p3 的状态有一个是rejected就会执行这个
})

// Promise.race ：跟all不一样，顾名思义


// Promise.resolve() ：将现有的对象转换成为Promise对象

// Promise.try() : 不需要考虑是不是异步的，包一层，异步的可用then处理，同步的就直接执行了