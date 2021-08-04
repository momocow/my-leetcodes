/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum, paths = []) {
  if (!root || targetSum < 0) {
    return []
  }

  if (!root.left && !root.right) { // leaf
    return targetSum === root.val ? [[...paths, root.val]] : []
  }

  const p = [...paths, root.val]
  return [
    ...pathSum(root.left, targetSum - root.val, p),
    ...pathSum(root.right, targetSum - root.val, p)
  ]
}

module.exports = pathSum
