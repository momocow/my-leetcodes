/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  if (x % 10 === 0) return false
  let rev = 0
  while (rev < x) {
    rev = rev * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return rev === x || (rev > 9 && Math.floor(rev / 10) === x)
}

module.exports = isPalindrome
