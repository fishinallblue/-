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
// 2024.9.9 新解题思路 -两个指针，空间复杂度
function reverseStr2(s: string, k: number): string {
  let i = 0;
  let j = Math.min(s.length -1, k - 1);
  let str = '';
  while(i <= s.length - 1) {
      let end = j;
      while(j >= i) {
          str = str + s.charAt(j);
          j--;
      }
      i = end + 1;
      j = Math.min(s.length -1, end + k);
      while(j >= i) {
          str = str + s.charAt(i);
          i++;
      }
      j = Math.min(s.length -1, i + k - 1);
  }
  return str;
};