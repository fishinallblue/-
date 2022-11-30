// 题目描述： https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/
// 找出字符串中第一个匹配项的下标
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!haystack || !needle) {
    return -1;
  }
  let i = 0;
  let j = 0;
  let firstChat = needle.charAt(0)
  while(i < haystack.length) {
    let pos = -1;
    while(i < haystack.length && j < needle.length) {
      if (pos === -1 && haystack.charAt(i) === firstChat && j !== 0) {
        pos = i;
      }
      if (haystack.charAt(i) === needle.charAt(j)) {
        i++;
        j++
      } else {
        i++;
        break;
      }
    }
    if (j >= needle.length) {
      return i - needle.length;
    } else {
      j = 0;
      i = pos === -1 ? i : pos;
    }
  }
  return -1;
};

console.log(strStr('abcdefg', 'bce'))