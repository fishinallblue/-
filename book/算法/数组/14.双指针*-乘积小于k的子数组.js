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

// 2024年更新
// 还是不会，写一天都没写出来
function numSubarrayProductLessThanK2(nums, k) {
  let count = 0;
  
  let result = nums[0];
  for(let start = 0, end = 0; start < nums.length; start++) {
    while(result < k && end < nums.length - 1) {
        end ++;
        result = result * nums[end];
    }
    if (result < k) {
      count = count + end - start + 1;
    } else {
      count = count + end - start;
    }
    result = result / nums[start];
  }
  return count;

};
console.log('count', numSubarrayProductLessThanK2([10,5,2,6], 100))