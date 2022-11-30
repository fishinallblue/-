// 题目描述：https://leetcode.cn/problems/ransom-note/
// 思路： 跟有效字母异位词差不多

function canConstruct(ransomNote: string, magazine: string): boolean {
  if(magazine.length < ransomNote.length) {
    return false;
  }
  let mapInfo: any = {}
  for(let i = 0; i< magazine.length; i++) {
    const char = magazine.charAt(i)
    if (mapInfo[char]) {
      mapInfo[char] = mapInfo[char] + 1
    } else {
      mapInfo[char] = 1
    }
    if (i < ransomNote.length) {
      const char1 = ransomNote.charAt(i)
      if (mapInfo[char1]) {
        mapInfo[char1] = mapInfo[char1] - 1
      } else {
        mapInfo[char1] = -1
      }
    }
  }
  for(let i in mapInfo) {
    if (mapInfo[i] < 0) {
      return false
    }
  }
  return true
};
// 数组的性能是比map好不少的
// 所以能用数组就用数组，不要用map
function canConstruct1(ransomNote: string, magazine: string): boolean {
  if(magazine.length < ransomNote.length) {
    return false;
  }
  let mapInfo: any = []
  let pos = 'a'.charCodeAt(0);
  for(let i = 0; i< magazine.length; i++) {
    const char = magazine.charCodeAt(i) - pos
    if (mapInfo[char]) {
      mapInfo[char] = mapInfo[char] + 1
    } else {
      mapInfo[char] = 1
    }
    if (i < ransomNote.length) {
      const char1 = ransomNote.charCodeAt(i) - pos
      if (mapInfo[char1]) {
        mapInfo[char1] = mapInfo[char1] - 1
      } else {
        mapInfo[char1] = -1
      }
    }
  }
  return !mapInfo.some((item: number) => item < 0)
};
canConstruct('aa', 'aab')