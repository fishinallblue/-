// 题目描述：https://leetcode.cn/problems/sqrtx/
var mySqrt = function(x) {
  if (x <= 1) {
    return x;
  }
  let i = 1; j = x;
  while(i <= j) {
    let temp = Math.floor((i + j) / 2);
    const value = temp * temp;
    if (value === x) {
      return temp;
    } else if (value > x) {
      j = temp - 1
    } else {
      i = temp + 1
    }
  }
  return j;
};