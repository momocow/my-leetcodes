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
var diameterOfBinaryTree = function(root) {
    let ans = 0
    function getDepths (node) {
        const ld = node.left ? Math.max(...getDepths(node.left)) + 1 : 0;
        const rd = node.right ? Math.max(...getDepths(node.right)) + 1 : 0
        ans = Math.max(ld + rd, ans);
        return [ld, rd];
    }
    getDepths(root);
    return ans;
};

module.exports = diameterOfBinaryTree;
