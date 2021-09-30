/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function swap (i, j) {
        const tmp = nums[j]
        nums[j] = nums[i]
        nums[i] = tmp
    }

    let i = nums.length - 1
    let j = i - 1
    while (i > 0 && nums[i] <= nums[j]) {
        i--
        j--
    }
    if (i > 0) {
        while (i < nums.length && nums[i + 1] > nums[j]) i++
        swap(i, j)
    }
    i = nums.length - 1
    j++
    while (j < i) swap(i--, j++)
};

module.exports = nextPermutation
