/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let b = 0
  let p = 0
  let i = 0
  while (b < n) b += (nums[i] ?? Infinity) <= b + 1 ? nums[i++] : ++p && b + 1
  return p
}

module.exports = minPatches
