function increaseCounter (m, k, v = 1) {
  return m.set(k, (m.get(k) ?? 0) + v)
}

function decreaseCounter (m, k, v = 1) {
  const n = m.get(k)
  if (n === v) {
    m.delete(k)
  } else {
    m.set(k, n - v)
  }
  return m
}

/**
* @param {string} s
* @param {string} t
* @return {string}
*/
var minWindow = function (s, t) {
  if (t.length > s.length) return ''

  let i
  let j
  let l = 0
  let r = 0

  const ex = new Map()
  const ss = Array.from(t).reduce((m, c) => increaseCounter(m, c), new Map())
  const tt = new Set(t)
  while (ss.size > 0 && r < s.length) {
    while (ss.size > 0 && r < s.length) {
      const c = s[r++]
      if (tt.has(c)) {
        const n = ss.get(c)
        if (!n) {
          ex.set(c, (ex.get(c) ?? 0) + 1)
        } else {
          decreaseCounter(ss, c)
        }
      }
    }

    if (ss.size > 0) {
      break
    }

    while (l < r) {
      if (tt.has(s[l])) {
        if (ex.has(s[l])) decreaseCounter(ex, s[l])
        else break
      }
      l++
    }

    if (tt.has(s[l])) {
      increaseCounter(ss, s[l])

      if ((j === undefined && i === undefined) || (r - l) < (j - i)) {
        j = r
        i = l
      }

      l++

      while (l < r) {
        if (!tt.has(s[l])) {
          l++
        } else {
          break
        }
      }
    }
  }

  return s.slice(i ?? 0, j ?? 0)
}

module.exports = minWindow
