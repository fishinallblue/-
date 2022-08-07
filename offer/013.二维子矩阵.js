/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  let target = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!target[i]) {
        target[i] = []
      }
      let left = target[i][j - 1] || 0
      let top = 0, topleft = 0
      if (i !== 0) {
        top = target[i - 1][j] || 0
        topleft = target[i - 1][j - 1] || 0
      }
      target[i].push(matrix[i][j] + left + top - topleft)
    }
  }
  console.log('target', target)
  this.matrix = target
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let left = 0, top = 0, topleft = 0
  if (row1 !== 0) {
    left = this.matrix[row1 - 1][col2]
    topleft = this.matrix[row1 - 1][col1 - 1] || 0
  }
  top = this.matrix[row2][col1 - 1] || 0
  let max = this.matrix[row2][col2] - left - top + topleft
  console.log('max', max)
  return max
};

numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)