/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (x === 0) return 0
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  let ret
  if (n % 2 === 0) {
    const nn = Math.floor(n / 2)
    const v = myPow(x, nn)
    ret = v * v
  } else {
    const nn = Math.floor((n - 1) / 2)
    const v = myPow(x, nn)
    ret = x * v * v
  }
  return ret
}

module.exports = myPow
