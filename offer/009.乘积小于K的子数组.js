// 重点是双指针的学习
// 依然是滑动窗口
var numSubarrayProductLessThanK = function (nums, target) {
  let count = 0, i = 0, j = 0, cheng = nums[0]
  while (i < nums.length) {
    while (cheng < target && j < nums.length) {
      j++
      cheng = cheng * nums[j]
    }
    if (j >= i) {
      count = count + j - i
      cheng = cheng / nums[i]
    }
    i++;
  }
  return count
};
console.log(numSubarrayProductLessThanK([100, 5, 2, 6], 100))