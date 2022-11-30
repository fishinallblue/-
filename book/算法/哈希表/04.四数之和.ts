// 题目描述：https://leetcode.cn/problems/4sum-ii/
// 这个思路是先创建四个Map，存储数组中各个数字出现的信息
// 然后分别计算 nums1 和 nums2 的值的和个数，nums3 和 nums4 的值的和个数
// 最后判断这个个数是不是对的
// 略麻烦，不需要先创建四个map，只需要创建 nums1 和 nums2 的map就行
// 然后再遍历nums3和muns4 ，找到值就行了
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const getMap = (nums: number[]) => {
    let mapInfo: any = {}
    for(let i=0; i< nums.length; i++) {
      if (mapInfo[nums[i]]) {
        mapInfo[nums[i]].push(i)
      } else {
        mapInfo[nums[i]] = [i]
      }
    }
    return mapInfo;
  }
  const map1 = getMap(nums1);
  const map2 = getMap(nums2);
  const map3 = getMap(nums3);
  const map4 = getMap(nums4);
  const getCount = (map1, map2) => {
    let count1: any = {}
    for(let i in map1) {
      for(let j in map2) {
        const target = Number(i) + Number(j)
        const count = map1[i].length * map2[j].length
        if (count1[target]) {
          count1[target] = count1[target] + count
        } else {
          count1[target] = count
        }
      }
    }
    return count1;
  }
  const count1 = getCount(map1, map2)
  const count2 = getCount(map3, map4)
  let result = 0
  for(let i in count1) {
    if (count2[-i]) {
      result = result + count1[i] * count2[-i]
    }
  }
  return result;
};
// 优化的代码
function fourSumCount1(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const getCount = (nums1, nums2) => {
    let count1: any = {}
    for(let i = 0; i< nums1.length; i++) {
      for(let j = 0; j< nums2.length; j++) {
        const target = nums1[i] + nums2[j]
        if (count1[target]) {
          count1[target] = count1[target] + 1
        } else {
          count1[target] = 1
        }
      }
    }
    return count1;
  }
  const count1 = getCount(nums1, nums2)
  let result = 0
  for(let i = 0; i< nums3.length; i++) {
    for(let j = 0; j< nums4.length; j++) {
      const target = nums3[i] + nums4[j]
      if (count1[-target]) {
        result = result + count1[-target]
      }
    }
  }
  return result;
};