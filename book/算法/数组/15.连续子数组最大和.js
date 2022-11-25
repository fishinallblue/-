// 题目描述：https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums?.length) {
    return 0
  }
  let i = 1;
  let max = nums[0], count = nums[0];
  while(i < nums.length) {
    if (count < 0) {
      count = nums[i];
    } else  {
      count = count + nums[i];
    }
    max = Math.max(max, count);
    i++;
  }
  return max;
};

console.log('count', maxSubArray([0,0,1])); 