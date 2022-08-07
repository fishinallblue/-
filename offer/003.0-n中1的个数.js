// 思路：[0, 1,(0+1), (1+1), (0+1), (1+1), ((0+1)+1), ((1+1)+1)]
// 第2,3个数字等于第0,1个数字加1（多最高的一位）
// 第 4-7个等于前面 0 -3个数字加1（多最高的一位）
// 有此引入一个fang参数，用于表明前面第 2^x 个数
var countBits = function (n) {
  if (n === 0) {
    return [0]
  } else if (n === 1) {
    return [0, 1]
  } else {
    let fang = 2;
    let i = 2;
    let res = [0, 1]
    while (i <= n) {
      const pow = parseInt(i / fang)
      if (pow > 1) {
        fang = fang * 2;
      }
      const yu = i % fang
      res.push(res[yu] + 1);
      i++;
    }
    return res
  }
};

console.log(countBits(5))