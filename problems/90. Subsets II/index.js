/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((x, y) => x - y)
  let ret = [[]]
  for (let i = 0; i < nums.length; i++) {
    let ss = ret.map(s => [nums[i], ...s])
    ret = ret.concat(ss)
    while (nums[i] === nums[i + 1]) {
      i++
      ss = ss.map(s => [nums[i], ...s])
      ret = ret.concat(ss)
    }
  }
  return ret
}

module.exports = subsetsWithDup
