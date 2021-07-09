/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0
  let max = 0
  const u = new Map()
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (u.has(c)) {
      max = Math.max(max, i - start)
      const end = u.get(c)
      for (let j = start; j < end; j++) {
        u.delete(s[j])
      }
      start = end + 1
    }
    u.set(c, i)
  }
  return Math.max(max, s.length - start)
}

module.exports = lengthOfLongestSubstring
