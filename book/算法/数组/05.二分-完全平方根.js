// 题目描述：https://leetcode.cn/problems/sqrtx/
var isPerfectSquare = function(x) {
  if (x <= 1) {
    return true;
  }
  let i = 1; j = x;
  while(i <= j) {
    let temp = Math.floor((i + j) / 2);
    const value = temp * temp;
    if (value === x) {
      return true;
    } else if (value > x) {
      j = temp - 1
    } else {
      i = temp + 1
    }
  }
  return false;
};