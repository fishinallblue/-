// 题目描述：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// 双指针方法
var removeDuplicates = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let k = 0;
  
  for(let i =1; i< nums.length; i++) {
    if (nums[k] !== nums[i]) {
      k++
      nums[k] = nums[i]
    }
  }
  return k+1
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))