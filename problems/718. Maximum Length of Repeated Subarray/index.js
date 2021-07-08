/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let max = 0
  for (let offset = 1 - nums1.length; offset < nums2.length; offset++) {
    let count = 0
    const intersectLen = offset < 0
      ? nums1.length + offset
      : nums2.length - offset
    for (let cursor = 0;
      intersectLen > max && cursor < intersectLen;
      cursor++
    ) {
      if (
        (offset < 0 && nums1[cursor - offset] === nums2[cursor]) ||
        (offset >= 0 && nums1[cursor] === nums2[cursor + offset])
      ) {
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

module.exports = findLength
