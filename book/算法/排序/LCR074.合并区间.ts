// https://leetcode.cn/problems/SsGoHC/description/
// 2024.11.5
// 思路，能合并的区间要求:endi > startj && endj > starti
// 取出一个区间，然后找到能合并的区间，合并，然后再判断
function merge(intervals: number[][]): number[][] {
  let i = 0;
  let res = [];
  let temp = intervals.splice(i , 1)[0];
  while(intervals.length) {
      let start = temp[0];
      let end = temp[1]
      const index = intervals.findIndex(item => end >= item[0] && item[1] >= start);
      if (index > -1) {
          const findInfo = intervals.splice(index, 1)[0];
          temp = [Math.min(findInfo[0],start), Math.max(findInfo[1], end)];
      } else {
          res.push(temp);
          temp = intervals.splice(0, 1)[0];
      }
  }
  res.push(temp);
  return res;
};