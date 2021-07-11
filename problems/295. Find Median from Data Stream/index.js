/**
 * arr has only unique items
 */
function binarySearchInsertionIndexOf (arr, item) {
  let start = 0
  let end = arr.length

  if (item < arr[0]) return 0
  if (item > arr[arr.length - 1]) return arr.length

  while (end - start > 1) {
    const mid = Math.floor((start + end) / 2)
    if (item > arr[mid]) {
      start = mid
    } else {
      end = mid
    }
  }

  return end
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.nums = []
  this.counter = new Map()
  this.length = 0
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.length++
  const count = this.counter.get(num) ?? 0
  if (count === 0) {
    const i = binarySearchInsertionIndexOf(this.nums, num)
    this.nums.splice(i, 0, num)
    this.counter.set(num, 1)
  }
  this.counter.set(num, count + 1)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let midCount = Math.ceil(this.length / 2)
  for (let i = 0; i < this.nums.length; i++) {
    midCount -= this.counter.get(this.nums[i])
    if (midCount <= 0) {
      if (this.length % 2 === 1) {
        return this.nums[i]
      } else {
        return midCount < 0
          ? this.nums[i]
          : (this.nums[i] + this.nums[i + 1]) / 2
      }
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

module.exports = MedianFinder
