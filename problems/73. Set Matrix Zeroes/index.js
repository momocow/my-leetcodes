const C = 2 ** 32
const R = 2 ** 32 + 1
const RC = 2 ** 32 + 2

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        if (r === 0 || c === 0) {
          if (matrix[0][0] !== RC) {
            const val = c === 0 && r === 0 ? RC : c === 0 ? C : R
            matrix[0][0] = (matrix[0][0] === R && val === C) ||
              (matrix[0][0] === C && val === R)
              ? RC
              : val
          }
        } else {
          matrix[r][0] = 0
          matrix[0][c] = 0
        }
      }
    }
  }

  for (let r = matrix.length - 1; r >= 0; r--) {
    for (let c = matrix[r].length - 1; c >= 0; c--) {
      if (
        (c === 0 && (matrix[0][0] === C || matrix[0][0] === RC)) ||
        (r === 0 && (matrix[0][0] === R || matrix[0][0] === RC)) ||
        (r === 0 && c === 0 && matrix[0][0] >= R) ||
        matrix[r][0] === 0 || matrix[0][c] === 0
      ) {
        matrix[r][c] = 0
      }
    }
  }

  return matrix
}

module.exports = setZeroes
