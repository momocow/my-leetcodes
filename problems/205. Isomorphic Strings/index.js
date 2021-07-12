/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false
  const smap = new Map()
  const tmap = new Map()
  for (let i = 0; i < s.length; i++) {
    const tc = smap.get(s[i])
    if (!tc) {
      smap.set(s[i], t[i])
    } else if (tc !== t[i]) {
      return false
    }
    const sc = tmap.get(t[i])
    if (!sc) {
      tmap.set(t[i], s[i])
    } else if (sc !== s[i]) {
      return false
    }
  }
  return true
}

module.exports = isIsomorphic
