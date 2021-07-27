const POW2 = [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768
]

function set1 (n, nth) {
  return n | (POW2[nth] ?? Math.pow(2, nth))
}

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const nums = [0, 1]
  for (let i = 1; i < n; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      nums.push(set1(nums[j], i))
    }
  }
  return nums
}

module.exports = grayCode
