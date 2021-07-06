/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const counter = new Map()
  const thres = arr.length / 2
  for (const item of arr) {
    counter.set(item, (counter.get(item) ?? 0) + 1)
  }
  const freq = Array.from(counter.values())
    .sort((v1, v2) => v2 - v1)
  let ret = 0
  let total = 0
  for (const v of freq) {
    ret++
    total += v
    if (total >= thres) break
  }
  return ret
}

module.exports = minSetSize
