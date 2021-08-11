function reduceDoubleCount (map, n, count) {
  const doubled = n * 2
  const diff = (map.get(doubled) ?? 0) - count
  if (diff < 0) return false
  else if (diff === 0) map.delete(doubled)
  else map.set(doubled, diff)
  return true
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  const counters = new Map()
  const reduceDouble = reduceDoubleCount.bind(null, counters)
  for (const n of arr) { counters.set(n, (counters.get(n) ?? 0) + 1) }
  while (counters.size > 0) {
    // remove odds and their doubled values
    for (const [n, count] of counters) {
      if (n === 0 || n % 2 !== 0 /* 1 or -1 */) {
        if (!reduceDouble(n, count)) { return false }
        counters.delete(n)
      }
    }
    // all values left are even, divide them by 2
    const entries = []
    for (const [n, count] of counters) {
      counters.delete(n)
      entries.push([n / 2, count])
    }
    for (const [n, count] of entries) {
      counters.set(n, count)
    }
  }
  return true
}

module.exports = canReorderDoubled
