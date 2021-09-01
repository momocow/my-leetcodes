function solve (nums, k, cache, s = new Set()) {
    if (cache.has(k)) return cache.get(k)
    if (s.has(nums[k])) return 0
    s.add(nums[k])
    const ans = 1 + solve(nums, nums[k], cache, s)
    cache.set(k, ans)
    return ans
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    const cache = new Map()
    let max = 0
    for (let k = 0; k < nums.length; k++) {
        max = Math.max(max, solve(nums, k, cache))
    }
    return max
};

module.exports= arrayNesting
