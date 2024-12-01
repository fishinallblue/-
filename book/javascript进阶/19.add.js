// 编写add函数，然后add(1)(2)(3)(4) 输出10 在考虑拓展性
function add(num) {
  var count = num;
  var innerFunction = function(arg) {
      count = arg + count;
      return innerFunction;
  }
  innerFunction.valueOf = function() {
      return count;
  }
  innerFunction.toString = function() {
      return count;
  }
  return innerFunction;
}
// var res = add(1)(2)(3)(4);
// console.log(res)

// 2024.12.1 注意toString的调用
// 但是并不会输出理想的代码，没找到能正确输出的
const add1 = (...args) => {
  let count = args.reduce((pre, temp) => pre + temp, 0);
  const fn = (...args1) => {
    count = count + args1.reduce((pre, temp) => pre + temp, 0);
    return fn;
  }
  fn.toString =function() {
    return count;
  }
  fn.valueOf =function() {
    return count;
  }
  return fn;
}
console.log(add1(1,2,3)(4,5))