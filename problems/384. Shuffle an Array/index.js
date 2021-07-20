/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
  this.shuffled = nums.slice()
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const p = Math.floor(Math.random() * this.nums.length)
  const q = Math.floor(Math.random() * this.nums.length)
  this.shuffled = this.shuffled.map(
    (n, i) => i === p ? this.shuffled[q] : i === q ? this.shuffled[p] : n)
  return this.shuffled
}
