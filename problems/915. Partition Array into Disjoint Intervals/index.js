function last (arr) {
  return arr[arr.length - 1]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let r = nums.length - 1
  let l = 0
  let rightMin = nums[r]
  let leftMax = nums[0]
  const rightMins = [[r, rightMin]]
  while (r > 1 && nums[r - 1] >= leftMax) {
    r--
    rightMin = Math.min(rightMin, nums[r])
    if (last(rightMins)[1] !== rightMin) {
      rightMins.push([r, rightMin])
    }
  }

  while (++l < r) {
    leftMax = Math.max(leftMax, nums[l])
  }

  while (leftMax > last(rightMins)[1]) {
    r = rightMins.pop()[0] + 1
    while (++l < r) {
      leftMax = Math.max(leftMax, nums[l])
    }
  }

  return r
}

module.exports = partitionDisjoint
