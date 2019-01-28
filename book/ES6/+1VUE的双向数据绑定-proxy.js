// 监听对象的每个参数更新
let obj = {name: 'hej', age: {age: 9}}
function update() {
    console.log('数据更新了');
}
function observer(obj) {
    if (typeof obj != 'object') {
        return obj; // 普通值不需要观察
    }
    for(let key in obj) {
        defineRelative(obj, key, obj[key]);
    }
}
// 把对象中的所有属性都采用Object.defineProperty方式来定义
function defineRelative(obj, key, value) {
    observer(value);
    Object.defineProperty(obj, key , {
        get() {
            return value;
        },
        set(val) {
            update();
            value = val;
        }
    })
}
observer(obj);
obj.name = 100;
obj.age.age = 100;

// proxy 实现的方式
// proxy 代理
// Object.defineProperty 本身是不支持数组的，所以VUE中的数组双向绑定用了其他的方法
// 但是proxy 有新的功能
obj = {name: 'hej', age: {age: 9}, arr: [1, 2, 3]}
let p = new Proxy(obj, {
    get(target, key, proxy) {
        // 第三个属性叫代理对象（p），一般都不用
        // return target[key]
        return Reflect.get(target, key);
    },
    set(target, key, value) {
        console.log('set');
        return Reflect.set(target, key, value);
    }
})
// 下面的set执行了两次
// 是因为length改变了，设置了一下length
let p1 = new Proxy([1, 2, 3], {
    get(target, key, proxy) {
        // 第三个属性叫代理对象（p），一般都不用
        // return target[key]
        return Reflect.get(target, key);
    },
    set(target, key, value) {
        // 添加length判断
        if(key === 'length') return true;
        console.log('set');
        return Reflect.set(target, key, value);
    }
})
p1.push(4)