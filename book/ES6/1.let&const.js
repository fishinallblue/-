// 暂存死区
let a = 2;
{
    console.log(a);
    let a = 1;
}
console.log(a);


// const 常量 不能更改值的引用地址
const a = {};
a.b = 100;
console.log(a)

// 如果变量不想被更改，那应该用const