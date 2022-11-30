// 题目描述：https://leetcode.cn/problems/intersection-of-two-arrays/
function intersection(nums1: number[], nums2: number[]): number[] {
  let biao: any = {}
  let res = []
  for(let i =0; i< nums1.length; i++) {
    if (!biao[nums1[i]]) {
      biao[nums1[i]] = 1;
    }
  }
  for(let i =0; i< nums2.length; i++) {
    if (biao[nums2[i]]) {
      res.push(nums2[i]);
      biao[nums2[i]] = 0;
    }
  }
  return res;
};

// 想一想 set 的特殊功能