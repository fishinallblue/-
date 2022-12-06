// 题目描述： https://leetcode.cn/problems/3sum/
// 思路： 创建一个map表。每次取map表里头的一个元素，下一次取的元素一定要大于本次取的元素
function threeSum(nums: number[]): number[][] {
  const mapInfo: any = {}
  for(let i = 0; i< nums.length; i++) {
    mapInfo[nums[i]] = (mapInfo[nums[i]] || 0) + 1
  }
  let result = []
  for(let i in mapInfo) {
    const data = Number(i);
    mapInfo[i] = mapInfo[i] - 1;
    for(let j in mapInfo) {
    const dataJ = Number(j);
      if (mapInfo[j] > 0 && dataJ >= data) {
        mapInfo[j] = mapInfo[j] - 1;
        if (mapInfo[-data-dataJ] > 0 && -data-dataJ >= dataJ) {
          result.push([data, dataJ, -data-dataJ])
        }
        mapInfo[j] = mapInfo[j] + 1;
      }
    }
    mapInfo[i] = mapInfo[i] + 1;
  }
  return result;
};

// 更简单的方法是双指针