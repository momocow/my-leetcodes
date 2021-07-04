/**
 * @param {any[]|number} x
 * @param {any[]|number} y
 */
function plus (x, y) {
  return typeof x === 'number' && typeof y === 'number'
    ? (x + y)
    : x.map((n, i) => plus(n, y[i]))
}

/**
 * @param {number[]|number[][]} arr
 */
function accumulate (arr) {
  const ret = []
  let s = Array.isArray(arr[0]) ? arr[0].map(() => 0) : 0
  for (let i = 0; i < arr.length; i++) {
    s = plus(s, arr[i])
    ret.push(s)
  }
  return ret
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  /**
   * @type {number[][]}
   */
  const sumMap = accumulate(matrix.map(row => accumulate(row)))

  let maxSum = -Infinity
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      for (let height = 1; height <= matrix.length - row; height++) {
        for (let width = 1; width <= matrix[row].length - col; width++) {
          // calculate local sub-matrix
          const rect = sumMap[row + height - 1]?.[col + width - 1] ?? 0
          const rectLeftTopRightTop = sumMap[row - 1]?.[col + width - 1] ?? 0
          const rectLeftTopLeftBottom = sumMap[row + height - 1]?.[col - 1] ?? 0
          const rectLeftTop = sumMap[row - 1]?.[col - 1] ?? 0
          const rectRightBottom = (
            rect -
            rectLeftTopLeftBottom -
            rectLeftTopRightTop +
            rectLeftTop
          )
          if (rectRightBottom <= k) {
            maxSum = Math.max(rectRightBottom, maxSum)
          }
        }
      }
    }
  }

  return maxSum
}

module.exports = maxSumSubmatrix
