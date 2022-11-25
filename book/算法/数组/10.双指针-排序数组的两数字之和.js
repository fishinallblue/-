// 题目描述：https://leetcode.cn/problems/kLl5u1/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let start = 0, end = numbers.length -1;
  while(start < end) {
    const info = numbers[start] + numbers[end]
    if (info === target) {
      return [start, end]
    } else if (info > target) {
      end --
    } else {
      start ++
    }
  }
  return -1;
};