// 题目描述：https://leetcode.cn/problems/search-insert-position/
var searchInsert = function(nums, target) {
  if (!nums?.length) {
    return 0;
  }
  let i=0; j= nums.length - 1;
  while(i < j) {
    let temp = Math.floor((i + j)/2);
    if (nums[temp] === target) {
      return temp;
    } else if(nums[temp] < target) {
      i = temp + 1;
    } else {
      j = temp - 1;
    }
  }
  if (nums[i] < target) {
      return i + 1;
  } else {
      return i;
  }
};
searchInsert([1,3,5,6], 5)