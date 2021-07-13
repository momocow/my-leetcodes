/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0
  if (nums[0] > nums[1]) return 0
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1

  // start and end should satisfy that they are not the peak
  let start = 0
  let end = nums.length - 1
  while (end - start > 1) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      // peak
      return mid
    } else if (nums[mid - 1] < nums[mid] && nums[mid] < nums[mid + 1]) {
      start = mid
    } else {
      end = mid
    }
  }
  throw new Error('💩')
}

module.exports = findPeakElement
