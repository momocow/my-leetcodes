/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sums = [0]
  for (const n of nums) {
    this.sums.push(n + this.sums[this.sums.length - 1])
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sums[right + 1] - (this.sums[left] ?? 0)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
