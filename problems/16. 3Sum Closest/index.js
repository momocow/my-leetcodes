function binarySearch (arr, n, start = 0, end = arr.length) {
  if (arr[start] >= n) return start
  if (arr[end - 1] < n) return end
  while (end - start > 1) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] > n) {
      end = mid
      while (arr[end - 1] === arr[end]) {
        end--
      }
    } else if (arr[mid] < n) {
      start = mid
      while (arr[start + 1] === arr[start]) {
        start++
      }
    } else {
      return mid
    }
  }
  if (arr[start] >= n) return start
  return end
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((x, y) => x - y)

  let offset = Infinity

  for (let a = 0; a < nums.length - 2; a++) {
    for (let b = a + 1; b < nums.length - 1; b++) {
      const sum2 = nums[a] + nums[b]
      const offset2 = sum2 - target
      const c = binarySearch(nums, -offset2, b + 1, nums.length)
      if (c - 1 > b) {
        const newOffsetLeft = offset2 + nums[c - 1]
        if (Math.abs(offset) > Math.abs(newOffsetLeft)) {
          offset = newOffsetLeft
          if (offset === 0) {
            return target
          }
        }
      }
      if (c < nums.length) {
        const newOffsetRight = offset2 + nums[c]
        if (Math.abs(offset) > Math.abs(newOffsetRight)) {
          offset = newOffsetRight
          if (offset === 0) {
            return target
          }
        }
      }
    }
  }
  return offset + target
}

module.exports = threeSumClosest
