/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    const nge = new Array(nums.length)
    const stack = []
    const maxTurns = nums.length * 2
    for (let i = 0; i < maxTurns; i++) {
        const idx = i % nums.length
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[idx]) {
            nge[stack.pop()] = nums[idx]
        }
        if (i < nums.length) { 
            stack.push(idx)
        }
    }
    for (let j of stack) {
        nge[j] = -1
    }
    return nge
};

module.exports = nextGreaterElements
