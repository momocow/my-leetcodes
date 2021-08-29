/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, left = 0, right = nums.length - 1) {
  while (left <= right) {
    if (target === nums[left]) return left
    if (target === nums[right]) return right

    const mid = Math.floor((left + right) / 2)
    if (target === nums[mid]) return mid

    if (nums[mid] >= nums[left]) { // left part is ascending
      if (target < nums[mid] && target > nums[left]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else if (nums[mid] <= nums[right]) { // right part is ascending
      if (target > nums[mid] && target < nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}

module.exports = search
