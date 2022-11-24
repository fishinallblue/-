// 题目描述：https://leetcode.cn/problems/remove-element/
// 非双指针方法
var removeElement = function(nums, val) {
  let count = 0;
  let length = nums.length;
  for(let i=0; i< length; i++) {
    if (nums[i] === val) {
      count ++;
    } else if (count > 0) {
      nums[i - count] = nums[i]
    }
  }
  return length - count;
};

// 双指针方法
var removeElement = function(nums, val) {
  let k = 0;
  let length = nums.length;
  for(let i=0; i< length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++;
    }
  }
  return k
};