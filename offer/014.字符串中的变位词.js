
var checkInclusion = function (s1, s2) {
  let hasMap = {}, targetHas = {}
  let count = 0
  let temp = s1
  for (let i = 0; i < s1.length; i++) {
    let char = s1.charAt(i);
    hasMap[char] = (hasMap[char] || 0) + 1
  }
  for (let i = 0; i < s2.length; i++) {
    let char = s2.charAt(i);
    if (s1.indexOf(char) > -1) {
      if (targetHas[char] === undefined || targetHas[char].length == 0) {
        targetHas[char] = [i]
      } else {
        let nums = targetHas[char].length
        if (nums < hasMap[char]) {
          targetHas[char].push(i)
        } else {
          let pre = targetHas[char].shift()
          count--
          for (let j in targetHas) {
            let info = targetHas[j]
            if (info && info.length) {
              while (info[0] < pre && info.length) {
                info.shift()
                count--
              }
            }
          }
          targetHas[char].push(i)
        }
      }
      count++
      if (count === s1.length) {
        return true;
      }
    } else {
      count = 0
      targetHas = {}
    }
  }
  return false
};
var allZero = (maps) => {
  for (let i in maps) {
    if (maps[i] !== 0) {
      return false
    }
  }
  return true
}
// 书上的双指针解法
var checkInclusion1 = function (s1, s2) {
  let hasMap = {}
  for (let i = 0; i < s1.length; i++) {
    let char = s1.charAt(i);
    hasMap[char] = (hasMap[char] || 0) + 1
  }
  for (let i = 0; i < s2.length; i++) {
    let char = s2.charAt(i);
    hasMap[char] = (hasMap[char] || 0) - 1
    let j = i - s1.length
    if (j >= 0) {
      let charinfo = s2.charAt(j);
      hasMap[charinfo] = hasMap[charinfo] + 1
    }
    if (allZero(hasMap)) {
      return true
    }
  }
  return false
};
console.log(checkInclusion1("ab", "eidbaooo"))