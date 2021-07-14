/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {
  const s = new Set(order)
  const m = Array.from(str)
    .filter(c => s.has(c))
    .reduce((m, c) => {
      m.set(c, (m.get(c) ?? 0) + 1)
      return m
    }, new Map())
  const a = Array.from(str)
    .filter(c => !s.has(c))
    .join('')
  return Array.from(order)
    .map(c => c.repeat(m.get(c)))
    .join('') +
    a
}

module.exports = customSortString
