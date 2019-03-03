// 数据源

let obj = {
    name: 'hj',
    age: 12
}

// vue 数据劫持 Object.defineProperty

function observe (obj) {
    if (typeof obj == 'object') {
        for(let key in obj) {
            defineReactive(obj, key, obj[key]);
        }
    }
}
function defineReactive(obj, key, value) {
    observe(value); // 判断value是不是一个对象，如果是对象，那么会进行深度监控
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(val) {
            observe(value); // 如果设置的值是一个对象，那么对这个对象再进行一下监控
            console.log('数据更新了')
            value = val;
        }
    })
}
observe(obj);
obj.age = 1

// 如果属性不存在，默认后加的内容并不会刷新视图
// 数组push无效，因为Object.defineProperty是不支持数组的，为了满足要求，我们要重写PUsh
let oldpush = Array.prototype.push;
Array.prototype.push = function(value) {
    console.log('数据更新了');
    oldpush.call(this, value);
}
let a = [1,2,3,4];
a.push(5)

// 为了解决数组不支持修改监听这个问题，VUE把数组相关的所有的方法都改写了，具体操作如下
let funcs = ['slice', 'splice', 'push', 'shift']
funcs.forEach((item) => {
    let oldpush = Array.prototype[item];
    Array.prototype[item] = function(value) {
        console.log('数据更新了');
        oldpush.call(this, value);
    }
})

a.slice(1)

//  虽然做了上面一堆操作，但是还是有一个问题没办法解决
// 就是通过length -- 的方式对数据进行切割

a.length -- // 这是vue没办法监听到的，所以要避免使用
a[1] = 2 // 这种方式修改也是不行的

// 有此我们总结，监听数据这个问题，基本上就是对象和数组
// 对象使用原生的Object.defineProperty 数组使用改写原生的数据方法