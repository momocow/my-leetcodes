function last (arr) {
  return arr[arr.length - 1]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let rightMin = Infinity
  const rightMins = []
  for (let i = nums.length - 1; i >= 0; i--) {
    rightMin = Math.min(rightMin, nums[i])
    if (rightMins.length === 0 || last(rightMins)[1] !== rightMin) {
      rightMins.push([i, rightMin])
    }
  }

  let leftMax = -Infinity
  for (let j = 0; j < nums.length; j++) {
    leftMax = Math.max(leftMax, nums[j])
    if (last(rightMins)[0] === j) {
      rightMins.pop()
    }
    if (leftMax <= last(rightMins)[1]) {
      return j + 1
    }
  }
}

module.exports = partitionDisjoint
