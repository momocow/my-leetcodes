/**
 * @param {number[]} arr
 * @param {number} target
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function binarySearch (arr, target, start = 0, end = arr.length) {
  if (arr[end] <= target) return end
  if (arr[start] >= target) return start
  while (end - start > 1) {
    const half = Math.round((end + start) / 2)
    if (arr[half] > target) {
      end = half
    } else if (arr[half] < target) {
      start = half
    } else {
      return half
    }
  }
  return (target - arr[start]) > (arr[end] - target) ? end : start
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const idx = binarySearch(arr, x)
  let left = idx - 1
  let right = idx + 1
  while (--k) {
    if (right >= arr.length || x - arr[left] <= arr[right] - x) {
      left--
    } else {
      right++
    }
  }

  return arr.slice(left + 1, right)
}

module.exports = findClosestElements
