function isSubsequenceOf (short, long) {
  let j = -1
  for (let i = 0; i < short.length; i++) {
    j = long.indexOf(short[i], j + 1)
    if (j < 0) return false
  }
  return true
}

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  strs.sort((a, b) => b.length - a.length)
  const m = new Map()
  for (const s of strs) m.set(s, (m.get(s) ?? 0) + 1)
  for (let i = 0; i < strs.length; i++) {
    if (m.get(strs[i]) === 1) {
      let uncommon = true
      for (let j = 0; j < i; j++) {
        if (i === j) continue
        if (isSubsequenceOf(strs[i], strs[j])) {
          uncommon = false
          break
        }
      }
      if (uncommon) return strs[i].length
    }
  }
  return -1
}

module.exports = findLUSlength
