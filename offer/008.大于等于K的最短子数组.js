// 重点是双指针的学习
// 自己的思路
var minSubArrayLen = function (target, nums) {
  let min = nums.length
  let has = false
  let i = 0
  while (i < nums.length) {
    let res = nums[i];
    let j = i
    while (j < nums.length && res < target) {
      j++
      res = res + nums[j]
    }
    if (res >= target) {
      has = true
      if (min > j - i + 1) {
        min = j - i + 1
      }
    }
    i++;
  }
  if (!has) {
    return 0
  }
  return min
};

// 书上的思路 -> 滑动窗口协议
var minSubArrayLen1 = function (target, nums) {
  let min = nums.length
  let has = false
  let i = 0
  let j = 1
  let res = nums[0]
  while (i < nums.length) {
    while (j < nums.length - 1 && res < target) {
      res = res + nums[j]
      j++
    }
    if (res >= target) {
      has = true
      if (min > j - i) {
        min = j - i
      }
    } else {
      break;
    }
    res = res - nums[i]
    i++
  }
  if (!has) {
    return 0
  }
  return min
};


console.log(minSubArrayLen1(4, [1, 4, 4]))