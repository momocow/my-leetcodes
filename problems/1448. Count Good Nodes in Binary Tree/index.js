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
 * @return {number}
 */
var goodNodes = function (root, max = root.val) {
  if (!root) return 0
  if (root.val > max) max = root.val
  return (root.val >= max) +
    goodNodes(root.left, max) +
    goodNodes(root.right, max)
}

module.exports = goodNodes
