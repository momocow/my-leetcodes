/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  /**
   * @type {number[][]}
   */
  // const sumMap = []

  let maxSum = -Infinity
  let doneRow = -1
  let doneCol = -1
  for (let row1 = 0; row1 < matrix.length; row1++) {
    for (let col1 = 0; col1 < matrix[row1].length; col1++) {
      for (let row2 = row1; row2 < matrix.length; row2++) {
        let rowSum = 0
        for (let col2 = col1; col2 < matrix[row1].length; col2++) {
          if (row2 > doneRow || col2 > doneCol) {
            rowSum += matrix[row2][col2]
            matrix[row2][col2] = rowSum + (matrix[row2 - 1]?.[col2] ?? 0)
            doneRow = row2
            doneCol = col2
          }

          // calculate local sub-matrix
          const rect = matrix[row2][col2]
          const rectLeftTopRightTop = matrix[row1 - 1]?.[col2] ?? 0
          const rectLeftTopLeftBottom = matrix[row2][col1 - 1] ?? 0
          const rectLeftTop = matrix[row1 - 1]?.[col1 - 1] ?? 0
          const rectRightBottom = (
            rect -
            rectLeftTopLeftBottom -
            rectLeftTopRightTop +
            rectLeftTop
          )
          if (rectRightBottom < k) {
            maxSum = Math.max(rectRightBottom, maxSum)
          } else if (rectRightBottom === k) {
            return k
          }
        }
      }
    }
  }

  return maxSum
}

module.exports = maxSumSubmatrix
