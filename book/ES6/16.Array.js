// find && findIndex
// reduce 收敛 reduceRight
let r = [1,2,3].reduce((prev, next, current, arr) => {
    return prev + next;
})
console.log(r)

let r1 = [{price: 1, count: 4},{price: 2, count: 5},{price: 3, count: 6}].reduce((prev, next, current, arr) => {
    return prev + next.price * next.count;
}, 0)
console.log(r1)
// reduce 自己实现
Array.prototype.reduce = function(callback, prev) {
    for(var i=0; i<this.length; i++) {
        if (prev != null) {
            prev = callback(prev, this[i], i ,this);
        } else {
            prev = callback(this[i], this[i + 1], i ,this);
            i++;
        }
    }
    return prev;
}

// map 映射: 返回的是映射后的结果
// 