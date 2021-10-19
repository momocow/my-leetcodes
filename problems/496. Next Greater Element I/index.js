/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ng = new Map();
    const stack = [];
    for (let i = 0; i < nums2.length; i++) {
        while (stack[stack.length - 1] < nums2[i]) {
            ng.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }
    return nums1.map(n => ng.get(n) ?? -1);
};

module.exports = nextGreaterElement;
