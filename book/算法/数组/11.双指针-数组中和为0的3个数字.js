// 题目描述：https://leetcode.cn/problems/1fGaJU/
// 思路：先排序，循环遍历数组，找到 i 后面子数组中，和等于 -nums[i] 的子数组，
// 寻找的方法是方向相反的双指针，注意对于重复结果的处理，需要跳过在排序中，跟前一个nums[i-1]相同的 nums[i]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(info) {
  let res = []
  const nums = info.sort((pre, next) => pre - next)
  for(let i = 0; i< nums.length - 2; i++) {
    if (nums[i] !== nums[i-1]) {
      let start = i + 1, end = nums.length - 1;
      let lastStart, lastEnd
      while(start < end) {
        const temp = nums[start] + nums[end] + nums[i];
        if (temp === 0) {
          if (lastStart !== nums[start] && lastEnd !== nums[end]) {
            lastStart = nums[start];
            lastEnd = nums[end];
            res.push([nums[i], nums[start], nums[end]])
          }
          start ++;
          end --;
        } else if (temp > 0) {
          end --
        } else if (temp < 0) {
          start ++
        }
      }
    }
  }
  return res;
};


function threeSum1(nums) {
  let res = [];
  nums.sort((i, j) => { return i - j });
  for(let i = 0; i<= nums.length - 3; i++) {
      let start = i+1;
      let end = nums.length - 1;
      while(start < end) {
          const plus = nums[start] + nums[end] + nums[i]
          if (plus === 0) {
              res.push([nums[i], nums[start], nums[end]]);
              let tempstart = start;
              let tempend =  end;
              start ++;
              end --;
              while (start < end && nums[start] === nums[tempstart]) {
                  start ++;
              }

              while (end > start && nums[end] === nums[tempend]) {
                  end --;
              }
          } else if (plus > 0) {
              end --;
          } else {
              start++ ;
          }
      }
      while (i<= nums.length - 3 && nums[i] === nums[i+1]) {
          i++;
      }
  }
  return res;
};

threeSum1([-1,0,1,2,-1,-4,-2,-3,3,0,4])