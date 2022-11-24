// 题目描述：https://leetcode.cn/problems/minimum-size-subarray-sum/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let count = 0;
  if (nums?.length) {
    let i = 0, k = 1;
    let plus = nums[0];
    if (plus > target) {
      return 1;
    }
    while(plus < target && k < nums.length) {
      plus = plus + nums[k]
      k++
      while (plus >= target && i < k) {
        if (count === 0 || count > k - i) {
          count = k - i;
        }
        plus = plus - nums[i];
        i = i + 1;
      }
    }
  }
  console.log('count', count)
  return count;
};
minSubArrayLen(11, [1,2,3,4,5])