/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (
  nums,
  start = -1,
  end = nums.length
) {
  if (end - start <= 1) return null

  const node = new TreeNode()
  const mid = Math.floor((start + end) / 2)
  node.val = nums[mid]
  node.left = sortedArrayToBST(nums, start, mid)
  node.right = sortedArrayToBST(nums, mid, end)
  return node
}

module.exports = sortedArrayToBST
