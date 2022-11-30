// 题目描述：https://leetcode.cn/problems/intersection-of-two-arrays/

function twoSum(nums: number[], target: number): number[] {
  let zidian: any = {}
  for(let i = 0; i< nums.length; i++) {
    if (!zidian[nums[i]]) {
      zidian[nums[i]] = [i]
    } else {
      zidian[nums[i]].push(i)
    }
  }
  for(let i in zidian) {
    let num = target - Number(i);
    if (zidian[num]) {
      if (Number(i) !== num) {
        return [zidian[i][0], zidian[num][0]]
      } else {
        if (zidian[num].length > 1) {
          return [zidian[num][0], zidian[num][1]]
        }
      }
    }
  }
  return []
};

// 思路差不多，但是要注意优化
var twoSu1 = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {  // 遍历当前元素，并在map中寻找是否有匹配的key
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;   // 如果没找到匹配对，就把访问过的元素和下标加入到map中
  }
  return [];
};