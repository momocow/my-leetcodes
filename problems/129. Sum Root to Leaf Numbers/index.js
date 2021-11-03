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
var sumNumbers = function(root, acc = 0) {
    acc = acc * 10 + root.val;
    if (!root.left && !root.right) return acc;
    return (
        root.left ? sumNumbers(root.left, acc) : 0
    ) + (
        root.right ? sumNumbers(root.right, acc) : 0
    );
};

module.exports = sumNumbers;
