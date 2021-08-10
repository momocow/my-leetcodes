const M = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let int = 0
  for (let i = 0; i < s.length; i++) {
    let v = M[s[i]]
    if (
      (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) ||
      (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) ||
      (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))
    ) {
      v = -v
    }
    int += v
  }
  return int
}

module.exports = romanToInt
