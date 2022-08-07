// 重点是双指针的学习
// 将三个数的和拆解成为两个数的和，为了不重复，使用同方向的双指针进行去重
var threeSum = function (nums) {
  const res = []
  const sortNums = nums.sort((a, b) => a - b)
  let i = 0
  while (i < sortNums.length - 1) {
    const temp = sortNums[i];
    let j = i + 1
    let k = sortNums.length - 1;
    while (j < k) {
      if (sortNums[j] + sortNums[k] > -temp) {
        k--
      } else if (sortNums[j] + sortNums[k] < -temp) {
        j++
      } else {
        res.push([sortNums[i], sortNums[j], sortNums[k]])
        // 只需要判断j 就可以，不需要判断k 
        while (sortNums[j] === sortNums[j + 1] && j < sortNums.length - 1) {
          j++
        }
        j++
        k--
      }
    }
    while (sortNums[i] === sortNums[i + 1] && i < sortNums.length - 1) {
      i++
    }
    i++
  }
  //   for (i = 0; i < res.length-1; i++) {
  //     if (res[i][0] === res[i + 1][0] && res[i][1] === res[i + 1][1] && res[i][2] === res[i + 1][2]) {
  //       res.splice(i, 1)
  //       i--
  //     }
  //   }
  return res
};
console.log(threeSum([-2, 0, 0, 2, 2]))