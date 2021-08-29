/* globals guess */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return -1 if num is lower than the guess number
 *         1 if num is higher than the guess number
 *         otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (right, left = 1) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const rel = guess(mid)
    if (rel < 0) {
      right = mid - 1
    } else if (rel > 0) {
      left = mid + 1
    } else {
      return mid
    }
  }
  throw new Error('impossible')
}

module.exports = guessNumber
