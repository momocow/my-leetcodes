/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const ans = new Array(nums.length)
    let j = 0
    let k = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            ans[j] = nums[i]
            j += 2
        } else {
            ans[k] = nums[i]
            k += 2
        }
    }
    return ans
};

module.exports = sortArrayByParityII
