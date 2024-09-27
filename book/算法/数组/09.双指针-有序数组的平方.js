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

// sortedSquares([-7,-3,2,3,11])
function sortedSquares2(nums) {
  let minIndex = 0;
  let res = [];
  for(let i = 0; i< nums.length; i++) {
      if (i < nums.length -1 && Math.abs(nums[i]) > Math.abs(nums[i+1])) {
          minIndex = i+1;
      }
      nums[i] = nums[i] * nums[i];
  }
  res.push(nums[minIndex])
  let i = minIndex - 1;
  let j = minIndex + 1;
  while(i >=0 || j < nums.length) {
      if (i >=0 && j< nums.length) {
          if(nums[i] < nums[j]) {
              res.push(nums[i]);
              i--;
          } else {
              res.push(nums[j]);
              j++;
          }
      } else if (i >= 0){
          res.push(nums[i])
          i--
      } else {
          res.push(nums[j])
          j++
      }
  }
  return res;
};
sortedSquares2([-7,-3,2,3,11])