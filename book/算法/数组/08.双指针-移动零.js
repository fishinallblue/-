// 题目描述：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let k = 0;
  for(let i = 0; i< nums.length; i++) {
    if (nums[i] !== 0){
      nums[k] = nums[i]
      k++;
    }
  }
  for(let i = k; i < nums.length; i++) {
    nums[i] = 0
  }
};
let info = [0,1,0,3,12]
moveZeroes(info)
console.log(info)