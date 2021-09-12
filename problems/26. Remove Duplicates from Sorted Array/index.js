/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[j - 1]) nums[i++] = nums[j]
    }
    return i
};

module.exports = removeDuplicates
