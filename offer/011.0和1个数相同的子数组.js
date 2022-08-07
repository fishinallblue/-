
var findMaxLength = function (nums) {
  const newNums = nums.map(num => num === 0 ? -1 : num)
  let hashMap = { 0: -1 }
  let addInfo = 0
  let max = 0
  for (let i = 0; i < newNums.length; i++) {
    addInfo = addInfo + newNums[i]
    if (hashMap[addInfo] !== undefined) {
      let info = hashMap[addInfo]
      max = max > i - info ? max : i - info
    } else {
      hashMap[addInfo] = i
    }
  }
  return max
};
console.log(findMaxLength([0, 1, 1]))