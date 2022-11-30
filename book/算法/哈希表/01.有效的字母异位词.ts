// 题目描述：https://leetcode.cn/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {
  if (!s || !t || s.length !== t.length) {
    return false;
  }
  let sMap:any = {}
  for(let i = 0; i< s.length; i++) {
    let schar = s.charAt(i)
    let tchar = t.charAt(i)
    if (schar !== tchar) {
      if (sMap[schar]) {
        sMap[schar] = sMap[schar] + 1;
        if (!sMap[schar]) {
          delete sMap[schar]
        }
      } else {
        sMap[schar] = 1;
      }
      if (sMap[tchar]) {
        sMap[tchar] = sMap[tchar] - 1;
        if (!sMap[tchar]) {
          delete sMap[tchar]
        }
      } else {
        sMap[tchar] = -1;
      }
    }
  }
  console.log(JSON.stringify(sMap))
  return JSON.stringify(sMap) === '{}'
};

// 书上的思路： 使用数组 + ASII码的方式进行存储，因为单词一共就26个，可以放到长度为26 的数组中进行表示
// 猜测是因为其他语言没有JS 这么灵活的Map
var isAnagram1 = function(s, t) {
  if(s.length !== t.length) return false;
  const resSet = new Array(26).fill(0);
  const base = "a".charCodeAt();
  for(const i of s) {
      resSet[i.charCodeAt() - base]++;
  }
  for(const i of t) {
      if(!resSet[i.charCodeAt() - base]) return false;
      resSet[i.charCodeAt() - base]--;
  }
  return true;
};