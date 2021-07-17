/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function (arr) {
  const gaps = []
  let head0s = 0
  let prev
  for (let p = 0; p < arr.length; p++) {
    if (arr[p] === 1) {
      if (prev !== undefined) {
        gaps.push(p - prev)
      }
      prev = p
    } else if (prev === undefined) {
      head0s++
    }
  }
  if (head0s === arr.length) {
    return [0, arr.length - 1]
  }
  if (gaps.length % 3 !== 2) {
    return [-1, -1]
  }
  const groupLen = (gaps.length - 2) / 3
  let groupSum = 0
  for (let q = 0; q < groupLen; q++) {
    if (
      gaps[q] !== gaps[q + groupLen + 1] ||
      gaps[q] !== gaps[q + 2 * groupLen + 2]
    ) {
      return [-1, -1]
    }
    groupSum += gaps[q]
  }
  const tail0s = arr.length -
    head0s -
    groupSum * 3 -
    gaps[groupLen] -
    gaps[2 * groupLen + 1] -
    1
  if (gaps[groupLen] - 1 < tail0s || gaps[2 * groupLen + 1] - 1 < tail0s) {
    return [-1, -1]
  }
  const i = head0s + groupSum + tail0s
  const j = i + gaps[groupLen] + groupSum + 1
  return [i, j]
}

module.exports = threeEqualParts
