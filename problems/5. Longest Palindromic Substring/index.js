/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxi = 0
  let maxlen = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (j === 1 && s[i] !== s[i + 1]) {
        continue
      }
      let ii = i - 1
      let jj = i + j + 1
      let len = j + 1
      while (ii >= 0 && jj < s.length && s[ii] === s[jj]) {
        len += 2
        ii--
        jj++
      }
      if (len > maxlen) {
        maxi = ii + 1
        maxlen = len
      }
    }
  }
  return s.slice(maxi, maxi + maxlen)
}

module.exports = longestPalindrome
