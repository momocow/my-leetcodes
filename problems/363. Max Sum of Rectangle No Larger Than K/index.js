/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  const rowSum = []
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0
    rowSum[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j]
      rowSum[i].push(sum)
    }
  }

  let maxSum = -Infinity
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      for (let height = 1; height <= matrix.length - row; height++) {
        for (let width = 1; width <= matrix[row].length - col; width++) {
          // calculate local sub-matrix
          let sum = 0
          for (let y = row; y < row + height; y++) {
            sum += rowSum[y][col + width - 1] - (rowSum[y][col - 1] ?? 0)
          }
          if (sum <= k) {
            maxSum = Math.max(sum, maxSum)
          }
        }
      }
    }
  }

  return maxSum
}

module.exports = maxSumSubmatrix
