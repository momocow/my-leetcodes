function buildIndex (arr, start = 0, len = arr.length) {
  let ss = ''
  for (let j = 0; j < len; j++) {
    ss += arr[start + j]
    if (j < len - 1) {
      ss += ','
    }
  }
  return ss
}

function buildAccSum (arr) {
  let sum = 0
  return arr.map(n => (sum += n))
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    const tmp = nums1
    nums1 = nums2
    nums2 = tmp
  }
  let w = nums1.length
  const as1 = buildAccSum(nums1)
  const as2 = buildAccSum(nums2)
  do {
    const idx = new Set()
    const as = new Set()
    for (let i = 0; i <= nums1.length - w; i++) {
      idx.add(buildIndex(nums1, i, w))
      as.add(as1[i + w - 1] - (as1[i - 1] ?? 0))
    }
    for (let i = 0; i <= nums2.length - w; i++) {
      if (
        as.has(as2[i + w - 1] - (as2[i - 1] ?? 0)) &&
        idx.has(buildIndex(nums2, i, w))
      ) {
        return w
      }
    }
  } while (w--)

  return 0
}

module.exports = findLength
