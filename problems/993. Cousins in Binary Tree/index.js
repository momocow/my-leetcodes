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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let p = [root];
    while (p.length > 0) {
        const q = [];
        let r;
        const check = (parent, child) => {
            if (child) {
                if (child.val === x || child.val === y) {
                    if (r === undefined) r = parent;
                    else return r !== parent;
                }
                q.push(child);
            }
        };
        
        while (p.length > 0) {
            const node = p.shift();
            let v = check(node, node.left);
            if (v !== undefined) return v;
            v = check(node, node.right);
            if (v !== undefined) return v;
        }
        p = q;
    }
    return false;
};

module.exports = isCousins;
