/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const rows = mat.length
  const cols = mat[0]?.length ?? 0
  const items = rows * cols
  if (r * c !== items || r === rows) { return mat }

  const ret = []
  for (let i = 0; i < items; i++) {
    const rowIdx = Math.floor(i / cols)
    const colIdx = i % cols
    const rIdx = Math.floor(i / c)
    const cIdx = i % c
    if (cIdx === 0) {
      ret[rIdx] = new Array(c)
    }
    ret[rIdx][cIdx] = mat[rowIdx][colIdx]
  }
  return ret
}

module.exports = matrixReshape
