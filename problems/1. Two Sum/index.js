/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const wanted = new Map()
  for (let i = 0; i < nums.length; i++) {
    const prev = wanted.get(target - nums[i])
    if (typeof prev === 'undefined') {
      wanted.set(nums[i], i)
    } else {
      return [prev, i]
    }
  }
}

module.exports = twoSum
