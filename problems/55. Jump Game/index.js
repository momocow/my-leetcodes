/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dst = nums.length - 1
    for (let i = dst; i >= 0; i--) if (i + nums[i] >= dst) dst = i
    return dst === 0
};

module.exports = canJump
