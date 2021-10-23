/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[left] && nums[right] > nums[mid]) {
            return nums[left];
        } else if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
            right--;
        } else if (nums[right] >= nums[mid]) {
            right = mid;
        } else if (nums[mid] >= nums[left]) {
            left = mid + 1;
        }
    }
    return nums[left];
};

module.exports = findMin;
