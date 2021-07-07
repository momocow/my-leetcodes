/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const cols = matrix[0].length
  const colIdxs = new Array(matrix.length).fill(0)
  while (true) {
    let smallestRow = -1
    for (let row = 0; row < matrix.length; row++) {
      if (colIdxs[row] < cols && (
        smallestRow < 0 ||
        matrix[row][colIdxs[row]] < matrix[smallestRow][colIdxs[smallestRow]]
      )) {
        smallestRow = row
      }
    }
    if (k === 1) { return matrix[smallestRow][colIdxs[smallestRow]] }
    k--
    colIdxs[smallestRow]++
  }
}

module.exports = kthSmallest
kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]]
  , 8)
