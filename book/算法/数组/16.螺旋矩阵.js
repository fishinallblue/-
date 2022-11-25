// 题目描述：https://leetcode.cn/problems/spiral-matrix-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
 
var generateMatrix = function(n) {
  let matrix = []
  let line = []
  for(let i = 0; i< n; i++) {
    line.push(0)
  }
  for(let i = 0; i< n; i++) {
    matrix.push([...line])
  }
  console.log(matrix)
  let i = 0, j = 0, forward = 1;
  let count = 1;
  while(count <= n * n) {
    while(j < n && matrix[i][j] === 0) {
      matrix[i][j] = count;
      count ++;
      j = j + forward;
    }
    j = j - forward;
    i = i + forward;
    while(i < n && matrix[i][j] === 0) {
      matrix[i][j] = count;
      count ++;
      i = i + forward;
    }
    i = i - forward;
    forward = 0 - forward;
    j = j + forward;
  }
  return matrix;
};

console.log('count', generateMatrix(5)); 