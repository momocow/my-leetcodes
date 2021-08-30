/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let mm = m
  let nn = n
  for (const [a, b] of ops) {
    if (a < mm) mm = a
    if (b < nn) nn = b
  }
  return mm * nn
}

module.exports = maxCount
