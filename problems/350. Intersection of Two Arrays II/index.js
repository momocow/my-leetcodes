/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const counter = (m, n) => m.set(n, (m.get(n) ?? 0) + 1)
    let c1 = nums1.reduce(counter, new Map())
    let c2 = nums2.reduce(counter, new Map())
    if (c1.size > c2.size) [c1, c2] = [c2, c1]
    return Array.from(c1)
        .filter(([n]) => c2.has(n))
        .map(([n, count]) => new Array(Math.min(count, c2.get(n))).fill(n))
        .flat()
};

module.exports = intersect
