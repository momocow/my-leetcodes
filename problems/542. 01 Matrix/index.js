function findClosest0 (mat, i, j) {
  for (let dist = 1; true; dist++) {
    for (let dx = 0, dy = dist; dx <= dist; dx++, dy--) {
      const left = i - dx
      const right = i + dx
      const top = j - dy
      const bottom = j + dy
      if (
        mat[left]?.[top] === 0 ||
          mat[left]?.[bottom] === 0 ||
          mat[right]?.[top] === 0 ||
          mat[right]?.[bottom] === 0
      ) {
        return dist
      }
    }
  }
}

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const ret = []
  for (let i = 0; i < mat.length; i++) {
    ret.push([])
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        ret[i].push(findClosest0(mat, i, j))
      } else {
        ret[i].push(0)
      }
    }
  }

  return ret
}

module.exports = updateMatrix
