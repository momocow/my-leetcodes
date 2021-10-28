/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((x, y) => x - y);
    const ans = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                while (nums[i + 1] === nums[i]) i++;
                while (nums[j + 1] === nums[j]) j++;
                while (nums[k - 1] === nums[k]) k--;
            }
            if (sum >= 0) k--;
            if (sum <= 0) j++;
        }
    }
    return ans;
};

module.exports = threeSum;
