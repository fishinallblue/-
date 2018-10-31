var temp = {
    a: '1',
    b: '2'
}
function func(key) {
    console.log(key + ' 的值发生改变：' + this[key]);
}
function bindObj(obj, fn) {
    for(var i in obj) {
        if (obj.hasOwnProperty(i)) {
            Object.defineProperty(obj, i, {
                set: function(value) {
                    if (value != this.i) {
                        fn.call(obj, i);
                    }
                }
            });
        }
    }
}
bindObj(temp, func);
console.log(temp.a = 3)
console.log(temp.b = 5)