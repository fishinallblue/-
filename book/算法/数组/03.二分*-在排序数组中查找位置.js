// 题目描述：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
// 总体的思路就是寻找左右两个边界，在找到值的时候，
var searchRange = function(nums, target) {
  if (!nums?.length) {
    return [-1, -1];
  }
  const findStart = () => {
    let i = 0, j = nums.length -1;
    while(i <= j) {
      const temp = parseInt((i + j) / 2);
      if (nums[temp] < target) {
        i = temp + 1
      } else if (nums[temp] > target) {
        j = temp - 1
      } else {
        if (nums[temp -1] === target) {
          j = temp - 1
        } else {
          return temp;
        }
      }
    }
    return -1
  }
  const findEnd = () => {
    let i1 = 0, j1 = nums.length -1;
    while(i1 <= j1) {
      const temp = parseInt((i1 + j1) / 2);
      if (nums[temp] < target) {
        i1 = temp + 1
      } else if (nums[temp] > target) {
        j1 = temp - 1
      } else {
        if (nums[temp + 1] === target) {
          i1 = temp + 1
        } else {
          return temp;
        }
      }
    }
    return - 1;
  }
  return [findStart(), findEnd()]

};
console.log(searchRange([5,7,7,8,8,10], 8));