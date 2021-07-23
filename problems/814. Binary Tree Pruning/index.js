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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (root.left) root.left = pruneTree(root.left)
  if (root.right) root.right = pruneTree(root.right)
  if (!root.left && !root.right && !root.val) {
    return null
  }
  return root
}

module.exports = pruneTree
