// 题目描述：https://leetcode.cn/problems/ZVAVXX/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, target) {
  if (target <= 0) {
    return 0;
  }
  let count = 0;
  let cheng = nums[0]; k = 1;
  if (nums?.length) {
    for(let i = 0; i< nums.length; i++) {
      while(cheng < target && k < nums.length) {
        cheng = cheng * nums[k]
        k++
      }
      if(k > i) {
        const info = cheng < target ? 0 : 1;
        count = count + k - i - info;
        cheng = cheng / nums[i];
      }
    }
  }
  return count;
};

console.log('count', numSubarrayProductLessThanK([10,5,2,6], 100))