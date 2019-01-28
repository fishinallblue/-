// 解构可以用于拷贝和合并
let obj = {name: 'hejun', age: 1}
let obj1 = {...obj}
console.log(obj1)
console.log(obj === obj1)

// 合并
let obj2 = {address: 'beijing'}
let obj3 = {...obj1, ...obj2}
console.log(obj3)

// 拷贝只拷贝一层，是浅拷贝
let obj4 = {name: {age: 1}}
let obj5 = {...obj4}
console.log(obj4.name === obj5.name)
obj4.name.schoolname = 'jd';

// 深度拷贝的各种方法
// 1.深度拷贝，存在一定的问题，不能够拷贝方法
let obj6 = {name: {age: 1}}
let obj7 = JSON.parse(JSON.stringify(obj6))
console.log(obj7)
// 会丢失undefin
obj6 = {name: {age: 1}, reg: undefined}
obj7 = JSON.parse(JSON.stringify(obj6))
console.log(obj7)
// 不能拷贝reg格式的文件
obj6 = {name: {age: 1}, reg: /dfasdf/g}
obj7 = JSON.parse(JSON.stringify(obj6))
console.log(obj7)

// 2.深度拷贝，只能用递归了
let obj8 = {
    name: {
        age: 123
    },
    date: new Date(),
    reg: /dfasdf/g,
    fun: function() {
        console.log('23234')
    }
}
let obj9 = deepClone(obj8);
console.log(obj9)
function deepClone(obj) {
    if (obj == null) return null;
    if (typeof obj != 'object') return obj;
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    let newObj = new obj.constructor;
    for (let key in obj) {
        newObj[key] = deepClone(obj[key]);
    }
    return newObj;
}

// Object.assign() 可以用于对象的合并
let obj10 = {};
Object.assign(obj10, obj1, obj2)
console.log(obj10)

// 数组的合并 各种方法的简写
let num1 = [1, 2].concat([3, 4,5,6]);
let num2 = [...[1, 2], ...[5,4,3]];
console.log(num1)
console.log(num2)

console.log(Math.max(...[1, 2, 3]));

// 解决类数组问题
function sun() {
    console.log([...arguments])
}
sun(1,23,4,45,5)

// 剩余运算符,但是只能放在最后
function sun1(a, ...args) {
    console.log(args)
}
sun1(1,2,3,4,5)