// 自己实现模板字符串
let name ='hej'
let age = 9;
let str = "${name}今天${age}岁了"
let r = str.replace(/\$\{([^}]*)\}/g, function() {
    return eval(arguments[1])
})
console.log(r)