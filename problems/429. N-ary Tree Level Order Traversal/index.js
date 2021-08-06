/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const ret = []
  let q = [root]
  while (q.length > 0) {
    const next = []
    const level = []
    ret.push(level)
    while (q.length > 0) {
      const node = q.shift()
      level.push(node.val)
      for (const child of node.children) {
        next.push(child)
      }
    }
    q = next
  }
  return ret
}

module.exports = levelOrder
