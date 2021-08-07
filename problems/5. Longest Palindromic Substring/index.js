/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxi = 0
  let maxj = 0
  const table = new Array(s.length)
  for (let i = s.length - 1; i >= 0; i--) { // i = substring start index
    table[i] = new Array(s.length - i)
    for (let j = s.length - i - 1; j >= maxj; j--) { // j = substring.length - 1
      if (j === 0) { // substring.length === 1
        table[i][j] = true
      } else if (j === 1) { // substring.length === 2
        table[i][j] = s[i] === s[i + 1]
      } else {
        table[i][j] = table[i + 1][j - 2] && s[i] === s[i + j]
      }
      if (table[i][j] && j > maxj) {
        maxi = i
        maxj = j
      }
    }
  }
  return s.slice(maxi, maxi + maxj + 1)
}

module.exports = longestPalindrome
