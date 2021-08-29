/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length
  if (nums[left] > target) return -1
  if (nums[left] === target) return left
  if (nums[right - 1] < target) return -1
  if (nums[right - 1] === target) return right - 1
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid
    } else return mid
  }
  return -1
}

module.exports = search
