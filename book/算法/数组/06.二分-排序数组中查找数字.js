
// 题目描述：https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
var search = function(nums, target) {
  if (!nums?.length) {
    return 0;
  }
  let i = 0; j = nums?.length - 1;
  const getPos = (i, j, forward) => {
    let pos = -1; 
    while(i <= j) {
      const temp = parseInt((i+ j) / 2)
      if (nums[temp] === target) {
        pos = temp
        if (!forward) {
          break;
        }
        if (forward === 1) {
          i = pos +1
        } else {
          j = pos -1
        }
      } else if (nums[temp] > target) {
        j = temp -1;
      } else {
        i = temp + 1;
      }
    }
    return {i, j, pos};
  }
  const res = getPos(i, j);
  if (res.pos === -1) {
    return 0;
  }
  const start = getPos(res.i, res.pos, -1);
  const end = getPos(res.pos + 1, res.j, 1);
  const right = end.pos === -1 ? res.pos : end.pos;
  const left = start.pos === -1 ? res.pos : start.pos;
  return right - left + 1
};

console.log(search([1], 1));
console.log(search([5,7,7,8,8,10], 10));
console.log(search([2,2,2,2], 2));