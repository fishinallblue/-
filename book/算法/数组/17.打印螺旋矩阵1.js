// 题目描述：https://leetcode.cn/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 2024.10.29 A过，用时2小时，刚开始的思路有问题，后面转换了思路
var spiralOrder = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let forward = 0; // 0向右， 1 向下， 2 向左，3 向上
  const max = m * n
  let result = [];
  let startx = 0; 
  let starty = 0;
  const print = (x, y, forward, length) => {
    for(let i=0; i< length; i++) {
      if (forward === 0) {
        result.push(matrix[x][y+i])
      } else if (forward === 1) {
        result.push(matrix[x+i][y])
      } else if (forward === 2) {
        result.push(matrix[x][y-i])
      } else {
        result.push(matrix[x-i][y])
      }
    }
  }
  while(result.length < max) {
    if (forward === 0) {
      print(startx, starty, forward, n)
      starty = starty + n - 1;
      startx = startx + 1;
    } else if (forward === 1) {
      m = m - 1;
      print(startx, starty, forward, m)
      startx = startx + m - 1;
      starty = starty - 1;
    } else if (forward === 2) {
      n = n - 1;
      print(startx, starty, forward, n)
      starty = starty - n + 1;
      startx = startx - 1
    } else {
      m = m - 1
      print(startx, starty, forward, m)
      startx = startx - m + 1;
      starty = starty + 1;
      n = n - 1;
    }
    forward = (forward + 1) % 4;
  }
  return result;
};
// console.log('count', spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); 
// console.log('count', spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); 
// console.log('count', spiralOrder([[3], [2]]));
