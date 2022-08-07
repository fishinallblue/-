

var pivotIndex = function (nums) {
  let all = 0, temp = 0
  for (let i = 0; i < nums.length; i++) {
    all = all + nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    let left = (all - nums[i]) / 2
    if (left === temp) {
      return i
    }
    temp = temp + nums[i]
  }
  return -1
};
console.log(pivotIndex([-1, -1, -1, -1, -1, -1]))