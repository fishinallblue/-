// 题目描述：https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
function firstUniqChar(s: string): string {
  const arr = [];
  const base = 'a'.charCodeAt(0)
  for(let i=0; i< s.length; i++) {
    const pos = s[i].charCodeAt(0) - base;
    if (arr[pos] !== undefined) {
      arr[pos] = -1;
    } else {
      arr[pos] = i;
    }
  }
  let i = s.length;
  let char = ' '
  arr.forEach((item, index) => {
    if(item !== undefined && item !== -1 && item < i) {
      i = item;
      char = String.fromCharCode(base + index);
    }
  })
  return char
};