// 重点是双指针的学习
// 方向相反的双指针用来求数组中的两个数之和
// 方向相同的双指针用来求子数组的和或者乘积
var twoSum = function (numbers, target) {
  let i = 0; j = numbers.length - 1
  while (i < j) {
    let res = numbers[i] + numbers[j]
    if (res < target) {
      i++
    } else if (res > target) {
      j--
    } else {
      return [i, j]
    }
  }
  return null
};