// 组合多个函数，从右到左，比如：compose(f, g, h) 最终得到这个结果 (...args) => f(g(h(...args))).
const compose = (...fns) => {
  return function (...params) {
    return fns.reverse().reduce((pre,temp) => {
      return temp(...pre);
    }, params)
  }
}

// 2024.12.1 函数科里化
const compose1 = (...fns) => {
  return function(...args) {
    fns.reverse().reduce((pre, temp) => {
      return temp(...pre);
    }, args);
  }
}