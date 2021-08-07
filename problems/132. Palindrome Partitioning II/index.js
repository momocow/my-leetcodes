/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const table = new Array(s.length)

  for (let i = 0; i < s.length; i++) {
    table[i] = new Array(s.length - i).fill(false)
    for (let j = 0; j < 2; j++) {
      if (j === 1 && s[i] !== s[i + 1]) {
        continue
      }
      let ii = i
      let jj = j
      do {
        table[ii][jj] = true
        ii--
        jj += 2
      } while (ii >= 0 && jj < s.length - ii && s[ii] === s[ii + jj])
    }
  }

  const cut = []
  for (let i = 0; i < s.length; i++) {
    let min = i > 0 ? cut[i - 1] + 1 : 0
    for (let ii = 0; ii < i; ii++) {
      if (table[ii][i - ii]) {
        min = ii > 0 ? Math.min(cut[ii - 1] + 1, min) : 0
        if (min === 0) break
      }
    }
    cut[i] = min
  }

  return cut.pop()
}

module.exports = minCut
