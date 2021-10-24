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
var countNodes = function(root) {
    let leftDepth = 0;
    let rightDepth = 0;
    let cur = root;
    while (cur) {
        leftDepth++;
        cur = cur.left;
    }
    cur = root;
    while (cur) {
        rightDepth++;
        cur = cur.right;
    }
    if (leftDepth === rightDepth) return 2 ** rightDepth - 1;
    return 2 ** rightDepth - 1 + dfs(root, leftDepth);
};

function dfs(root, dist) {
    let count = 0;
    if (dist === 2) {
        if (root.left) {
            count++;
            if (root.right) count++;
        }
        return count;
    }
    count += dfs(root.left, dist - 1);
    if (count % 2 === 0) {
        count += dfs(root.right, dist - 1);
    }
    return count;
}

module.exports = countNodes;
