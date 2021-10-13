function bs (arr, target, left = 0, right = arr.length) {
    while (left < right) {
        const mid = left + ((right - left) >> 1);
        if (arr[mid] > target) right = mid;
        else left = mid + 1;
    }
    return left;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder, start = 0, end = preorder.length) {
    const root = start < end ? new TreeNode(preorder[start++]) : null;
    if (root) {
        const i = bs(preorder, root.val, start, end);
        root.left = bstFromPreorder(preorder, start, i);
        root.right = bstFromPreorder(preorder, i, end);
    }
    return root;
};

module.exports = bstFromPreorder;
