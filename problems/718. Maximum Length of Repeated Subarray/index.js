function findIntersect (nums1, nums2, max) {
  for (let offset = 0; offset < nums2.length; offset++) {
    let count = 0
    const intersectLen = nums2.length - offset
    for (let cursor = 0;
      intersectLen > max && cursor < intersectLen;
      cursor++
    ) {
      if (nums1[cursor] === nums2[offset + cursor]) {
        count++
      } else {
        max = Math.max(max, count)
        count = 0
      }
    }
    if (count > 0) {
      max = Math.max(max, count)
    }
  }
  return max
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const max = findIntersect(nums1, nums2, 0)
  return findIntersect(nums2, nums1, max)
}

module.exports = findLength

findLength(
  [1, 2, 3, 2, 1],
  [3, 2, 1, 4])
