// 首先讲一下es5 的Object.defineProperty()
let obj;
// 默认属性是不可枚举的
obj = {};
Object.defineProperty(obj , 'name', {
    value: 123,
    enumerable: false// 是否可枚举
})
console.log(obj) // {}
console.log(obj.name) // 123
obj = {};
Object.defineProperty(obj , 'name', {
    value: 123,
    enumerable: true// 是否可枚举
})
console.log(obj) // {name: 123}
console.log(obj.name) // 123

// 默认值是不可改写的
obj = {}
Object.defineProperty(obj , 'PI', {
    value: 3.14,
    enumerable: true,
    writable: false
})
obj.PI = 3.15
console.log(obj.PI)

// 设置get 和set 用了get 和set是不能够写value 和writable的
obj = {}
Object.defineProperty(obj , 'PI1', {
    enumerable: true,
    get: function() {
        return 3.15
    }
})
console.log(obj.PI1)

// 使用set的各种问题
temp = '';
Object.defineProperty(obj , 'PI2', {
    enumerable: true,
    get: function() {
        return temp
    },
    set: function(val) {
        temp = val;
    }
})
obj.PI2 = 5;
console.log(obj.PI2)
