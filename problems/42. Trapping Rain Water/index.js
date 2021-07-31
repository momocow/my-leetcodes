/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let count = 0
  let peak = 0
  let highWaterMark = height[0]
  for (let i = 1; i < height.length; i++) {
    if (highWaterMark > height[i]) {
      count += highWaterMark - height[i]
    } else {
      highWaterMark = height[i]
      peak = i
    }
  }
  let reverseHighWaterMark = 0
  for (let j = height.length - 1; j > peak; j--) {
    if (height[j] > reverseHighWaterMark) {
      reverseHighWaterMark = height[j]
    }
    count -= highWaterMark - reverseHighWaterMark
  }
  return count
}

module.exports = trap
