/**
 * @param {string} s
 */
function getIndex (s) {
  return Array.from(s).sort().join()
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const ret = new Map()
  for (const s of strs) {
    const i = getIndex(s)
    let q = ret.get(i)
    if (!q) ret.set(i, (q = []))
    q.push(s)
  }
  return Array.from(ret.values())
}

module.exports = groupAnagrams
