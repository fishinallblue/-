// 题目描述： https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
// 为了让本题更有意义，提升一下本题难度：不能申请额外空间，只能在本串上操作。
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(str, n) {
  if (!str) {
    return str;
  }
  let s = str.split('');
  const reverse = (start, end) => {
    while(start < end) {
      const temp = s[start]
      s[start] = s[end]
      s[end] = temp
      start ++;
      end --;
    }
  }
  if (n > s.length) n = n % s.length
  reverse(0, s.length - 1)
  reverse(0, s.length - 1 - n)
  reverse(s.length - n, s.length - 1)
  return s.join('')
};
// 总体思路还是 反转 + 反转

console.log(reverseLeftWords('abcdefg', 2))