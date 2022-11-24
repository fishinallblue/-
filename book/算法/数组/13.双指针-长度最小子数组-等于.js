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
    while (i < nums.length) {
      if (nums[i] === target) {
        return 1;
      }
      if (k < nums.length) {
        while(plus < target && k < nums.length) {
          plus = plus + nums[k]
          k++
          if (plus === target) {
            if (count === 0 || count > k - i) {
              count = k - i;
            }
            plus = plus - nums[i];
            i = i + 1;
          }
        }
        while(plus > target && i < k) {
          plus = plus - nums[i]
          i++
          if (plus === target) {
            if (count === 0 || count > k - i) {
              count = k - i;
            }
            plus = plus - nums[i];
            i = i + 1;
          }
        }
      } else {
        if (plus < target) {
          return count
        }
      }
    }
  }
  console.log('count', count)
  return count;
};
minSubArrayLen(11, [1,2,3,4,5])