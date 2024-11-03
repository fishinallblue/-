// 总结：只要看到面试题里给出的数组是有序数组，都可以想一想是否可以使用二分法。
var search = function(nums, target) {
  if (!nums?.length) {
      return -1;
  }

  let i = 0, j = nums.length;
  while(i <= j) {
      const temp = Math.floor((i + j) / 2);
      if (nums[temp] === target) {
          return temp;
      } else if (nums[temp] < target) {
          i = temp + 1;
      } else {
          j = temp - 1;
      }
  }
  return -1;
};

// search([-1,0,3,5,9,12], 9)

console.log(search([-1,0,3,5,9,12], 2))