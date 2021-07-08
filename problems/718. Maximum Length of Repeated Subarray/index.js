/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let w = Math.min(nums1.length, nums2.length)
  do {
    for (let i = 0; i <= nums1.length - w; i++) {
      for (let j = 0; j <= nums2.length - w; j++) {
        let same = true
        for (let k = 0; k < w; k++) {
          if (nums1[i + k] !== nums2[j + k]) {
            same = false
            break
          }
        }
        if (same) {
          return w
        }
      }
    }
  } while (--w)
  return w
}

module.exports = findLength
