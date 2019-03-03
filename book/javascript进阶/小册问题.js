// 1. 解决经典闭包内部加上timer的三种方法

// 2. 深浅拷贝
// 2.1浅拷贝的实现方法
// Object.assign
// 运算符 ...

// 2.2深拷贝的实现方法   
// JSON.parse(JSON.stringify())实现深拷贝  -> 弊端是什么
// 深拷贝函数自己写，哪些类型需要单抽出来？？Date  Math 等


// 3.原型
// __proto__ = contrustor.prototype

// 4.ES6
// let var const 区别
// 为什么let 和 const 不加上变量提升了，这样做有什么好处

// 5. import 和  require 两种载入模块的方式不同之处

import a from 'xxx'
import { a } from 'xx'

export function a (){}
export default function (){}