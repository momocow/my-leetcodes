function binarySearch (arr, target, start = 0, end = arr.length) {
  while (end - start > 1) {
    if (arr[start] >= target) {
      return start
    }
    if (arr[end - 1] < target) {
      return end
    }
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }
  return arr[start] >= target ? start : end
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  if (nums.length < 3) return 0
  nums.sort((x, y) => x - y)
  let count = 0
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) continue
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[j] === 0) continue
      count += binarySearch(nums, nums[i] + nums[j], j + 1) - j - 1
    }
  }
  return count
}

module.exports = triangleNumber
