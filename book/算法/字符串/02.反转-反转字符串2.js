// 题目描述： https://leetcode.cn/problems/reverse-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function(s, k) {
  if (!s) {
    return s;
  }
  const list = s.split('');
  let i =0; j = 0;
  while(i < list.length) {
    const pos = Math.min(i + k -1, list.length -1);
    let start = i; end = pos;
    while(start < end) {
      const temp = list[start]
      list[start] = list[end];
      list[end] = temp;
      start ++;
      end --;
    }
    i = i + 2 * k;
  }
  return list.join('');
};