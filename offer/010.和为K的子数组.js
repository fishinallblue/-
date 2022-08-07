
var subarraySum = function (nums, k) {
  // 这个初始化是关键，想不太出来为什么这行代码能影响这么多逻辑
  let hashMap = { 0: 1 }
  let addInfo = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    addInfo = addInfo + nums[i]
    const target = addInfo - k
    count = count + (hashMap[target] || 0)
    hashMap[addInfo] = (hashMap[addInfo] || 0) + 1
  }

  return count
};
console.log(subarraySum([1], 0))