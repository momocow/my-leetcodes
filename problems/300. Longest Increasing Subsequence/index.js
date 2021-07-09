function binarySearchIndexOf (arr, item) {
  let start = 0
  let end = arr.length

  if (item <= arr[0]) return 0
  if (item > arr[arr.length - 1]) return arr.length

  while (end - start > 1) {
    let mid = Math.floor((start + end) / 2)
    if (item > arr[mid]) {
      start = mid
    } else if (item < arr[mid]) {
      end = mid
    } else {
      // place after last equal
      while (true) {
        const prev = mid - 1
        if (arr[prev] !== item) {
          break
        }
        mid = prev
      }
      return mid
    }
  }

  return end
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const levelMin = []
  for (const n of nums) {
    const i = binarySearchIndexOf(levelMin, n)
    if (i === levelMin.length) {
      // new level
      levelMin.push(n)
    } else if (levelMin[i] > n) {
      levelMin[i] = n
    }
  }
  return levelMin.length
}

module.exports = lengthOfLIS
