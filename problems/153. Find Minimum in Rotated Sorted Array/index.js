/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] <= nums[right]) { // rotation = n
      right = left
    } else {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] >= nums[left]) { // left part is in ascending
        left = mid + 1
      } else {
        right = mid
      }
    }
  }
  return nums[left]
}

module.exports = findMin
