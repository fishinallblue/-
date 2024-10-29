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

// console.log('count', generateMatrix(5)); 

// 2024.10.29  A 过，用时一小时
var generateMatrix1 = function(n) {
  let matrix = []
  let num = 1;
  let forward = 0; // 0表示向右,1表示向下,2表示向左，3表示向上
  let count = n;
  let x = 0; 
  let y = 0;
  for(let i = 0; i< n; i++) {
    matrix.push([]);
    for(let j = 0; j< n; j++) {
      matrix[i][j] = undefined;
    }
  }

  while(num <= n * n) {
    if (forward === 0) {
      let temp = 0;
      while(temp < count) {
        matrix[x][y] = num;
        y = y + 1;
        num = num +1;
        temp ++;
      }
      count = count - 1;
      x = x + 1;
      y = y - 1;
    } else if (forward === 1) {
      let temp = 0;
      while(temp < count) {
        matrix[x][y] = num;
        x = x + 1;
        num = num + 1;
        temp++;
      }
      y = y - 1;
      x = x - 1;
    } else if (forward === 2) {
      let temp = 0;
      while(temp < count) {
        matrix[x][y] = num;
        y = y - 1;
        num = num + 1;
        temp++;
      }
      count = count - 1;
      x = x - 1;
      y = y + 1;
    } else {
      let temp = 0;
      while(temp < count) {
        matrix[x][y] = num;
        x = x - 1;
        num = num + 1;
        temp++;
      }
      y = y + 1;
      x = x + 1;
    }
    forward = (forward + 1) % 4;
  }

  return matrix;
};
console.log('count', generateMatrix1(5)); 