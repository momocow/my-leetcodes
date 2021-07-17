/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((x, y) => x - y)
  const m = new Map([[undefined, -1]])
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], i)
  }

  const ret = []
  for (let a = 0; a < nums.length - 3; a++) {
    const target1 = target - nums[a]
    for (let b = a + 1; b < nums.length - 2; b++) {
      const target2 = target1 - nums[b]
      for (let c = b + 1; c < nums.length - 1; c++) {
        const d = m.get(target2 - nums[c])
        if (c >= d) {
          break
        }
        if (d > 0) {
          ret.push([nums[a], nums[b], nums[c], nums[d]])
        }
        while (c + 1 < nums.length - 1 && nums[c + 1] === nums[c]) {
          c++
        }
      }
      while (b + 1 < nums.length - 2 && nums[b + 1] === nums[b]) {
        b++
      }
    }
    while (a + 1 < nums.length - 3 && nums[a + 1] === nums[a]) {
      a++
    }
  }
  return ret
}

module.exports = fourSum
