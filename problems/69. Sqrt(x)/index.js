/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x, left = 0, right = 2 ** 16) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const square = mid * mid
    if (square > x) {
      right = mid - 1
    } else if (square < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
}

module.exports = mySqrt
