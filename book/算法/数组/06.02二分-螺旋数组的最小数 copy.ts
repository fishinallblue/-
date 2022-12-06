
// 题目描述：https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
// 对于 numbers[temp] === numbers[i] 的情况需要特殊处理
function minArray(numbers: number[]): number {
  if (!numbers) {
    return 0;
  }
  let i = 0, j = numbers.length - 1;
  while(i < j) {
    if (numbers[i] < numbers[j]) {
        return numbers[i];
    }
    const temp = Math.floor((i + j) / 2);
    if (numbers[temp] < numbers[i]) {
      j = temp;
    } else if (numbers[temp] > numbers[i]) {
      i = temp + 1;
    } else {
      if (i === temp) {
        break;
      }
      for(let m = i ; m < j; m++) {
        if (numbers[m] > numbers[m+1]) {
          return numbers[m+1];
        }
      }
      break;
    }
  }
  return numbers[j];
};