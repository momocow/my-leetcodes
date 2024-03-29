/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  /**
   * @type {number[][]}
   */
  const sumMap = []

  let maxSum = -Infinity
  for (let row1 = 0; row1 < matrix.length; row1++) {
    for (let col1 = 0; col1 < matrix[row1].length; col1++) {
      for (let row2 = row1; row2 < matrix.length; row2++) {
        let rowSum = 0
        if (!Array.isArray(sumMap[row2])) {
          sumMap[row2] = []
        }
        for (let col2 = col1; col2 < matrix[row1].length; col2++) {
          if (typeof sumMap[row2][col2] !== 'number') {
            rowSum += matrix[row2][col2]
            sumMap[row2][col2] = rowSum + (sumMap[row2 - 1]?.[col2] ?? 0)
          }

          // calculate local sub-matrix
          const rect = sumMap[row2][col2]
          const rectLeftTopRightTop = sumMap[row1 - 1]?.[col2] ?? 0
          const rectLeftTopLeftBottom = sumMap[row2][col1 - 1] ?? 0
          const rectLeftTop = sumMap[row1 - 1]?.[col1 - 1] ?? 0
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
