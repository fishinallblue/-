// 题目描述：https://leetcode.cn/problems/minimum-size-subarray-sum/
// 整体思路就是搞一个能够滑动的窗口，注意开始和结束的条件
// 注意时间复杂度是O(n)
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen1 = function(target, nums) {
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
// 更加清晰的写法
var minSubArrayLen = function(target, nums) {
  let count = 0;
  if (nums?.length) {
    let res = nums[0], k = i+1;
    for(let i = 0; i< nums.length; i++) {
      while(res < target) {
        res = res + nums[k]
        k++
      }
      if (res >= target) {
        if (count === 0 || count > k - i) {
          count = k - i;
        }
      }
      res = res - nums[i]
    }
  }
  console.log('count', count)
  return count;
};
minSubArrayLen(11, [1,2,3,4,5])