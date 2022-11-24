// 题目描述：https://leetcode.cn/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 * @description : 请你设计时间复杂度为 O(n) 的算法解决本问题
 */
var sortedSquares = function(nums) {
  let start = 0, end = nums.length - 1;
  const target = [...nums];
  let i = nums.length-1;
  while(start <= end) {
    if (Math.abs(nums[start]) <= Math.abs(nums[end])) {
      target[i] = nums[end] * nums[end]
      end--
    } else {
      target[i] = nums[start] * nums[start]
      start++
    }
    i--
  }
  return target
};

sortedSquares([-7,-3,2,3,11])