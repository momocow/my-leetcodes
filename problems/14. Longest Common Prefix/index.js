/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minS
  let N = Infinity
  for (const s of strs) {
    if (s.length < N) {
      N = s.length
      minS = s
    }
  }

  for (let i = 0; i < N; i++) {
    if (!strs.every(s => s[i] === strs[0][i])) {
      return strs[0].slice(0, i)
    }
  }

  return minS
}

module.exports = longestCommonPrefix
