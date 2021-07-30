const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const q = []
  const d = new Array(mat.length)

  for (let i = 0; i < mat.length; i++) {
    d[i] = new Array(mat[i].length)
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        q.push([i, j])
        d[i][j] = 0
      } else {
        d[i][j] = Infinity
      }
    }
  }

  while (q.length > 0) {
    const [r, c] = q.shift()
    const dist = d[r][c] + 1
    DIRECTIONS
      .map(([x, y]) => [r + x, c + y])
      .filter(([x, y]) => d[x]?.[y] > dist)
      .forEach(([x, y]) => {
        d[x][y] = dist
        q.push([x, y])
      })
  }

  return d
}

module.exports = updateMatrix
