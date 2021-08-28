const MAX = 2 ** 31 - 1
const MIN = -(2 ** 31)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0
  const int = x >= 0 ? Math.floor : Math.ceil
  while (x) {
    ans = ans * 10 + x % 10
    if (ans > MAX || ans < MIN) return 0
    x = int(x / 10)
  }
  return ans
}

module.exports = reverse
