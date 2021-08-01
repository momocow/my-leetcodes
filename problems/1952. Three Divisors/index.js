/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  if (n < 4) return false
  const root = Math.sqrt(n)
  if (root > Math.floor(root)) return false
  for (let i = 2; i <= root; i++) {
    if (n % i === 0 && i !== root) {
      return false
    }
  }
  return true
}

module.exports = isThree
