/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let zeros = 0
  for (const c of s) {
    if (c === '0') zeros++
  }

  let ones = 0
  let flips = zeros
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      zeros--
      flips = Math.min(flips, ones + zeros)
    } else {
      ones++
    }
  }
  return flips
}

module.exports = minFlipsMonoIncr
