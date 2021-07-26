const POW2 = [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768
]

function visit (n, precomputed, node = 0, visited = new Set()) {
  console.log(visited.size)

  if (visited.size === POW2[n]) {
    return Array.from(visited)
  }

  for (let i = 0; i < n; i++) {
    const next = precomputed[node][i]
    if (!visited.has(next)) {
      const ret = visit(n, precomputed, next, visited)
      if (ret) {
        return ret
      }
      visited.delete(next)
    }
  }
}

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const precomputed = {}
  for (let i = 0; i < Math.pow(2, n); i++) {
    precomputed[i] = []
    for (let j = 0; j < n; j++) {
      precomputed[i].push(i ^ POW2[j])
    }
  }
  return visit(n, precomputed)
}

module.exports = grayCode
