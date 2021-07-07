/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const cols = matrix[0].length
  const colIdxs = new Array(matrix.length).fill(0)
  while (true) {
    let smallestRow = colIdxs.findIndex(n => n < cols)
    for (let row = 1; row < matrix.length; row++) {
      if (
        colIdxs[row] < cols &&
        matrix[row][colIdxs[row]] < matrix[smallestRow][colIdxs[smallestRow]]
      ) {
        smallestRow = row
      }
    }
    if (k === 1) { return matrix[smallestRow][colIdxs[smallestRow]] }
    k--
    colIdxs[smallestRow]++
  }
}

module.exports = kthSmallest
