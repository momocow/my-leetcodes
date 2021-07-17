/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const m = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    let s = m.get(n)
    if (!s) {
      s = []
      m.set(n, s)
    }
    s.push(i)
  }

  const ret = []
  const l = new Set()
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        const t = target - nums[i] - nums[j] - nums[k]
        const q = m.get(t)
        const lb = [nums[i], nums[j], nums[k], t].sort().join(',')
        if (q && !l.has(lb)) {
          if (q.filter(ii => ii > k).length > 0) {
            ret.push([nums[i], nums[j], nums[k], t])
          }
          l.add(lb)
        }
      }
    }
  }
  return ret
}

module.exports = fourSum
