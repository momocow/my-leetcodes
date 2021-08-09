function makeRankMap (arr) {
  const m = new Map()
  let prev
  for (let i = 0; i < arr.length; i++) {
    m.set(arr[i][0], prev)
    prev = arr[i][1]
    while (i + 1 < arr.length && arr[i + 1][0] === arr[i][0]) {
      i++
    }
  }
  return m
}

function findRoot (union, node) {
  while (union[node] !== node) {
    node = union[node]
  }
  return node
}

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function (matrix) {
  const ascending = (x, y) => x - y

  const all = matrix.flat().sort(ascending).reduce((a, e, i, arr) => {
    if (e !== arr[i + 1]) {
      a.push(e)
    }
    return a
  }, [])
  const coords = matrix.reduce((m, row, r) => {
    for (let c = 0; c < row.length; c++) {
      let g = m.get(row[c])
      if (!g) {
        g = []
        m.set(row[c], g)
      }
      g.push([r, c])
    }
    return m
  }, new Map())
  const ret = []
  for (let i = 0; i < matrix.length; i++) {
    ret.push(new Array(matrix[i].length))
  }
  const rd = matrix
    .map(row => makeRankMap(
      row.slice()
        .map((v, c) => [v, c])
        .sort((x, y) => ascending(x[0], y[0]))
    ))
  const cd = matrix[0]
    .map((_, c) => makeRankMap(
      matrix.map(row => row[c])
        .map((v, r) => [v, r])
        .sort((x, y) => ascending(x[0], y[0]))
    ))

  for (let i = 0; i < all.length; i++) {
    const ranks = new Array(matrix.length + matrix[0].length).fill(-Infinity)
    const unions = new Array(matrix.length + matrix[0].length)
    for (const [r, c] of coords.get(all[i])) {
      const offsetc = matrix.length + c

      const prevr = rd[r].get(all[i])
      const rkr = prevr === undefined ? 1 : ret[r][prevr] + 1
      ranks[r] = Math.max(ranks[r], rkr)

      const prevc = cd[c].get(all[i])
      const rkc = prevc === undefined ? 1 : ret[prevc][c] + 1
      ranks[offsetc] = Math.max(ranks[offsetc], rkc)

      if (!(r in unions)) {
        unions[r] = r
      }
      if (!(offsetc in unions)) {
        unions[offsetc] = offsetc
      }
      const rr = findRoot(unions, r)
      const rc = findRoot(unions, offsetc)
      if (ranks[rr] > ranks[rc]) {
        unions[rc] = rr
      } else {
        unions[rr] = rc
      }
    }
    for (const [r, c] of coords.get(all[i])) {
      ret[r][c] = ranks[findRoot(unions, r)]
    }
  }
  return ret
}

module.exports = matrixRankTransform
