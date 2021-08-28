/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s
  let ans = ''
  let i = 2 * numRows - 2
  let j = 0
  while (i >= 0) {
    let k = j / 2
    if (k >= s.length) break
    ans += s[k]
    while (k < s.length) {
      if (i > 0) {
        k += i
        if (k < s.length) {
          ans += s[k]
        }
      }
      if (j > 0) {
        k += j
        if (k < s.length) {
          ans += s[k]
        }
      }
    }
    i -= 2
    j += 2
  }
  return ans
}

module.exports = convert
